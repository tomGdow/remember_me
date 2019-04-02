'use strict';

let data = ` SOME TO REMEMBER

  £(1)  null == undefined is true
  
  £(2)  myarr[arr.length-1] gives last value of array 
       MNEMONIC: LLL1 (last-length-less-1)
  
  £(3)  PUSH:  adds to end and returns the length of new array
       myarr.push('new') is the same as myarr[myarr.length]="new"
       MNEMONIC: APL
  
       myarr.splice(myarr.length,1,'newitem')
       myarr[myarr.length]="newitem"
       myarr.push(new item                    // all equivalent // PUSH
  
  £(4)  UNSHIFT adds to beginning returns length of array
       myarr.unshift('zero')
       myarr.splice(0,0,'beforezero')          // all equivalent // unshift
  
  £(5)  SHIFT removes first element and returns it 
       myarr.shift()
       myarr,splice(0,1)                       // all equivalent shift
    
  £(6)  POP  removes last element and returns it
       myarr.pop()
       myarr.splice(myarr.length-1, 1)         // all equivalent pop  
  
  £(7)  typeof null is object (The BIG mistake!)  
  
  £(8)  function must have a return value, 
  
  £(9)  Math.floor(Math.random()*(max-min+1))+min;
  
  £(10)  for(i=0; i<arr.length; i++)
        for(j=0; j<arr[i].length; j++)
          c(arr[i][j]*100)
  
  £(11) for(i of arr)
         for(j of i)
           c(j*1000)
  
  £(12) for(i in arr)
        for(j in arr[i])
          c(arr[i][j]*5)
  
  £(13) function makemulti ({rowNo=3, colNo=2, fn=(a,b)=>[a,b]}={}) {
         let temp = new Array (rowNo);
           for(i=0; i < rowNo; i++) {
             temp[i]=new Array(colNo);
               for(j=0; j<colNo; j++)  {
               temp[i][j]=fn(i,j);
              }
           }
         return temp;
       }
  
  £(14) throw 'hello'
       throw 42
       throw true
       throw new Error('message')
       throw new myFunction('message')
  
  £(15) search: (str)=> // ? first-index-of : -1
       match:  (str)=> // ? [] | null
       exec:   (//) => str ? [] | null
       test    (//) => str ? true : false
       "test-exec-regex"
       "match-search-string"
       indexOf for plain strings. search for regex
  
  £(16) *>+>= !! multiplication higher precedence than add/substract 
  
  £(17) z = new Date() NOW z.setDate(z.getDate()+1)
  
  £(18) Math.floor(Math.random() gives 0)   
         for(x=0; x<100;x++){
           t.push(Math.floor(Math.random()));
         }
       c(Math.max.apply(null,t)) // 0
  
  £(19)  <input list ="mylist" id="myinput">
        <datalist id=mylist>
          <option="myoption">
        <datalist>
        REMEMBER target myinput with JS to get value !!
  
  £(20)  if statement -what is within parens evaluates to truthy or falsy!
  
  £(21)  window.document
              .navigator
              .screen    .availHeight
                         .availWidth
                         .height      // Jason Manibog
                         .width       // Jason Manibog
              .location 
              .history 
              .innerHeight
              .innerWidth
   
  £(22)  var whoami = window.prompt(msg, default)
          // dialog box  (a) msg
                         (b) input box with value = default
                         (c) buttons: OK and cancel
        var bool = confirm(msg);
          // dialog box  (a) msg
                         (b) buttons: OK and cancel
        window.alert(msg)
          // dialog box  (a) msg
                         (b) btn OK
  
  £(23)  Number.isInteger(10)  // Jason Manibog
  
  £(24)  Array.prototype.slice.call(arguments)
        Array.from(arguments) 
        [...arguments] 
        fn(a) {
          a = 42;
          return [a, arguments[0]]
        }
        fn(17) // []
        fns(a) {
        'use strict';
        a=42;
        return [a, arguments[0]];
        }
        fns(17)  // [17, 42]
  
  £(25)  'use strict' must come first in script or function
  
  £(26)  null and undefined ABTRACTLY and STRICTLY equal
        nu==un (and in no other place in language)
  
  £(27)  NaN not equal to anything, including itself
        There is only one value in JS not equal to itself, and that 
        is NaN 
  £(28)  When null or undefined appear on either side of '==',
        true ONLY IF BOTH SIDES are one of undefined or null
  £(29)  Empty string coerces to zero (ROOT OF ALL EVIL)
  
  £(30)  == PREFERS to compare numbers
  
  £(31)  truthy not the same as coercion
  
  £(32)  [] coerces to empty string which coerces to zero
  
  £(33)  "0" =="" is false YOU ARE COMPARING STRINGS. 
  
  £(34)  arr=[100, 200,300,400]
        arr.slice(1,3)  // [200,300] // new array
        arr.splice(0,0,0);arr  // [0, 100, 200, 300, 400]
        arr.sort(function (a,b) {return a-b})
  
  £(35)  MOO Month (but not in date string) is zero-based
  
  £(36)  var today =new Date()
        new Date(value) 
        new Date('dateString')
        new Date(year, monthIndex, day, hour, minute, seconds, millisec) 
  
  £(37)  new Date(Date.UTC(year, monthIndex,day,hour,minute,seconds,milli))
  
  £(38)  Date.now() is not a constructor
  
  £(39)  Date.now() mydate.getTime(), mydate.valueOf() and Number(mydate) al
        give milliseconds
  
  £(40)  A day is 84 000 000 milliseconds
  
  £(41)  International date notation is YYYY-MM-DD
  
  £(42)  unixzero = new Date(Date.UTC(1970,0))
  
  £(43)  var moon  = new Date("July 20, 1969 00:20:15")
        var moon2 = new Date("1969-07-20T00:20:15")
        var moon3 = new Date(1969, 06, 20, 0, 20, 18)
        var moon4 = new Date(Date.UTC(1969,6,20,0, 20, 18));
  
  £(44)  today.toLocaleDateString('en-gb', {weekday:'long', month:'long',
                                         day:'numeric', year:'numeric'})
        //  "Saturday, 9 March 2019"
  
  £(45)  str.splice NO SUCH THING 
  
  £(46)  str.slice(begin, end) 
  
  £(47)  str.substring(begin, end_)
  
  £(48)  str.substr(begin, howmany) 
  
  £(49)  "thomas".slice(2,4) 
        "thomas".substring(2,4)
        "thomas".substr(2,2)      // all give 'om'
  
  
  £(50)  if statements access if truthy or falsy
  £(51)  falsy list
        0
        false
        ""
        NaN
        null
        undefined    // 6
        document.all (!!)
  
  £(52)  = (assignment.  Low precedence (3) and right-to-left )
  
  £(53)  && looks at expr 1, if FALSE returns expr1 otherwise returns expr2
  
  £(54)  !! looks at expr1, if TRUE returns expr1 otherwise returns expr2
  
  £(55)  ! looks at expr1 and IF TRUE returns false
  
  £(56)  Key the && and || operators actually return the value of one
        of the specified operands
  
  £(57)  Some operator precedences 

           20   grouping
           19   . and ['myval']
           18   ++ (postfix) 
           15   exponentiation
           14   multiplication and division and remainder(%)
           13   add subtract
           10   == 
            6   &&
            5   || 
            3   = 
            1   , (comma) 
  
  £(58) do{} while() 

  £(59)  document.getElementsByTagName('h4').item(0).innerHTML
        document.getElementsByTagName('h4')[0].innerHTML
                                       // both equivalent
  £(60)  Three ways of adding a class
         (a) para.setAttribute('class', 'divclass');
         (b) para.classList.add('divclass')         // also remove
         (c) para.className="divclass"

        also note:
              document.getElementsByClassName('divclass')[0]
              .classList.remove('divclass')

  £(61)  element.getAttribute('class')
        element.setAttribute('class', 'tom')
        element.removeAttribute('class', 'tom')

  £(62)  const el=document.createElement('h4');
        const txt=document.createTextNode('Hello There');
        el.appendChild(txt);
        //document.body.appendChild(el);
        document.getElementById('myid').appendChild(el);
        el.setAttribute('class', 'tom');

  £(63)  Note:  document.createElement('ul', { is : 'expanding-list' })

  £(64)  window.location.search 
        // "?myname=thomas&myemail=thomasgdowling%40gmail.com"
        window.location.search.substring(1)
        // "myname=thomas&myemail=thomasgdowling%40gmail.com"
        window.location.search.substring(1).split('&')[0].split('=')[0]
        //  "myname"

  £(65) document.forms[0].elements.name.value 
       document.getElementById('myform').elements.name.value
       document.getElementById('myform').elements[0].value
       // equivalent // "thomas"

  £(66) potential targets for submission
       (a) database
       (b) script (go-between)
       (c) webpage

  £(67) form button type=submit                   !! 

  £(68) gopnames(document.forms[0])
       //  [ "0", "1", "2" ]

       gopnames(document.forms[0].elements)
       //  [ "0", "1", "2", "myemail", "btn", "myname" ]  !!

  £(69) document.forms['myform']['name'].value
       document.forms[0].name.value
       document.forms[0].elements.name.value
       // all equivalent (basicform.html)

  £(70) document.forms['myform'].length
       document.forms[0].length
       document.forms[0].elements.length
       // all equivalent 

  £(71) document.forms.myform.method
       document.forms.myform.onsubmit
       document.forms.myform.action 
       // "http://127.0.0.1:5500/sendmeaway.html"

  £(72) input type="submit"> defines a button for submitting the form
        data to a form-handler.

  £(73) Unicode 0Aa -> 48-65-97 (ascii)   Cavan-Galway-Kerry
               0Aa -> 30-41-61 (unicode) Kerry-Kerry-Down; 
       uc<lc
       ucltlc

  £(74) "thomas".charAt("thomas".length -1)




 `

