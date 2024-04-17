import { QuestionsAndAnswers } from "./QuestionsAndAnswers";

export const QuestionsAndAnswersContainer = () => {
  const questionsAndAnswers = [
    {
      question: "What is SOLID?",
      answer:
        "SOLID is an acronym for five design principles intended to make software designs more understandable, flexible, and maintainable. The principles are Single Responsibility Principle, Open/Closed Principle, Liskov Substitution Principle, Interface Segregation Principle, and Dependency Inversion Principle.",
    },
    {
      question: "Is this app free to use?",
      answer:
        "Yes, this app is free to use. It's open source and doesn't store your data or some other BS.",
    },
    {
      question: "I found a bug, what should I do?",
      answer:
        "A github issue would be appreciated. If you can fix it, a PR would be even better.",
    },
  ];

  return <QuestionsAndAnswers questionsAndAnswers={questionsAndAnswers} />;
};
