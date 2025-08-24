import React, { useState } from "react";
import DesignedButton from "./DesignedButton";
import { Plus, AlertCircle } from "lucide-react";

const QuestionForm = ({
  currentQuestion,
  updateCurrentQuestion,
  updateOption,
  addQuestion
}) => {
  const [questionType, setQuestionType] = useState("mcq");
  const isFormValid = () => {
    if (questionType === "mcq") {
      return (
        currentQuestion.question.trim() !== "" &&
        currentQuestion.options.every(option => option.trim() !== "")
      );
    } else {
      return currentQuestion.question.trim() !== "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      addQuestion(questionType);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Question Type Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Question Type
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="questionType"
              value="mcq"
              checked={questionType === "mcq"}
              onChange={(e) => setQuestionType(e.target.value)}
              className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
            />
            <span className="text-gray-700 font-medium">MCQ</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="questionType"
              value="short"
              checked={questionType === "short"}
              onChange={(e) => setQuestionType(e.target.value)}
              className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
            />
            <span className="text-gray-700 font-medium">Short/Long Answer</span>
          </label>
        </div>
      </div>

      {/* Question Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Question Text
        </label>
                 <textarea
           value={currentQuestion.question}
           onChange={(e) => updateCurrentQuestion("question", e.target.value)}
           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none text-black placeholder-gray-500"
           rows="2"
           placeholder="Enter your question here..."
           required
         />
      </div>

             {/* Options - Only show for MCQ */}
       {questionType === "mcq" && (
         <div>
           <label className="block text-sm font-medium text-gray-700 mb-3">
             Options (A, B, C, D)
           </label>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {currentQuestion.options.map((option, index) => (
               <div key={index} className="relative">
                 <label className="block text-xs font-medium text-gray-600 mb-1">
                   Option {String.fromCharCode(65 + index)}
                 </label>
                                <input
                   type="text"
                   value={option}
                   onChange={(e) => updateOption(index, e.target.value)}
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-black placeholder-gray-500"
                   placeholder={`Option ${String.fromCharCode(65 + index)}`}
                   required
                 />
               </div>
             ))}
           </div>
         </div>
       )}

             {/* Correct Answer - Only show for MCQ */}
       {questionType === "mcq" && (
         <div>
           <label className="block text-sm font-medium text-gray-700 mb-2">
             Correct Answer (Optional)
           </label>
           <select
             value={currentQuestion.correctAnswer}
             onChange={(e) => updateCurrentQuestion("correctAnswer", e.target.value)}
             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-black"
           >
             <option value="">Select correct answer</option>
             {currentQuestion.options.map((option, index) => (
               <option key={index} value={String.fromCharCode(65 + index)}>
                 {String.fromCharCode(65 + index)}) {option || `Option ${String.fromCharCode(65 + index)}`}
               </option>
             ))}
           </select>
         </div>
       )}

             {/* Validation Message */}
       {!isFormValid() && currentQuestion.question.trim() !== "" && (
         <div className="flex items-center gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
           <AlertCircle className="w-5 h-5 text-yellow-600" />
           <p className="text-sm text-yellow-800">
             {questionType === "mcq" 
               ? "Please fill in all fields before adding the question" 
               : "Please enter the question text"
             }
           </p>
         </div>
       )}

      {/* Add Question Button */}
             <DesignedButton
         type="submit"
         onClick={() => addQuestion(questionType)}
         disabled={!isFormValid()}
         className="w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
       >
        <Plus className="w-5 h-5" />
        Add Question
      </DesignedButton>
    </form>
  );
};

export default QuestionForm;
