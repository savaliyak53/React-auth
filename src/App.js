import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./containers/registration";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
