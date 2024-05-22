import React, { useState } from 'react';

const Item = () => {
  const [riddles, setRiddles] = useState([
      {
          id: 1,
          description: 'Маленький рост, длинный хвост, Серая шубка, острые зубки.',
          option1: 'Мышь',
          option2: 'Дрель',
          option3: 'Сапог',
          option4: 'Светлячёк',
          correct: 1
      },
      {
          id: 2,
          description: 'Чем больше у меня забирают, тем больше я становлюсь, что я?',
          'option1': "Кредит",
          'option2': "Яма",
          'option3': "Торт",
          'option4': "Дуршлак",
          'correct': 2
      },
      {
          id: 3,
          'description': "С тобой говорю, К тебе прикасаюсь, С костром я горю, И с птицей летаю...",
          'option1': "Ракета",
          'option2': "Мысль",
          'option3': "Слово",
          'option4': "Воздух",
          'correct': 4
      },
      {
          'description': "Два действия, сплетенные в одно, И, если слишком громким будет эхо, То вору, что залез через окно, От звука тотчас станет не до смеха.",
          'option1': "Шаг",
          'option2': "Стук",
          'option3': "Шум",
          'option4': "Взрыв",
          'correct': 1
      },
      {
          id: 5,
          description: 'Ни перьев нет, ни кожи, Не зверь то и не птица, И двигаться не может, Но пальцами гордится.',
          option1: 'Перчатка',
          option2: 'дерво',
          option3: 'Корни',
          option4: 'Гриб',
          correct: 1
      }
  ]);
  const [userAnswers, setUserAnswers] = useState({});
  const [newRiddleData, setNewRiddleData] = useState({
    description: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    correct: 1
  });

  const handleAnswerSelection = (riddleId, answer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [riddleId]: answer,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRiddleData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addRiddle = () => {
    const newRiddle = {
      id: riddles.length + 1,
      description: newRiddleData.description,
      option1: newRiddleData.option1,
      option2: newRiddleData.option2,
      option3: newRiddleData.option3,
      option4: newRiddleData.option4,
      correct: parseInt(newRiddleData.correct)
    };
    setRiddles((prevRiddles) => [...prevRiddles, newRiddle]);
    // Очищаем данные формы после добавления новой загадки
    setNewRiddleData({
      description: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      correct: ''
    });
  };

  return (
    <div>
      {/* Форма для ввода новой загадки */}
      <input type="text" name="description" value={newRiddleData.description} onChange={handleInputChange} placeholder="Описание загадки" />
      <input type="text" name="option1" value={newRiddleData.option1} onChange={handleInputChange} placeholder="Вариант ответа 1" />
      <input type="text" name="option2" value={newRiddleData.option2} onChange={handleInputChange} placeholder="Вариант ответа 2" />
      <input type="text" name="option3" value={newRiddleData.option3} onChange={handleInputChange} placeholder="Вариант ответа 3" />
      <input type="text" name="option4" value={newRiddleData.option4} onChange={handleInputChange} placeholder="Вариант ответа 4" />
      <input type="number" name="correct" min="1" max="4" value={newRiddleData.correct} onChange={handleInputChange} placeholder="Номер правильного ответа" />
      <button onClick={addRiddle}>Добавить новую загадку</button>

      {/* Отображение загадок */}
      {riddles.map((riddle) => {
        const userAnswer = userAnswers[riddle.id];
        const isCorrect = userAnswer === riddle.correct;
        const feedback = isCorrect ? 'Правильный ответ!' : 'Вы ответили неправильно';

        return (
          <div key={riddle.id} className="riddle-container">
            <h3 className="riddle-description">{riddle.description} </h3>
            <ol className="answer-options">
              <li>
                <button className="answer-button" onClick={() => handleAnswerSelection(riddle.id, 1)}>
                  {riddle.option1}
                </button>
              </li>
              <li>
                <button className="answer-button" onClick={() => handleAnswerSelection(riddle.id, 2)}>
                  {riddle.option2}
                </button>
              </li>
              <li>
                <button className="answer-button" onClick={() => handleAnswerSelection(riddle.id, 3)}>
                  {riddle.option3}
                </button>
              </li>
              <li>
                <button className="answer-button" onClick={() => handleAnswerSelection(riddle.id, 4)}>
                  {riddle.option4}
                </button>
              </li>
              {/* Остальные варианты ответов... */}
            </ol>
            {userAnswer && <p className="feedback">{feedback}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Item;
