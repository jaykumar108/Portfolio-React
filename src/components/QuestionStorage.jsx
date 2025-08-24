import React from "react";
import DesignedButton from "./DesignedButton";
import { Download, Upload, Trash2 } from "lucide-react";

const QuestionStorage = ({ questions, paperTitle, onLoadQuestions, onClearAll }) => {
  const exportToJSON = () => {
    const data = {
      title: paperTitle,
      questions: questions,
      exportDate: new Date().toISOString(),
      version: "1.0"
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${paperTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_questions.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const importFromJSON = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          if (data.questions && Array.isArray(data.questions)) {
            onLoadQuestions(data.questions, data.title || "Imported Question Paper");
          }
        } catch (error) {
          alert("Invalid file format. Please select a valid JSON file.");
        }
      };
      reader.readAsText(file);
    }
  };

  const clearLocalStorage = () => {
    if (window.confirm("Are you sure you want to clear all saved data? This action cannot be undone.")) {
      localStorage.removeItem("questionPaper");
      localStorage.removeItem("paperTitle");
      onClearAll();
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Data Management
      </h3>
      
      <div className="space-y-4">
        {/* Export Section */}
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <h4 className="font-medium text-green-800 mb-2">Export Questions</h4>
          <p className="text-sm text-green-700 mb-3">
            Download your questions as a JSON file for backup or sharing
          </p>
          <DesignedButton
            onClick={exportToJSON}
            variant="success"
            size="sm"
            className="flex items-center gap-2"
            disabled={questions.length === 0}
          >
            <Download className="w-4 h-4" />
            Export to JSON
          </DesignedButton>
        </div>

        {/* Import Section */}
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-medium text-blue-800 mb-2">Import Questions</h4>
          <p className="text-sm text-blue-700 mb-3">
            Import questions from a previously exported JSON file
          </p>
          <label className="cursor-pointer">
            <input
              type="file"
              accept=".json"
              onChange={importFromJSON}
              className="hidden"
            />
            <DesignedButton
              variant="primary"
              size="sm"
              className="flex items-center gap-2"
              as="span"
            >
              <Upload className="w-4 h-4" />
              Import from JSON
            </DesignedButton>
          </label>
        </div>

        {/* Clear Data Section */}
        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
          <h4 className="font-medium text-red-800 mb-2">Clear All Data</h4>
          <p className="text-sm text-red-700 mb-3">
            Permanently delete all saved questions and settings
          </p>
          <DesignedButton
            onClick={clearLocalStorage}
            variant="danger"
            size="sm"
            className="flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Clear All Data
          </DesignedButton>
        </div>

        {/* Storage Info */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-gray-800 mb-2">Storage Information</h4>
          <div className="text-sm text-gray-600 space-y-1">
            <p>Questions saved: {questions.length}</p>
            <p>Paper title: {paperTitle}</p>
            <p>Data automatically saves to browser storage</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionStorage;
