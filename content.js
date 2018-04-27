
chrome.storage.sync.get(['keywords'], res => {
  let arrRes2 = Array.from(res.keywords);
  document.querySelectorAll('p,span,a,cite').forEach(el => {
    arrRes2.forEach( word => {
      if(el.innerHTML.toLowerCase().includes(word)){

        el.parentNode.remove();
      }
    });
  });
});
