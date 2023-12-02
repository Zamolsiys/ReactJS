import logoImg from '../../../src/img/icons/logo.svg';
import './header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="headerRow">
                    <h1>Yesy</h1>
                    <div className="header_logo">
                        <img src={logoImg} alt="Logo" />
                        <span>Fashion</span>
                    
                    </div>
                    <div className="header_nav">Header Nav</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
