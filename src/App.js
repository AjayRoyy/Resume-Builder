import appcss from "./App.module.css";
import Form from "./components/Form";
import Resume from "./components/Resume";

function App() {
  return (
    <div className={appcss.App}>
      <Form />
      <Resume />
    </div>
  );
}

export default App;
