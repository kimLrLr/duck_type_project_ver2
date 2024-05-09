import { HashRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main/Main";
import { Choice } from "./pages/choice/Choice";
import { Result } from "./pages/result/Result";
import { PageNotFound } from "./pages/PageNotFound";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const Router = () => {
  return (
    <HashRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/choice" element={<Choice />} />
          <Route path="/result" element={<Result />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </HashRouter>
  );
};

export default Router;
