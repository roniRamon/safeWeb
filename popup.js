function add(type, content){
  chrome.storage.sync.get([type], result => {
    let arr = result[type] ? result[type]:[];
    if (!arr.includes(content)){
      arr.push(content);
      console.log(arr);
      console.log(`${content}`);
      chrome.storage.sync.set({[type]: arr}, console.log('add to storage'));
    } else {
      console.log(`${content} already in storage`);
    }
  });
}

document.addEventListener('DOMContentLoaded', () =>{
  let urlSubmit = document.getElementById('add-url-block');
  urlSubmit.onclick = () => {
    let urlInput = document.getElementById('url-to-block');
    add('urls',urlInput.value);
    //alert(`url saved!${urlInput}`);
    urlInput.value = "";
  };

  let keywordSubmit = document.getElementById('add-word-block');
  keywordSubmit.onclick = () => {
    let keywordInput = document.getElementById('keyword-to-block');
    add('keywords', keywordInput.value);
    //alert(`keyword saved! ${keywordInput}`);
    keywordInput.value = "";
  };

  let optionLink = document.getElementById('link-to-option');
  optionLink.onclick = () => {
    chrome.tabs.create({'url': "/options.html" } )
  }

  let timeSpan = document.getElementById('time-span');
  chrome.storage.sync.get(['time'], res => {
    timeSpan.innerHTML = `${res['time'][0]}:00 - ${res['time'][1]}:00`
  });
});
