// script.js
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.gallery-item.active').forEach(activeItem => {
            activeItem.classList.remove('active');
        });

        item.classList.add('active');
    });
});
