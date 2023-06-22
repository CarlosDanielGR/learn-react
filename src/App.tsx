import { useState } from "react";
import { Header, Sidebar } from "./layouts/index";
import { Container } from "./pages";
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
        <div className="main__container">
          <Container contentData={contentData} />
        </div>
      </main>
    </>
  );
}

export default App;
