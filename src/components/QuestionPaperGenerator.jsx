import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import DesignedButton from "./DesignedButton";
import QuestionForm from "./QuestionForm";
import QuestionPaper from "./QuestionPaper";
import QuestionStorage from "./QuestionStorage";
import DocumentDownloader from "./DocumentDownloader";
import { Plus, Save, Printer, Trash2, FileText } from "lucide-react";

const QuestionPaperGenerator = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    question: "",
    options: ["", "", "", ""],
    correctAnswer: "",
    type: "mcq"
  });
  const [showPreview, setShowPreview] = useState(false);
  const [paperTitle, setPaperTitle] = useState("Question Paper");

  // Load questions from localStorage on component mount
  useEffect(() => {
    const savedQuestions = localStorage.getItem("questionPaper");
    const savedTitle = localStorage.getItem("paperTitle");
    
    if (savedQuestions) {
      setQuestions(JSON.parse(savedQuestions));
    }
    if (savedTitle) {
      setPaperTitle(savedTitle);
    }
  }, []);

  // Save questions to localStorage whenever questions change
  useEffect(() => {
    localStorage.setItem("questionPaper", JSON.stringify(questions));
    localStorage.setItem("paperTitle", paperTitle);
  }, [questions, paperTitle]);

  const addQuestion = (questionType) => {
    if (currentQuestion.question.trim() && 
        (questionType === "mcq" ? currentQuestion.options.every(opt => opt.trim()) : true)) {
      setQuestions([...questions, { ...currentQuestion, type: questionType, id: Date.now() }]);
      setCurrentQuestion({
        question: "",
        options: ["", "", "", ""],
        correctAnswer: "",
        type: "mcq"
      });
      
      // Show success toast
      toast.success(`Question added successfully! (${questionType.toUpperCase()})`, {
        duration: 3000,
        position: "top-center",
        style: {
          background: 'white',
          color: 'black',
        },
      });
    }
  };

  const deleteQuestion = (id) => {
    setQuestions(questions.filter(q => q.id !== id));
    toast.success("Question deleted successfully!", {
      duration: 2000,
      position: "top-right",
      style: {
        background: 'white',
        color: 'black',
      },
    });
  };

  const clearAllQuestions = () => {
    setQuestions([]);
    setPaperTitle("Question Paper");
    localStorage.removeItem("questionPaper");
    localStorage.removeItem("paperTitle");
    toast.success("All questions cleared successfully!", {
      duration: 3000,
      position: "top-center",
      style: {
        background: 'white',
        color: 'black',
      },
    });
  };

  const loadQuestions = (loadedQuestions, title) => {
    setQuestions(loadedQuestions);
    setPaperTitle(title);
    toast.success(`Questions loaded successfully! (${loadedQuestions.length} questions)`, {
      duration: 3000,
      position: "top-center",
      style: {
        background: 'white',
        color: 'black',
      },
    });
  };



  const updateCurrentQuestion = (field, value) => {
    setCurrentQuestion(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateOption = (index, value) => {
    const newOptions = [...currentQuestion.options];
    newOptions[index] = value;
    setCurrentQuestion(prev => ({
      ...prev,
      options: newOptions
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            Question Paper Generator
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Create and manage MCQ question papers with ease
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Question Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                <FileText className="w-6 h-6 text-purple-600" />
                Create Questions
              </h2>
              <div className="flex gap-2">
                <DesignedButton
                  onClick={clearAllQuestions}
                  variant="danger"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Clear
                </DesignedButton>
              </div>
            </div>

            {/* Paper Title Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Paper Title
              </label>
                             <input
                 type="text"
                 value={paperTitle}
                 onChange={(e) => setPaperTitle(e.target.value)}
                 className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 bg-white dark:bg-gray-700"
                 placeholder="Enter paper title..."
               />
            </div>

            <QuestionForm
              currentQuestion={currentQuestion}
              updateCurrentQuestion={updateCurrentQuestion}
              updateOption={updateOption}
              addQuestion={addQuestion}
            />
          </div>

          {/* Middle Panel - Questions List & Actions */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Questions ({questions.length})
              </h2>
                             <div className="flex gap-2">
                 <DesignedButton
                   onClick={() => setShowPreview(!showPreview)}
                   variant="primary"
                   size="sm"
                   className="flex items-center gap-2"
                 >
                   <FileText className="w-4 h-4" />
                   {showPreview ? "Hide Preview" : "Preview"}
                 </DesignedButton>
               </div>
            </div>

            {questions.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                <p className="text-gray-500 dark:text-gray-400">No questions added yet</p>
                <p className="text-sm text-gray-400 dark:text-gray-500">Start by adding your first question</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {questions.map((question, index) => (
                  <div
                    key={question.id}
                    className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-md transition-shadow bg-white dark:bg-gray-700"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800 dark:text-white mb-2">
                          Q{index + 1}. {question.question}
                        </h3>
                                                 {question.type === "mcq" ? (
                           <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-300">
                             {question.options.map((option, optIndex) => (
                               <div key={optIndex}>
                                 ({String.fromCharCode(65 + optIndex)}) {option}
                               </div>
                             ))}
                           </div>
                         ) : (
                           <div className="text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-600 p-2 rounded">
                             <span className="font-medium">Short/Long Answer Question</span>
                           </div>
                         )}
                      </div>
                      <DesignedButton
                        onClick={() => deleteQuestion(question.id)}
                        variant="danger"
                        size="sm"
                        className="ml-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </DesignedButton>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Panel - Storage Management & Downloads */}
          <div className="lg:col-span-1 space-y-6">
            <DocumentDownloader
              questions={questions}
              paperTitle={paperTitle}
            />
            <QuestionStorage
              questions={questions}
              paperTitle={paperTitle}
              onLoadQuestions={loadQuestions}
              onClearAll={clearAllQuestions}
            />
          </div>
        </div>

        {/* Print Preview */}
        {showPreview && (
          <div className="mt-8">
            <QuestionPaper
              title={paperTitle}
              questions={questions}
              isPreview={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionPaperGenerator;
