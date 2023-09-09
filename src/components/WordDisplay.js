import React from 'react';

const WordDisplay = ({ word1, word2 }) => {
  return (
    <div className="word-display">
      <div className="word">{word1}</div>
      <div className="spacer"></div>
      <div className="word">{word2}</div>
    </div>
  );
};

export default WordDisplay;

