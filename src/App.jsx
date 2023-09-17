import { Routes, Route, HashRouter, BrowserRouter, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

import BottomNav from "./components/bottom-nav/BottomNav.jsx";
import HomeworkPage from "./components/homework-page/HomeworkPage.jsx";
import ConfigPage from "./components/config-page/ConfigPage.jsx";
import NotFoundPage from "./components/notfound-page/NotFoundPage.jsx";
import HomeworkDetailsPage from "./components/homework-details-page/HomeworkDetailsPage.jsx";
import AutoConfigPage from "./components/autoconfig-page/AutoConfigPage.jsx";

import { cachedFetch } from "./libs/api/cached";
import { getHomeworkApi } from "./libs/api/api-url";
import { LS_HOMEWORK_DATA } from "./libs/constatnts/localStorage";


function App() {

  const [homeworkList, setHomeworkList] = useState([]);

  const loadHomeworkData = () => {
    const homeworkApiUrl = getHomeworkApi();
    if (homeworkApiUrl === null) return;

    cachedFetch(homeworkApiUrl, LS_HOMEWORK_DATA, [])
      .then((json) => setHomeworkList(json))
      .catch((err) => {
        console.error(err);
        toast.error("Error obteniendo tareas");
      });
  };

  useEffect(loadHomeworkData, []);

  return (
    <>
      <BrowserRouter basename="/fasty-task/">
        <Toaster />
        <Routes>

          <Route path="/" element={<Navigate to={"/homework"} />} />
          <Route path="/homework"  element={<HomeworkPage homeworkList={homeworkList} />} />
          <Route path="/homework/:homeworkID"  element={<HomeworkDetailsPage homeworkList={homeworkList} />} />
          <Route path="/config" element={<ConfigPage homeworkCallback={loadHomeworkData} />} />
          <Route path="/config/:homeworkURI/:scheduleURI" element={<AutoConfigPage homeworkCallback={loadHomeworkData} />} />

          <Route path="*" element={<NotFoundPage />} />

        </Routes>
        <BottomNav />
      </BrowserRouter>
    </>
  );
}

export default App;