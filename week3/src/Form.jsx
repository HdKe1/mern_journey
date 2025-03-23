import React, { useState } from 'react';

function Form() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted text:", text);
  };

  return (
    <div className="flex flex-col items-center mt-5">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          
          onChange={handleChange}
          placeholder="Type something..."
          className="p-2 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      
    </div>
  );
}

export default Form;
