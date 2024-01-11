import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { About } from './layout/sections/about/About';
import { Main } from './layout/sections/main/Main';
import { Services } from './layout/sections/services/Services';
import { Ticker } from './layout/sections/ticker/Ticker';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Services />
      <About />
      <Ticker />
      <Footer />
    </div>
  );
}

export default App;
