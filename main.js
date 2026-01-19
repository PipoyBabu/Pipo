import { shopInfo, valuePropositions, fetchMenu } from "./data.js";

// ========================================
// TEMPLATE LITERALS (ES2015+)
// Renders the sticky navigation bar with shop title and menu links.
// Template literals with ${} allow seamless HTML structure with dynamic values,
// avoiding string concatenation mess and improving readability significantly.
// ========================================
function renderHeader(info) {
    const container = document.getElementById("header-container");
    container.innerHTML = `
        <header class="sticky top-0 z-50">
            <nav class="p-6 bg-gradient-to-r from-espresso to-amber-900 border-b-4 border-amber-700 flex justify-between items-center shadow-lg">
                <div class="flex items-center gap-3">
                    <span class="text-3xl">☕</span>
                    <h1 class="text-3xl font-bold text-white">${info.title}</h1>
                </div>
                <ul class="flex gap-8 text-amber-100 font-semibold">
                    <li><a href="#menu" class="hover:text-white transition-colors duration-200">Menu</a></li>
                    <li><a href="#contact" class="hover:text-white transition-colors duration-200">Location</a></li>
                    <li><a href="#values" class="hover:text-white transition-colors duration-200">About</a></li>
                </ul>
            </nav>
        </header>`;
}

// ========================================
// CONST & ARROW FUNCTIONS (ES2015+)
// Creates a full-screen banner with the shop's tagline, description, and call-to-action button.
// Using const ensures immutability for the container reference, preventing accidental reassignment
// which helps maintain code stability in larger applications.
// ========================================
function renderHero(info) {
    const container = document.getElementById("hero-container");
    container.innerHTML = `
        <section class="relative w-full h-screen bg-cover bg-center flex items-center justify-center" 
                 style="background-image: linear-gradient(rgba(45, 27, 20, 0.6), rgba(45, 27, 20, 0.6)), url('https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=1600&h=900&fit=crop');">
            <div class="text-center text-white px-6">
                <h2 class="text-6xl font-extrabold mb-6 leading-tight">${info.tagline}</h2>
                <p class="text-2xl mb-8 text-latte max-w-2xl mx-auto">${info.description}</p>
                <button class="bg-amber-700 hover:bg-amber-800 text-white font-bold py-4 px-10 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    View Menu
                </button>
            </div>
        </section>`;
}

// ========================================
// ARRAY MAP METHOD & ARROW FUNCTIONS (ES2015+)
// Displays why customers should choose Tondo Beans with an icon grid layout.
// The map() method transforms each value proposition object into HTML, providing a cleaner
// functional approach than traditional for-loops and making the code intent immediately clear.
// ========================================
function renderValues() {
    const container = document.getElementById("value-container");
    const valuesHTML = valuePropositions.map(v => `
        <div class="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div class="text-5xl mb-4">${v.icon}</div>
            <h3 class="text-xl font-bold text-espresso mb-2">${v.title}</h3>
            <p class="text-stone-600 text-sm">${v.description}</p>
        </div>
    `).join('');

    container.innerHTML = `
        <section id="values" class="py-20 px-6 bg-gradient-to-b from-stone-50 to-white">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-4xl font-bold text-center text-espresso mb-4">Why Tondo Beans?</h2>
                <p class="text-center text-stone-600 mb-12 max-w-2xl mx-auto text-lg">${shopInfo.story}</p>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${valuesHTML}
   ========================================
// ASYNC/AWAIT (ES2017+)
// Fetches and displays signature drinks with images, descriptions, and order buttons.
// Async/await provides a cleaner, more readable way to handle asynchronous operations compared to
// traditional .then() chains. The code reads like synchronous logic, making it easier to understand
// and maintain, especially when dealing with multiple async operations.
// ========================================
            </div>
        </section>`;
}

// Function to build the Menu Section with Featured Items
async function renderMenu() {
    const container = document.getElementById("menu-container");
    const menuItems = await fetchMenu();
    
    const menuHTML = menuItems.map(item => `
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <img src="${item.image}" alt="${item.name}" class="w-full h-64 object-cover">
            <div class="p-6">
                <h3 class="text-2xl font-bold text-espresso mb-2">${item.name}</h3>
                <p class="text-stone-600 mb-4 text-sm">${item.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold text-amber-700">${item.price}</span>
                    <button class="bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded transition-colors duration-200">
                        Order
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = `
        <section id="menu" class="py-20 px-6 bg-latte">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-4xl font-bold text-center text-espresso mb-4">Signature Drinks</h2>
                <p class="text-center text-stone-600 mb-12 max-w-2xl mx-auto">Hand-crafted beverages made with passion and precision</p>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
   ========================================
// TEMPLATE LITERALS & DYNAMIC CONTENT INJECTION
// Creates a contact form and location display with embedded map and business information.
// Template literals with multi-line strings keep HTML structure intact and readable,
// while variable interpolation keeps data binding explicit and maintainable.
// ========================================
                </div>
            </div>
        </section>`;
}

// Function to build the Contact & Location Section
function renderContact() {
    const container = document.getElementById("contact-container");
    container.innerHTML = `
        <section id="contact" class="py-20 px-6 bg-white">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-4xl font-bold text-center text-espresso mb-12">Get In Touch</h2>
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <!-- Contact Form -->
                    <div class="bg-stone-50 p-8 rounded-lg shadow-md">
                        <h3 class="text-2xl font-bold text-espresso mb-6">Send us a Message</h3>
                        <form class="space-y-4">
                            <div>
                                <label class="block text-stone-700 font-semibold mb-2">Your Name</label>
                                <input type="text" placeholder="Enter your name" class="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-700">
                            </div>
                            <div>
                                <label class="block text-stone-700 font-semibold mb-2">Email</label>
                                <input type="email" placeholder="your@email.com" class="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-700">
                            </div>
                            <div>
                                <label class="block text-stone-700 font-semibold mb-2">Message</label>
                                <textarea placeholder="Tell us what you think..." rows="4" class="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-700"></textarea>
                            </div>
                            <button type="submit" class="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 rounded-lg transition-colors duration-200">
                                Send Message
                            </button>
                        </form>
                    </div>

                    <!-- Location & Info -->
                    <div>
                        <h3 class="text-2xl font-bold text-espresso mb-6">Visit Us</h3>
                        
                        <!-- Embedded Map -->
                        <div class="mb-8 rounded-lg overflow-hidden shadow-md h-80">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.6267154346893!2d121.01030752346918!3d14.60215908722876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c7d5e5e5e5e5%3A0x0!2sTondo%2C%20Manila!5e0!3m2!1sen!2sph!4v1234567890" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                        </div>

                        <!-- Contact Details -->
                        <div class="space-y-6">
                            <div class="flex items-start gap-4">
                                <span class="text-2xl">📍</span>
                                <div>
                                    <h4 class="font-bold text-espresso">Address</h4>
                                    <p class="text-stone-600">${shopInfo.address}</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <span class="text-2xl">📞</span>
                                <div>
                                    <h4 class="font-bold text-espresso">Phone</h4>
                                    <p class="text-stone-600"><a href="tel:${shopInfo.phone}" class="hover:text-amber-700 transition-colors">${shopInfo.phone}</a></p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <span class="text-2xl">✉️</span>
                                <div>
                                    <h4 class="font-bold text-espresso">Email</h4>
                                    <p class="text-stone-600"><a href="mailto:${shopInfo.email}" class="hover:text-amber-700 transition-colors">${shopInfo.email}</a></p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <span class="text-2xl">⏰</span>
                                <div>
                                    <h4 class="font-bold text-espresso">Hours</h4>
                                    <p class="text-stone-600">${shopInfo.hours}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
}

// ========================================
// OBJECT METHODS & DATE FORMATTING
// Renders the footer with company info, quick links, social media, and copyright notice.
// Using getFullYear() keeps the copyright year automatically updated, eliminating the need
// for manual maintenance—a small but important detail for professional websites.
// ========================================
function renderFooter() {
    const container = document.getElementById("footer-container");
    const year = new Date().getFullYear();
    container.innerHTML = `
        <footer class="bg-espresso text-white py-12 px-6">
            <div class="max-w-6xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h4 class="text-xl font-bold mb-4 flex items-center gap-2"><span>☕</span> Tondo Beans</h4>
                        <p class="text-amber-100">Crafting the perfect cup for developers and coffee lovers since 2024.</p>
                    </div>
                    <div>
                        <h4 class="text-xl font-bold mb-4">Quick Links</h4>
                        <ul class="space-y-2 text-amber-100">
                            <li><a href="#menu" class="hover:text-white transition-colors">Menu</a></li>
                            <li><a href="#values" class="hover:text-white transition-colors">About</a></li>
                            <li><a href="#contact" class="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-xl font-bold mb-4">Follow Us</h4>
                        <div class="flex gap-4 text-2xl">
                            <a href="#" class="hover:text-amber-400 transition-colors">f</a>
                            <a href="#" class="hover:text-amber-400 transition-colors">🐦</a>
                            <a href="#" class="hover:text-amber-400 transition-colors">📷</a>
                        </div>
                    </div>
                </div>
                <hr class="border-amber-700 mb-8">
                <div class="text-center text-amber-100 text-sm">
                    <p>&copy; ${year} Tondo Beans. All rights reserved. | Crafted with ☕ and 💻</p>
                </div>
            </div>
        </footer>`;
}

// The "Main" function that executes everything
async function initializeWebsite() {
    renderHeader(shopInfo);
    renderHero(shopInfo);
    renderValues();
    await renderMenu();
    renderContact();
// ========================================
// COMPOSITION PATTERN & ASYNC FLOW CONTROL
// Coordinates all render functions to build the complete website in proper order.
// Async function allows us to properly await the menu rendering without blocking other sections,
// while the modular function composition makes each feature independent and testable.
// ========================================
    
    console.log("✓ Website successfully rendered with all sections!");
}

// Execute the initialization
initializeWebsite();