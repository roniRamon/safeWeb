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
});
