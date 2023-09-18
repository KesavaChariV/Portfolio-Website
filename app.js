var names='KESAVACHARI'
let i=0,s='';
let letter=document.querySelector('#nam');
setInterval(function fun(){
    if(i<=names.length){
    letter.innerHTML=s;
    s=s+names[i];
    i+=1;
    if(i>names.length){
        s=''
        i=0
    }
    }
    
},300)