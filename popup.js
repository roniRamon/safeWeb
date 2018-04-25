import  { add }  from './options.js';

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
