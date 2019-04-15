'use strict'
let data = ` 

SOME TO REMEMBER

  £(1)  null == undefined is true
  
  £(2)  myarr[arr.length-1] gives last value of array 
       MNEMONIC: LLL1 (last-length-less-1)
  
  £(3)  PUSH: adds ONE OR MORE elements to end of array and 
       returns the length of new array
       myarr.push('new')  ===  (myarr[myarr.length]="new")
       Mutates: yes
       MNEMONIC: PuLe
  
       (a) myarr.splice(myarr.length,1,'newitem')
       (b) myarr[myarr.length]="newitem"
       (c) myarr.push(new item)               // all equivalent //  PUSH
  
  £(4)  UNSHIFT adds ONE OR MORE elements to beginning of arr and
       returns length of array
       (a) myarr.unshift('zero')
       (b) myarr.splice(0,0,'beforezero')     // all equivalent // unshift
       Mutates: yes
       MNEMONIC: (0, 0, UN)
  
  £(5)  SHIFT removes first element from array and returns it 
       (a) myarr.shift()
       (b) myarr.splice(0,1)                  // all equivalent shift
    
  £(6)  POP  removes last element and returns it
       myarr.pop()
       myarr.splice(myarr.length-1, 1)        // all equivalent pop  
  
  £(7)  typeof null is object (The BIG mistake!)  
  
  £(8)  function must have a return value 
  
  £(9)  Math.floor(Math.random()*(max-min+1))+min;
  
  £(10) const myarr=[[1,2], [3,4], [5,6]];
         for(let i=0; i< myarr.length; i++) 
           for(let j=0; j<myarr[i].length; j++) 
             myarr[i][j]=Math.pow(myarr[i][j],2);
  
  £(11) for(let i of arr)
         for(let j of i)
           c(j*1000)
  
  £(12) for(let i in myarr)
         for (let j in myarr[i])
           myarr[i][j]=Math.pow(myarr[i][j],2)

  £(13) modify in place
        var myarr = [1,2,3,4,5]
        for(let i=0; i<myarr.length; myarr3[i++]=Math.pow(myarr3[i-1],2));
        console.log(myarr);
  
  £(14) function makemulti ({rowNo=3, colNo=2, fn=(a,b)=>[a,b]}={}) {
         let temp = new Array (rowNo);
           for(let i=0; i < rowNo; i++) {
             temp[i]=new Array(colNo);
               for(let j=0; j<colNo; j++)  {
               temp[i][j]=fn(i,j);
              }
           }
         return temp;
       }
  
  £(15) (a) throw 'hello'
       (b) throw 42
       (c) throw true
       (d) throw new Error('message')
       (e) throw new myFunction('message')
  
  £(16) (a) search: (str) => // ? first-index-of : -1
       (b) match:  (str) => // ? [] | null
       (c) exec:   (//)  => str ? [] | null
       (d) test    (//)  => str ? true : false
       "test-exec-regex"
       "match-search-string"
       indexOf for plain strings. search for regex
       (a) search method: search for regex match; return first index or -1;
       (b) match: matches string against regex. return [] or null 
       (c) exec: regex search for match is string. return [] or null
       (d) test: regex search for match. return true or false
  
  £(17) *>+>= !! multiplication higher precedence than add/subtract 
  
  £(18) const z = new Date()     
       z.setDate(z.getDate()+1)    // returns milliseconds
       z.getDate()                
  
  £(19) Math.floor(Math.random())   // gives 0   

         for(x=0; x<100;x++){
           t.push(Math.floor(Math.random()));
         }
        c(Math.max.apply(null,t)) // 0
  
  £(20)  <input list ="mylist" id="myinput">
        <datalist id=mylist>
          <option="myoption">
        <datalist>
        REMEMBER target myinput with JS to get value !!
  
  £(21)  if statement - what is within parens evaluates to truthy or falsy!
  
  £(22)  window.document
              .navigator
              .screen    .availHeight
                         .availWidth
                         .height      // Jason Manibog
                         .width       // Jason Manibog
              .location 
              .history 
              .innerHeight
              .innerWidth
   
  £(23)  var whoami = window.prompt(msg, default)
          // dialog box  (a) msg
                         (b) input box with value = default
                         (c) buttons: OK and cancel
        var bool = confirm(msg);
          // dialog box  (a) msg
                         (b) buttons: OK and cancel
        window.alert(msg)
          // dialog box  (a) msg
                         (b) btn OK
  
  £(24)  Number.isInteger(10)  // Jason Manibog
  
  £(25)  (a) Array.prototype.slice.call(arguments)
        (b) Array.from(arguments) 
        (c) [...arguments] 

        fn(a) {
          a = 42;
          return [a, arguments[0]]
        }
        fn(17)                    // [42, 42]

        fns(a) {
        'use strict';
        a=42;
        return [a, arguments[0]];
        }
        fns(17)                   // [42,17] 
  
  £(26)  'use strict' must come first in script or function
  
  £(27)  null and undefined ABSTRACTLY and STRICTLY equal
        nu==un (and in no other place in language)
  
  £(28)  NaN not equal to anything, including itself
        There is only one value in JS not equal to itself, and that 
        is NaN 
  £(29)  When null or undefined appear on either side of '==',
        true ONLY IF BOTH SIDES are one of undefined or null
  £(30)  Empty string coerces to zero (ROOT OF ALL EVIL)
  
  £(31)  == PREFERS to compare numbers
  
  £(32)  truthy not the same as coercion
  
  £(33)  [] coerces to empty string which coerces to zero
  
  £(34)  "0" =="" is falsei.  YOU ARE COMPARING STRINGS. 
  
  £(35)  arr=[100, 200,300,400]
        arr.slice(1,3)  // [200,300] // new array
        arr.splice(0,0,0);arr  // [0, 100, 200, 300, 400]
        arr.sort(function (a,b) {return a-b})
  
  £(36)  MOO Month (but not in date string) is zero-based
  
  £(37)  var today =new Date()
        new Date(value) 
        new Date('dateString')
        new Date(year, monthIndex, day, hour, minute, seconds, millisec) 
  
  £(38)  new Date(Date.UTC(year, monthIndex,day,hour,minute,seconds,milli))
  
  £(39)  Date.now() is not a constructor
  
  £(40)  All give milliseconds:
        (a) Date.now() 
        (b) mydate.getTime()
        (c) mydate.valueOf() 
        (d) Number(mydate)
  
  £(41)  A day is 84 000 000 milliseconds
  
  £(42)  International date notation is YYYY-MM-DD
  
  £(43)  unixzero = new Date(Date.UTC(1970,0))
  
  £(44)  var moon  = new Date("July 20, 1969 00:20:15")
        var moon2 = new Date("1969-07-20T00:20:15")
        var moon3 = new Date(1969, 06, 20, 0, 20, 18)
        var moon4 = new Date(Date.UTC(1969,6,20,0, 20, 18));
  
  £(45)  today.toLocaleDateString('en-gb', {weekday:'long', month:'long',
                                         day:'numeric', year:'numeric'})
        //  "Saturday, 9 March 2019"
  
  £(46)  str.splice NO SUCH THING 
  
  £(47)  str.slice(begin, end) 
  
  £(48)  str.substring(begin, end)
  
  £(49)  str.substr(begin, howmany) 
  
  £(50)  "thomas".slice(2,4) 
        "thomas".substring(2,4)
        "thomas".substr(2,2)      // all give 'om'
  
  
  £(51)  if statements access if truthy or falsy
  £(52)  falsy list

        (a) 0
        (b) false
        (c) ""
        (d) NaN
        (e) null
        (f) undefined    // 6
        (g) document.all (!!)

        // Obvious 3 + Nan-null-un
         
  
  £(53)  = (assignment.  Low precedence (3) and right-to-left )
  
  £(54)  && looks at expr 1, if FALSE returns expr1 otherwise returns expr2
  
  £(55)  !! looks at expr1, if TRUE returns expr1 otherwise returns expr2
  
  £(56)  ! looks at expr1 and IF TRUE returns false
  
  £(57)  Key:  the && and || operators actually return the value of one
        of the specified operands
  
  £(58)  Some operator precedences 

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
  
  £(59) do{} while() 

  £(60)  document.getElementsByTagName('h4').item(0).innerHTML
        document.getElementsByTagName('h4')[0].innerHTML
                                       // both equivalent
  £(61)  Three ways of adding a class
         (a) para.setAttribute('class', 'divclass');
         (b) para.classList.add('divclass')         // also remove
         (c) para.className="divclass"

        also note:
              document.getElementsByClassName('divclass')[0]
              .classList.remove('divclass')

  £(62)  element.getAttribute('class')
        element.setAttribute('class', 'tom')
        element.removeAttribute('class', 'tom')

  £(63)  const el=document.createElement('h4');
        const txt=document.createTextNode('Hello There');
        el.appendChild(txt);
        //document.body.appendChild(el);
        document.getElementById('myid').appendChild(el);
        el.setAttribute('class', 'tom');

  £(64)  Note:  document.createElement('ul', { is : 'expanding-list' })

  £(65)  window.location.search 
        // "?myname=thomas&myemail=thomasgdowling%40gmail.com"
        window.location.search.substring(1)
        // "myname=thomas&myemail=thomasgdowling%40gmail.com"
        window.location.search.substring(1).split('&')[0].split('=')[0]
        //  "myname"

  £(66) document.forms[0].elements.name.value 
       document.getElementById('myform').elements.name.value
       document.getElementById('myform').elements[0].value
       // equivalent // "thomas"

  £(67) potential targets for submission
       (a) database
       (b) script (go-between)
       (c) webpage

  £(68) form button type=submit                   !! 

  £(69) gopnames(document.forms[0])
       //  [ "0", "1", "2" ]

       gopnames(document.forms[0].elements)
       //  [ "0", "1", "2", "myemail", "btn", "myname" ]  !!

  £(70) document.forms['myform']['name'].value
       document.forms[0].name.value
       document.forms[0].elements.name.value
       // all equivalent (basicform.html)

  £(71) document.forms['myform'].length
       document.forms[0].length
       document.forms[0].elements.length
       // all equivalent 

  £(72) document.forms.myform.method
       document.forms.myform.onsubmit
       document.forms.myform.action 
       // "http://127.0.0.1:5500/sendmeaway.html"

  £(73) input type="submit"> defines a button for submitting the form
        data to a form-handler.

  £(74) Unicode 0Aa -> 48-65-97 (ascii-decimal)   Cavan-Galway-Kerry
               0Aa -> 30-41-61 (ascii-hex,unicode) Kerry-Kerry-Down; 
       uc<lc
       ucltlc

  £(75) "thomas".charAt("thomas".length -1)
 
  £(77)  Objects are mutable

        const a = {
          foo: 'bar'
        }
        const b=a;
        b.foo="daz"
        a.foo      // daz 
        a===b;     // true

  £(77) Strings are immutable

        let aa = "test";
        const bb=aa;
        aa = aa.slice(2);
        bb;                  //   test
        aa;                  //   st

  £(78) Arrays are mutable
        
        const aaa = ["foo", 'bar'];
        const bbb =aaa;
        aaa.push('baz');
        aaa;                 //   [ "foo", "bar", "baz" ] 
        bbb;                 //   [ "foo", "bar", "baz" ]

  £(79) For mutable values, updating state applies across all 
       references to that variable.


 `;

