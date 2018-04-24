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

  // chrome.storage.sync.get(["blockedUrls"], function(res) {
    // let blockedUrlsArr = res["blockedUrls"] ? res["blockedUrls"] : [];
    // console.log(res.blockedUrlsArr);
    // blockedUrlsArr.push("google.com");
    // blockedUrlsArr.push("google22.com");
    // chrome.storage.sync.set({"blockedUrls" : blockedUrlsArr}, console.log( "array updated"));
  // });
}

function add(type, content){
  chrome.storage.sync.get([type], result => {
    let arr = result[type] ? result[type]:[];
    if (!arr.includes(content)){
      arr.push(content);
      console.log(arr);
      chrome.storage.sync.set({[type]: arr}, console.log( "array updated"));
    } else {
      console.log(`${content} already in storage`);
    }
  });
}

function remove(type, content){
  chrome.storage.sync.get([type], result => {
    let arr = result[type] ? result[type]:[];
    let idx = arr.indexOf(content);
    if (idx !== -1){
      arr.splice(idx,1);
      chrome.storage.sync.set({[type]: arr}, console.log( "array updated"));
    } else {
      console.log(`${content} is not in storage`);
    }
  });
}
