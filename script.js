// 圓形進度條動畫
document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.progress-ring-circle');
    
    circles.forEach(circle => {
        const percent = parseFloat(circle.getAttribute('data-percent'));
        const circumference = 2 * Math.PI * 50; // r = 50
        const offset = circumference - (percent / 100) * circumference;
        
        // 使用 setTimeout 確保動畫在頁面載入後執行
        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 100);
    });
    
    // 能量條動畫
    const progressSegments = document.querySelectorAll('.progress-segment');
    progressSegments.forEach(segment => {
        const width = segment.style.width;
        segment.style.width = '0%';
        setTimeout(() => {
            segment.style.width = width;
        }, 200);
    });
});

