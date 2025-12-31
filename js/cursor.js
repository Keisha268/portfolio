document.addEventListener("mousemove", function (e) {
    const cursor = document.getElementById("fake-cursor");
    if (!cursor) return; // pengaman

    const offsetX = 6;
    const offsetY = 4;

    cursor.style.left = (e.clientX - offsetX) + "px";
    cursor.style.top  = (e.clientY - offsetY) + "px";
});
