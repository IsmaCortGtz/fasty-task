// Libs
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Components
import BottomNavElement from "../bottom-nav-element/BottomNavElement";

// Icons
import CalendarIcon from "../../icons/CalendarIcon/CalendarIcon.jsx";
import GearIcon from "../../icons/GearIcon/GearIcon.jsx";
import ListIcon from "../../icons/ListIcon/ListIcon.jsx";

// CSS
import "./BottomNav.css"



function BottomNav() {

  const navigate = useNavigate();
  const location = useLocation();

  const button_values = ["homework", "schedule", "config"];
  const [current, setCurrent] = useState("none");


  const changeCurrent = (buttonLabel) => {
    if (current === buttonLabel) return;
    setCurrent(buttonLabel);
    navigate(`/${buttonLabel}`)
  };


  useEffect(() => {
    const locationName = location.pathname.split("/")[1];
    if (button_values.includes(locationName)) {
      setCurrent(locationName);
    }else{
      setCurrent("none");
    }
  }, [location]);



  return (
    <div className="BottomNav-container">
      <BottomNavElement 
        value="homework"
        label="Tarea"
        Icon={ListIcon}
        onClick={changeCurrent}
        selected={current === "homework"}
      />
      <BottomNavElement 
        value="schedule"
        label="Horario"
        Icon={CalendarIcon}
        onClick={changeCurrent}
        selected={current === "schedule"}
      />
      <BottomNavElement 
        value="config"
        label="Configuración"
        Icon={GearIcon}
        onClick={changeCurrent}
        selected={current === "config"}
      />
    </div>
  );
}

export default BottomNav;