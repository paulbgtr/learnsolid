import { FAQItem } from "@/app/types/FAQItem";

export const QuestionsAndAnswers = ({
  questionsAndAnswers,
}: {
  questionsAndAnswers: FAQItem[];
}) => {
  return (
    <>
      {questionsAndAnswers.map((qa) => (
        <div key={qa.question}>
          <p className="font-bold">- {qa.question}</p>
          <p>- {qa.answer}</p>
        </div>
      ))}
    </>
  );
};
