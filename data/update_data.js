// Basic Update Data
 let my_update = `
    £(1)  powershell                                 // from VS code terminal
    £(2)  ssh tomgxu
    £(3)  // on remote (xu virtual machine)
    £(4)  cp bin/jsdefinitions/ecollege-rememberme .
    £(5)  vim ecollege-rememberme                    // working with copy
    `
    //£(5)  s/\v(^\s+)(\(\d+\))/\1£\2/g                // Global substitution      
    my_update+=`£(6)  \u0073\u002f\u005c\u0076\u0028\u005e\u005c\u0073\u002b\u0029\u0028\u005c\u0028\u005c\u0064\u002b\u005c\u0029\u0029\u002f\u005c\u0031\u00a3\u005c\u0032\u002f\u0067                // Global substitution`;
    my_update+=`
                                                     // very-magic regex
    £(7)  :wq
    £(8)  exit
    £(9)  // back to powershell  
    £(10) cd data
    £(11) scp tomgxu:~/ecollege-rememberme .        // getting the modified file
    £(12) Rename-Item  data.txt  old_data.txt
    £(13) Copy-item  template.txt data.txt 
    £(14) bash                                   // from powershell on VS code terminal
    £(12) vim data.txt 
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
 `(2) Directory:  '/bin/jsdefinitions/ecollege-rememberme'`,
 `(3) The file 'ecollege-rememberme' will be downloaded`,
 `(4) github repo (private): https://github.com/tomGdow/remember_me`
];