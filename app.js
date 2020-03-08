const trendingContainer = "[data-testid=sidebarColumn]";
const trendingElement = "div > div > div > div > div > div:nth-child(3)";
let sidebar, trending;

const areWeThereYet = () => {
    try {
        console.log('Are we there yet?');
        sidebar = document.querySelectorAll(trendingContainer)[0];
        areWeReallyThereYet();
    } catch {
        window.requestAnimationFrame(areWeThereYet);
    }
};

const areWeReallyThereYet = () => {
    try {
        console.log('Are we REALLY there yet?');
        trending = document.querySelectorAll(trendingContainer)[0].querySelector(trendingElement);
        removeTwitterTrending();
    } catch {
        window.requestAnimationFrame(areWeReallyThereYet);
    }
};

const removeTwitterTrending = () => {
    console.log("We're there!");
    // const sidebar = document.querySelectorAll(trendingContainer)[0];
    // const trending = sidebar.querySelector(trendingElement);
    // //trending.style.display = 'none';
    // trending.style.border = "1px dashed red";
};

areWeThereYet();
