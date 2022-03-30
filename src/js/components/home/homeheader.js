import { Link } from "react-router-dom";
import '../../../css/home/homeheader.css'

export default function HomeHeader() {
    return (
      <div className="home-header">
        <div className="home-header-title"><Link to="/">林蕴晴的个人博客</Link></div>
        <div className="home-header-subtitle">Welcome to Lin's blog</div>
        <div className="home-header-nav">
          <div className="home-header-nav-item"><Link to="/">Home</Link></div>
          <div className="home-header-nav-item"><Link to="/blog">Blog</Link></div>
          <div className="home-header-nav-item"><Link to="/demo">Demo</Link></div>
          <div className="home-header-nav-item"><Link to="/about">About Me</Link></div>          
        </div>
      </div>
    )
  }