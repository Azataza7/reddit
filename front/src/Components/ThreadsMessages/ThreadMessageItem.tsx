import React from 'react';
import { userMessage } from '../../../../api/types';

interface Props {
  threadMessage: userMessage
}

const ThreadMessageItem: React.FC<Props> = ({threadMessage}) => {
  return (
    <div>
      <span>{threadMessage.text}</span>
      <span>{threadMessage.author}</span>
    </div>
  );
};

export default ThreadMessageItem;