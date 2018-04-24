document.addEventListener('DOMContentLoaded', () => {

  let timeInput = document.getElementById('set-timer');
  timeInput.onclick = () => saveTime();
});

function saveTime(){
  const time = document.getElementById('time').value;

  if(time !== "00:00"){
    chrome.storage.sync.set({"time": time}, () => {
      document.getElementById('time').innerHTML = "";
    });
  }
}
