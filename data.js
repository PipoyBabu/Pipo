export const shopInfo = {
    title: "Pipo's Coffee Shop",
    description: "Welcome to Pipo's Coffee Shop, where we serve the best coffee in town!",
};

export function fetchMenu() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(["Espresso", "Cappuccino", "Latte", "Mocha"]);
        }, 1000);
    });
}