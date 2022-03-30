import HomeHeader from '../components/home/homeheader';
import HomeFooter from '../components/home/homefooter';
import Home from './home';
import Blog from './blog';
import Demo from './demo';
import About from './about'
import {Routes,Route} from "react-router-dom";
import '../../css/index.css';

export default function Index(){
    return (
      <div>
        <HomeHeader/>
        <div className="middle">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blog/*" element={<Blog/>}/>
            <Route path="/demo" element={<Demo/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>   
        </div>
        <HomeFooter/>
      </div>
    )
  }
