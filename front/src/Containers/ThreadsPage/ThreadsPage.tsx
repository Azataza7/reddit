import React from 'react';
import ThreadsMessages from '../../Components/ThreadsMessages/ThreadsMessages';
import AddNewThreadMessage from '../../Components/AddNewThreadMessage/AddNewThreadMessage';

const ThreadsPage = () => {
  return (
    <>
      <ThreadsMessages/>
      <AddNewThreadMessage/>
    </>
  );
};

export default ThreadsPage;