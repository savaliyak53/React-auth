import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./containers/registration";
import Animatedpage from "./animatedPage/animatedpage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/animatedpage" element={<Animatedpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
