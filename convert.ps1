$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Open('C:\portfolio\frontend\public\Abdul_Rahim_Resume_Final_feedback.docx')
$doc.SaveAs('C:\portfolio\frontend\public\Abdul_Rahim_Resume_Final_feedback.pdf', 17)
$doc.Close()
$word.Quit()
Write-Host 'PDF conversion complete'
