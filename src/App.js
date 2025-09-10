import React, { useState } from "react";

/**
 * App component.
 *
 * @function App
 * @returns {ReactElement} The JSX element.
 */
function App() {
  const [name,setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Hello, ${Name}!');
  };

  return (
    <div>
      <h2>Basic Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>  
  );
}

export default App;