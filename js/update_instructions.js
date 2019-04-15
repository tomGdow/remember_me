// DATA and VARIABLES
'use strict'
let data_log=my_update.replace(/£\(/g, '@(');
data_log=data_log.split('@');
const stickyValue=document.getElementById("navbar").offsetTop;
const stickyNode=document.getElementById('navbar');
const stickyScrollTwo=stickyScrollFactory();

// generate HTML tags
for(let i=0; i<data_log.length; i++) {
  let el = createTag({tagType:'p', tagClass:'instructions'});
  let txt=createTxtNode(data_log[i]);
  appendNode(el, txt);
  appendNodeById('log_container', el)
 }

let el=createTag({tagType:'div', tagId:'log_container_header'});
appendNodeById('log_container', el);

for(let i=0; i<txtString.length; i++) {
let el = createTag({tagType:'div', tagClass:'instructions_header'});
var txt = createTxtNode(txtString[i]);
appendNode(el,txt);
appendNodeById('log_container_header', el)
}

//  Event Listeners
window.addEventListener('scroll', function() {
  stickyScrollTwo();
});
