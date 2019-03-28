    (1)  powershell                                 // from VS code
    (2)  ssh tomgxu
         // remote
    (3)  cp bin/jsdefinitions/ecollege-rememberme .
    (4)  vim ecollege-rememberme                    // working with copy
    (5)  s/\v(^\s+)(\(\d+\))/\1£\2/g                // Global substitution    
                                                    // very-magic regex
    (6)  :ws
    (7)  exit
         // powershell
    (8)  cd data
    (9)  scp tomgxu:~/ecollege-rememberme .        // getting the modified file
    (10) Rename-Item  data.txt  old_data.txt
    (11) Copy-item  template.txt data.txt 
         // bash                                   // from VS code
    (12) vim data.txt 
    (13) :r ecollege-rememberme.txt                // from with backticks