import React from "react";
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from "docx";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import DesignedButton from "./DesignedButton";
import { Download, FileText, FileDown } from "lucide-react";

const DocumentDownloader = ({ questions, paperTitle }) => {
  const downloadAsDOCX = async () => {
    try {
      // Create document structure
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [
              // Title
              new Paragraph({
                text: paperTitle,
                heading: HeadingLevel.HEADING_1,
                alignment: AlignmentType.CENTER,
                spacing: {
                  after: 400,
                  before: 400
                }
              }),
                             // Questions
               ...questions.map((question, index) => [
                 // Question number and text
                 new Paragraph({
                   children: [
                     new TextRun({
                       text: `${index + 1}. `,
                       bold: true,
                       size: 24
                     }),
                     new TextRun({
                       text: question.question,
                       size: 24
                     })
                   ],
                   spacing: {
                     after: 200,
                     before: 200
                   }
                 }),
                 // Options for MCQ questions in 2x2 grid format
                 ...(question.type === "mcq" ? [
                   // First row: (A) and (B)
                   new Paragraph({
                     children: [
                       new TextRun({
                         text: `(${String.fromCharCode(65)}) `,
                         bold: true,
                         size: 20
                       }),
                       new TextRun({
                         text: question.options[0] || "",
                         size: 20
                       }),
                       new TextRun({
                         text: "    ",
                         size: 20
                       }),
                       new TextRun({
                         text: `(${String.fromCharCode(66)}) `,
                         bold: true,
                         size: 20
                       }),
                       new TextRun({
                         text: question.options[1] || "",
                         size: 20
                       })
                     ],
                     spacing: {
                       after: 100
                     }
                   }),
                   // Second row: (C) and (D)
                   new Paragraph({
                     children: [
                       new TextRun({
                         text: `(${String.fromCharCode(67)}) `,
                         bold: true,
                         size: 20
                       }),
                       new TextRun({
                         text: question.options[2] || "",
                         size: 20
                       }),
                       new TextRun({
                         text: "    ",
                         size: 20
                       }),
                       new TextRun({
                         text: `(${String.fromCharCode(68)}) `,
                         bold: true,
                         size: 20
                       }),
                       new TextRun({
                         text: question.options[3] || "",
                         size: 20
                       })
                     ],
                     spacing: {
                       after: 200
                     }
                   })
                 ] : [
                   // Answer space for short/long answer questions
                   new Paragraph({
                     text: "Answer:",
                     bold: true,
                     spacing: {
                       after: 200
                     }
                   }),
                   new Paragraph({
                     text: "_________________________________________________________________",
                     spacing: {
                       after: 200
                     }
                   })
                 ])
               ]).flat()
            ]
          }
        ]
      });

      // Generate and download the document
      const blob = await Packer.toBlob(doc);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${paperTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_questions.docx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating DOCX:', error);
      alert('Error generating DOCX file. Please try again.');
    }
  };

  const downloadAsPDF = async () => {
    try {
      // Create a temporary div to render the question paper
      const tempDiv = document.createElement('div');
      tempDiv.style.position = 'absolute';
      tempDiv.style.left = '-9999px';
      tempDiv.style.top = '0';
      tempDiv.style.width = '800px';
      tempDiv.style.padding = '40px';
      tempDiv.style.backgroundColor = 'white';
      tempDiv.style.fontFamily = 'Arial, sans-serif';
      tempDiv.style.fontSize = '14px';
      tempDiv.style.lineHeight = '1.6';
      
      // Create the HTML content
      tempDiv.innerHTML = `
        <div style="text-align: center; margin-bottom: 30px; border-bottom: 3px solid #333; padding-bottom: 20px;">
          <h1 style="font-size: 28px; font-weight: bold; margin: 0 0 15px 0;">${paperTitle}</h1>
        </div>
        ${questions.map((question, index) => `
          <div style="margin-bottom: 30px; border-bottom: 1px solid #ccc; padding-bottom: 20px;">
            <div style="display: flex; gap: 15px;">
              <div style="width: 50px; height: 50px; background-color: #f0f0f0; border: 2px solid #ccc; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px; flex-shrink: 0;">
                ${index + 1}.
              </div>
              <div style="flex: 1;">
                <h3 style="font-size: 16px; font-weight: 600; margin: 0 0 15px 0; line-height: 1.4;">
                  ${question.question}
                </h3>
                                 ${question.type === "mcq" ? `
                   <div style="display: flex; flex-direction: column; gap: 8px;">
                     <div style="display: flex; gap: 30px;">
                       <span style="font-weight: bold; min-width: 30px;">(${String.fromCharCode(65)})</span>
                       <span>${question.options[0] || ""}</span>
                       <span style="font-weight: bold; min-width: 30px;">(${String.fromCharCode(66)})</span>
                       <span>${question.options[1] || ""}</span>
                     </div>
                     <div style="display: flex; gap: 30px;">
                       <span style="font-weight: bold; min-width: 30px;">(${String.fromCharCode(67)})</span>
                       <span>${question.options[2] || ""}</span>
                       <span style="font-weight: bold; min-width: 30px;">(${String.fromCharCode(68)})</span>
                       <span>${question.options[3] || ""}</span>
                     </div>
                   </div>
                 ` : `
                  <div style="border: 2px solid #ccc; border-radius: 8px; padding: 15px; min-height: 80px; background-color: #f9f9f9;">
                    <p style="color: #666; font-size: 12px; margin: 0;">Answer space for student</p>
                  </div>
                `}
              </div>
            </div>
          </div>
        `).join('')}
      `;
      
      document.body.appendChild(tempDiv);
      
      // Convert to canvas and then to PDF
      const canvas = await html2canvas(tempDiv, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });
      
      document.body.removeChild(tempDiv);
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save(`${paperTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_questions.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF file. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Download Options
      </h3>
      
      <div className="space-y-4">
        {/* DOCX Download */}
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-medium text-blue-800 mb-2">Download as DOCX</h4>
          <p className="text-sm text-blue-700 mb-3">
            Download your question paper as a Microsoft Word document
          </p>
          <DesignedButton
            onClick={downloadAsDOCX}
            variant="primary"
            size="sm"
            className="flex items-center gap-2"
            disabled={questions.length === 0}
          >
            <FileText className="w-4 h-4" />
            Download DOCX
          </DesignedButton>
        </div>

        {/* PDF Download */}
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <h4 className="font-medium text-green-800 mb-2">Download as PDF</h4>
          <p className="text-sm text-green-700 mb-3">
            Download your question paper as a PDF document
          </p>
          <DesignedButton
            onClick={downloadAsPDF}
            variant="success"
            size="sm"
            className="flex items-center gap-2"
            disabled={questions.length === 0}
          >
                         <FileDown className="w-4 h-4" />
             Download PDF
          </DesignedButton>
        </div>

        {/* Info */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-gray-800 mb-2">Download Information</h4>
          <div className="text-sm text-gray-600 space-y-1">
            <p>• DOCX: Editable Microsoft Word format</p>
            <p>• PDF: Fixed format, perfect for printing</p>
            <p>• Both formats maintain question formatting</p>
            <p>• Questions saved: {questions.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentDownloader;
