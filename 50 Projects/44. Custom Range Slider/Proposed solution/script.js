const range = document.getElementById('range');

range.addEventListener('input', (e) => {
    const value = +e.target.value;
    const label = e.target.nextElementSibling;

    const thumbWidth = 24; // Thumb width on CSS
    const rangeWidth = parseInt(getComputedStyle(range).width) - thumbWidth;
    const labelWidth = parseInt(getComputedStyle(label).width);

    const labelPosition = value * (rangeWidth / 100) - (labelWidth - thumbWidth / 2);
    label.style.left = `${labelPosition}px`;

    label.textContent = value;
});
