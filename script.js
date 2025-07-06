document.querySelectorAll('.faq-category').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.closest('.faq-item');
        item.classList.toggle('active');
    });
});
