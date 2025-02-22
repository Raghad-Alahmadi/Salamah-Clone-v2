import { Button } from './Button.js';

export class Popup {
    constructor(termsText) {
        this.termsText = termsText;
        this.popupElement = document.createElement("div");
        this.popupElement.className = "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-auto";

        const isDarkMode = document.body.classList.contains("dark-mode");

        this.popupElement.innerHTML = `
            <div class="popup-content ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded shadow-md max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div class="terms-content mb-4 ${isDarkMode ? 'text-white' : 'text-black'}">${this.termsText}</div>
            </div>
        `;
    }

    render() {
        const closeButton = new Button("Close", () => {
            this.popupElement.remove();
        });

        const popupContent = this.popupElement.querySelector(".popup-content");
        popupContent.appendChild(closeButton.render());

        return this.popupElement;
    }
}