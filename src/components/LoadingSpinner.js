export class LoadingSpinner {
    constructor() {
        this.spinnerElement = document.createElement("div");
        this.spinnerElement.className = "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50";
        this.spinnerElement.innerHTML = `
            <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
        `;
    }

    render() {
        return this.spinnerElement;
    }

    show() {
        document.body.appendChild(this.spinnerElement);
    }

    hide() {
        if (this.spinnerElement.parentElement) {
            this.spinnerElement.parentElement.removeChild(this.spinnerElement);
        }
    }
}