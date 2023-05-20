import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    
    return <footer className="footer">
        <div className="footer__row footer__primary">
            <div className="footer__column footer__about">
                <h3>Frontend Developer</h3>
                <p>
                    Веб-додаток написаний за допомогою React з використанням TypeScript. Він демонструє базові інструменти React та бібліотеки які най частіше використовуються.
                </p>
                <div className="footer__social">
                    <i className="icon-facebook"></i>
                    <i className="icon-git"></i>
                    <i className="icon-google"></i>
                    <i className="icon-linkedin"></i>
                    <i className="icon-twitter"></i>
                </div>
            </div>
            <div className="footer__links">
                <div className="footer__column">
                    <h3>Посилання</h3>
                    <ul>
                        <li>
                            <a href="#react">React</a>
                        </li>
                        <li>
                            <a href="#router">React Router</a>
                        </li>
                        <li>
                            <a href="#firebase">Firebase</a>
                        </li>
                        <li>
                            <a href="#toolkit">Redux Toolkit</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h3>Посилання</h3>
                    <ul>
                        <li>
                            <a href="#html">Html</a>
                        </li>
                        <li>
                            <a href="#css">SCSS</a>
                        </li>
                        <li>
                            <a href="#javascript">Java Script</a>
                        </li>
                        <li>
                            <a href="#typescript">Type Script</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer__row footer__copyright">
            <div className="footer__menu">
                <Link className="navbar__link" to="/">Home</Link>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
            <p>Copyright &copy; 2023 React</p>
        </div>
    </footer>
}

export default Footer;