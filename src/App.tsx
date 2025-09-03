import "./App.css";
import LandingPage from "./components/LandingPage";
import Dex from "./components/Dex";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full relative bg-black">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
          }}
        />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dex" element={<Dex />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
