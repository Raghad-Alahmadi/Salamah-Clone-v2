export class InputField {
    constructor(id, type, placeholder) {
        this.id = id;
        this.type = type;
        this.placeholder = placeholder;
    }

    render() {
        const isDarkMode = document.body.classList.contains("dark-mode");
        const input = document.createElement("input");
        input.id = this.id;
        input.type = this.type;
        input.placeholder = this.placeholder;
        input.className = `block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-200 focus:border-green-300 sm:text-sm ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`;
        return input;
    }
}