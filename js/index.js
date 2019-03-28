// DATA and VARIABLES
data_arr=data.split('£');
let my_output = document.getElementById('output');
//--generate indexed array
data_arr_indexed=[];
for(let i = 0; i<data_arr.length; i++) {
let temp=data_arr[i].split('\n')
  for(let j=0; j< temp.length; j++) {
    if(temp[j].trim()) {
        data_arr_indexed.push([i,temp[j].trim()]);
    }
  }
}

// generate options for datalist
for(let i=0; i<data_arr_indexed.length; i++) {
    if(data_arr_indexed[i][1].trim()) {
      let el2=document.createElement('option');
      el2.value=data_arr_indexed[i][1];
      document.getElementById('advanced_list').appendChild(el2);
    }
}

// initial display
displaySnippet(data_arr[1].split('\n'), my_output);
document.getElementById('advanced_search').value=data_arr_indexed[1][1];

// Event listeners
  //--input box
document.getElementById('advanced_search').addEventListener('input', function () {
  while (my_output.firstChild) {
    my_output.removeChild(my_output.firstChild);
  }
  // console.log(this.value)
  if(returnIndex(this.value, data_arr_indexed)) {
    displaySnippet(data_arr[returnIndex(this.value, data_arr_indexed)].split('\n'), my_output);
  }
});

document.getElementById('advanced_search').addEventListener('focus', function () {
  this.value="";
});

  //--buttons
document.getElementById('btn_plus').addEventListener('click', function () {
  let item = document.getElementById('advanced_search');
  let index=returnIndex(item.value, data_arr_indexed);
    while (my_output.firstChild) {
      my_output.removeChild(my_output.firstChild);
    }
  if(index) {
    displaySnippet(data_arr[++index].split('\n'), my_output)
    item.value=data_arr[index].split('\n')[0].trim();
  } else {
    displaySnippet(data_arr[1].split('\n'), my_output)
    item.value=data_arr[1].split('\n')[0]
  }
});

document.getElementById('btn_minus').addEventListener('click', function () {
  let item = document.getElementById('advanced_search');
  let index=returnIndex(item.value, data_arr_indexed);
    while (my_output.firstChild) {
      my_output.removeChild(my_output.firstChild);
    }
  if(index) {
    displaySnippet(data_arr[--index].split('\n'), my_output)
    item.value=data_arr[index].split('\n')[0].trim();
  }else {
    displaySnippet(data_arr[1].split('\n'), my_output)
    item.value=data_arr[1].split('\n')[0]

  }
})

// last entry
document.getElementById('last_entry').addEventListener('click', function () {
    let item = document.getElementById('advanced_search');
    while (my_output.firstChild) {
      my_output.removeChild(my_output.firstChild);
    }
    displaySnippet(data_arr[data_arr.length-1].split('\n'), my_output)
    item.value=data_arr[data_arr.length-1].split('\n')[0]

})
// first entry
document.getElementById('first_entry').addEventListener('click', function () {
    let item = document.getElementById('advanced_search');
    while (my_output.firstChild) {
      my_output.removeChild(my_output.firstChild);
    }
    displaySnippet(data_arr[1].split('\n'), my_output)
    item.value=data_arr[1].split('\n')[0]

})
//  console.log(data_arr_indexed)
