
chrome.tabs.onActivated.addListener(function(tabId, changeInfo) {
  if( changeInfo.url )
    chrome.tabs.executeScript( tabId, {file: 'content.js'} );
});


chrome.tabs.onCreated.addListener(function(tabId, changeInfo) {
  if( changeInfo.url )
    chrome.tabs.executeScript( tabId, {file: 'content.js'} );
});
