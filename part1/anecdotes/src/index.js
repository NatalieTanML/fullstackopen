import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const MostVotes = ({ points }) => {
  // if all anecdotes has 0 votes
  if (points.every((i) => i === 0)) {
    return <div>No anecdotes voted</div>;
  } else {
    const mostVotesValue = Math.max(...points);
    const mostVotesIndex = points.indexOf(mostVotesValue);

    return (
      <div>
        {anecdotes[mostVotesIndex]} <br />
        has {mostVotesValue} votes <br />
      </div>
    );
  }
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const handleNextClick = () => setSelected(Math.floor(Math.random() * 6));

  const handleVoteClick = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]} <br />
      has {points[selected]} votes <br />
      <Button onClick={handleVoteClick} text="vote" />
      <Button onClick={handleNextClick} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <MostVotes points={points} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
