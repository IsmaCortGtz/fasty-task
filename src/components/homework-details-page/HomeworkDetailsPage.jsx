import { useNavigate, useParams } from "react-router-dom";

import NothingHere from "../nothing-here/NothingHere";
import BackIcon from "../../icons/BackIcon/BackIcon.jsx";
import ClockIcon from "../../icons/ClockIcon/ClockIcon.jsx";
import CalendarIcon from "../../icons/CalendarIcon/CalendarIcon.jsx";
import SubjectIcon from "../../icons/SubjectIcon/SubjectIcon.jsx";
import { ret12Hours, formatDate } from "../../libs/date/time.js";
import DetailsButton from "../details-buttons/DetailsButton";

import { genHomeworkID, setHomeworkFinished, removeHomeworkFinished, isHomeworkFinished } from "../../libs/api/homework";

import "./HomeworkDetailsPage.css"


function HomeworkDetailsPage({ homeworkList = [] }) {

  const { homeworkID } = useParams();
  const navigate = useNavigate();
  const homeworkIndex = parseInt(homeworkID);
  const currentHomework = homeworkList[homeworkIndex] || {};
  const goBack = () => navigate("/homework");


  const myDeadline = new Date(currentHomework.deadlineDate);
  const deadlineStr = formatDate(myDeadline);
  const deadlineTime = ret12Hours(myDeadline.getHours(), myDeadline.getMinutes());

  const myOpenDate = new Date(currentHomework.openDate);
  const openDateStr = formatDate(myOpenDate);
  const openDateTime = ret12Hours(myOpenDate.getHours(), myOpenDate.getMinutes());
  const homeworkLocalStorageID = genHomeworkID(currentHomework.subject, currentHomework.title, currentHomework.openDate, currentHomework.deadlineDate)

  return(
    <div className="HomeworkDetailsPage-container page-container">
      { isNaN(homeworkIndex) || homeworkIndex >= homeworkList.length || homeworkIndex < 0 ? <NothingHere /> : (<>

        <header className="HomeworkDetailsPage-header-container">
          <BackIcon onClick={goBack} className="HomeworkDetailsPage-back" />
          <h2 className="HomeworkDetailsPage-title" >Tarea</h2>
        </header>

        <div className="HomeworkDetailsPage-homework-subject">{ currentHomework.subject }</div>
        <div className="HomeworkDetailsPage-homework-title">{ currentHomework.title }</div>
        <div className="HomeworkDetailsPage-homework-deadline-container">
          <span className="HomeworkDetailsPage-homework-section-title">Fecha de asignación</span>
          <div className="HomeworkDetailsPage-homework-dates-rows">
            <CalendarIcon className="HomeworkCard-icon" />
            { openDateStr }
          </div>
          <div className="HomeworkDetailsPage-homework-dates-rows">
            <ClockIcon className="HomeworkCard-icon" />
            { openDateTime }
          </div>
        </div>
        <div className="HomeworkDetailsPage-homework-deadline-container">
          <span className="HomeworkDetailsPage-homework-section-title">Fecha de entrega</span>
          <div className="HomeworkDetailsPage-homework-dates-rows">
            <CalendarIcon className="HomeworkCard-icon" />
            { deadlineStr }
          </div>
          <div className="HomeworkDetailsPage-homework-dates-rows">
            <ClockIcon className="HomeworkCard-icon" />
            { deadlineTime }
          </div>
        </div>
        <div className="HomeworkDetailsPage-homework-desc-container">
          <span className="HomeworkDetailsPage-homework-section-title">Descripción</span>
          { currentHomework.description }
        </div>

        <DetailsButton 
          _className="HomeworkDetailsPage-finished"
          activated={isHomeworkFinished(homeworkLocalStorageID)}
          Icon={SubjectIcon}
          activatedLabel="Marcar como completada"
          disabledLabel="Desmarcar como completada"
          activateCallback={() => setHomeworkFinished(homeworkLocalStorageID)} 
          disableCallback={() => removeHomeworkFinished(homeworkLocalStorageID)} 
          toggled
        />
      
      </>)}
    </div>
  );
}

export default HomeworkDetailsPage;