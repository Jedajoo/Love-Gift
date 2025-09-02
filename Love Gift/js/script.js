/* script.js */
/* Countdown: target = now + 7 days from load */
function startWeekCountdown(elId){
  const el = document.getElementById(elId);
  if(!el) return;
  const now = new Date();
  const target = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days
  function tick(){
    const diff = target - new Date();
    if(diff <= 0){
      el.innerHTML = "<div class='small-muted'>Waktunya tiba 💌</div>";
      clearInterval(timer);
      return;
    }
    const s = Math.floor(diff/1000);
    const days = Math.floor(s / (24*3600));
    const hours = Math.floor((s % (24*3600)) / 3600);
    const minutes = Math.floor((s % 3600) / 60);
    const seconds = s % 60;
    el.innerHTML = `
      <div class="countdown">
        <div class="item"><div class="small-muted">Days</div><div style="font-weight:700;font-size:1.1rem">${String(days).padStart(2,'0')}</div></div>
        <div class="item"><div class="small-muted">Hours</div><div style="font-weight:700;font-size:1.1rem">${String(hours).padStart(2,'0')}</div></div>
        <div class="item"><div class="small-muted">Minutes</div><div style="font-weight:700;font-size:1.1rem">${String(minutes).padStart(2,'0')}</div></div>
        <div class="item"><div class="small-muted">Seconds</div><div style="font-weight:700;font-size:1.1rem">${String(seconds).padStart(2,'0')}</div></div>
      </div>
    `;
  }
  tick();
  const timer = setInterval(tick, 1000);
}

/* Optional small: attach handlers if needed later */
document.addEventListener('DOMContentLoaded', function(){
  // If a countdown element present with id "countdown", start it
  startWeekCountdown('countdown');
});
