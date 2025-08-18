import logo from './logo.svg';
import './App.css';

import Footer from './components/Footer';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Nav from './components/Nav';
import Btn from "./components/Btn";



function App() {
  return (
    <>
      <Nav />
      <Intro1 color = "purple"/>
      <Intro2 />
      <Intro3 />
      <Btn text = "click me"/>
      <Btn text = "no, click me!"/>
      <Footer />
      <p>hi</p>
      <p>whoa i can repeat so easily look another intro1 component. this is like using functions with html</p>
      <Intro1 color = "midnightblue"/>
    </>
  );
}

export default App;
