function convertVideo() {
    const url = document.getElementById('videoURL').value;
    const message = document.getElementById('message');

    if(url === "") {
        message.textContent = "ضع رابط فيديو صحيح!";
        message.style.color = "red";
    } else {
        // فتح صفحة الموقع الرئيسية لمجموعة أدوات الفيديو
        const externalSite = "https://www.y2mate.com/"; // بدل OnlineVideoConverter
        window.open(externalSite, "_blank"); // يفتح نافذة جديدة
        message.textContent = "تم فتح موقع التحويل في نافذة جديدة. يمكنك وضع رابط الفيديو هناك!";
        message.style.color = "green";
    }
}
