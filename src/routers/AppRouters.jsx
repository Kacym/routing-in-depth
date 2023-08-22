import React from "react";
import { Route, Routes } from "react-router-dom";
import CoursesPage from "../pages/courses-page/CoursesPage";
import StudentPage from "../pages/courses-page/StudentPage";
import MaterialsPage from "../pages/courses-page/MaterialsPage";
import RatingsPage from "../pages/courses-page/RatingsPage";
import AnouncementsPage from "../pages/anouncements-page/AnouncementsPage";
import NotificationsPage from "../pages/notifications-page/NotificationsPage"
import SchedulePage from "../pages/schedule-page/SchedulePage"
import StudentDetailsPage from "../pages/courses-page/student/StudentDetailsPage";
import MaterialDetailsPage from "../pages/courses-page/material/MaterialDetailsPage";
import Submitted from "../pages/courses-page/material/Submitted";
import Waiting from "../pages/courses-page/material/Waiting";
import Late from "../pages/courses-page/material/Late";

const AppRouters = () => {
  return (
    <Routes>
      {/* Courses */}
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/courses/student" element={<StudentPage />} />
      <Route path="/courses/student/:id/details" element={<StudentDetailsPage />}/>
      <Route path="/courses/materials" element={<MaterialsPage />} />
      <Route path="/courses/materials/:id/details/*" element={<MaterialDetailsPage />}>
        <Route path="submitted" element={<Submitted/>}/>
        <Route path="waiting" element={<Waiting/>}/>
        <Route path="late" element={<Late/>}/>
      </Route>
      <Route path="/courses/ratings" element={<RatingsPage />} />

      {/* Other pages */}
      <Route path='/anouncements' element={<AnouncementsPage/>}/>
      <Route path='/notifications' element={<NotificationsPage/>}/>
      <Route path='/schedule' element={<SchedulePage/>}/>

      {/* Modal link */}
      <Route path="?modal=addNewMaterial" element={<div><h1>Modal</h1></div>}/>
    </Routes>
  );
};

export default AppRouters;
