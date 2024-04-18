import { QuestionsAndAnswers } from "./QuestionsAndAnswers";
import { FAQItem } from "@/app/types/FAQItem";

export const QuestionsAndAnswersContainer = ({
  questionsAndAnswers,
}: {
  questionsAndAnswers: FAQItem[];
}) => {
  return <QuestionsAndAnswers questionsAndAnswers={questionsAndAnswers} />;
};
