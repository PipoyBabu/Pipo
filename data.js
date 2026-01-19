export const shopInfo = {
    title: "Tondo Beans",
    tagline: "Crafting Your Daily Ritual",
    description: "The first artisanal coffee stop designed for developers in Tondo.",
    story: "Sourced from high-altitude farms in Ethiopia and Colombia, our beans are roasted in small batches using precision temperature control. Every cup tells a story of craftsmanship and sustainability.",
    address: "123 Developer Street, Tondo Manila",
    phone: "(02) 1234-5678",
    email: "hello@tondobeans.com",
    hours: "6:00 AM - 8:00 PM Daily"
};

export const valuePropositions = [
    { icon: "🌱", title: "Ethically Sourced", description: "Direct relationships with farmers" },
    { icon: "🔬", title: "Small Batch", description: "Precision roasted in-house" },
    { icon: "🥐", title: "House-made Pastries", description: "Fresh baked daily by our artisans" },
    { icon: "💻", title: "Developer-Friendly", description: "Fast WiFi & the perfect work space" }
];

export const signatureDrinks = [
    {
        name: "Ethiopia Dream",
        price: "₱220",
        description: "Notes of blueberry & chocolate with a clean finish. Single-origin pour-over.",
        image: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=500&h=500&fit=crop"
    },
    {
        name: "Tondo Espresso",
        price: "₱180",
        description: "Bold, rich, and full-bodied. Our house blend pulled to perfection.",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=500&fit=crop"
    },
    {
        name: "Silky Latte",
        price: "₱200",
        description: "Velvety microfoam with Colombian single-origin espresso. Pure comfort.",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&h=500&fit=crop"
    },
    {
        name: "Dirty Matcha",
        price: "₱210",
        description: "Creamy matcha blend with a double shot of espresso. The perfect blend.",
        image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=500&h=500&fit=crop"
    }
];

export async function fetchMenu() {
    return signatureDrinks;
}