import './footer.scss';

import Logo from '../../resources/images/Logo-1.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <img src={Logo} alt='logo'/>
            </div>
        </footer>
    );
}

export default Footer;