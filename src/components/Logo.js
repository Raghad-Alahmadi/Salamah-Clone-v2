export class Logo {
    constructor() {
        this.logoElement = document.createElement("div");
        this.logoElement.className = "flex items-center p-5 mt-5 ml-5"; 
        this.renderLogo();
    }

    renderLogo() {
        const logoImage = document.createElement("img");
        logoImage.src = "/assets/logo.svg"; 
        logoImage.alt = "Logo";
        logoImage.className = "h-30 w-30"; 

        this.logoElement.appendChild(logoImage);
    }

    render() {
        return this.logoElement;
    }
}
