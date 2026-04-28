function calculate() {
    let total = parseInt(document.getElementById("total").value);
    let attended = parseInt(document.getElementById("attended").value);

    if (isNaN(total) || isNaN(attended) || total <= 0 || attended > total) {
        document.getElementById("result").innerText = "❌ Invalid input!";
        document.getElementById("extra").innerText = "";
        return;
    }

    let percentage = (attended / total) * 100;

    let result = "Attendance: " + percentage.toFixed(2) + "%";

    if (percentage >= 75) {
        result += " ✅ Safe";
    } else if (percentage >= 65) {
        result += " ⚠️ Warning";
    } else {
        result += " ❌ Low";
    }

    let bunk = Math.floor(attended - 0.75 * total);

    let extra = bunk > 0
        ? "You can miss " + bunk + " classes"
        : "You need to attend more classes";

    document.getElementById("result").innerText = result;
    document.getElementById("extra").innerText = extra;
}