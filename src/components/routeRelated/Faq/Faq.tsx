import { QuestionsAndAnswersContainer } from "./QuestionsAndAnswersContainer";
import type { FAQItem } from "@/app/types/FAQItem";

/**
 * Core component of the FAQ page.
 * It renders a list of common questions and answers by passing them to the QuestionsAndAnswersContainer component.
 */

export const FAQ = () => {
  const questionsAndAnswers: FAQItem[] = [
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

  return (
    <div className="max-w-5xl space-y-4">
      <h2 className="font-bold text-xl">FAQ</h2>

      <QuestionsAndAnswersContainer questionsAndAnswers={questionsAndAnswers} />
    </div>
  );
};
