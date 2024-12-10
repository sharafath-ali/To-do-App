import { BrowserRouter, Routes, Route } from "react-router-dom";
import History from './pages/History';
import Task from './pages/Task';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Task />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
