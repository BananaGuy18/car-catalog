import { Routes, Route } from "react-router";  

import "./theme/theme";
import SocialButton from "./components/SocialButton";
import PageNotFound from "./pages/PageNotFound";
import CarsPage from "./pages/cars/CarsPage";

function App() {
  return (
    <>
      <SocialButton />
      <Routes>
        <Route path="*" exact={true} element={<PageNotFound />} />
        <Route path="/" element={<CarsPage />} />
      </Routes>
    </>
  );
}

export default App;
