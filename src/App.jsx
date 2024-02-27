import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Importiere deine Komponenten
import Impressum from "./components/Impressum";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Impressum" element={<Impressum />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
