import React from "react";

const QuestionPaper = ({ title, questions, isPreview = false }) => {
  const formatDate = () => {
    const now = new Date();
    return now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={`bg-white ${isPreview ? 'rounded-2xl shadow-xl p-8' : 'p-8'} max-w-4xl mx-auto`}>
      {/* Print Styles */}
      <style jsx>{`
        @media print {
          body { margin: 0; }
          .no-print { display: none !important; }
          .print-paper { 
            padding: 20px !important;
            box-shadow: none !important;
            border-radius: 0 !important;
          }
        }
      `}</style>

             

             {/* Questions */}
       <div className="space-y-8">
         {questions.map((question, index) => (
           <div key={question.id || index} className="border-b border-gray-300 pb-6">
             <div className="flex gap-6">
               {/* Question Number */}
               <div className="flex-shrink-0 w-12 h-12 bg-gray-100 text-gray-800 rounded-lg flex items-center justify-center font-bold text-lg border-2 border-gray-300">
                 {index + 1}.
               </div>
               
               {/* Question Content */}
               <div className="flex-1">
                 <h3 className="font-semibold text-gray-800 mb-4 leading-relaxed text-lg">
                   {question.question}
                 </h3>
                 
                                   {/* Options Grid - 2x2 Layout - Only for MCQ */}
                  {question.type === "mcq" && (
                    <div className="grid grid-cols-2 gap-x-12 gap-y-3">
                      {question.options.map((option, optIndex) => (
                        <div key={optIndex} className="flex items-start gap-3">
                          <span className="font-bold text-gray-800 text-lg min-w-[40px]">
                            ({String.fromCharCode(65 + optIndex)})
                          </span>
                          <span className="text-gray-700 text-lg leading-relaxed">{option}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Answer Space for Short/Long Answer */}
                  {question.type === "short" && (
                    <div className="mt-4">
                      <div className="border-2 border-gray-300 rounded-lg p-4 min-h-[100px] bg-gray-50">
                        <p className="text-gray-500 text-sm">Answer space for student</p>
                      </div>
                    </div>
                  )}
               </div>
             </div>
           </div>
         ))}
       </div>

             

      
    </div>
  );
};

export default QuestionPaper;
