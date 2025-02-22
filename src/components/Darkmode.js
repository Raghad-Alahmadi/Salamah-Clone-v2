import { Form } from './Form.js';

export class DarkMode {
    static toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
        const form = document.querySelector("form");
        if (form) {
            const formInstance = new Form();
            form.replaceWith(formInstance.render());
        }
    }
}