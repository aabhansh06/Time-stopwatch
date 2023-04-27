const addTrailingZero = (num) => {
  return num < 10 ? "0" + num : num;
};

const updateTime = () => {
  const time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";
  let otherampm = hours >= 12 ? "AM" : "PM";

  hours = hours % 12 || 12;

  hours = addTrailingZero(hours);
  minutes = addTrailingZero(minutes);
  seconds = addTrailingZero(seconds);

  $("#hour").html(hours);
  $("#min").html(minutes);
  $("#sec").html(seconds);
  $("#ampm").html(ampm);
  $("#other-ampm").html(otherampm);
};

updateTime();

setInterval(updateTime, 1000);






// let days = document.getElementById('days');
// let hours = document.getElementById('hours');
// let minutes = document.getElementById('minutes');
// let seconds = document.getElementById('seconds');

// let dd = document.getElementById('dd');
// let hh = document.getElementById('hh');
// let mm = document.getElementById('mm');
// let ss = document.getElementById('ss');

// let day_dot = document.querySelector('.day_dot')
// let hours_dot = document.querySelector('.hours_dot')
// let min_dot = document.querySelector('.min_dot')
// let sec_dot = document.querySelector('.sec_dot')

// let newDate = '01/04/2023';
// // date format mm/dd/yyyy

// let x = setInterval(function(){
//   let now = new Date(endDate).getTime();
//   let countDown = new Date().getTime();
//   let distance = now - countDown;

//   // time calculation for days, hours, minutes and second

//   let distance = dest - now
// var d = Math.floor(diff / (1000* 60*60*24));
// var h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// var m = Math.floor((diff % (1000 * 60 * 60 )) / (1000 * 60));
// var s = Math.floor((diff % (1000 * 60 )) / (1000));

// //output the result in element with id 
// days.innerHTML = d + " <br><span>Days<span> ";
// hours.innerHTML = h + " <br><span>Hours<span> ";
// minutes.innerHTML = m + " <br><span>Minutes<span> ";
// seconds.innerHTML = s + " <br><span>Seconds<span> ";

// //animte sttroke
// dd.style.strokedashoffset = 440 - (440 * d) / 365;
// //365 dayes in an year
// hh.style.strokedashoffset = 440 - (440 * h) / 24;
// //24 hrs in an day
// mm.style.strokedashoffset = 440 - (440 * m) / 60;
// //60 minutes  in an hours
// ss.style.strokedashoffset = 440 - (440 * s) / 60;
// //60 seconds in an seconds

// //animate circle dots
// day_dot.style.transform = 'rotateZ(${d * 0.986}deg)';
// hours_dot.style.transform = 'rotateZ(${h * 15}deg)';
// min_dot.style.transform = 'rotateZ(${m * 6}deg)';
// sec_dot.style.transform = 'rotateZ(${s * 6}deg)';

// // 
// });