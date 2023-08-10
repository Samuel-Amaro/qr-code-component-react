import './App.css';
import { Header } from '../Header';
import {Article } from "../Article";

function App() {
  return (
    <main className="main">
      <Header />
      <Article
        title=
        "Improve your front-end skills by building projects"
        description="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
      />
    </main>
  );
}

export default App;
