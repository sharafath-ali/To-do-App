import { BrowserRouter, Routes, Route } from "react-router-dom";
import History from './History';
import Task from './Task';

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
