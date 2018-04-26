

chrome.tabs.onActivated.addListener(function(tabId, changeInfo) {
  let arrRes;
  chrome.tabs.query({currentWindow: true, active: true}, tab => {
    let activeTabUrl = tab[0].url;
    activeTabUrl = activeTabUrl.split('/');
    activeTabUrl = `${activeTabUrl[0]}//${activeTabUrl[2]}`;
    //get all blocked url from chrome storge
    chrome.storage.sync.get(['urls'], res => {
      arrRes = Array.from(res.urls);
      if (arrRes.includes(activeTabUrl)){
        
      }
    });
  });

    chrome.tabs.executeScript( tabId.tabId, {file: 'content.js'} );
});


chrome.tabs.onCreated.addListener(function(tabId, changeInfo) {
    chrome.tabs.executeScript( tabId.tabId, {file: 'content.js'} );
});
