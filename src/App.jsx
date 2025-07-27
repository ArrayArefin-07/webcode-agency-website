// import './index.css'
import { Outlet } from "react-router";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <nav> Navbar </nav>
      <main className="min-h-screen">
        <Outlet />
      </main>

      <footer> Footer </footer>
    </>
  );
}

export default App;
