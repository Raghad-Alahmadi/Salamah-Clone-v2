export class Api {
    static async fetchCompanyData() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!response.ok) throw new Error("Failed to fetch data");
            return await response.json();
        } catch (error) {
            console.error("Error fetching company data:", error);
            throw error;
        }
    }
}