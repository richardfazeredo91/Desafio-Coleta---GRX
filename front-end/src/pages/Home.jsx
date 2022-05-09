import React, { useState } from 'react';
import Counter from '../components/Counter/Counter';
import Header from '../components/Header/Header';
import QuestionsForm from '../components/QuestionsForm/QuestionsForm';

function Home() {
  const [textareaCounter, setTextareaCounter] = useState(0);

  return (
    <>
      <Header />
      <QuestionsForm setTextareaCounter={setTextareaCounter} />
      <Counter textareaCounter={textareaCounter} />
    </>
  );
}

export default Home;
