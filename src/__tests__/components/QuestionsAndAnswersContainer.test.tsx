import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "bun:test";
import { QuestionsAndAnswersContainer } from "@/components/routeRelated/FAQ/QuestionsAndAnswersContainer";

describe("QuestionsAndAnswersContainer", () => {
  it("renders the container", () => {
    const questionsAndAnswers = [
      { question: "Q1", answer: "A1" },
      { question: "Q2", answer: "A2" },
    ];

    render(
      <QuestionsAndAnswersContainer questionsAndAnswers={questionsAndAnswers} />
    );

    // Using a regular expression to ignore dashes and spaces before 'A1'
    screen.getByText(/-?\s*A1/);
  });

  it("throws an error if no questions and answers are provided", () => {
    const renderWithoutQuestionsAndAnswers = () => {
      render(<QuestionsAndAnswersContainer questionsAndAnswers={[]} />);
    };

    expect(renderWithoutQuestionsAndAnswers).toThrow(
      "No questions and answers provided"
    );
  });
});
