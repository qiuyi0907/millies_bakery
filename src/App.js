// import CategoryDir from './components/category-directory/CategoryDir';
import Navigation from "./components/navigation/Navigation";
import Home from "./routes/home-page/Home";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react"
import LogIn from "./routes/login/LogIn";
import Register from "./routes/register/Register";
import Footer from "./components/footer/Footer";
import UserAccount from "./routes/user-account/UserAccount";
import { Menu } from "./routes/menu/Menu";
function App() {
  return (
    <Fragment>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-account" element={<UserAccount />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
