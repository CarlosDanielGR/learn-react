import { Routes, Route } from "react-router-dom";
import { Docker } from "../pages";

function routes() {
  return (
    <Routes>
      <Route path="/" element={<Docker />} />
      <Route path="*" element={<>NOT FOUND</>} />
    </Routes>
  );
}
export default routes;
