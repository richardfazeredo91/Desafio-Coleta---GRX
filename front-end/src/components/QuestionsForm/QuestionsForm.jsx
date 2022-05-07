import React, { useState } from 'react';

function QuestionsForm() {
  const [formData, setFormData] = useState({
    goodAtLogic: '',
    likeToLearn: '',
    likeToBePartOfGRX: '',
    answerJustification: '',
  });

  const handleEvents = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form action="">
      <label htmlFor="goodAtLogic">
        1 - Você se considera bom em lógica?
        <input type="button" name="goodAtLogic" onClick={handleEvents} value="Sim" />
        <input type="button" name="goodAtLogic" onClick={handleEvents} value="Não" />
      </label>

      <label htmlFor="likeToLearn">
        2 - Gosta de aprender com desafios?
        <input type="button" name="likeToLearn" onClick={handleEvents} value="Sim" />
        <input type="button" name="likeToLearn" onClick={handleEvents} value="Não" />
      </label>

      <label htmlFor="answers">
        3 - Gostaria de fazer parte da GRX?
        <select name="likeToBePartOfGRX" onChange={handleEvents} id="likeToBePartOfGRX">
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
          <option value="Não sei">Não sei</option>
          <option value="Agora">Agora</option>
        </select>
      </label>

      <label htmlFor="answerJustification">
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

      <label htmlFor="submit">
        <input type="button" id="submit" value="enviar" />
      </label>
    </form>
  );
}

export default QuestionsForm;
