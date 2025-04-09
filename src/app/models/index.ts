import { Dispatch, FormEvent, SetStateAction } from 'react';

export type AIResponseType = {
  isLoading: boolean | undefined;
  aiResponse: string | undefined;
};

export type CustomQuestionType = {
  handleSetQuestion: (e: string) => void;
  setQuestion: Dispatch<SetStateAction<string>>;
  question: string;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export type LabelMessageType = {
  title: string;
  paragraph: string;
};

export type SuggestedQuestionsType = {
  initialQuestions: string[];
  handleSetQuestion: (e: string) => void;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
