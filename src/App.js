import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./containers/registration";
import Accordion from "./component/accordion";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/accordion" element={<Accordion />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
