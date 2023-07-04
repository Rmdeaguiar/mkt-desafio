import { Home } from "./pages/Home";
import GlobalStyles from "./global/GlobalStyles";
import { StoresProvider } from "./stores";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
        <Home />
    </div>
  );
}

export default App;
