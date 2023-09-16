import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./containers/registration";
import ImageFilter from "./components/imageFilter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/imageFilter" element={<ImageFilter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
