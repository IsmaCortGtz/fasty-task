import toast from "react-hot-toast";
import { setHomeworkApi } from "../../libs/api/api-url";

import NothingHere from "../nothing-here/NothingHere";
import ConfigTextInput from "../config-text-input/ConfigTextInput.jsx";
import "./ConfigPage.css";


function ConfigPage({ homeworkCallback, scheduleCallback }) {

  const updateHomeworkAPI = (value) => {
    if (value === "") {toast.error("Tienes que poner un URL valido"); return;}
    setHomeworkApi(value);
    homeworkCallback();
    toast.success("API de tareas cambiada");
  };

  return (
    
    <div className="ConfigPage-container page-container">
      <h2 className="ConfigPage-title" >Configuración</h2>
      <h3 className="ConfigPage-subtitle">Ajustar API</h3>

      <ConfigTextInput callback={updateHomeworkAPI} label="URL de API para Tareas" placeholder="https://ejemplo.com/tarea" />
      {/* <ConfigTextInput label="URL de API para Horario" placeholder="https://ejemplo.com/horario" /> */}

    </div>
  );
}

export default ConfigPage;