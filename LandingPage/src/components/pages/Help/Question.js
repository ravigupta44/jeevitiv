
import React, { useState } from "react";
import './Questions.css';

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";


const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4 className="help-heading">
          <img src="question.svg" alt="Question img" className="help_ques" />
          {title}
        </h4>
        <button className="help_btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p className="ques-info">{info}</p>}
    </article>
  );
}


export default Question;

