import React from "react";
import { Route, Routes } from "react-router-dom";
import CoursesPage from "../pages/courses-page/CoursesPage";
import StudentPage from "../pages/courses-page/StudentPage";
import MaterialsPage from "../pages/courses-page/MaterialsPage";
import RatingsPage from "../pages/courses-page/RatingsPage";
import AnouncementsPage from "../pages/anouncements-page/AnouncementsPage";
import NotificationsPage from "../pages/notifications-page/NotificationsPage"
import SchedulePage from "../pages/schedule-page/SchedulePage"

const AppRouters = () => {
  return (
    <Routes>
      {/* Courses */}
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/courses/student" element={<StudentPage />} />
      <Route path="/courses/materials" element={<MaterialsPage />} />
      <Route path="/courses/ratings" element={<RatingsPage />} />

      {/* Other pages */}
      <Route path='/anouncements' element={<AnouncementsPage/>}/>
      <Route path='/notifications' element={<NotificationsPage/>}/>
      <Route path='/schedule' element={<SchedulePage/>}/>
    </Routes>
  );
};

export default AppRouters;
