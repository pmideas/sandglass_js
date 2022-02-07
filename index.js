
( function type(){
    var icon = document.querySelector("#addicon");

setTimeout(()=>{
    icon.style.color="#d7ba89";
    icon.innerHTML="&#xf252";
},1000);

setTimeout(()=>{
    icon.style.color="#b68e65";
    icon.innerHTML="&#xf251"; 
},3000);

setTimeout(()=>{
    icon.style.color="#986b41";
    icon.innerHTML="&#xf250"; 
},5000);

setTimeout(()=>{
    icon.style.color="#b37b50";
    icon.innerHTML="&#xf253"; 
},7000);

setInterval(type,9000);
}())
