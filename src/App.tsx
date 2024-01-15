import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { About } from './layout/sections/about/About';
import { Awards } from './layout/sections/awards/Awards';
import { Main } from './layout/sections/main/Main';
import { Projects } from './layout/sections/projects/Projects';
import { Services } from './layout/sections/services/Services';
import { Testimonial } from './layout/sections/testimonial/Testimonial';
import { Ticker } from './layout/sections/ticker/Ticker';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Services />
      <About />
      <Ticker />
      <Projects />
      <Testimonial />
      <Awards />
      <Footer />
    </div>
  );
}

export default App;
