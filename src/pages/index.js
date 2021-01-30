/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../../db.json';
import Widget from '../components/Widget';
import QuizLogo from '../components/QuizLogo';
import QuizBackground from '../components/QuizBackground';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import CustomGhibliInput from '../components/CustomGhibliInput';
import Link from '../components/Link';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground
      backgroundImage1={db.bg}
      backgroundImage2="https://cdn.vox-cdn.com/thumbor/aOGWZ8-5roYzcjZGllxOE7K8CWE=/928x1304:3696x2753/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19996673/Studio_Ghibli_Logo.jpg"
    >
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <p style={{ margin: 0 }}>{db.description}</p>
              <CustomGhibliInput placeholder="Digite seu nome... 😉" value={name} onChange={setName} />
              <Widget.Button type="submit" disabled={!name && true}>
                Jogar... 🎮
              </Widget.Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            {db.external.map((quizExterno) => {
              const [projectName, githubUser] = quizExterno.url
                .replace(/\//g, '')
                .replace('https:', '')
                .replace('.vercel.app', '')
                .split('.');
              return (
                <Widget.Topic
                  as={Link}
                  disabled={!name && true}
                  key={quizExterno.url}
                  href={name && `/quiz/${projectName}___${githubUser}?name=${name}`}
                >
                  {quizExterno.name}
                </Widget.Topic>
              );
            })}
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/YgorYamanaca" />
    </QuizBackground>
  );
}
