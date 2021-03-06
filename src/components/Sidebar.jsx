import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
        <React.Fragment>
            <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
            <header id="header">
                <div className="d-flex flex-column">
                    <div className="profile">
                        <img src="https://i.imgur.com/DlWzVsT.jpg" alt="" className="img-fluid rounded-circle"></img>
                        <h1 className="text-light"><Link to="/">Rony Chandra</Link></h1>
                        <div className="social-links mt-3 text-center">
                            <Link to="#" className="twitter"><i className="bx bxl-twitter"></i></Link>
                            <Link to="#" className="facebook"><i className="bx bxl-facebook"></i></Link>
                            <Link to="#" className="instagram"><i className="bx bxl-instagram"></i></Link>
                            <Link to="#" className="google-plus"><i className="bx bxl-skype"></i></Link>
                            <Link to="#" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
                        </div>
                    </div>
                    <nav className="nav-menu">
                        <ul>
                            <li className="active"><Link to="#hero"><i className="bx bx-home"></i> <span>Home</span></Link></li>
                            <li><Link to="#about"><i className="bx bx-user"></i> <span>About</span></Link></li>
                            <li><Link to="#resume"><i className="bx bx-file-blank"></i> <span>Resume</span></Link></li>
                            <li><Link to="#portfolio"><i className="bx bx-book-content"></i> Portfolio</Link></li>
                            <li><Link to="#services"><i className="bx bx-server"></i> Services</Link></li>
                            <li><Link to="#contact"><i className="bx bx-envelope"></i> Contact</Link></li>

                        </ul>
                    </nav>
                </div>
            </header>
            <footer id="footer">
                <div className="container">
                    <div className="copyright">
                       2020 &copy; Copyright <strong><span>Cacan Blog</span></strong>
                    </div>
                    <div className="credits">
                        Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
                    </div>
                    <div className="credits">
                        Script : React JS
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
  }
}

export default Sidebar;