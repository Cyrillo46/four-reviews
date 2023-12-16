import "./App.css";
import { useState } from "react";
import people from "./data";
// import { SiSecurityscorecard } from "react-icons/si";
//npm install react-icons --save
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteRight,
} from "react-icons/fa";

function App() {
  const [index, setIndex] = useState(0);
  const { name, job, text, image } = people[index];

  const leftClick = () => {
    if (index === 0) {
      setIndex(4);
    }
    setIndex((prevState) => prevState - 1);
    console.log(index);
  };

  const rightClick = () => {
    if (index === 3) {
      setIndex(-1);
    }
    setIndex((prevState) => prevState + 1);
    console.log(index);
  };

  const randomClick = () => {
    let randomPerson = Math.floor(Math.random() * people.length);
    if (randomPerson === index) {
      randomPerson = index + 1;
    }
    setIndex(randomPerson);
  };

  return (
    <>
      {/* <SiSecurityscorecard className="card" /> */}
      <main>
        <article className="review">
          <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h1 className="author">{name}</h1>
          <h3 className="job">{job}</h3>
          <p className="info">{text}</p>
          <div className="btn-container">
            <button onClick={() => leftClick()} className="prev-btn">
              <FaChevronCircleLeft />
            </button>
            <button onClick={() => rightClick()} className="next-btn">
              <FaChevronCircleRight />
            </button>
          </div>
          <button onClick={() => randomClick()} className="btn hipster-btn">
            Random Person
          </button>
        </article>
      </main>
    </>
  );
}

export default App;
