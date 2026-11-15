import { useEffect, useRef } from "react";
import { Camera, Geometry, Mesh, Program, Renderer } from "ogl";

const vertex = `
  attribute vec3 position;
  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;
  varying float depth;

  void main() {
    depth = position.z * 0.5 + 0.5;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragment = `
  precision highp float;
  varying float depth;

  void main() {
    vec3 color = mix(vec3(0.35, 0.20, 0.63), vec3(0.72, 0.62, 1.0), depth);
    gl_FragColor = vec4(color, 0.24 + depth * 0.27);
  }
`;

function makeOrbLines() {
  const points = [];
  const segments = 80;
  const addLoop = (point) => {
    for (let i = 0; i < segments; i += 1) {
      points.push(...point(i / segments * Math.PI * 2), ...point((i + 1) / segments * Math.PI * 2));
    }
  };

  for (let latitude = -3; latitude <= 3; latitude += 1) {
    const angle = latitude * Math.PI / 8;
    addLoop((t) => [Math.cos(angle) * Math.cos(t), Math.sin(angle), Math.cos(angle) * Math.sin(t)]);
  }
  for (let longitude = 0; longitude < 10; longitude += 1) {
    const angle = longitude * Math.PI / 10;
    addLoop((t) => [Math.cos(t) * Math.cos(angle), Math.sin(t), Math.cos(t) * Math.sin(angle)]);
  }
  return new Float32Array(points);
}

export default function SkillsOrb() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = document.createElement("canvas");
    canvas.className = "skills-orb-canvas";
    const attributes = { alpha: true, antialias: true, premultipliedAlpha: false };
    if (!canvas.getContext("webgl2", attributes) && !canvas.getContext("webgl", attributes)) {
      console.warn("The skills illustration requires WebGL; displaying its static background instead.");
      return undefined;
    }

    const renderer = new Renderer({ canvas, ...attributes, dpr: Math.min(window.devicePixelRatio || 1, 1.5) });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    container.appendChild(canvas);

    const camera = new Camera(gl, { fov: 36 });
    camera.position.z = 4.5;
    const geometry = new Geometry(gl, { position: { size: 3, data: makeOrbLines() } });
    const program = new Program(gl, { vertex, fragment, transparent: true, depthTest: false, depthWrite: false });
    const orb = new Mesh(gl, { geometry, program, mode: gl.LINES, frustumCulled: false });
    orb.scale.set(1.4);
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let resizeFrame = 0;
    let previousWidth = 0;
    let previousHeight = 0;
    let visible = false;
    let lost = false;

    const draw = (time = 0) => {
      frame = 0;
      if (!visible || document.hidden || lost) return;
      orb.rotation.x = 0.24;
      orb.rotation.y = motion.matches ? 0.35 : time * 0.00012;
      orb.rotation.z = -0.18;
      renderer.render({ scene: orb, camera });
      if (!motion.matches) frame = requestAnimationFrame(draw);
    };
    const schedule = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      if (visible && !document.hidden && !lost) frame = requestAnimationFrame(draw);
    };
    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      if (!width || !height) return;
      if (width === previousWidth && height === previousHeight) return;
      previousWidth = width;
      previousHeight = height;
      renderer.setSize(width, height);
      camera.perspective({ aspect: width / height });
      schedule();
    };
    const onContextLost = () => {
      lost = true;
      if (frame) cancelAnimationFrame(frame);
      console.warn("The skills illustration lost its WebGL context.");
    };
    canvas.addEventListener("webglcontextlost", onContextLost);
    motion.addEventListener("change", schedule);
    document.addEventListener("visibilitychange", schedule);
    const resizeObserver = new ResizeObserver(() => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(resize);
    });
    resizeObserver.observe(container);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      schedule();
    });
    intersectionObserver.observe(container);
    resize();

    return () => {
      if (frame) cancelAnimationFrame(frame);
      cancelAnimationFrame(resizeFrame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      motion.removeEventListener("change", schedule);
      document.removeEventListener("visibilitychange", schedule);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      geometry.remove();
      program.remove();
      gl.deleteShader(program.vertexShader);
      gl.deleteShader(program.fragmentShader);
      canvas.remove();
    };
  }, []);

  return <div ref={containerRef} className="skills-orb" aria-hidden="true" />;
}
