import { Form } from './src/components/Form.js';
import { Header } from './src/components/Header.js';
import { Footer } from './src/components/Footer.js';
import { Logo } from './src/components/Logo.js';

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