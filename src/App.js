import "./App.css";
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
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
