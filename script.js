const rpm = document.getElementById("rpm");
rpm.value = "30",
rpm.addEventListener("input", function() {
    const tmp = this.value * 2 / 60;
    document.getElementById("output").innerText = this.value * 2;
    document.getElementById("rads").innerText = tmp.toFixed(2);
    document.getElementById("img").style.animation = `rotate ${1 / tmp}s infinite linear`
})