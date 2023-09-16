import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./containers/registration";
import MessageBox from "./messageBox/messageBox";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/messagebox" element={<MessageBox />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
