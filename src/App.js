import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./containers/registration";
import Calculater from "./calculatter/calculater";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/calculater" element={<Calculater />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
