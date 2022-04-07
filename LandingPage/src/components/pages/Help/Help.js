import React, { useState } from "react";
import data from "./data";
import Form from "./Form";
import SingleQuestion from "./Question";
import { AiOutlineSearch } from "react-icons/ai";
import image1 from "./help.png";
import Support from "../../UI/Support";
import './Help.css';


function Help() {
  

  const [questions, setQuestions] = useState(data);
  const [inputValue, setInputValue] = useState("");

  const filterQuestions = questions.filter((question) => {
    return (
      question.title
        .toLowerCase()
        .indexOf(inputValue.toLowerCase()) !== -1
    );
  })

  const handleSubmit = (e)=> {
    e.preventDefault();
  }

  const filterList = (event)=> {
    setInputValue(event.target.value.toLowerCase());
  }


  return (
    <div className="help">
      <Support />
      <div>
        <img
          src={image1}
          alt="Help_img"
          className="help_img img-fluid"
        />
      </div>
      <h2 className="help_title my-3">How can we help you?</h2>
      
      <form onSubmit={handleSubmit} className="search-form my-2 my-md-3">
              <input 
                className = 'search-input'
                type="text"
                placeholder="Search a Question"
                value={inputValue}
                onChange={filterList}
              />
              <button type="submit" className="search-button">
                <AiOutlineSearch size={22} />
              </button>
      </form>

      <div className="help-questions mt-0 mt-md-5">

        
       <div className="w-100 help_container d-flex flex-row flex-wrap">
          
              {filterQuestions.map((question) => {
                return (
                  <section className="info" key={question.id}>
                    <SingleQuestion  {...question} />
                  </section>
              );
            })}

      </div>
    </div>
      
      <Form />
    </div>
  );
}

export default Help;
