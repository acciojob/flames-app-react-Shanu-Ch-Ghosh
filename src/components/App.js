import React, { useState } from 'react';

const relationshipMap = {
  0: "Siblings",
  1: "Friends",
  2: "Love",
  3: "Affection",
  4: "Marriage",
  5: "Enemy"
};

const App = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const calculateRelationship = () => {
    if (!name1.trim() || !name2.trim()) {
      setResult("Please Enter valid input");
      return;
    }

    const filteredName1 = removeCommonLetters(name1, name2);
    const filteredName2 = removeCommonLetters(name2, name1);

    const totalLength = filteredName1.length + filteredName2.length;
    const relationshipIndex = totalLength % 6;

    setResult(relationshipMap[relationshipIndex]);
  };

  const removeCommonLetters = (str1, str2) => {
    let str1Arr = str1.split('');
    let str2Arr = str2.split('');

    str1Arr.forEach((char) => {
      const index = str2Arr.indexOf(char);
      if (index > -1) {
        str2Arr.splice(index, 1);
        str1Arr.splice(str1Arr.indexOf(char), 1);
      }
    });

    return str1Arr.join('');
  };

  const handleClear = () => {
    setName1('');
    setName2('');
    setResult('');
  };

  return (
    <div>
      <h1>FLAMES Game</h1>
      <input
        name="name1"
        data-testid="input1"
        type="text"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        placeholder="Enter first name"
      />
      <input
        name="name2"
        data-testid="input2"
        type="text"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        placeholder="Enter second name"
      />
      <button
        data-testid="calculate_relationship"
        onClick={calculateRelationship}
      >
        Calculate Relationship
      </button>
      <button
        data-testid="clear"
        onClick={handleClear}
      >
        Clear
      </button>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
};

export default App;



