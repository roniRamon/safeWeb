chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
  let arrRes;
  chrome.tabs.query({currentWindow: true, active: true}, tab => {
    let activeTabUrl = tab[0].url;
    activeTabUrl = activeTabUrl.split('/');
    activeTabUrl = `${activeTabUrl[2]}`;
    //get all blocked url from chrome storge
    chrome.storage.sync.get(['urls'], res => {
      arrRes = Array.from(res.urls);
      if (arrRes.join('').includes(activeTabUrl)){
        chrome.tabs.update(tabId.tabId, {url: chrome.runtime.getURL("404.html") });
      }
    });
  });

  chrome.tabs.executeScript( tabId.tabId, {file: 'content.js'} );
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  if (request.todo === 'checkTime') {
    chrome.tabs.query({currentWindow: true, active: true}, tab => {
      chrome.storage.sync.get(['time'], res => {
        if (res['time'].length !== 0) {
          let startHour = res['time'][0];
          let endHour = res['time'][1];
          let currentTime = new Date();
          let timeStr = "";
          if (currentTime.getHours() < 10 && currentTime.getMinutes() < 10) {
            timeStr = `0${currentTime.getHours()}0${currentTime.getMinutes()}`;
          } else if (currentTime.getHours() < 10) {
            timeStr =  `0${currentTime.getHours()}${currentTime.getMinutes()}`;
          } else if (currentTime.getMinutes() < 10) {
            timeStr = `${currentTime.getHours()}0${currentTime.getMinutes()}`;
          } else {
            timeStr = `${currentTime.getHours()}${currentTime.getMinutes()}`;
          }
          if (timeStr < (startHour + '00') || timeStr > (endHour + '00')){
            chrome.tabs.query({currentWindow: true, active: true}, tab => {
              chrome.tabs.update(tab[0].id, {url: chrome.runtime.getURL("404.html") });
            });
          }
        }
      });
    });
  }
});

// chrome.tabs.onActivated.addListener(function(tabId, changeInfo) {
//   chrome.tabs.executeScript( tabId.tabId, {file: 'content.js'} );
// });
//
//
// chrome.tabs.onCreated.addListener(function(tabId, changeInfo) {
//     chrome.tabs.executeScript( tabId.tabId, {file: 'content.js'} );
// });
