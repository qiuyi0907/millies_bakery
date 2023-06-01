// import CategoryDir from './components/category-directory/CategoryDir';
import Navigation from "./components/navigation/Navigation";
import Home from "./routes/home-page/Home";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react"
import LogIn from "./routes/login/LogIn";
import Register from "./routes/register/Register";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <Fragment>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
