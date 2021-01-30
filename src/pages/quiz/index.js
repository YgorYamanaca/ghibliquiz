import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizTeamplate from '../../components/screens/Quiz/QuizTemplate';
import db from '../../../db.json';

export default function QuizPage() {
  return (
    <ThemeProvider theme={db.theme}>
      <QuizTeamplate questions={db.questions} bg={db.bg} />
    </ThemeProvider>
  );
}
