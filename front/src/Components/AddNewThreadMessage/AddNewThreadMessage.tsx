import React, { useRef, useState } from 'react';
import { Button, Grid, Input, TextField } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { newMessageThreadOnLoading } from '../../store/Threads/ThreadsSlice';
import { createNewUserMessage, fetchUserMessages } from '../../store/Threads/ThreadsThunks';

interface FormDataType {
  author: string | null;
  text: string;
  image: File | null;
}

const AddNewThreadMessage = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onLoading = useAppSelector(newMessageThreadOnLoading);
  const dispatch = useAppDispatch();


  const [formData, setFormData] = useState<FormDataType>({
    author: '',
    text: '',
    image: null,
  });

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        image: e.target.files[0],
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const activateInput = () => {
    if (inputRef.current) {
      inputRef.current?.click();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(createNewUserMessage(formData));
    await dispatch(fetchUserMessages());
  };

  return (
    <form className="send-container" style={{marginBottom: '70px'}} onSubmit={handleSubmit}>
      <input
        style={{display: 'none'}}
        type="file"
        name="loadFile"
        onChange={onFileChange}
        ref={inputRef}

      />
      <Grid container direction="row" spacing={2} alignItems="center">
        <Grid item sx={{color: 'white'}}>
          <TextField
            name="author"
            placeholder="write your name(not required)"
            value={formData.author}
            onChange={handleChange}
          />
        </Grid>
        <Grid item sx={{color: 'white'}}>
          <TextField
            name="text"
            placeholder="write here"
            required
            value={formData.text}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <Input
            disabled
            style={{display: formData.image ? 'block' : 'none'}}
            value={formData.image ? formData.image.name : ''}
          />
        </Grid>
        <AttachFileIcon
          onClick={activateInput}
          cursor="pointer"
          display={onLoading ? 'none' : 'block'}
          sx={{color: '#000'}}
        />
        <Button disabled={onLoading} type="submit">
          <SendIcon />
        </Button>
      </Grid>
    </form>
  );
};

export default AddNewThreadMessage;