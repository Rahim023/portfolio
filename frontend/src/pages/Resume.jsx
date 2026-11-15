import React, { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiRefreshCw } from "react-icons/fi";
import LoadingDial from "../components/LoadingDial";
import "./Resume.css";

const resumePath = "/abdulRahim-SE1.pdf";

function ResumeViewer({ onRetry }) {
  const [progress, setProgress] = useState(0);
  const [documentUrl, setDocumentUrl] = useState("");
  const [error, setError] = useState("");
  const target = useRef(0);
  const readyUrl = useRef("");
  const intervalRef = useRef(null);

  useEffect(() => {
    const controller = new AbortController();
    let objectUrl = "";
    const timer = window.setInterval(() => {
      setProgress((current) => Math.min(target.current, current + 3));
    }, 40);
    intervalRef.current = timer;

    const load = async () => {
      try {
        const response = await fetch(resumePath, { signal: controller.signal });
        if (!response.ok) throw new Error(`Request failed (${response.status}).`);
        const total = Number(response.headers.get("content-length"));
        const chunks = [];
        if (response.body) {
          const reader = response.body.getReader();
          let received = 0;
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            chunks.push(value);
            received += value.byteLength;
            target.current = total > 0 ? Math.min(95, Math.floor(received / total * 95)) : 90;
          }
        } else {
          chunks.push(await response.arrayBuffer());
          target.current = 90;
        }
        const blob = new Blob(chunks, { type: "application/pdf" });
        if (await blob.slice(0, 5).text() !== "%PDF-") throw new Error("The document is not a valid PDF.");
        if (controller.signal.aborted) return;
        objectUrl = URL.createObjectURL(blob);
        readyUrl.current = objectUrl;
        target.current = 100;
      } catch (loadError) {
        if (!controller.signal.aborted) {
          window.clearInterval(timer);
          setError(loadError.message || "The resume could not be loaded.");
        }
      }
    };
    load();
    return () => {
      controller.abort();
      window.clearInterval(timer);
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  useEffect(() => {
    if (progress !== 100) return undefined;
    window.clearInterval(intervalRef.current);
    const timer = window.setTimeout(() => setDocumentUrl(readyUrl.current), 400);
    return () => window.clearTimeout(timer);
  }, [progress]);

  if (error) {
    return (
      <div className="resume-message" role="alert">
        <h2>Unable to load the resume</h2>
        <p>{error}</p>
        <p>You can retry or open the PDF directly.</p>
        <button type="button" onClick={onRetry}><FiRefreshCw /> Retry</button>
        <a href={resumePath} target="_blank" rel="noreferrer">Open PDF <FiArrowUpRight /></a>
      </div>
    );
  }

  if (!documentUrl) return <LoadingDial label="Preparing resume" progress={progress} />;

  return (
    <>
      <div className="resume-viewer-toolbar">
        <span>Resume / PDF</span>
        <a href={resumePath} target="_blank" rel="noreferrer">Open PDF in a new tab <FiArrowUpRight /></a>
      </div>
      <iframe className="resume-document" src={documentUrl} title="Abdul Rahim's resume" />
      <p className="resume-viewer-note">If the PDF is not displayed, use the link above to open it in a new tab.</p>
    </>
  );
}

export default function Resume() {
  const [attempt, setAttempt] = useState(0);
  return (
    <section className="resume-page" aria-labelledby="resume-heading">
      <div className="resume-heading">
        <span>Experience &amp; expertise</span>
        <h1 id="resume-heading">The story so far<span>.</span></h1>
        <p>Explore my experience, skills and the work behind the code.</p>
      </div>
      <div className="resume-viewer"><ResumeViewer key={attempt} onRetry={() => setAttempt((current) => current + 1)} /></div>
    </section>
  );
}
