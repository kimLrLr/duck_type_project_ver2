import { HashRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main/Main";
import { Choice } from "./pages/choice/Choice";
import { Result } from "./pages/result/Result";
import { PageNotFound } from "./pages/PageNotFound";
import { Footer } from "./components/Footer";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/choice" element={<Choice />} />
        <Route path="/result" element={<Result />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
