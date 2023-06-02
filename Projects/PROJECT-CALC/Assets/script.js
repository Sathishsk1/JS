const inputkey = document.getElementById("inputkey");
const inputValue = document.getElementById("inputValue");

document.getElementById("btnInsert").onclick = function () {
     const key = inputkey.value; 
     const value = inputValue.value;

if (key && value) {
   localstorage.setItem(key, value);
    window.location.reload();

} else {
    alert("Must Enter Value");

}
};
if (localstorage.length == 0) {

    document.getElementById("btnAllDelete").style.display = "none"; document.getElementById(
    "autoFILL"
    ).innerHTML= `Add Some Key Value Records using INSERT box.`; document.getElementById("avialRecords").style.display = "none";
 }
 if (localstorage != 0) {
    document.getElementById("avialrecords").innerHTML = "Records Available in Localstorage";
 }
 
    for (let index = 0; index < localstorage.length; index++){ const key = localstorage.key(index);
    const value = localstorage.getItem(key);
    
    document.getElementById(
     "IsOutput"
    ).innerHTML += `<hr><br> Key is :${key} <br> Value is: ${value} <br><br>`;
 }
      document.getElementById("btnAllDelete").onclick= function () {
        localstorage.clear();
        location.reload();
    };
    
       document.getElementById("btnReadData").onclick= function () {
       const inputReadDataKeyNew = document.getElementById("inputReadDatakey").value;
       const readedData = localstorage.getItem(inputReadDataKeyNew); 
       if (inputReadDataKeyNew) {
       document.getElementById(
       "readedDataHere"
     ).innerHTML = `Data Value of requested KEY is: ${readedData}`;
    }
    };