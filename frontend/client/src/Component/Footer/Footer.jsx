// Footer.js

import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="flex justify-center items-center p-1 md:p-4 bg-gray-800 text-white w-full">
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="mx-2">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="mx-2">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="mx-2">
                <i className="fab fa-instagram"></i>
            </a>
            <span className="ml-4">&copy; 2024 MernTechnical</span>
        </footer>
    );
};
export default Footer;
