import { Box, Spinner, Text } from '@chakra-ui/react';
import { AIResponseType } from '../models';

export const AIResponse = ({ isLoading, aiResponse }: AIResponseType) => {
  return (
    <Box display="flex" justifyContent="center" width="100%" minH="200px">
      {isLoading ? (
        <Box display="flex" alignItems="center" justifyContent="center">
          <Spinner size="lg" color="teal.500" />
          <Text ml={4} fontSize="lg" color="gray.600">
            Cargando...
          </Text>
        </Box>
      ) : aiResponse ? (
        <Box display="flex" justifyContent="center" width="100%">
          <Box
            p={6}
            mt={4}
            borderWidth="1px"
            borderRadius="lg"
            borderColor="gray.200"
            bg="white"
            shadow="md"
            minH="100px"
            maxW="1000px"
          >
            <Text fontSize="md" color="gray.700" whiteSpace="pre-wrap">
              {aiResponse}
            </Text>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};
