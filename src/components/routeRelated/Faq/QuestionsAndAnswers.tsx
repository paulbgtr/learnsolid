export const QuestionsAndAnswers = ({
  questionsAndAnswers,
}: {
  questionsAndAnswers: { question: string; answer: string }[];
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
