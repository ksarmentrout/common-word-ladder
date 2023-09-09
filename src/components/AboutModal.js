// AboutModal.js

import React from 'react';

const AboutModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>About</h2>
        <p>
          This is a creative writing tool based on Jeff Tweedy's "Word Ladder" exercise 
          from his book <a href='https://wilcostore.com/products/jeff-tweedy-how-to-write-one-song-book'>How to Write One Song</a>. 
          The word ladder is meant to connect words that aren't typically seen or used together 
          in order to spark inspiration for lyrics or other writing. 
        </p>
        <p>
          Elsewhere in the book, he advocates for using simple language. This tool 
          combines those ideas into a word pair generator that draws from the most common 
          words in English.
        </p>
        <p>
          Select the sources you'd like to pull from for each of the two words using the dropdowns 
          and then hit "Generate" to produce a new unique pair. Hopefully these pairings can serve 
          as the basis of some new songs! 
        </p>
        <p>
          The common words were sourced from the lists <a href='https://wikilangs.wordpress.com/2013/08/24/top-2000-common-words-in-english/'>here</a>. 
          "Ladder" icon is by Lars Meiertoberens from <a href="https://thenounproject.com/browse/icons/term/ladder/" title="Ladder Icons">The Noun Project</a> (CC BY 3.0)
        </p>
      </div>
    </div>
  );
};

export default AboutModal;

