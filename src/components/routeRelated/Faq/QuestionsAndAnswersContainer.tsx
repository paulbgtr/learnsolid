import { QuestionsAndAnswers } from "./QuestionsAndAnswers";
import { FAQItem } from "@/app/types/FAQItem";

export const QuestionsAndAnswersContainer = ({
  questionsAndAnswers,
}: {
  questionsAndAnswers: FAQItem[];
}) => {
  if (questionsAndAnswers.length === 0)
    throw new Error("No questions and answers provided");

  return <QuestionsAndAnswers questionsAndAnswers={questionsAndAnswers} />;
};
