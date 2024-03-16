import React, { useState } from "react";
import "../../assets/dashboard/assets/css/style.css";
import "../../assets/dashboard/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/dashboard/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../assets/dashboard/assets/vendor/boxicons/css/boxicons.min.css";
import "../../assets/dashboard/assets/vendor/quill/quill.snow.css";
import "../../assets/dashboard/assets/vendor/quill/quill.bubble.css";
import "../../assets/dashboard/assets/vendor/remixicon/remixicon.css";
import "../../assets/dashboard/assets/vendor/simple-datatables/style.css";

function QuestionDashboardScreen() {
    const [answers, setAnswers] = useState({});
    const [resume, setResume] = useState(null);

    const questions = [
        {
            id: 1,
            question: "1. What is your name?",
            options: ["John", "Jane", "Other"]
        },
        {
            id: 2,
            question: "2. Which department do you belong to?",
            options: ["Administration", "Faculty", "Staff"]
        },
        {
            id: 3,
            question: "3. How long have you been working at the university?",
            options: ["Less than 1 year", "1-5 years", "More than 5 years"]
        },
        {
            id: 4,
            question: "4. What is your favorite color?",
            options: ["Red", "Blue", "Green", "Yellow", "Other"]
        },
        {
            id: 5,
            question: "5. Which programming language do you prefer?",
            options: ["JavaScript", "Python", "Java", "C++", "Other"]
        },
        {
            id: 6,
            question: "6. Do you have any prior experience in this field?",
            options: ["Yes", "No"]
        },
        {
            id: 7,
            question: "7. What is your highest level of education?",
            options: ["High School", "Bachelor's Degree", "Master's Degree", "PhD", "Other"]
        },
        {
            id: 8,
            question: "8. Are you comfortable working in a team?",
            options: ["Yes", "No"]
        },
        {
            id: 9,
            question: "9. How do you handle stress?",
            options: ["Take breaks", "Stay organized", "Talk to someone", "Exercise", "Other"]
        },
        {
            id: 10,
            question: "10. What motivates you?",
            options: ["Achievement", "Recognition", "Learning", "Money", "Other"]
        },
        {
            id: 11,
            question: "11. What is your preferred work environment?",
            options: ["Quiet", "Collaborative", "Structured", "Flexible", "Other"]
        },
        {
            id: 12,
            question: "12. Are you comfortable with public speaking?",
            options: ["Yes", "No"]
        },
        {
            id: 13,
            question: "13. How do you handle conflicts?",
            options: ["Listen actively", "Communicate assertively", "Find compromises", "Seek mediation", "Other"]
        },
        {
            id: 14,
            question: "14. What is your preferred method of communication?",
            options: ["Email", "Phone", "In-person", "Messaging apps", "Other"]
        },
        {
            id: 15,
            question: "15. Are you open to constructive criticism?",
            options: ["Yes", "No"]
        },
        {
            id: 16,
            question: "16. How do you prioritize tasks?",
            options: ["By deadline", "By importance", "By urgency", "By difficulty", "Other"]
        },
        {
            id: 17,
            question: "17. What are your career goals?",
            options: ["Growth within the company", "Switching fields", "Entrepreneurship", "Achieving expertise", "Other"]
        },
        {
            id: 18,
            question: "18. What is your preferred learning style?",
            options: ["Visual", "Auditory", "Reading/Writing", "Kinesthetic", "Other"]
        },
        {
            id: 19,
            question: "19. How do you stay updated in your field?",
            options: ["Reading books", "Attending workshops/conferences", "Online courses", "Networking", "Other"]
        },
        {
            id: 20,
            question: "20. Do you have any questions for us?",
            options: ["Yes", "No"]
        }
    ];

    const handleAnswerChange = (questionId, answer) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: answer
        }));
    };

    const handleResumeUpload = (event) => {
        const file = event.target.files[0];
        setResume(file);
    };

    return (
        <div className="container">
            <h2 className="mt-5 mb-4">Question Dashboard</h2>
            <div className="mb-4">
                <label htmlFor="resumeUpload" className="form-label">Upload your resume or CV:</label>
                <input type="file" className="form-control" id="resumeUpload" accept=".pdf,.doc,.docx" onChange={handleResumeUpload} />
            </div>
            <form>
                {questions.map(question => (
                    <div key={question.id} className="mb-4">
                        <p className="mb-2">{question.question}</p>
                        <div className="d-flex flex-column">
                            {question.options.map(option => (
                                <label key={option} className="radio-label mb-2">
                                    <input
                                        type="radio"
                                        name={`question_${question.id}`}
                                        value={option}
                                        onChange={() => handleAnswerChange(question.id, option)}
                                    />
                                    <span className="ml-2">{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="mt-4">
                <h3>Answers:</h3>
                <ul>
                    {Object.keys(answers).map(questionId => (
                        <li key={questionId}>
                            Question {questionId}: {answers[questionId]}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default QuestionDashboardScreen;
