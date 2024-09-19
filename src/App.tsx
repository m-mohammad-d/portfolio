import Header from "./Components/Header/Header";
import MyProject from "./Components/MyProject/MyProject";
import MySkill from "./Components/MySkill/MySkill";
import "./app.css";

function App() {
  return (
    <div className="container">
      <Header />
      <MySkill />
      <MyProject />
    </div>
  );
}

export default App;
