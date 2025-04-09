import { Text } from '@chakra-ui/react';
import { openSans } from '../utils/fonts';
import { LabelMessageType } from '../models';

export const LabelMessage = ({ title, paragraph }: LabelMessageType) => {
  return (
    <article className="mb-8 ">
      <Text
        as="h1"
        fontSize="80px"
        fontWeight="bold"
        className={`${openSans} text-white text-center text tracking-tighter`}
      >
        {title}
      </Text>
      <Text fontSize="14px" textAlign="center">
        {paragraph}
      </Text>
    </article>
  );
};
