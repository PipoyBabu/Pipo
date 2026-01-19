import { shopInfo, fetchMenu } from "./data.js";   

// ES2020 feature: Optional Chaining + Nullish Coalescing
// Optional chainng (?.) safely accesses nested propeties
// Nullish coalescing (??) provides a default value

const title = shopInfo?.title ?? "Business Name";
const description = shopInfo?.description ?? "No description available.";

document.getElementById("title").textContent = title;
document.getElementById("desc").textContent = description;

// ES2017 Feature: Async/Await
// Cleaner syntax for handling promises
async function loadMenu() {
    const menu = await fetchMenu();
    const list = document.getElementById("menu");

    menu.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

loadMenu();