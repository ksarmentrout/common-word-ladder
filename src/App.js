import React, { useState } from 'react';
import './App.css'; // Import your CSS for styling
import Dropdown from './components/Dropdown';
import WordDisplay from './components/WordDisplay';
import AboutModal from './components/AboutModal';
import { adjectiveOptions } from './data/adjectives';
import { fullWordListOptions } from './data/full_word_list';
import { nounOptions } from './data/nouns';
import { verbOptions } from './data/verbs';

const App = () => {
  // About overlay
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Define your dropdown options
  const dropdownOptions = ["Full Word List", "Nouns", "Verbs", "Adjectives"];

  // Initialize state for selected options and generated words
  const [selectedOption1, setSelectedOption1] = useState(dropdownOptions[0]);
  const [selectedOption2, setSelectedOption2] = useState(dropdownOptions[0]);
  const [generatedWord1, setGeneratedWord1] = useState('');
  const [generatedWord2, setGeneratedWord2] = useState('');

  // Function to handle generating random words
  const handleGenerateClick = () => {
    // Create a mapping of dropdown options to their corresponding data arrays
    const optionToDataMap = {
      "Adjectives": adjectiveOptions,
      "Full Word List": fullWordListOptions,
      "Nouns": nounOptions,
      "Verbs": verbOptions,
    };

    // Get the selected data array based on the selected dropdown options
    const data1 = optionToDataMap[selectedOption1];
    const data2 = optionToDataMap[selectedOption2];

    // Randomly select words from the data arrays
    const randomIndex1 = Math.floor(Math.random() * data1.length);
    const randomIndex2 = Math.floor(Math.random() * data2.length);

    setGeneratedWord1(data1[randomIndex1]);
    setGeneratedWord2(data2[randomIndex2]);
  };

  return (
    <div className="App">
      <div className="header-container">
        <h1>Common Word Ladder</h1>
        <button className="about-button" onClick={openModal}>What is this?</button>
        {showModal && <AboutModal onClose={closeModal} />}
      </div>
      <div className="dropdown-container">
        <Dropdown
          order={1}
          options={dropdownOptions}
          selectedOption={selectedOption1}
          onSelectChange={(value) => setSelectedOption1(value)}
        />
        <Dropdown
          order={2}
          options={dropdownOptions}
          selectedOption={selectedOption2}
          onSelectChange={(value) => setSelectedOption2(value)}
        />
      </div>
      <div className="container">
        <button className="generate-button" onClick={handleGenerateClick}>
          Generate
        </button>
      </div>
      <div className="container">
        <WordDisplay word1={generatedWord1} word2={generatedWord2} />
      </div>
    </div>
  );
};

export default App;

