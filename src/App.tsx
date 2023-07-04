import { useState } from "react";
// import { useSelector, Provider } from "react-redux";
import { Header, Sidebar } from "./layouts/index";
import Routes from "./helpers/Routes";
// import store, { IAppStore } from "./redux/store";
import "./App.scss";

function App() {
  const [contentData, setContentData] = useState([]);

  // const getLinkActive = useSelector((store: IAppStore) => store.linkActive);

  const handleContentData = (data: any) => {
    setContentData(data);
  };

  return (
    <>
      <Header />
      <main className="main">
        <Sidebar />
        <div className="main__container">
          <Routes />
        </div>
      </main>
    </>
  );
}

export default App;
