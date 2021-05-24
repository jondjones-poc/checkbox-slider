const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');
const toggles = document.querySelectorAll('.toggle')

const performLogic = (currentSlider) => {
    if (good.checked && fast.checked && cheap.checked) {
        if (good === currentSlider) {
            fast.checked = false;
        }
        if (cheap === currentSlider) {
            good.checked = false;
        }
        if (fast === currentSlider) {
            cheap.checked = false;
        }
    }
};


toggles.forEach((toggle) => toggle.addEventListener('change', (e) => {
    performLogic(e.target)
}));