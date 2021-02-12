let counter = 0;

document.getElementById('badge').addEventListener('click', () => {
    navigator.setAppBadge(++counter);
});

document.getElementById('clear-badge').addEventListener('click', () => {
    navigator.clearAppBadge();
});
