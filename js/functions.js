
function toUnicodeNBSP (str) {
    return str.replace(/\s/g,'\u00A0');
}

function displaySnippet (arr, parentTag, childTag='p') {
  for(let i=0; i<arr.length; i++) {
    var el = document.createElement(childTag);
    if(arr[i].trim()) {
      var txt = document.createTextNode(toUnicodeNBSP(arr[i]));
      el.appendChild(txt);
      parentTag.appendChild(el);
    }
  }
}

function returnIndex(key, arr2d) {
 for(i=0; i< arr2d.length; i++) {
     if(~ arr2d[i].indexOf(key)) {
         return arr2d[i][0];
     }
 }
}
