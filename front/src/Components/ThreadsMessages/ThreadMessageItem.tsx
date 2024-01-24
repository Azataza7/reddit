import React from 'react';
import { userMessage } from '../../../../api/types';
import { Card, CardContent, Typography } from '@mui/material';
import { apiURL } from '../../constans';

interface Props {
  threadMessage: userMessage;
}


const ThreadMessageItem: React.FC<Props> = ({threadMessage}) => {
  const imageRoot = apiURL + '/' + threadMessage.image;

  return (
    <Card sx={
      {width: 275, marginBottom: '20px', display: "flex", justifyContent: "space-between"}
    }>
      <CardContent>
        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
          {threadMessage.author ? threadMessage.author : 'Anonymous'}
        </Typography>
        <Typography variant="body2">
          {threadMessage.text}
        </Typography>
      </CardContent>
      <CardContent>
        {threadMessage.image ?
          <a href={threadMessage.image ? imageRoot : '#'}>
          <img style={{width: '80px', height: '60px'}} src={threadMessage.image ? imageRoot : ''} alt="message-image"/>
        </a> : ''}
      </CardContent>
    </Card>
  );
};

export default ThreadMessageItem;
