import React from 'react'
import { useState } from 'react'
function TextUpdater() {
  const [text, setText] = useState("");
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <p style={{ fontSize: "18px", marginTop: "10px" }}>You typed: {text}</p>
    </div>
  )
}

export default TextUpdater