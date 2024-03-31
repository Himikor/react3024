import React, { useState } from 'react';

const Item = () => {
    const [answers, setAnswers] = useState([]);

    const content = [
        {
            'id': 1,
            'description': "Чем больше у меня забирают, тем больше я становлюсь, что я?",
			'option1': "Кредит",
			'option2': "Яма",
			'option3': "Торт",
			'option4': "Дуршлак",
			'correct': "2"
        },
        {
            'id': 2,
            'description': "Кто открыл 4 спутника Юпитера?",
			'option1': "Сократ",
			'option2': "Птолемей",
			'option3': "Галилей",
			'option4': "Платон",
			'correct': "3"
        },
        {
            'id': 3,
            'description': "Какая самая большая пустыня в мире?",
			'option1': "Антарктическая пустыня",
			'option2': "Сахара",
			'option3': "Австралийская пустыня",
			'option4': "Сирийская пустыня",
			'correct': '1'
        }
    ];

    const handleAnswer = (questionId, selectedOption) => {
        const correctAnswer = content.find(item => item.id === questionId).correct;
        const isCorrect = selectedOption === correctAnswer;
        setAnswers([...answers, { questionId, isCorrect }]);
    };

    return (
        <div>
            {content.map((question) => (
                <div key={question.id}>
                    <h1>Вопрос №{question.id}</h1>
                    <p>{question.description}</p>
                    <button onClick={() => handleAnswer(question.id, '1')}>{question.option1}</button>
                    <button onClick={() => handleAnswer(question.id, '2')}>{question.option2}</button>
                    <button onClick={() => handleAnswer(question.id, '3')}>{question.option3}</button>
                    <button onClick={() => handleAnswer(question.id, '4')}>{question.option4}</button>
                </div>
            ))}
            <div>
                {answers.map((answer, index) => (
                    <p key={index}>{`Вопрос ${answer.questionId}: ${answer.isCorrect ? 'Правильно' : 'Неправильно'}`}</p>
                ))}
            </div>
        </div>
    );
};

export default Item;