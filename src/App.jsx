// import './index.css'
import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>

      <footer> Footer </footer>
    </>
  );
}

export default App;
