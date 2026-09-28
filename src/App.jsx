import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./features/home/HomePage";
import CatalogPage from "./features/courses/CatalogPage";
import CoursePage from "./features/courses/CoursePage";
import LessonPage from "./features/courses/LessonPage";
import QuizPage from "./features/courses/QuizPage";
import ResultsPage from "./features/courses/ResultsPage";
import DashboardPage from "./features/dashboard/DashboardPage";
import OpportunitiesPage from "./features/opportunities/OpportunitiesPage";
import ProfilePage from "./features/profile/ProfilePage";
import AuthPage from "./features/auth/AuthPage";
import NotFoundPage from "./components/NotFoundPage";

export default function App(){
  return <Routes>
    <Route element={<Layout/>}>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/catalog" element={<CatalogPage/>}/>
      <Route path="/course/:id" element={<CoursePage/>}/>
      <Route path="/course/:id/lesson/:lessonId" element={<LessonPage/>}/>
      <Route path="/course/:id/quiz/:quizId" element={<QuizPage/>}/>
      <Route path="/course/:id/results" element={<ResultsPage/>}/>
      <Route path="/dashboard" element={<DashboardPage/>}/>
      <Route path="/scholarships" element={<OpportunitiesPage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
    </Route>
    <Route path="/login" element={<AuthPage mode="login"/>}/>
    <Route path="/register" element={<AuthPage mode="register"/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
  </Routes>
}