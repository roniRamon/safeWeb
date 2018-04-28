let defaultKeywords = [
  'porn',
  'bitch',
  'sex',
  'fuck',
  'slut',
  'pusse',
  'cock',
  'cum',
  'nigger',
  'peenus',
  'vagina',
  'blowjob',
  'whore',
  'masturbat'
];
chrome.storage.sync.get(["keywords"], result => {
  if (result["keywords"] === undefined) {
    chrome.storage.sync.set({"keywords": defaultKeywords},() => {});
  }
  //used to reset storage
  // chrome.storage.sync.set({"keywords": []},() => {});
});
document.addEventListener('DOMContentLoaded', () => {

  displayInList('urls');
  displayInList('keywords');


  // let timeInput = document.getElementById('set-timer');
  // timeInput.onclick = () => saveTime();

  let urlSubmit = document.getElementById('add-url-block');
  urlSubmit.onclick = () => {
    let urlInput = document.getElementById('block-url-input');
    if (urlInput.value.length === 0) {
      alert("url can't be empty")
    } else {
      add('urls',urlInput.value);
      urlInput.value = "";
    }
  };

  let keywordSubmit = document.getElementById('add-word-block');
  keywordSubmit.onclick = () => {
    let keywordInput = document.getElementById('block-word-input');
    console.log(keywordInput);
    if (keywordInput.value.length === 0) {
      alert("keyword can't be empty")
    } else {
      add('keywords', keywordInput.value);
      keywordInput.value = "";
    }
  };

  let timeSubmit = document.getElementById('add-time');
  timeSubmit.onclick = () => {
    let timeStart = document.getElementById("time-start").value;
    let timeEnd = document.getElementById("time-end").value;
    if (timeStart === '' || timeEnd === '' || timeStart === 'default' || timeEnd === 'default') {
      alert('select a valid start/end time')
    } else if (timeStart && timeEnd) {
      chrome.storage.sync.set({"time": [timeStart, timeEnd]});
      alert("time saved");
    }
  };

  let timeReset = document.getElementById('reset-time');
  timeReset.onclick = () => {
    chrome.storage.sync.set({"time": []});
    document.getElementById("time-start").value = 'default';
    document.getElementById("time-end").value ='default';
    alert("time reset");
  };

  chrome.storage.sync.get(["time"], res => {
    if (res['time'].length === 0) {
      document.getElementById("time-start").value = 'default';
      document.getElementById("time-end").value ='default';
    } else {
      document.getElementById("time-start").value = res["time"][0];
      document.getElementById("time-end").value = res["time"][1];
    }
  });


});

chrome.storage.onChanged.addListener( (changes, namespace) => {

  let type = Object.keys(changes);
  let newValue = (Object.values(changes)[0].newValue);
  let oldValue = (Object.values(changes)[0].oldValue);

  if(newValue && oldValue && type !== 'time' && newValue.length > oldValue.length){
    let content = newValue[newValue.length - 1];
    addToUl(type[0], content);
  }
  // else if (newValue.length < oldValue.length) {
  //   let content = newValue.diff(oldValue);
  //   let idx = newValue.indexOf(content);
  //   deleteFromUl(type, idx);
  // }

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
    if ((!arr.includes(content)) || content === ''){
      arr.push(content);
      // console.log(arr);
       chrome.storage.sync.set({[type]: arr}, console.log('test'));
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
      chrome.storage.sync.set({[type]: arr}, deleteFromUl(type, idx));
    } else {
      console.log(`${content} is not in storage`);
    }
  });
}

function displayInList(type) {
    chrome.storage.sync.get([type], result => {
      if (type === 'urls'){
        let ulBlock = document.getElementById('ul-block-url');
        let li;

        if (result[type]){
          result[type].forEach( url => {
            li = document.createElement('li');
            li.innerHTML = url;

            let removeBt = document.createElement('a');
            removeBt.setAttribute('id', 'remove-a');
            removeBt.onclick = () => remove('urls', url);
            removeBt.innerHTML = 'X';
            li.appendChild(removeBt);

            ulBlock.appendChild(li);
          });
        }
      }
      else if (type === 'keywords') {
        let ulBlock = document.getElementById('ul-block-word');
        let li;
        if (result[type]){
          result[type].forEach( word => {
            li = document.createElement('li');
            li.innerHTML = word;

            let removeBt = document.createElement('a');
            removeBt.setAttribute('id', 'remove-a');
            removeBt.onclick = () => remove('keywords', word);
            removeBt.innerHTML = 'X';
            li.appendChild(removeBt);

            ulBlock.appendChild(li);
          });
        }
        else {
          displayInList(type);
        }
      }
    });
}

function addToUl(type, content) {
  let ul;
  if(type === 'urls') {
    ul = document.getElementById('ul-block-url');
  }
  else if (type === 'keywords') {
    ul = document.getElementById('ul-block-word');
  }
  else {
    return;
  }
  let li = document.createElement('li');

  li.innerHTML = content;

  let removeBt = document.createElement('a');
  removeBt.setAttribute('id', 'remove-a');
  removeBt.onclick = () => remove(type, content);

  removeBt.innerHTML = 'X';
  li.appendChild(removeBt);
  ul.appendChild(li);

}

function deleteFromUl(type, idx) {
  let ul = type === 'urls'? document.getElementById('ul-block-url') : document.getElementById('ul-block-word');
  ul.removeChild(ul.childNodes[idx+1]);

}
