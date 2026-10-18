import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CobesExperiencePage } from './pages/CobesExperiencePage';
import { LearningObjectiveDetailPage, LearningObjectivesPage } from './pages/LearningObjectivesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about-cobes" element={<Navigate to="/#about-cobes" replace />} />
        <Route path="/learning-experience" element={<Navigate to="/learning-objectives#learning-experience" replace />} />
        <Route path="/learning-objectives" element={<LearningObjectivesPage />} />
        <Route path="/learning-objectives/:objectiveId" element={<LearningObjectiveDetailPage />} />
        <Route path="*" element={<CobesExperiencePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
