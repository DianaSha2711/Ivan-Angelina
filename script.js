// Функция для показа деталей услуги
function showDetails(message) {
    alert(message);
}

// Функция для добавления отзыва
function addReview() {
    const nameInput = document.getElementById('reviewName');
    const dateInput = document.getElementById('reviewDate');
    const messageInput = document.getElementById('reviewMessage');

    const name = nameInput.value.trim();
    const date = dateInput.value;
    const message = messageInput.value.trim();

    if (!name || !date || !message) {
        alert('Пожалуйста, заполните имя, дату и текст отзыва.');
        return;
    }

    // форматируем дату из YYYY-MM-DD в DD.MM.YYYY
    const [year, month, day] = date.split('-');
    const formattedDate = (day || '??') + '.' + (month || '??') + '.' + (year || '????');

    const reviewList = document.getElementById('reviewList');

    const reviewDiv = document.createElement('div');
    reviewDiv.className = 'review-item';
    reviewDiv.innerHTML = `
        <div class="review-header">
            <span>${escapeHtml(name)}</span>
            <span class="review-date">${escapeHtml(formattedDate)}</span>
        </div>
        <div class="review-text">${escapeHtml(message)}</div>
    `;

    reviewList.prepend(reviewDiv); // свежий сверху

    // очищаем поля
    messageInput.value = '';
    // устанавливаем сегодняшнюю дату
    setTodayDate();
}

// Защита от XSS
function escapeHtml(unsafe) {
    return unsafe.replace(/[&<>"']/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        if (m === '"') return '&quot;';
        if (m === "'") return '&#039;';
        return m;
    });
}

// Установка сегодняшней даты
function setTodayDate() {
    const dateField = document.getElementById('reviewDate');
    if (dateField) {
        const today = new Date().toISOString().split('T')[0];
        dateField.value = today;
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    setTodayDate();
});