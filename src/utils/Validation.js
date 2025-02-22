export class Validation {
    static initializeRealTimeValidation(form) {
        const inputs = form.querySelectorAll("input, select");

        inputs.forEach(input => {
            input.addEventListener("input", () => this.validateInput(input, form));
        });
    }

    static validateInput(input, form) {
        const errorElement = input.nextElementSibling;

        // Clear previous errors
        input.classList.remove("error");
        errorElement.textContent = "";
        errorElement.classList.remove("animate__animated", "animate__shakeX"); // Remove animation classes

        // Validate required fields
        if (!input.value.trim()) {
            input.classList.add("error");
            errorElement.textContent = `${input.getAttribute("placeholder") || "This field"} is required.`;
            errorElement.classList.add("animate__animated", "animate__shakeX"); // Add shake animation
        }

        // Validate email format
        if (input.type === "email" && input.value.trim() && !Validation.validateEmail(input.value)) {
            input.classList.add("error");
            errorElement.textContent = "Invalid email format.";
            errorElement.classList.add("animate__animated", "animate__shakeX"); // Add shake animation
        }

        // Validate password strength
        if (input.type === "password" && input.value.trim() && !Validation.validatePassword(input.value)) {
            input.classList.add("error");
            errorElement.textContent = "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.";
            errorElement.classList.add("animate__animated", "animate__shakeX"); // Add shake animation
        }

        // Validate password confirmation
        if (input.id === "confirmPassword") {
            const passwordInput = form.querySelector("#password");
            if (passwordInput && passwordInput.value.trim() && input.value.trim() && input.value !== passwordInput.value) {
                input.classList.add("error");
                errorElement.textContent = "Passwords do not match.";
                errorElement.classList.add("animate__animated", "animate__shakeX"); // Add shake animation
            }
        }

        // Validate business type
        if (input.id === "businessType" && !input.value) {
            input.classList.add("error");
            errorElement.textContent = "Business Type is required.";
            errorElement.classList.add("animate__animated", "animate__shakeX"); // Add shake animation
        }
    }

    static validateForm(form) {
        const inputs = form.querySelectorAll("input, select");
        let valid = true;

        inputs.forEach(input => {
            this.validateInput(input, form);
            if (input.classList.contains("error")) {
                valid = false;
            }
        });

        return valid;
    }

    static validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    static validatePassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }
}
