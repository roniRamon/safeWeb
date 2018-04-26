let arrRes;
chrome.storage.sync.get(['keywords'], res => {
  arrRes = Array.from(res.keywords);
  document.querySelectorAll('p,span,a').forEach(el => {
    arrRes.forEach( word => {
      if(el.innerHTML.toLowerCase().includes(word)){
        el.parentNode.parentNode.remove();
      }
    });
  });
});
