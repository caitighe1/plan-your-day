//clock function

function showDateTime () {
    var clock = document.getElementById('clock');

    var date = new Date();
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var dayName = day[date.getDay()];
    var monthName = month[date.getMonth()];

    var today = `${dayName} ${monthName} ${date.getDate()}, ${date.getFullYear()}`;

    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    var time = hour + ":" + min + ":" + sec;

    //pulling from the dom to change running time

    clock.innerText = `${today} ${time}`;


}