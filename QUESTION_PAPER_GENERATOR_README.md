# Question Paper Generator Tool

A modern, responsive React-based tool for creating and managing MCQ (Multiple Choice Question) papers. This tool allows you to create professional question papers with automatic saving to localStorage and printing capabilities.

## Features

### 🎯 Core Features
- **Create MCQ Questions**: Add questions with 4 options (A, B, C, D)
- **Real-time Preview**: See how your question paper will look before printing
- **Automatic Saving**: All data is automatically saved to browser localStorage
- **Print Functionality**: Print professional-looking question papers
- **Answer Sheet**: Automatic generation of answer sheets with radio buttons

### 📁 Data Management
- **Export/Import**: Save and load question papers as JSON files
- **Local Storage**: Automatic saving to browser storage
- **Clear Data**: Option to clear all saved data

### 🎨 User Interface
- **Modern Design**: Clean, responsive interface with Tailwind CSS
- **Mobile Friendly**: Works perfectly on all device sizes
- **Professional Layout**: Question paper format matches standard exam papers
- **Beautiful Styling**: Consistent with your portfolio design

## How to Use

### 1. Access the Tool
Navigate to `/question-paper` in your application to access the Question Paper Generator.

### 2. Create Questions
1. **Set Paper Title**: Enter a title for your question paper
2. **Add Question Text**: Write your question in the text area
3. **Add Options**: Fill in all 4 options (A, B, C, D)
4. **Set Correct Answer** (Optional): Select the correct answer from dropdown
5. **Add Question**: Click "Add Question" to save the question

### 3. Manage Questions
- **View All Questions**: See all added questions in the middle panel
- **Delete Questions**: Remove individual questions using the trash icon
- **Clear All**: Remove all questions at once

### 4. Preview and Print
- **Preview**: Click "Preview" to see how the final paper will look
- **Print**: Click "Print" to print the question paper
- **Answer Sheet**: The printed version includes an answer sheet

### 5. Data Management
- **Export**: Download your questions as a JSON file for backup
- **Import**: Load previously exported question papers
- **Storage Info**: View information about saved data

## File Structure

```
src/components/
├── QuestionPaperGenerator.jsx    # Main component
├── QuestionForm.jsx              # Question input form
├── QuestionPaper.jsx             # Paper display and print
├── QuestionStorage.jsx           # Data management utilities
└── DesignedButton.jsx            # Reusable button component

src/pages/
└── QuestionPaperDemo.jsx         # Demo page component
```

## Components Overview

### QuestionPaperGenerator.jsx
- Main orchestrator component
- Manages state for questions and paper title
- Handles localStorage operations
- Coordinates between all sub-components

### QuestionForm.jsx
- Handles question input and validation
- Manages 4 option inputs (A, B, C, D)
- Form validation and submission
- Correct answer selection

### QuestionPaper.jsx
- Displays formatted question paper
- Handles print functionality
- Generates answer sheet
- Professional paper layout

### QuestionStorage.jsx
- Export/import functionality
- localStorage management
- Data backup and restore
- Clear data operations

## Technical Details

### Technologies Used
- **React 19**: Modern React with hooks
- **Tailwind CSS**: Styling and responsive design
- **Lucide React**: Icons
- **localStorage**: Client-side data persistence

### Key Features
- **Responsive Design**: Works on all screen sizes
- **Print Optimization**: CSS optimized for printing
- **Form Validation**: Ensures all fields are filled
- **Auto-save**: Real-time saving to localStorage
- **Error Handling**: Graceful error handling for file operations

### Browser Compatibility
- Modern browsers with localStorage support
- Chrome, Firefox, Safari, Edge
- Mobile browsers supported

## Usage Examples

### Creating a Math Quiz
1. Set title: "Mathematics Quiz - Grade 10"
2. Add questions like:
   - "What is the value of π (pi) to 2 decimal places?"
   - Options: A) 3.14, B) 3.41, C) 3.12, D) 3.16
3. Set correct answer: A
4. Add more questions and print

### Creating a Science Test
1. Set title: "Science Test - Chapter 5"
2. Add questions about the chapter
3. Preview the paper
4. Export for backup
5. Print for distribution

## Customization

### Styling
The tool uses your existing `DesignedButton` component and follows your portfolio's design system. You can customize:

- Colors: Modify Tailwind classes in components
- Layout: Adjust grid layouts and spacing
- Typography: Change font sizes and weights
- Print styles: Modify print-specific CSS

### Functionality
- Add more question types (True/False, Essay, etc.)
- Implement question categories
- Add time limits
- Include scoring systems
- Add question randomization

## Troubleshooting

### Common Issues
1. **Data not saving**: Check if localStorage is enabled in browser
2. **Print not working**: Ensure popup blockers are disabled
3. **Import failing**: Verify JSON file format is correct
4. **Styling issues**: Check if Tailwind CSS is properly loaded

### Browser Support
- Requires localStorage support
- Modern JavaScript features
- CSS Grid and Flexbox support

## Future Enhancements

Potential improvements for the tool:
- Question categories and tags
- Multiple question types
- Question bank management
- Online sharing capabilities
- PDF export
- Question templates
- Student answer tracking
- Analytics and reporting

---

This tool is designed to be simple yet powerful, providing everything needed to create professional question papers quickly and efficiently.
