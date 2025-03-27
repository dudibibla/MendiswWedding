// תאריך החתונה - 1 ביולי בשעה 19:00
const weddingDate = new Date("2025-07-01T19:00:00").getTime();

// פונקציה שמעדכנת את הטיימר כל דקה
function updateTimer() {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    if (timeLeft <= 0) {
        document.getElementById("timer").innerHTML = "🎉 מזל טוב! החתונה התחילה!";
        clearInterval(timerInterval);
        return;
    }

    // חישוב ימים, שעות ודקות
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    // עדכון ה-HTML
    document.getElementById("timer").innerHTML = `${days} ימים ${hours} שעות  ${minutes} דקות`;
}

// הפעלת הטיימר מיד עם טעינת הדף
updateTimer();

// עדכון כל דקה
const timerInterval = setInterval(updateTimer, 60000);

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
        .then(() => console.log("Service Worker רשום בהצלחה!"))
        .catch(error => console.log("Service Worker נכשל:", error));
}

