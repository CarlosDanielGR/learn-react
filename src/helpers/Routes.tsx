import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Docker } from "../pages";

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Docker />} />
        <Route path="*" element={<>NOT FOUND</>} />
      </Routes>
    </BrowserRouter>
  );
}
export default routes;
