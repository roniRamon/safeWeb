
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

chrome.runtime.sendMessage({todo: "checkTime"});
// 
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
//   console.log('in content');
//   if (request.todo === 'time-invalid') {
//     document.write("<h1>wrong</h1>")
//   }
// });
