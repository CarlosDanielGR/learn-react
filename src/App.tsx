import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Sidebar } from "./layouts/index";
import { Container, Docker } from "./pages";
import "./App.scss";

function App() {
  const [contentData, setContentData] = useState([]);

  const handleContentData = (data: any) => {
    setContentData(data);
  };

  return (
    <>
      <Header />
      <main className="main">
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Docker />} />
            <Route path="*" element={<>NOT FOUND</>} />
          </Routes>
        </BrowserRouter>
        <div className="main__container">
          <Container contentData={contentData} />
        </div>
      </main>
    </>
  );
}

export default App;
