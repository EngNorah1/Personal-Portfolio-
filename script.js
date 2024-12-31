// إضافة توصية جديدة
document.getElementById('recommendation-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.getElementById('new-recommendation');
    const newRecommendation = input.value.trim();
    
    if (newRecommendation) {
      const list = document.getElementById('recommendation-list');
      const li = document.createElement('li');
      li.textContent = newRecommendation;
      list.appendChild(li);
      
      alert('Recommendation added successfully!');
      input.value = ''; // تفريغ الحقل بعد الإضافة
    } else {
      alert('Please enter a recommendation.');
    }

    // دالة لعرض النافذة المنبثقة
function submitRecommendation() {
    document.getElementById("popup").style.display = "block";
}

// دالة لإغلاق النافذة المنبثقة
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

  });
  