import AOS from "aos";
import "aos/dist/aos.css";
import Home from './components/Home/Home';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="xl:w-[1440px] md:w-[100%] mx-auto ">
      <Home/>
    </div>
  );
}

export default App;
