import "./App.scss";
import {
  About,
  Skills,
  Header,
  Testimonial,
  Works,
  Footer,
} from "./container/index";
import { Navbar } from "./components";

function App() {
  return (
    <main className="app">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonial />
      <Footer />
    </main>
  );
}

export default App;
