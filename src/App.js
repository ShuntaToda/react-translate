import { Header } from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Translate } from './components/Translate';
import { History } from './components/History';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Translate></Translate>
      <History></History>
    </div>
  );
}

export default App;
