import { Header, Sidebar } from "./layouts/index";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Sidebar />
        <div className="main__container"></div>
      </main>
    </>
  );
}

export default App;
