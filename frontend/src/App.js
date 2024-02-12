import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";
import MainContent from "./components/mainContent/MainContent";

const getFromLocalStorage = () => {
  if(typeof window !== "undefined"){
      const value = localStorage.getItem("theme");
      return value || "light";
  }
};

function App() {

  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);

  const getData = () => {
    return fetch('http://localhost:8000/api/tasks')
        .then((res) => res.json())
        .then((d) => setData(d))
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
  },[theme]);

  const closeModal = () => {
    setModal(false);
  }

  return (
    <div data-theme={theme} className="app">
      <Navbar theme={theme} setTheme={setTheme} modal={modal} setModal={setModal} closeModal={closeModal} getData={getData} />
      <Toaster />
      <MainContent theme={theme} getData={getData} data={data} modal={modal} setModal={setModal} closeModal={closeModal} />
      <Footer />
    </div>
  );
}

export default App;
