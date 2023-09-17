import { useState } from "react";
import "./DetailsButton.css"

function DetailsButton({ _className, Icon, activatedLabel, disabledLabel, activateCallback, disableCallback, activated, toggled = false }) {

  const [buttonState, setButtonState] = useState(activated ? "disabled" : "activated");
  const toggle = () => {
    if (buttonState === "activated") {
      setButtonState("disabled");
      activateCallback();
    }
    
    if (!toggled) return;
    if (buttonState === "disabled") {
      setButtonState("activated");
      disableCallback();
    }
  };

  return (
    <div className={`DetailsButton-container DetailsButton-state-${buttonState} ${_className}`} onClick={toggle}>
      <Icon className="DetailsButton-icon" />
      {buttonState === "activated" ? activatedLabel : disabledLabel}
    </div>
  );
}

export default DetailsButton;