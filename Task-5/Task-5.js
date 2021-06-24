function IncrementStorage(){
    var localButton=document.querySelector('#local');
    var localCount=document.querySelector('#localStorageCount');
    
    var sessionButton=document.querySelector('#session');
    var sessionCount=document.querySelector('#sessionStorageCount');
      
    if(!localStorage.getItem('localScore')){
        localStorage.setItem('localScore',0);
    }
    
    if(!sessionStorage.getItem('sessionScore')){
        sessionStorage.setItem('sessionScore',0);
    }
    
    localCount.innerHTML = localStorage.getItem('localScore');
    sessionCount.innerHTML = sessionStorage.getItem('sessionScore');
    
    localButton.onclick=()=>{
        var currentValue = parseInt(localStorage.getItem('localScore')) + 1;
        localStorage.setItem('localScore',currentValue);
        localCount.innerHTML = currentValue;
    }
    sessionButton.onclick=()=>{
        var currentValue = parseInt(sessionStorage.getItem('sessionScore')) + 1;
        sessionStorage.setItem('sessionScore',currentValue);
        sessionCount.innerHTML=currentValue;
    }
    
    window.onstorage=()=>{
        localCount.innerHTML = parseInt(localStorage.getItem('localScore'));
    }
    }