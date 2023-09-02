import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./containers/home";
import About from "./containers/about";
import Contact from "./containers/contact";
import User from "./containers/user";

const Registration1 = lazy(() => import("./containers/registration"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Registration1 />} />
            <Route
              path="/*"
              element={<div className="text-3xl">error 404</div>}
            />
            <Route path="/home" element={<Home />}>
              {/* <Route index element={<About   />} /> */}
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="user/:id/:user" element={<User />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
