document.addEventListener('DOMContentLoaded', () => {
    // 1. Highlight active navigation link
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('nav ul li a');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].style.fontWeight = "bold";
            menuItem[i].style.borderBottom = "2px solid black";
        }
    }

    // 2. Simple fade-in animation for main content
    const main = document.querySelector('main');
    main.style.opacity = 0;
    main.style.transition = 'opacity 0.5s ease-in-out';
    
    // Trigger reflow to ensure the transition happens
    setTimeout(() => {
        main.style.opacity = 1;
    }, 100);
});
