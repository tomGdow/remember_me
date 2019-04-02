'use strict'
// DATA and VARIABLES
const data_arr=data.split('£');
for(let i=0; i<data_arr.length; i++) {
  displaySnippet(data_arr[i].split('\n'), document.getElementById('snippets'), 'div')
}
const snippets=document.getElementById('snippets');
const collection=snippets.getElementsByTagName('div');
const stickyScrollOne=stickyScrollFactory();

// set some ids;
collection[1].setAttribute('id', `item_first`);
collection[collection.length-1].setAttribute('id', 'item_last');
for(let i=0; i<collection.length; i++) {
    if(~collection[i].innerHTML.search(/\(50\)/))
      collection[i].setAttribute('id', `item_50`)
}
 // Event Listeners
window.addEventListener('scroll', function() {
  stickyScrollOne()
});
