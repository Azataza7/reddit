import React from 'react';
import ThreadsMessages from '../../Components/ThreadsMessages/ThreadsMessages';
import AddNewThreadMessage from '../../Components/AddNewThreadMessage/AddNewThreadMessage';

const ThreadsPage = () => {
  return (
    <>
      <AddNewThreadMessage/>
      <ThreadsMessages/>
    </>
  );
};

export default ThreadsPage;