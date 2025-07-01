import React, { useState } from 'react';

const questionsData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Arctic Ocean"],
    correctAnswer: "Pacific Ocean",
  },
  // Add more questions as needed
];

function MCQPage() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (questionIndex, selectedOption) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    let scoreCount = 0;
    questionsData.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        scoreCount++;
      }
    });
    setScore(scoreCount);
    setShowResults(true);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">MCQ Test</h1>
      {questionsData.map((question, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-lg font-semibold mb-2">{question.question}</h2>
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex} className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={selectedAnswers[index] === option}
                  onChange={() => handleOptionChange(index, option)}
                  className="form-radio"
                />
                <span className="ml-2">{option}</span>
              </label>
            </div>
          ))}
        </div>
      ))}

      {!showResults ? (
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      ) : (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Your Score: {score}/{questionsData.length}</h2>
        </div>
      )}
    </div>
  );
}

export default MCQPage;

