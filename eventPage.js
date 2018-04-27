chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
  let arrRes;
  chrome.tabs.query({currentWindow: true, active: true}, tab => {
    let activeTabUrl = tab[0].url;
    activeTabUrl = activeTabUrl.split('/');
    activeTabUrl = `${activeTabUrl[0]}//${activeTabUrl[2]}`;
    //get all blocked url from chrome storge
    chrome.storage.sync.get(['urls', 'time'], res => {
      let startHour = res[time][0];
      let endHour = res[time][1];
      arrRes = Array.from(res.urls);
      if (arrRes.includes(activeTabUrl)){
        chrome.tabs.update(tabId.tabId, {url: chrome.runtime.getURL("404.html") });
      }
    });
  });

  chrome.tabs.executeScript( tabId.tabId, {file: 'content.js'} );
});

// chrome.tabs.onActivated.addListener(function(tabId, changeInfo) {
// });
//
//
// chrome.tabs.onCreated.addListener(function(tabId, changeInfo) {
//     chrome.tabs.executeScript( tabId.tabId, {file: 'content.js'} );
// });
