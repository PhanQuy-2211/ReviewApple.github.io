document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.previousElementSibling;
        if (details.style.display === 'block') {
            details.style.display = 'none';
            button.textContent = 'Đọc thêm';
        } else {
            details.style.display = 'block';
            button.textContent = 'Thu gọn';
        }
    });
});
