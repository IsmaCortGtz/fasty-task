import { useEffect, useState } from "react";

import HomeworkCard from "../homework-card/HomeworkCard";
import NothingHere from "../nothing-here/NothingHere";

import "./HomeworkPage.css";



function HomeworkPage({ homeworkList }) {

  return (
    <div className="HomeworkPage-container page-container">
      <h2 className="HomeworkPage-title" >Tarea {`(${homeworkList.length})`}</h2>
      <div className="HomeworkPage-cards-container" >
        { 
        homeworkList.length == 0 ? <NothingHere /> :
        homeworkList.map((homework, index) => {
          
          return (
            <HomeworkCard 
              index={index}
              key={`${homework.subject}_${homework.title}_${homework.deadlineDate}_${index}`}
              subject={homework.subject}
              title={homework.title}
              deadline={homework.deadlineDate}
              openDate={homework.openDate}
           />);
        })}
      </div>
    </div>
  );
}

export default HomeworkPage;