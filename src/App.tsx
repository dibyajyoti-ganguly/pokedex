import "./App.css";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="min-h-screen w-full relative bg-black">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000",
        }}
      />
      <LandingPage />
    </div>
  );
}

export default App;
