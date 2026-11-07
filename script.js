// Important Dates
const FeliBirthday = new Date(1995, 9, 19, 23, 0, 0); // месяц 0-11 → 9 = октябрь
const SashaBirthday = new Date(2001, 8, 3, 0, 0, 0);  // 8 = сентябрь
const SashaChristeningDate = new Date(2021, 5, 20, 0, 0, 0);  // 5 = июнь
const loveStartDate = new Date(2026, 8, 11, 13, 0, 0); // 8 = сентябрь
const loveMeetDate = new Date(2026, 11, 1, 13, 0, 0); // 8 = сентябрь

function updateAllCounters() {
  const now = new Date();
  
  // Update Love Duration
  updateLoveDuration(now);
  
  // Update Next Anniversary
  updateNextAnniversary(now);

    // Update Фели's Birthday Countdown
  updateBirthdayCountdown(now, FeliBirthday, "Feli");
  
  // Update Саша's Birthday Countdown
  updateBirthdayCountdown(now, SashaBirthday, "Sasha");

  // Update Саша's Christening Countdown
  updateSashaChristeningCountdown(now, SashaChristeningDate, "Sasha");

  // Update Next Meeting
  updateNextMeeting(now);
}

function updateLoveDuration(now) {
  const difference = now - loveStartDate;
  
  // Calculate years
  const loveStartYear = loveStartDate.getFullYear();
  const currentYear = now.getFullYear();
  let years = currentYear - loveStartYear;
  
  // Adjust if birthday hasn't occurred yet this year
  const tempDate = new Date(loveStartDate);
  tempDate.setFullYear(currentYear);
  if (now < tempDate) {
    years--;
  }
  
  // Calculate days, hours, minutes, seconds
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
  document.getElementById("love-years").textContent = years;
  document.getElementById("love-days").textContent = days;
  document.getElementById("love-hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("love-minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("love-seconds").textContent = seconds.toString().padStart(2, "0");
}

function updateNextAnniversary(now) {
  // Get next anniversary date (this year or next year)
  const nextAnniv = new Date(loveStartDate);
  nextAnniv.setFullYear(now.getFullYear());
  
  if (now > nextAnniv) {
    nextAnniv.setFullYear(now.getFullYear() + 1);
  }
  
  const difference = nextAnniv - now;
  
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
  document.getElementById("anniv-days").textContent = days;
  document.getElementById("anniv-hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("anniv-minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("anniv-seconds").textContent = seconds.toString().padStart(2, "0");
}

function updateNextMeeting(now) {
  // Get next anniversary date (this year or next year)
  const nextMeet = new Date(loveMeetDate);
  nextMeet.setFullYear(now.getFullYear());
  
  if (now > nextMeet) {
    nextMeet.setFullYear(now.getFullYear() + 1);
  }
  
  const difference = nextMeet - now;
  
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
  document.getElementById("meet-days").textContent = days;
  document.getElementById("meet-hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("meet-minutes").textContent = minutes.toString().padStart(2, "0");
  }


function updateSashaChristeningCountdown(now) {
  // Get next anniversary date (this year or next year)
  const nextChrist = new Date(SashaChristeningDate);
  nextChrist.setFullYear(now.getFullYear());
  
  if (now > nextChrist) {
    nextChrist.setFullYear(now.getFullYear() + 1);
  }
  
  const difference = nextChrist - now;
  
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
  document.getElementById("christ-days").textContent = days;
  document.getElementById("christ-hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("christ-minutes").textContent = minutes.toString().padStart(2, "0");
}


function updateBirthdayCountdown(now, birthday, prefix) {
  // Get next birthday (this year or next year)
  const nextBday = new Date(birthday);
  nextBday.setFullYear(now.getFullYear());
  
  if (now > nextBday) {
    nextBday.setFullYear(now.getFullYear() + 1);
  }
  
  const difference = nextBday - now;
  
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  
  document.getElementById(`${prefix}-days`).textContent = days;
  document.getElementById(`${prefix}-hours`).textContent = hours.toString().padStart(2, "0");
  document.getElementById(`${prefix}-minutes`).textContent = minutes.toString().padStart(2, "0");
}

// Initialize and update every second
updateAllCounters();
setInterval(updateAllCounters, 1000);
