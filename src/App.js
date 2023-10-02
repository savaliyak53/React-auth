import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomInput from "./containers/customInput";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<CustomInput />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
