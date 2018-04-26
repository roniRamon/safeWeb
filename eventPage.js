let createdTabs = {};

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.create( {}, function( tab ) {
     createdTabs[tab.id] = true;
  });
});

// chrome.tabs.onUpdate.addListener(function(tabId, changeInfo) {
//   if( createdTabs[tabId] && changeInfo.url )
//     chrome.tabs.executeScript( tabId, {file: 'content.js'} );
// });

chrome.tabs.onActivated.addListener(function(tabId, changeInfo) {
  if( createdTabs[tabId] && changeInfo.url )
    chrome.tabs.executeScript( tabId, {file: 'content.js'} );
});


chrome.tabs.onCreated.addListener(function(tabId, changeInfo) {
  if( createdTabs[tabId] && changeInfo.url )
    chrome.tabs.executeScript( tabId, {file: 'content.js'} );
});
