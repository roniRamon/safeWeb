let arrRes2 = [];
console.log('test');
chrome.storage.sync.get(['keywords'], res => {
  arrRes2.push(Array.from(res.keywords));
  document.querySelectorAll('p,span,a').forEach(el => {
    arrRes2.forEach( word => {
      if(el.innerHTML.toLowerCase().includes(word)){

        el.parentNode.remove();
      }
    });
  });
});
