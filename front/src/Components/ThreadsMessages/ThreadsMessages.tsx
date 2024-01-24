import React, { JSX, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectThreadsMessages, threadsOnLoading } from '../../store/Threads/ThreadsSlice';
import { userMessage } from '../../../../api/types';
import { fetchUserMessages } from '../../store/Threads/ThreadsThunks';
import ThreadMessageItem from './ThreadMessageItem';
import Loader from '../Spinner/Spinner';

const ThreadsMessages = () => {
  const threadsMessageList: userMessage[] = useAppSelector(selectThreadsMessages);
  const onLoadingMessage = useAppSelector(threadsOnLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserMessages());
  }, [dispatch]);


  if (onLoadingMessage) {
    return <Loader/>
  }

  const messageList: JSX.Element[] = threadsMessageList.map((messageItem, i) => (
    <ThreadMessageItem key={i} threadMessage={messageItem}/>
  ));

  return (
    <div className="threads-container">
      {messageList}
    </div>
  );
};

export default ThreadsMessages;