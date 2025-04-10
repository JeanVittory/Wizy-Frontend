'use client';

import { initialQuestions } from './utils/questions';
import { askAI } from './services/askAI';
import { FormEvent, useState } from 'react';
import { SuggestedQuestions } from './components/SuggestedQuestions';
import { LabelMessage } from './components/LabelMessage';
import { CustomQuestion } from './components/CustomQuestion';
import { AIResponse } from './components/AIResponse';
import { toaster, Toaster } from '@/components/ui/toaster';

export default function Home() {
  const [question, setQuestion] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [aiResponse, setAiResponse] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>();

  const handleSetQuestion = async (text: string) => {
    try {
      if (!text) {
        return toaster.create({
          description: 'You need to write something!',
          type: 'error',
        });
      }
      setIsLoading(true);
      const fetchAIResponse = await askAI(text);
      setAiResponse(fetchAIResponse);
      setIsLoading(false);
      setOpen(false);
    } catch {
      setIsLoading(false);
      return toaster.create({
        description: 'Something went wrong with the server!',
        type: 'error',
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!question) {
        return toaster.create({
          description: 'You need to write something!',
          type: 'error',
        });
      }
      setIsLoading(true);
      const fetchAIResponse = await askAI(question);
      setAiResponse(fetchAIResponse);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
      return toaster.create({
        description: 'Something went wrong with the server!',
        type: 'error',
      });
    }
  };

  return (
    <div className="flex flex-col justify-center h-screen p-8 pb-20 sm:p-20 gap-6">
      <SuggestedQuestions
        initialQuestions={initialQuestions}
        handleSetQuestion={handleSetQuestion}
        open={open}
        setOpen={setOpen}
      />

      <LabelMessage title="Wizybot" paragraph="Powered by ChatGPT" />

      <CustomQuestion
        handleSetQuestion={handleSetQuestion}
        handleSubmit={handleSubmit}
        question={question}
        setQuestion={setQuestion}
      />
      <AIResponse aiResponse={aiResponse} isLoading={isLoading} />
      <Toaster />
    </div>
  );
}
