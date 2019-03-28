
data_arr=data.split('£');

// function displaySnippet (arr, parentTag) {
//   for(let i=0; i<arr.length; i++) {
//     var el = document.createElement('div');
//     if(arr[i].trim()) {
//       var txt = document.createTextNode(arr[i].replace(/\s\s/g,'\u00A0\u00A0'));
//       el.appendChild(txt);
//       parentTag.appendChild(el);
//     }
//   }
// }

for(i=0; i<data_arr.length; i++) {
  displaySnippet(data_arr[i].split('\n'), document.getElementById('snippets'), 'div')
}