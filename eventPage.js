chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
  let arrRes;
  chrome.tabs.query({currentWindow: true, active: true}, tab => {
    let activeTabUrl = tab[0].url;
    activeTabUrl = activeTabUrl.split('/');
    activeTabUrl = `${activeTabUrl[0]}//${activeTabUrl[2]}`;
    //get all blocked url from chrome storge
    chrome.storage.sync.get(['time'], res => {
      arrRes = Array.from(res.urls);
      if (arrRes.join('').includes(activeTabUrl)){
        chrome.tabs.update(tabId.tabId, {url: chrome.runtime.getURL("404.html") });
      }
    });
  });

  chrome.tabs.executeScript( tabId.tabId, {file: 'content.js'} );
});
// chrome.storage.sync.get(['time'], res => {
//   let startHour = res['time'][0];
//   let endHour = res['time'][1];
//   let currentTime = new Date();
//   let timeStr = `${currentTime.getHours()}${currentTime.getMilliseconds()}`;
//   console.log(timeStr);
//   if (timeStr < (startHour + '00') || timeStr > (startHour + '00')){
//     window.location = chrome.runtime.getURL("404.html");
//   }
// });
// chrome.tabs.onActivated.addListener(function(tabId, changeInfo) {
//   chrome.tabs.executeScript( tabId.tabId, {file: 'content.js'} );
// });
//
//
// chrome.tabs.onCreated.addListener(function(tabId, changeInfo) {
//     chrome.tabs.executeScript( tabId.tabId, {file: 'content.js'} );
// });
