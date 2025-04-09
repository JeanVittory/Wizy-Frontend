import { Button, Input } from '@chakra-ui/react';
import { CustomQuestionType } from '../models';

export const CustomQuestion = ({ handleSetQuestion, setQuestion, question, handleSubmit }: CustomQuestionType) => {
  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center mt-12 gap-4">
      <Input
        maxWidth="400px"
        type="text"
        placeholder="What are you looking for?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        px={4}
        py={2}
        borderRadius="lg"
        borderWidth={2}
        borderColor="white"
        bg="transparent"
        color="white"
        _placeholder={{ color: 'gray.300' }}
        _focus={{
          outline: 'none',
          borderColor: 'white',
        }}
      />
      <Button
        onClick={() => handleSetQuestion(question)}
        px={4}
        py={1}
        border="2px solid white"
        bg="white"
        color="black"
        fontWeight="medium"
        borderRadius="lg"
        _hover={{
          bg: 'transparent',
          color: 'white',
        }}
        _focus={{
          outline: 'none',
          ring: 2,
          ringColor: 'white',
          borderColor: 'transparent',
        }}
        transition="all 0.2s ease-in-out"
        cursor={{ base: 'default', md: 'pointer' }}
      >
        Send
      </Button>
    </form>
  );
};
