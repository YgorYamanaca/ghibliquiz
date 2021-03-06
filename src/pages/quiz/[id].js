import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizTeamplate from '../../components/screens/Quiz/QuizTemplate';

export default function QuizDaGalera({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizTeamplate questions={dbExterno.questions} bg={dbExterno.bg} externalData />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  try {
    const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((respostaDoServer) => {
        if (respostaDoServer.ok) {
          return respostaDoServer.json();
        }
        throw new Error('Falha em pegar os dados');
      })
      .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto);

    return {
      props: {
        dbExterno,
      },
    };
  } catch (err) {
    throw new Error(err);
  }
}
