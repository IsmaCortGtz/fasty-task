import { LS_HOMEWORK_FINISHED } from "../constatnts/localStorage"


export function isHomeworkFinished(homeworkID) {
  var finished = window.localStorage.getItem(LS_HOMEWORK_FINISHED);
  if (finished === null) return false;

  if (JSON.parse(finished).includes(homeworkID)) return true;
  return false;
}



export function setHomeworkFinished(homeworkID) {
  var current = window.localStorage.getItem(LS_HOMEWORK_FINISHED);
  if (current === null) current = []; else current = JSON.parse(current);

  if (!current.includes(homeworkID)) current.push(homeworkID);
  window.localStorage.setItem(LS_HOMEWORK_FINISHED, JSON.stringify(current));
}



export function removeHomeworkFinished(homeworkID) {
  var current = window.localStorage.getItem(LS_HOMEWORK_FINISHED);
  if (current === null) return;
  current = JSON.parse(current);

  if (current.includes(homeworkID)) current.splice(current.indexOf(homeworkID), 1) 
  window.localStorage.setItem(LS_HOMEWORK_FINISHED, JSON.stringify(current));
}



export function genHomeworkID(subject, title, openDate, deadline){
  return `${subject}_${title}_${openDate}_${deadline}`;
}