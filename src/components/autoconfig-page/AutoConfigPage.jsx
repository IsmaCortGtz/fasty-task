import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { setHomeworkApi } from "../../libs/api/api-url";
import GearIcon from "../../icons/GearIcon/GearIcon";

import "./AutoConfigPage.css"



function AutoConfigPage({ homeworkCallback }) {
  
  const navigate = useNavigate();
  const { homeworkURI, scheduleURI } = useParams();

  useEffect(() => {

    if (homeworkURI.length > 1){
      setHomeworkApi(decodeURIComponent(homeworkURI));
      homeworkCallback();
      toast.success("API de Tareas configurado");
    }

    if (scheduleURI.length > 1){
      //toast.success("API de Horario configurado");
    }

    navigate("/homework");

  }, []);
  
  return (
    <div className="NotFoundPage-container page-container">

      <GearIcon className="NotFoundPage-icon AutoConfigPage-icon" />
      <h2 className="NotFoundPage-title" >Configurando...</h2>
      <p className="NotFoundPage-message" >{ homeworkURI.length !== 1 ? "Tareas" : ""}</p>
      <p className="NotFoundPage-message" >{ scheduleURI.length !== 1 ? "Horario" : ""}</p>

    </div>
  );
}

export default AutoConfigPage;