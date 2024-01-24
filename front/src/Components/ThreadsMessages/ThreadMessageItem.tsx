import React from 'react';
import { userMessage } from '../../../../api/types';
import { Grid, ListItem } from '@mui/material';
import { apiURL } from '../../constans';

interface Props {
  threadMessage: userMessage;
}

const ThreadMessageItem: React.FC<Props> = ({threadMessage}) => {
  return (
    <Grid item sx={{border: 'solid 1px'}}>
      <ListItem>{threadMessage.text}</ListItem>
      <ListItem>{threadMessage.author}</ListItem>
      {threadMessage.image ?
        <img src={apiURL + '/' + threadMessage.image} alt={threadMessage.image} style={{maxWidth: '150px'}}/>
        : ''}
    </Grid>
  );
};

export default ThreadMessageItem;