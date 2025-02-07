const box = document.getElementById('box');
const ch = document.getElementById('change');

ch.addEventListener('click', function () {
    const color = changecolor();
    box.style.backgroundColor = color.rgb;
    box.style.color = getTextColor(color.r, color.g, color.b);
});
// now let's change the color randomly

function changecolor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    // Apply random color using RGB format
    return { r, g, b, rgb: `rgb(${r}, ${g}, ${b})` };
}

function getTextColor(r, g, b) {
    // Formula to calculate brightness (YIQ method)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? "black" : "white"; // Dark background → white text, Light background → black text
}