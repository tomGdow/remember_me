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
  
  £(4)  ...PUSH
       (a) myarr.splice(myarr.length,1,'newitem')
       (b) myarr[myarr.length]="newitem"
       (c) myarr.push(new item)               // all equivalent //  PUSH
  
  £(5)  UNSHIFT adds ONE OR MORE elements to beginning of arr and
       returns length of array
       (a) myarr.unshift('zero')
       (b) myarr.splice(0,0,'beforezero')     // all equivalent // unshift
       Mutates: yes
       MNEMONIC: (0, 0, UN)
  
  £(6)  SHIFT removes first element from array and returns it 
       (a) myarr.shift()
       (b) myarr.splice(0,1)                  // all equivalent shift
    
  £(7)  POP  removes last element and returns it
       myarr.pop()
       myarr.splice(myarr.length-1, 1)        // all equivalent pop  
  
  £(8)  typeof null is object (The BIG mistake!)  
  
  £(9)  function must have a return value 
  
  £(10)  Math.floor(Math.random()*(max-min+1))+min;
  
  £(11) const myarr=[[1,2], [3,4], [5,6]];
         for(let i=0; i< myarr.length; i++) 
           for(let j=0; j<myarr[i].length; j++) 
             myarr[i][j]=Math.pow(myarr[i][j],2);
  
  £(12) for(let i of arr)
         for(let j of i)
           c(j*1000)
  
  £(13) for(let i in myarr)
         for (let j in myarr[i])
           myarr[i][j]=Math.pow(myarr[i][j],2)

  £(14) modify in place
        var myarr = [1,2,3,4,5]
        for(let i=0; i<myarr.length; myarr[i++]=Math.pow(myarr[i-1],2));
        console.log(myarr);
  
  £(15) function makemulti ({rowNo=3, colNo=2, fn=(a,b)=>[a,b]}={}) {
         let temp = new Array (rowNo);
           for(let i=0; i < rowNo; i++) {
             temp[i]=new Array(colNo);
               for(let j=0; j<colNo; j++)  {
               temp[i][j]=fn(i,j); } }
         return temp; }
  
  £(16) (a) throw 'hello'
       (b) throw 42
       (c) throw true
       (d) throw new Error('message')
       (e) throw new myFunction('message')
  
  £(17) String.prototype.search()
       (a) search: (str) => // ? first-index-of : -1
       (b) match:  (str) => // ? [] | null
       (c) exec:   (//)  => str ? [] | null
       (d) test    (//)  => str ? true : false

  £(18) ...String.prototype.search()

       "test-exec-regex"
       "match-search-string"
       indexOf for plain strings. search for regex

  £(19) ... String.prototype.search()
       (a) search method: search for regex match; return first index or -1;
       (b) match: matches string against regex. return [] or null 
       (c) exec: regex search for match is string. return [] or null
       (d) test: regex search for match. return true or false
  
  £(20) *>+>= !! multiplication higher precedence than add/subtract 
  
  £(21) const z = new Date()     
       z.setDate(z.getDate()+1)    // returns milliseconds
       z.getDate()                
  
  £(22) Math.floor(Math.random())   // gives 0   

         for(x=0; x<100;x++){
           t.push(Math.floor(Math.random()));
         }
        c(Math.max.apply(null,t)) // 0
  
  £(23)  <input list ="mylist" id="myinput">
        <datalist id=mylist>
          <option="myoption">
        <datalist>
        REMEMBER target myinput with JS to get value !!
  
  £(24)  if statement - what is within parens evaluates to truthy or falsy!
  
  £(25) BOM 

         [1] the window object and all of its subobjects

         [2] window  .document
                     .navigator .clipboard    (userAgent)    
                     .screen    .availHeight
                              .availWidth
                              .height       // Jason Manibog
                              .width        // Jason Manibog

  £(26)  window  .document
                .location 
                .history 
                .innerHeight
                .innerWidth
   
  £(27)  PROMPT
        
        var whoami = window.prompt(msg, default)
          // dialog box  (a) msg
                         (b) input box with value = default
                         (c) buttons: OK and cancel

  £(28)  CONFIRM

        var bool = confirm(msg);
          // dialog box  (a) msg
                         (b) buttons: OK and cancel

  £(29)  ALERT 

        window.alert(msg)
          // dialog box  (a) msg
                         (b) btn OK
  
  £(30)  Number.isInteger(10)  // Jason Manibog

        [1]  Note Number.isInteger(5.0) is true
        [2]  Math.floor(value) ==== value is polyfill // key
  

  £(31)  Array arguments

        (a) Array.prototype.slice.call(arguments)
        (b) Array.from(arguments) 
        (c) [...arguments] 

  £(32)  ... Array arguments 

        fn(a) {
          a = 42;
          return [a, arguments[0]]
        }

        fn(23)                    // [42, 42]

  £(33)  ... Array arguments

        fns(a) {
          'use strict';
          a=42;
          return [a, arguments[0]];
        }

        fns(23)                   // [42,17] 
  
  £(34)  'use strict' must come first in script or function
  
  £(35)  null and undefined ABSTRACTLY and STRICTLY equal
        nu==un (and in no other place in language)
  
  £(36)  NaN not equal to anything, including itself
        There is only one value in JS not equal to itself, and that 
        is NaN 
  £(37)  When null or undefined appear on either side of '==',
        true ONLY IF BOTH SIDES are one of undefined or null
  £(38)  Empty string coerces to zero (ROOT OF ALL EVIL)
  
  £(39)  == PREFERS to compare numbers
  
  £(40)  truthy not the same as coercion
  
  £(41)  [] coerces to empty string which coerces to zero
  
  £(42)  "0" =="" is falsei.  YOU ARE COMPARING STRINGS. 
  
  £(43)  Array: slice, splice and sort

        arr=[100, 200,300,400]
        arr.slice(1,3)  // [200,300] // new array
        arr.splice(0,0,0);arr  // [0, 100, 200, 300, 400]
        arr.sort(function (a,b) {return a-b})
  
  £(44)  MOO Month (but not in date string) is zero-based
  
  £(45)  var today =new Date()
        new Date(value) 
        new Date('dateString')
        new Date(year, monthIndex, day, hour, minute, seconds, millisec) 
  
  £(46)  new Date(Date.UTC(year, monthIndex,day,hour,minute,seconds,milli))
  
  £(47)  Date.now() is not a constructor
  
  £(48)  All give milliseconds:
        (a) Date.now() 
        (b) mydate.getTime()
        (c) mydate.valueOf() 
        (d) Number(mydate)
  
  £(49)  A day is 84 000 000 milliseconds
  
  £(50)  International date notation is YYYY-MM-DD
  
  £(51)  unixzero = new Date(Date.UTC(1970,0))
  
  £(52)  var moon  = new Date("July 20, 1969 00:20:15")
        var moon2 = new Date("1969-07-20T00:20:15")
        var moon3 = new Date(1969, 06, 20, 0, 20, 18)
        var moon4 = new Date(Date.UTC(1969,6,20,0, 20, 18));
  
  £(53)  today.toLocaleDateString('en-gb', {weekday:'long', month:'long',
                                         day:'numeric', year:'numeric'})
        //  "Saturday, 9 March 2019"
  
  £(54)  str.splice NO SUCH THING 
  
  £(55)  str.slice(begin, end) 
  
  £(56)  str.substring(begin, end)
  
  £(57)  str.substr(begin, howmany) 
  
  £(58)  "thomas".slice(2,4) 
        "thomas".substring(2,4)
        "thomas".substr(2,2)      // all give 'om'
  
  
  £(59)  if statements access if truthy or falsy
  £(60)  FALSY list

        (a) 0
        (b) false
        (c) ""
        (d) NaN
        (e) null
        (f) undefined    // 6
        (g) document.all (!!)


  £(61)  ...FALSY list

        // Obvious 3 + Nan-null-un
         
  
  £(62)  = (assignment.  Low precedence (3) and right-to-left )
  
  £(63)  && looks at expr 1, if FALSE returns expr1 otherwise returns expr2
  
  £(64)  !! looks at expr1, if TRUE returns expr1 otherwise returns expr2
  
  £(65)  ! looks at expr1 and IF TRUE returns false
  
  £(66)  Key:  the && and || operators actually return the value of one
        of the specified operands
  
  £(67)  Some operator precedences (abridged)

           20   grouping
           19   . and ['myval'] and new (args) and function call
           18   new (no args)
           17   postfix ++ --
           16   unary plus, unary negation, ! (logical not), ~(Bitwise NOT)
           15   exponentiation
  
  £(68)  ... Some operator precedences (abridged)

           14   multiplication and division and remainder(%)
           13   add, subtract
           11   <, >, <=, >=
           10   ==, ===, !=, !==
            9   &  (Bitwise AND)
            8   |  (Bitwise OR)

  £(69)  ... Some operator precedences (abridged)

            6   &&
            5   || 
            4   ternary operator
            3   assignment. =, += etc
            2   yield  
            1   , (comma) 

  £(70) do{} while() 

  £(71)  document.getElementsByTagName('h4').item(0).innerHTML
        document.getElementsByTagName('h4')[0].innerHTML
                                       // both equivalent
  £(72)  Three ways of adding a class
         (a) para.setAttribute('class', 'divclass');
         (b) para.classList.add('divclass')         // also remove
         (c) para.className="divclass"

        also note:
              document.getElementsByClassName('divclass')[0]
              .classList.remove('divclass')

  £(73)  element.getAttribute('class')
        element.setAttribute('class', 'tom')
        element.removeAttribute('class', 'tom')

  £(74)  const el=document.createElement('h4');
        const txt=document.createTextNode('Hello There');
        el.appendChild(txt);
        //document.body.appendChild(el);
        document.getElementById('myid').appendChild(el);
        el.setAttribute('class', 'tom');

  £(75)  Note:  document.createElement('ul', { is : 'expanding-list' })

  £(76)  window.location.search 
        // "?myname=thomas&myemail=thomasgdowling%40gmail.com"
        window.location.search.substring(3)
        // "myname=thomas&myemail=thomasgdowling%40gmail.com"
        window.location.search.substring(3).split('&')[0].split('=')[0]
        //  "myname"

  £(77) document.forms[0].elements.name.value 
       document.getElementById('myform').elements.name.value
       document.getElementById('myform').elements[0].value
       // equivalent // "thomas"

  £(78) potential targets for submission
       (a) database
       (b) script (go-between)
       (c) webpage

  £(79) form button type=submit                   !! 

  £(80) gopnames(document.forms[0])
       //  [ "0", "1", "2" ]

       gopnames(document.forms[0].elements)
       //  [ "0", "1", "2", "myemail", "btn", "myname" ]  !!

  £(81) document.forms['myform']['name'].value
       document.forms[0].name.value
       document.forms[0].elements.name.value
       // all equivalent (basicform.html)

  £(82) document.forms['myform'].length
       document.forms[0].length
       document.forms[0].elements.length
       // all equivalent 

  £(83) document.forms.myform.method
       document.forms.myform.onsubmit
       document.forms.myform.action 
       // "http://127.0.0.1:5500/sendmeaway.html"

  £(84) input type="submit"> defines a button for submitting the form
        data to a form-handler.

  £(85) Unicode 0Aa -> 48-65-97 (ascii-decimal)   Cavan-Galway-Kerry
               0Aa -> 30-41-61 (ascii-hex,unicode) Kerry-Kerry-Down; 
       uc<lc
       ucltlc

  £(86) "thomas".charAt("thomas".length -1)
 
  £(87)  Objects are mutable

        const a = { foo: 'bar' }
        const b=a;
        b.foo="daz"
        a.foo      // daz 
        a===b;     // true

  £(88) Strings are immutable

        let aa = "test";
        const bb=aa;
        aa = aa.slice(4);
        bb;                  //   test
        aa;                  //   st

  £(89) Arrays are mutable
        
        const aaa = ["foo", 'bar'];
        const bbb =aaa;
        aaa.push('baz');
        aaa;                 //   [ "foo", "bar", "baz" ] 
        bbb;                 //   [ "foo", "bar", "baz" ]

  £(90) For mutable values, updating state applies across all 
       references to that variable.
  
  £(91) Operator precedence/associativity  examples

       [1] a+b*c/d                                                       
           20+3*4/6              // 22    (IBM goodie)   

  £(92) ... Operator precedence/associativity  examples

       [2] var b = 9;
           var c = 5;                                                    
           var a = b = c;                                                
            a                     // 5     (IBM)                          

   £(93)  JS Primitives (UNBONSS)  
         A primitive value is a member of one of the following built-in types: 
         [1] Undefined 
         [2] Null 
         [3] Boolean
         [4] Number 
         [5] String
         [6] Symbol 

   £(94)  ...  JS Primitives (UNBONSS)  

         [1] An object is a member of the built-in type Object;
         [2] A function is a callable object. 
         [3] A function that is associated with an object via a 
             property is called a method.
   £(95) Number 
  
        var a = 2;             // number
        var b = new Number(2)  // object
        var c = Number("2");   // number

        a==b                   // True
        a===b                  // False  // !!
        a==c                   // True
        a===c                  // True   // !! 

   £(96) ... Number 

        Number('123')          // 123    // number
        Number('')             // 0   
        Number('foo')          // NaN
        Number('100a')         // NaN
        Number(null)           // 0      // !!
        Number(undefined)      // NaN    // !! 

   £(97) Object.create polyfill
     
         if(!Object.create) {
           Object.create=function (o) {
             function F() {}
             F.prototype=o;
             return new F();
           };
         }

    £(98) myarr = [1, "hello", {}, [], function F(){}, true, typeof true,
                  null, undefined]

         var type_of= myarr.map(function (a) {
           return typeof a
         })

         var o_toString = myarr.map(function (a) {
          return Object.prototype.toString.call(a);
         }) 

    £(99)                type_of      O_toString

         1             "number"     "[object Number]"
         "hello"       "string"     "[object String]" 
         {}            "object"     "[object Object]" 
         []            "object"     "[object Array]" 
         F() {}        "function"   "[object Function]" 
         true          "boolean"    "[object Boolean]"
         typeof true   "string"     "[object String]"
         null          "object"     "[object Null]"
         undefined     "undefined"  "[object Undefined]"
  
    £(100)  & return  1 if both operands 1
           | returns 1 if both operands 0
           ^ returns 1 if both operands different
             (returns 0 if both operands the same)

           ~ inverts bits ~N = -(N+1) 
          
    £(101)  15 & 9  1111 & 1001 => 1001 => 9
           15 | 9  1111 | 1001 => 1111 => 15
           15 ^ 9  1111 ^ 1001 => 0110 => 6
           ~15                         => -16
           ~9                          => -10

    £(102)  var x=100;
           var y=1;
           x^=y;
           y^=x;
           x^=y;
           x             // 1
           y             // 100 

   £(103)  expr1 && expr2 

          returns expr1 if it is FALSE or can be converted to FALSE
          
          OTHERWISE returns expr2 

          false && 'cats' is false
          true &&  'cats' is 'cats'
   
   £(104)  expr1 || expr2 
     
          Returns expr1 if it is TRUE or can be converted to TRUE; 
          
          OTHERWISE returns expr2

          false || 'cats' is 'cats'
          true  ||  'cats' is  true

   £(105)  ! expr1
          
          if TRUE return FALSE
          OTHERWISE return TRUE 

   £(106)  Short-circuits  and logical operators

         false && anything is FALSE
         true || anything  is TRUE 

  £(107) <noscript>Your browser does not support JavaScript!</noscript>
 
  £(108) Constants
          [1] block scoped (like let) 
          [2] not added to global window object
          [2] cannot be reassigned or redeclared
          [3] must be assigned
          [4] const declaration creates read-only ref to variable
              but value itself is not immutable (arr or obj)
          [5] Kyle. const not a value that does not change
              but a variable that cannot be re-assigned    

  £(109) typeof 100.234.toFixed(2)
        
        // "string"

 £(110) Error Object

       [1] When Error is used like a function -- without new,
           it will return an Error object. 

       [2] A mere call to Error will produce the same output that
           constructing an Error object via the new keyword would.

 £(112) Window.open

       [1] window.open(url?: string, 
                    target?: string, 
                  features?: string, 
                   replace?: boolean): 

       [2] var url ="https://edition.cnn.com/"
           window.open(url, "cnny", "width=600,height=400", true)



    £(113) Any object of which the value is not 

        [1] undefined
        [2] null 

        INCLUDING A BOOLEAN OBJECT WHOSE VALUE IS FALSE, 
        (but not the boolean primiive false) evaluates to
        true when passed to a conditional statement. 

    £(114) null value

          a primitive value that represents the intentional
          absence of any object value (ECMA 2018)

    £(115) undefined value
         
          a primitive value used when a variable has not been assigned
          a value (ECMA 2018)

`;

