import React, { useState } from 'react';

function Textstate() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="flex flex-col items-center mt-5">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        className="p-2 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="mt-3 text-xl text-gray-700">You typed: {text}</p>
    </div>
  );
}

export default Textstate;