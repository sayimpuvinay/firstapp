import './App.css';
import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
  return (
    <div className="App">
      <ProfileCard title="alexa" handle="@alexa99" imgSrc={AlexaImage}/><br></br>
      <ProfileCard title="bixby" handle="@bixby99" imgSrc={CortanaImage}/><br></br>
      <ProfileCard title="siri" handle="@siri99" imgSrc={SiriImage}/><br></br>
    </div>
  );
}
export default App;