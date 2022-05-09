import React, { useState } from 'react';
import './style.css';

function QuestionsForm() {
  const [formData, setFormData] = useState({
    goodAtLogic: '',
    likeToLearn: '',
    likeToBePartOfGRX: '',
    answerJustification: '',
  });

  const [buttonClass, setButtonClass] = useState({
    goodAtLogic: {
      yes: 'deactive-button',
      no: 'deactive-button',
    },
    likeToLearn: {
      yes: 'deactive-button',
      no: 'deactive-button',
    },
  });

  const {
    goodAtLogic, likeToLearn,
  } = buttonClass;

  const setButtonColor = (name) => {
    if (formData[name] === 'Sim') {
      setButtonClass(
        { ...buttonClass, [name]: { yes: 'active-button', no: 'deactive-button' } },
      );
    } else {
      setButtonClass(
        { ...buttonClass, [name]: { no: 'active-button', yes: 'deactive-button' } },
      );
    }
  };

  const handleEvents = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
    setButtonColor(name);
  };

  return (
    <form action="" className="collect-form">
      <label htmlFor="goodAtLogic" className="question-one">
        1 - Você se considera bom em lógica?
        <div>
          <input type="button" className={goodAtLogic.yes} name="goodAtLogic" onClick={handleEvents} value="Sim" />
          <input type="button" className={goodAtLogic.no} name="goodAtLogic" onClick={handleEvents} value="Não" />
        </div>
      </label>

      <label htmlFor="likeToLearn" className="question-two">
        2 - Gosta de aprender com desafios?
        <div>
          <input type="button" className={likeToLearn.yes} name="likeToLearn" onClick={handleEvents} value="Sim" />
          <input type="button" className={likeToLearn.no} name="likeToLearn" onClick={handleEvents} value="Não" />
        </div>
      </label>

      <label htmlFor="answers" className="question-three">
        3 - Gostaria de fazer parte da GRX?
        <select name="likeToBePartOfGRX" onChange={handleEvents} id="likeToBePartOfGRX">
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
          <option value="Não sei">Não sei</option>
          <option value="Agora">Agora</option>
        </select>
      </label>

      <label htmlFor="answerJustification" className="question-four">
        4 - Por favor, justifique a resposta anterior
        <textarea
          name="answerJustification"
          id="answerJustification"
          onChange={handleEvents}
          cols="30"
          rows="10"
          minLength={15}
          maxLength={200}
        />
      </label>

      <label htmlFor="submit" className="submit-label">
        <input type="button" id="submit" value="Enviar" className="submit" />
      </label>
    </form>
  );
}

export default QuestionsForm;
