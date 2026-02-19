// script.js
console.log("Welcome to my first website! 🎉");

// Add a click effect to the image
document.getElementById('favorite-place').addEventListener('click', function() {
    alert('Thanks for clicking my image! You can replace it with your own photo.');
});

// Change the background color when someone hovers over the header
document.querySelector('header').addEventListener('mouseenter', function() {
    this.style.background = 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)';
});

document.querySelector('header').addEventListener('mouseleave', function() {
    this.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
});