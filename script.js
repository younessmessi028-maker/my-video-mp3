function convertVideo() {
    const url = document.getElementById('videoURL').value;
    const message = document.getElementById('message');

    if(url === "") {
        message.textContent = "ضع رابط فيديو صحيح!";
        message.style.color = "red";
    } else {
        message.textContent = "تم تحويل الفيديو بنجاح! (اختباري)";
        message.style.color = "green";
    }
}