import React from "react";
import {mock} from "./_mock_data";
import image1 from "./faq.png";
import Support from "../../UI/Support";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import "./FAQ.css";

class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestion: null,
      question: null,
      response: null,
      isActive: false,
      search: "",
    };
    this.displayQuestion = this.displayQuestion.bind(this);
    this.closeQuestion = this.closeQuestion.bind(this);
    this.filterList = this.filterList.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  displayQuestion(props) {
    this.setState({
      activeQuestion: props.id,
      question: props.question,
      response: props.text,
      isActive: true,
    });
  }

  closeQuestion() {
    this.setState({
      activeQuestion: null,
      question: null,
      response: null,
      isActive: false,
    });
  }

  filterList(event) {
    this.setState({ search: event.target.value });
  }

  resetFilter() {
    this.setState({
      search: "",
    });
  }

  render() {
    let filerQuestions = mock.filter((question) => {
      return (
        question.question
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    return (
      <div className="faq">
        <Support />
        <img src={image1} alt="img" className="img-fluid w-100" />
        <h1 className="m-2 m-md-4">Frequently Asked Questions</h1>
        <form onSubmit={this.handleSubmit} className="my-2 my-md-5">
          <input
            type="text"
            placeholder="Search a Question"
            value={this.state.search}
            onChange={this.filterList}
          />
          <button type="submit">
            <AiOutlineSearch size={22} />
          </button>
        </form>
        <div className="feature d-md-flex mt-3 mt-md-5 py-2 py-md-3">
          <div className="gauche">
            <ul>
              {filerQuestions.map((ques,i) => (
                <li
                  key={i}
                  className="question"
                  onClick={() => this.displayQuestion(ques)}
                >
                  <img
                    src="question.svg"
                    alt="Question img"
                    className="ques_img"
                  />
                  <p>{ques.question}</p>
                  {/* {x.text} */}
                </li>
              ))}
            </ul>
          </div>
          <div className="text_a pb-1 pb-md-4">
            <h2>
              {this.state.activeQuestion
                ? this.state.question
                : "Select a question to see the answer"}
            </h2>

            {this.state.activeQuestion && (
              <section>
                {" "}
                <div className="answer">
                {this.state.response.map(({ heading, content }) => (
                  < >
                    <h5>{heading}</h5>
                    <p className='mb-1 mb-md-3'>{content}</p>
                  </>
                ))}
                </div>
              </section>
            )}

            {this.state.activeQuestion ? (
              <button
                className="my-1 my-md-2"
                onClick={() => this.closeQuestion()}
              >
                Close
              </button>
            ) : (
              ""
            )}
          </div>
          {/* <button className="contact_btn">contact us</button> */}
        </div>
        <Link to="/contact" className="contact_btn">
          contact us
        </Link>
        {/* <button onClick={() => this.closeQuestion()}>Reset</button>
         */}
      </div>
    );
  }
}
export default FAQ;
