/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { useRouter } from 'next/router';
import Widget from '../../Widget';
import QuizLogo from '../../QuizLogo';
import QuizBackground from '../../QuizBackground';
import QuizContainer from '../../QuizContainer';
import TotoroIcon from '../../../customIcon/totoro';
import QuizResponse from '../../QuizResponse';
import BackgroundSong from '../../../assets/BackgroundMusic.mp3';

function LoadingWidget({ externalData = false }) {
  return (
    <Widget>
      <Widget.Header>
        Loading ...
      </Widget.Header>
      <Widget.Content>
        <Widget.Animationcontainer externalData={externalData}>
          <div className="spinner1" />
          {!externalData && <img src="https://media0.giphy.com/media/KEVODnr6kaJws/200w.webp?cid=ecf05e47gjidevcl98ilgg5cmlm1u9qj6qvsrdlngu9x1k34&rid=200w.webp" alt="gif" />}
        </Widget.Animationcontainer>
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
  externalData = false,
}) {
  const [selectedQ, setSelected] = React.useState();
  const [isSubmited, setSubmited] = React.useState(false);
  const isCorrect = selectedQ === question.answer;
  const router = useRouter();
  const { name } = router.query;
  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <form
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            setSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setSubmited(false);
              setSelected(undefined);
            }, 1 * 3000);
          }}
        >
          {question.alternatives.map((alternative, index) => {
            const alternativeId = `alternative__${index}`;
            return (
              <Widget.Topic
                key={alternativeId}
                onClick={() => !isSubmited && setSelected(index + 1)}
                selected={selectedQ === index + 1}
                isSelected={isSubmited}
              >
                {!externalData && selectedQ === index + 1 && TotoroIcon()}
                {alternative}
              </Widget.Topic>
            );
          })}
          <Widget.Button type="submit" disabled={!selectedQ && true}>
            Confirmar
          </Widget.Button>
        </form>

        {isSubmited && (
          <QuizResponse isRight={isCorrect} nameOfUser={name} answer={question.answer} />
        )}
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

// eslint-disable-next-line max-len
export default function QuizTeamplate({ questions, bg, externalData = false }) {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [results, setResults] = React.useState([]);
  const totalQuestions = questions.length;
  const questionIndex = currentQuestion;
  const question = questions[questionIndex];
  const router = useRouter();
  const { name } = router.query;
  const songPlayer = React.useRef();

  React.useEffect(() => {
    if (songPlayer.current) songPlayer.current.volume = 0.45;
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 3000);
  }, []);

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
      if (externalData) {
        setTimeout(() => {
          router.push('/');
        }, 5 * 1000);
      }
    }
  }

  return (
    <QuizBackground
      backgroundImage1={bg}
      backgroundImage2={!externalData && 'https://cdn.vox-cdn.com/thumbor/aOGWZ8-5roYzcjZGllxOE7K8CWE=/928x1304:3696x2753/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19996673/Studio_Ghibli_Logo.jpg'}
    >
      <QuizContainer>
        <QuizLogo externalData={externalData} />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
            externalData={externalData}
          />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget externalData={externalData} />}
        {screenState === screenStates.RESULT && (
          <Widget>
            <Widget.Header>
              {`${name}, você acertou ${results.filter((x) => x).length} ${results.filter((x) => x).length > 1 ? 'questões' : 'questão'} de ${totalQuestions}.`}
            </Widget.Header>
            <Widget.Content>
              <ul className="resultList">
                {results.map((result, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li className={`result_${result}`} key={`result__${index}`}>
                    #
                    {index + 1}
                    {' '}
                    Resultado:
                    {result === true
                      ? ' Acertou'
                      : ' Errou'}
                  </li>
                ))}
              </ul>
              {!externalData && (
              <>
                <img
                  style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                    marginBottom: '15px',
                  }}
                  src={results.filter((x) => x).length >= (totalQuestions / 2)
                    ? 'https://media.giphy.com/media/WtO0orBf8SpxGycTWc/giphy.gif'
                    : 'https://media.giphy.com/media/ChX3hzy5CkXsI/giphy.gif'}
                  alt="totoro"
                />
                {results.filter((x) => x).length >= (totalQuestions / 2)
                  ? 'Parabéns, você conhece bem o estúdio Ghibli 🥺'
                  : 'Você precisa assistir mais filmes do estúdio Ghibli 😥'}
              </>
              )}
              <div>
                {externalData ? '(Você vai voltar para a tela inicial)' : '(Pause a música para voltar a tela principal)'}
              </div>
            </Widget.Content>
          </Widget>
        )}
      </QuizContainer>
      {!externalData
        && (
        <div className="songPlayerId">
          <audio className="BackgroundMusic" placeholder="ouça" name="Coloque uma música para relaxar" ref={songPlayer} src={BackgroundSong} controls controlsList="nodownload" autoPlay type="audio/mpeg" onPause={() => router.push('/')} />
        </div>
        )}
    </QuizBackground>
  );
}
