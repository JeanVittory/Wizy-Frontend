import { Button, CloseButton, Drawer, Portal, Text } from '@chakra-ui/react';
import { SuggestedQuestionsType } from '../models';

export const SuggestedQuestions = ({ initialQuestions, handleSetQuestion, open, setOpen }: SuggestedQuestionsType) => {
  return (
    <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <div className="absolute top-4 right-4 z-50">
        <Drawer.Trigger asChild>
          <Button variant="outline" size="sm" color="white">
            Suggested Questions
          </Button>
        </Drawer.Trigger>
      </div>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Suggested questions</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body className="flex ">
              <article className="flex flex-col items-center  gap-10">
                {initialQuestions.map((text, index) => (
                  <Text
                    key={index}
                    bg="black"
                    color="white"
                    fontWeight="medium"
                    py={2}
                    cursor={{ base: 'default', md: 'pointer' }}
                    onClick={() => handleSetQuestion(text)}
                  >
                    {text}
                  </Text>
                ))}
              </article>
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};
