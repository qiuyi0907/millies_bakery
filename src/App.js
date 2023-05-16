// import CategoryDir from './components/category-directory/CategoryDir';
import Navigation from "./components/navigation/Navigation";
import Home from "./routes/home-page/Home";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react"
function App() {
  return (
    <Fragment>
      <Navigation />
      <Routes>
        {/* <Route path="/" index element={<Navigation />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default App;
