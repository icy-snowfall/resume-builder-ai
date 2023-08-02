import './App.css';
import { StateProvider } from './Context';
import Form from './formComponent/Form';
import AnnalectResume from './template/AnnalectResume';

function App() {
  return (
    <StateProvider>
    <div className="App">
      {/* <AnnalectResume /> */}
      <Form />
    </div>
    </StateProvider>
  );
}

export default App;
