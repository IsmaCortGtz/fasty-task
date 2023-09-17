import { useState } from "react";
import "./ConfigTextInput.css";

function ConfigTextInput({ label, placeholder, callback }) {

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="ConfigTextInput-list-container">
      <label className="ConfigTextInput-text-label">{ label }</label>
      <input onChange={(e) => setInputValue(e.target.value)} placeholder={placeholder} className="ConfigTextInput-input-text" type="text" />
      <button onClick={() => callback(inputValue)} className="ConfigTextInput-button">Actualizar</button>
    </div>
  );
}

export default ConfigTextInput;