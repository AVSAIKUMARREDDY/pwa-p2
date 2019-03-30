var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query)
{
  para=query[i].substring(1).split("=");
  paravalue=parseInt(para[1]);
}

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
var info=store.get(paravalue);
info.onsuccess=function(data)
{
  console.log(data);
  personalinfo(data.target.result);
}
}
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function personalinfo(pi)
{
  var imag=document.createElement("img");
  imag.src="images/actor.svg";
  imag.alt=pi.details[0];
  var name=document.createElement("h2");
  name.textContent=pi.details[0];
  var mobile=document.createElement("h3");
  mobile.textContent=pi.details[1];
  var email=document.createElement("h3");
  email.textContent=pi.details[2];
  left.append(imag);
  left.append(name);
left.append(mobile);
  left.append(email);
  var table=document.createElement("table");
  table.border="2";
  var tr1="<tr><th>Qualification</th><th>Institute</th><th>Group</th><th>Percentage/cgpa</th><th>yop</th></tr>";
  var tr2="";
   tr2=tr2+"<tr>";
    for(j=0;j<pi.graduate.length;j++)
    {
      tr2=tr2+"<td>"+pi.graduate[j]+"</td>";
    }
    tr2=tr2+"</tr>";
    for(j=0;j<pi.graduate.length;j++)
    {
      tr2=tr2+"<td>"+pi.intermediate[j]+"</td>";
    }
    tr2=tr2+"</tr>";

    for(j=0;j<pi.graduate.length;j++)
    {
      tr2=tr2+"<td>"+pi.lower[j]+"</td>";
    }
    tr2=tr2+"</tr>";





  table.innerHTML=tr1+tr2;
  right.append(table);








}
