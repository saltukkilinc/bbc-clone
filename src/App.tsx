import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import News from "./pages/news";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
