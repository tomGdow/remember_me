'use strict';
// Basic Update Data
const repoName="remember_me";
const remoteFileDirectory="~/bin/jsdefinitions/ecollege-rememberme";
const remoteFileName=remoteFileDirectory.split('/').pop();

let my_update = `
    £(1)  powershell                                 // from VS code terminal
    £(2)  ssh tomgxu
    £(3)  // on remote (xu virtual machine)
    £(4)  cp bin/jsdefinitions/ecollege-rememberme .
    £(5)  vim ecollege-rememberme                    // working with copy `

    //£(5)  %s/\v(^\s+)(\(\d+\))/\1£\2/g                // Global substitution      
    my_update+=`£(6)  \u0025s\/\\v\(^\\s\+\)\(\\\(\\d+\\\)\)\/\\1£\\2\/g`;
    my_update+=`
                                                     // very-magic regex
    £(7)  :wq
    £(8)  exit
    £(9)  // back to powershell  
    £(10) cd data
    £(11) scp tomgxu:~/ecollege-rememberme .        // getting the modified file
    £(12) Rename-Item  data.js  old_data.js
    £(13) Copy-item  template.js data.js
    £(14) bash                                   // from powershell on VS code terminal
    £(12) vim data.js 
    £(13) :r ecollege-rememberme.txt                // from within back-ticks
    £(14) :wq
    £(15) exit
    £(16) ssh tomgxu rm ecollege-rememberme
    £(17) exit
    `;

// Note Data
const txtString=[
  `NOTES`,
 `(1) The primary data are stored on the virtual machine 'xu',`,
 `(2) Directory:  '${remoteFileDirectory}'`,
 `(3) The file '${remoteFileName}' will be downloaded`,
 `(4) github repo (private): https://github.com/tomGdow/${repoName}`
];
