
chrome.tabs.onActivated.addListener(function(tabId, changeInfo) {
    chrome.tabs.executeScript( tabId, {file: 'content.js'} );
});


chrome.tabs.onCreated.addListener(function(tabId, changeInfo) {
    chrome.tabs.executeScript( tabId, {file: 'content.js'} );
});
