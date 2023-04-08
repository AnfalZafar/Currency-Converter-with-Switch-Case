function convert() {

    var enter = document.getElementById("input").value;
    var num = document.getElementById("num").value;

    switch (num) {
        case "USD":
            document.getElementById("output").innerHTML = enter * 284;
            break;
        case "PONDS":
            document.getElementById("output").innerHTML = enter * 346;
            break;
        case "RAIL":
            document.getElementById("output").innerHTML = enter * 737;
            break;
        case "RUBLE":
            document.getElementById("output").innerHTML = enter * 111;
            break;
        case "AFN":
            document.getElementById("output").innerHTML = enter * 3;
            break;
        case "PULA":
            document.getElementById("output").innerHTML = enter * 21
            break;
        case "DINAR":
            document.getElementById("output").innerHTML = enter * 925;
            break;
        default:
            document.getElementById("output").innerHTML = "Dile Correct Number"

    }



}