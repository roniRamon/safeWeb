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
};

function addUrl(url){
  chrome.storage.sync.get(["blockUrls"], result => {
    let blockedUrlsArr = result["blockUrls"]?result["blockUrls"]:[];
    console.log(blockedUrlsArr);
    if (!blockedUrlsArr.includes(url)){
      blockedUrlsArr.push(url);
      chrome.storage.sync.set({"blockUrls" : blockedUrlsArr}, console.log( "array updated"));
    } else {
      console.log("url already in storage");
    }
  });
}

function removeUrl(url){
  chrome.storage.sync.get(["blockUrls"], result => {
    let blockedUrlsArr = result["blockUrls"]?result["blockUrls"]:[];
    let idx = blockedUrlsArr.indexOf(url);
    if (idx !== -1){
      blockedUrlsArr.splice(idx,1);
      chrome.storage.sync.set({"blockUrls" : blockedUrlsArr}, console.log( "array updated"));
    } else {
      console.log("url is not in storage");
    }
  });

}
