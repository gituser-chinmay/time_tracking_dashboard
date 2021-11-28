let worktime = document.getElementById("work-time");
let worktime_lastweek = document.getElementById("work-time-lastweek");
let palytime = document.getElementById("play-time");
let playtime_lastweek = document.getElementById("paly-time-lastweek");
let excersicetime = document.getElementById("exercise-time");
let excersicetime_lastweek = document.getElementById("exercise-time-lastweek");
let studytime = document.getElementById("study-time");
let studytime_lastweek = document.getElementById("study-time-lastweek");
let socialtime = document.getElementById("social-time");
let socialtime_lastweek = document.getElementById("social-time-lastweek");
let selfcaretime = document.getElementById("selfcare-time");
let selfcaretime_lastweek = document.getElementById("selfcare-time-lastweek");

const mydata = JSON.parse(data)

function showResults(obj) {
    if (obj=="daily") {
        $getJSON('../resources/')
    }
}