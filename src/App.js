import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Slider from "./components/slider";
import Body from "./components/body";
import Footer from "./components/footer";

function App() {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <Body></Body>
            <Footer></Footer>
        </div>
    );
}

export default App;
