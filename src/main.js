import { Form } from './components/Form.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { Logo } from './components/Logo.js';

// Importing the styles


const app = document.getElementById("app");
if (app) {
    const header = new Header();
    app.appendChild(header.render());

    const logo = new Logo();
    app.appendChild(logo.render());
    
    const registrationForm = new Form();
    app.appendChild(registrationForm.render());

    const footer = new Footer();
    document.body.appendChild(footer.render());
}