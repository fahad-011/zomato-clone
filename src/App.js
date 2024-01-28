import GetTheApp from "./components/Home/GetTheApp";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/get-the-app" element={<GetTheApp />} />
      <Route path="/investor-relations" element={<GetTheApp />} />
      <Route path="/add-restaurant" element={<GetTheApp />} />
      <Route path="/login" element={<GetTheApp />} />
      <Route path="/signup" element={<GetTheApp />} />
    </Routes>
  );
}

export default App;
