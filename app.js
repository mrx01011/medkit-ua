(function(){
  var ok=['uk','ru','en'],l=null;
  try{l=localStorage.getItem('lang')}catch(e){}
  if(ok.indexOf(l)<0){var n=(navigator.language||'uk').slice(0,2);l=n==='ru'?'ru':n==='en'?'en':'uk'}
  function set(x){document.documentElement.lang=x;try{localStorage.setItem('lang',x)}catch(e){}
    document.querySelectorAll('.langs button').forEach(function(b){b.classList.toggle('on',b.dataset.l===x)})}
  document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('.langs button').forEach(function(b){b.onclick=function(){set(b.dataset.l)}});set(l)});
  document.documentElement.lang=l;
})();
