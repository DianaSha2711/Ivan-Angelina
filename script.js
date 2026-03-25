function showDetails(msg) {
    alert(msg);
}

function addReview() {
    const name = document.getElementById('reviewName').value.trim();
    const date = document.getElementById('reviewDate').value;
    const msg = document.getElementById('reviewMessage').value.trim();
    
    if (!name || !date || !msg) {
        alert('Заполните имя, дату и текст отзыва');
        return;
    }
    
    const [y, m, d] = date.split('-');
    const formattedDate = `${d}.${m}.${y}`;
    
    const reviewDiv = document.createElement('div');
    reviewDiv.className = 'review-item';
    reviewDiv.innerHTML = `
        <div class="review-header"><span>${escapeHtml(name)}</span><span>${escapeHtml(formattedDate)}</span></div>
        <div class="review-text">${escapeHtml(msg)}</div>
    `;
    
    document.getElementById('reviewList').prepend(reviewDiv);
    document.getElementById('reviewMessage').value = '';
    document.getElementById('reviewDate').value = new Date().toISOString().split('T')[0];
}

function escapeHtml(str) {
    const map = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'};
    return str.replace(/[&<>"']/g, m => map[m]);
}

document.getElementById('reviewDate').value = new Date().toISOString().split('T')[0];