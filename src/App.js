import './App.css';
import Myself from './components/Myself';
import Experience from './components/Experience';
import Educator from './components/Educator';
import Skill from './components/Skill';
import Hobbies from './components/Hobbies';

function App() {
  return (
    <div className="Bio">
      <Myself />
      <hr />
      <Experience />
      <hr />
      <Educator />
      <hr />
      <Skill />
      <hr />
      <Hobbies />
      <hr />
    </div>
  );
}

export default App;
