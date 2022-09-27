import './App.css';
import { QrCode } from './components/QRCode';
import { Title } from './components/Title';
import { Description } from './components/Description';

function App() {
  return (
    <main className="main">
      <QrCode />
      <Title content="Improve your front-end skills by building projects" />
      <Description content="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"/>
    </main>
  );
}

export default App;
