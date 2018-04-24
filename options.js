document.addEventListener('DOMContentLoaded', () => {

  let timeInput = document.getElementById('set-timer');
  timeInput.onclick = () => saveTime();

  let urlSubmit = document.getElementById('add-url-block');
  urlSubmit.onclick = () => {
    let urlInput = document.getElementById('block-url-input');
    add('urls',urlInput.value);
    urlInput.value = "";
  };

  let keywordSubmit = document.getElementById('add-word-block');
  keywordSubmit.onclick = () => {
    let keywordInput = document.getElementById('block-word-input');
    add('keywords', keywordInput.value);
    keywordInput.value = "";
  };

});

function saveTime(){
  const time = document.getElementById('time').value;

  if(time !== "00:00"){
    chrome.storage.sync.set({"time": time}, () => {
      document.getElementById('time').innerHTML = "";
    });
  }
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
