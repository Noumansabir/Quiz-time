import React from 'react';
import {Wrapper,ButtonWrapper} from './QuestionCard.style'
import {AnswerObject} from '../App'
type props = {
    question: string;
    answers: string[];
    callback: (e:React.MouseEvent<HTMLButtonElement>)=>void;
    userAnswer: AnswerObject | undefined ;
    questionNr: number;
    totalQuestions: number;

}


const QuestionCard: React.FC<props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions,
}) => (
        <Wrapper>
            <p className="number">
                question: {questionNr}/{totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html:question}}/>
            <div>
                {answers.map(answer=>(
                    <ButtonWrapper
                     key={answer}
                     correct={userAnswer?.correctAnswer===answer}
                     userClicked={userAnswer?.answer===answer}
                     >
                        <button disabled={userAnswer? true:false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html:answer}}/>
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>);

export default QuestionCard;