function convertVideo() {
    const url = document.getElementById('videoURL').value;
    const message = document.getElementById('message');

    if(url === "") {
        message.textContent = "ضع رابط فيديو صحيح!";
        message.style.color = "red";
    } else {
        // فتح موقع أدوات الفيديو الخارجي
        const externalSite = "https://www.onlinevideoconverter.com/ar/video-converter?url=" + encodeURIComponent(url);
        window.open(externalSite, "_blank"); // يفتح نافذة جديدة
        message.textContent = "تم تحويل الفيديو! سيتم فتح موقع التحويل في نافذة جديدة.";
        message.style.color = "green";
    }
}
