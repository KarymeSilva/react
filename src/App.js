import './App.css';
import GoogleMap from './components/GoogleMap';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <h1>Google Maps App api</h1>
      <GoogleMap />
      <Helmet>
      <script defer data-key="b0fbfacf-03cb-495c-9bef-b12f85e4ece6" src="https://widget.tochat.be/bundle.js"></script>
       </Helmet>

    </div>
  );
}

export default App;
