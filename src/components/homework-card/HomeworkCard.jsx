import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import ClockIcon from "../../icons/ClockIcon/ClockIcon.jsx";
import CalendarIcon from "../../icons/CalendarIcon/CalendarIcon.jsx";
import SubjectIcon from "../../icons/SubjectIcon/SubjectIcon.jsx";
import { ret12Hours, formatDate } from "../../libs/date/time.js";
import { genHomeworkID, isHomeworkFinished } from "../../libs/api/homework.js";

import "./HomeworkCard.css";



function HomeworkCard({ subject, title, deadline, openDate, index }) {

  const [extraClass, setExtraClass] = useState("");

  const navigate = useNavigate();
  const goDetails = () => navigate(`/homework/${index}`);

  const myDate = new Date(deadline);
  const deadlineDate = formatDate(myDate);
  const deadlineTime = ret12Hours(myDate.getHours(), myDate.getMinutes());


  useEffect(() => {
    const homeworkID = genHomeworkID(subject, title, openDate, deadline);
    if (isHomeworkFinished(homeworkID)) { setExtraClass("finished"); return; }
    if (myDate.getTime() < Date.now()) setExtraClass("passed");
  }, [])


  return (
    <div onClick={goDetails} className={`HomeworkCard-container ${extraClass}`}>
      <p className="HomeworkCard-subject">{subject}</p>
      <p className="HomeworkCard-title"> 
        <SubjectIcon className="HomeworkCard-icon" />
        {title}
      </p>
      <p className="HomeworkCard-deadline">
        <CalendarIcon className="HomeworkCard-icon" />
        {deadlineDate}
      </p>
      <p className="HomeworkCard-timeline">
        <ClockIcon className="HomeworkCard-icon" />
        {deadlineTime}
      </p>
    </div>
  );
}

export default HomeworkCard;