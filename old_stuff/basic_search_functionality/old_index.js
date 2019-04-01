// variables and data 
let my_output=document.getElementById('output');
data_arr=data.split('£');
data_first_line =[];
for(let i=1; i < data_arr.length; i++) {
  data_first_line.push(data_arr[i].split('\n')[0]);
}

// generate options for datalist
for(let i=0; i<data_first_line.length; i++) {
  el2=document.createElement('option');
  el2.value=data_first_line[i];
  document.getElementById('input_list').appendChild(el2);
}

// initial display
displaySnippet(data_arr[1].split('\n'), my_output);
document.getElementById('input_box').value=data_first_line[0];

// Event Listeners
  //--Next button
document.getElementById('btn_plus').addEventListener('click', function () {
  let item = document.getElementById('input_box');
  let index=data_first_line.indexOf(item.value)
    while (my_output.firstChild) {
      my_output.removeChild(my_output.firstChild);
    }
    displaySnippet(data_arr[index +2].split('\n'), my_output)
    item.value=data_first_line[index+1];
});

  //--Previous Button
document.getElementById('btn_minus').addEventListener('click', function () {
  let item = document.getElementById('input_box');
  let index=data_first_line.indexOf(item.value)
  while (my_output.firstChild) {
    my_output.removeChild(my_output.firstChild);
  }
  displaySnippet(data_arr[index].split('\n'), my_output)
  item.value=data_first_line[index-1];
})
  //--input box
document.getElementById('input_box').addEventListener('input', function () {
  while (my_output.firstChild) {
    my_output.removeChild(my_output.firstChild);
  }
  displaySnippet(data_arr[data_first_line.indexOf(this.value)+1].split('\n'), my_output)

});

