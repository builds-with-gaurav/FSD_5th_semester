import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch questions from questions.json
  useEffect(() => {
    fetch("/questions.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load quiz questions.");
        }

        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error("No questions found.");
        }

        setQuestions(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Current question
  const question = questions[currentQuestion];

  // Score calculation
  const score = questions.reduce((total, item, index) => {
    return total + (
      selectedAnswers[index] === item.correct_answer ? 1 : 0
    );
  }, 0);

  // Select an answer
  const handleAnswer = (option) => {
    if (selectedAnswers[currentQuestion] !== undefined) {
      return;
    }

    setSelectedAnswers((previous) => ({
      ...previous,
      [currentQuestion]: option,
    }));
  };

  // Go to next question
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
    } else {
      setShowResults(true);
    }
  };

  // Go to previous question
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((previous) => previous - 1);
    }
  };

  // Restart the quiz
  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  // Loading screen
  if (loading) {
    return (
      <div className="status-screen">
        <div className="loader"></div>
        <h2>Preparing your quiz...</h2>
        <p>Getting your questions ready.</p>
      </div>
    );
  }

  // Error screen
  if (error) {
    return (
      <div className="status-screen">
        <h2>Unable to load quiz</h2>
        <p>{error}</p>
        <p>
          Check that your questions.json file is inside the public folder.
        </p>
      </div>
    );
  }

  // Results screen
  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <main className="app-shell">
        <section className="result-card">
          <div className="result-icon">
            {percentage >= 70 ? "🏆" : percentage >= 40 ? "🎯" : "📚"}
          </div>

          <p className="eyebrow">QUIZ COMPLETED</p>

          <h1>
            {percentage >= 70
              ? "Excellent work!"
              : percentage >= 40
              ? "Good effort!"
              : "Keep learning!"}
          </h1>

          <p className="result-description">
            You've completed your React knowledge assessment.
          </p>

          <div className="score-circle">
            <div>
              <span className="score-number">{percentage}%</span>
              <span className="score-label">Your score</span>
            </div>
          </div>

          <div className="result-stats">
            <div className="stat-box">
              <span className="stat-number">{score}</span>
              <span className="stat-label">Correct</span>
            </div>

            <div className="stat-box">
              <span className="stat-number">
                {questions.length - score}
              </span>
              <span className="stat-label">Incorrect</span>
            </div>

            <div className="stat-box">
              <span className="stat-number">{questions.length}</span>
              <span className="stat-label">Total</span>
            </div>
          </div>

          <p className="result-message">
            {percentage === 100
              ? "Perfect score! You've mastered every question."
              : "Every attempt is a chance to learn something new."}
          </p>

          <button className="primary-button restart-button" onClick={handleRestart}>
            ↻ &nbsp; Try Again
          </button>
        </section>
      </main>
    );
  }

  // Quiz screen
  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="QuizLab home">
          <span className="brand-icon">Q</span>
          <span>Quiz<span className="brand-accent">Lab</span></span>
        </a>

        <div className="topbar-tag">
          <span className="live-dot"></span>
          REACT KNOWLEDGE TEST
        </div>
      </header>

      <section className="quiz-layout">
        <div className="quiz-heading">
          <p className="eyebrow">YOUR LEARNING JOURNEY</p>
          <h1>Test your <span>React</span> skills.</h1>
          <p className="subtitle">
            Think carefully, choose your answer, and see how much you know.
          </p>
        </div>

        <div className="quiz-meta">
          <span>
            QUESTION <strong>{String(currentQuestion + 1).padStart(2, "0")}</strong>
            {" / "}
            {String(questions.length).padStart(2, "0")}
          </span>

          <span className="difficulty">
            {question.difficulty}
          </span>
        </div>

        <div
          className="progress-track"
          role="progressbar"
          aria-valuenow={currentQuestion + 1}
          aria-valuemin={1}
          aria-valuemax={questions.length}
          aria-label="Quiz progress"
        >
          <div
            className="progress-fill"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>

        <section className="question-card">
          <div className="question-card-top">
            <span className="category-badge">{question.category}</span>

            <span className="question-number">
              Q{String(currentQuestion + 1).padStart(2, "0")}
            </span>
          </div>

          <h2 className="question-title">{question.question}</h2>

          <p className="answer-instruction">
            Select one answer from the options below.
          </p>

          <div className="options-list">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswers[currentQuestion] === option;
              const hasAnswered =
                selectedAnswers[currentQuestion] !== undefined;
              const isCorrect = option === question.correct_answer;

              let optionClass = "option-button";

              if (hasAnswered && isCorrect) {
                optionClass += " correct";
              } else if (isSelected && !isCorrect) {
                optionClass += " incorrect";
              }

              return (
                <button
                  key={option}
                  className={optionClass}
                  onClick={() => handleAnswer(option)}
                  disabled={hasAnswered}
                  aria-pressed={isSelected}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>

                  <span className="option-text">{option}</span>

                  <span className="option-indicator">
                    {hasAnswered && isCorrect
                      ? "✓"
                      : isSelected
                      ? "×"
                      : "↗"}
                  </span>
                </button>
              );
            })}
          </div>

          {selectedAnswers[currentQuestion] !== undefined && (
            <div
              className={
                selectedAnswers[currentQuestion] === question.correct_answer
                  ? "feedback feedback-correct"
                  : "feedback feedback-incorrect"
              }
              role="status"
            >
              <span>
                {selectedAnswers[currentQuestion] === question.correct_answer
                  ? "✓ Correct answer!"
                  : "↗ Not quite. The correct answer is:"}
              </span>

              {selectedAnswers[currentQuestion] !== question.correct_answer && (
                <strong>{question.correct_answer}</strong>
              )}
            </div>
          )}

          <div className="question-footer">
            <button
              className="secondary-button"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              ← Previous
            </button>

            <span className="answered-count">
              {Object.keys(selectedAnswers).length} of {questions.length} answered
            </span>

            <button
              className="primary-button"
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === undefined}
            >
              {currentQuestion === questions.length - 1
                ? "See Results"
                : "Next Question"}
              &nbsp; →
            </button>
          </div>
        </section>

        <footer className="quiz-footer">
          <span>BUILT FOR CURIOUS MINDS.</span>
          <span>LEARN. PRACTICE. IMPROVE.</span>
        </footer>
      </section>
    </main>
  );
}

export default App;