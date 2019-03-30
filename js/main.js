function submitData(){
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var mobile=document.querySelector("#mobile").value;
  var email=document.querySelector("#email").value;
  var address=document.querySelector("#address").value;
  var gyop=document.querySelector("#gyop").value;
  var iyop=document.querySelector("#iyop").value;
  var syop=document.querySelector("#syop").value;

  // var education=document.querySelector("#education").value;
  var ginstitute=document.querySelector("#ginstitute").value;
  var degree=document.querySelector("#degree").value;
  var branch=document.querySelector("#branch").value;
  var gcgpa=document.querySelector("#gcgpa").value;
  // var intermediate=document.querySelector("#intermediate").value;
  var iinstitute=document.querySelector("#iinstitute").value;
  var group=document.querySelector("#group").value;
  var percentage=document.querySelector("#ipercentage").value;
  // var technical=document.querySelector("#technical").value;
  var school=document.querySelector("#sinstitute").value;
  var board=document.querySelector("#board").value;
  var scgpa=document.querySelector("#scgpa").value;
  var skills=document.querySelector("#Skills").value;
  // Indexed DB implementation
  var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB ;
if(!idb in window)
{
  console.log("indexedDB is not supported");
}
// IndexedDB creation
var open=idb.open("storeData",1);
console.log("IndexedDB is created");
open.onupgradeneeded=function(e){
  var request=e.target.result;
  var store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
  console.log("store is created");
}
open.onerror=function(error)
{
console.log("error is created");
}
open.onsuccess=function(e)
{
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");
  store=transaction.objectStore("formdata");
  store.put({
    career:[career,"","",""],
        details:[name,mobile,email,address],
    graduate:[degree,ginstitute,branch,gcgpa,gyop],
    intermediate:["intermediate",iinstitute,group,percentage,iyop],
    lower:[board,school,"no group",scgpa,syop],
    skills:[skills,"","","",""]



  });
}
window.open("index.html");
}
