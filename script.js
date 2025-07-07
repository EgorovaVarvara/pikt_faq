document.querySelectorAll('.faq-category').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.closest('.faq-item');
        item.classList.toggle('active');
    });
});


document.querySelectorAll('.faq-subcategory').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.closest('.faq-answer');
        item.classList.toggle('active');
    });
});
