function palindrome(str) {
    function filtre(str){
      const re = /[a-z0-9]/ ;
    let Tstr = str.toLowerCase().split("");
    let Nstr = []; 
    for (let i = 0 ; i < Tstr.length ; i++) {
        if(re.test(Tstr[i])){
            Nstr.push(Tstr[i]);
        }
    }

    return Nstr;
    }

   const Fstr = filtre(str);

    for(let i = 1 ; i <= Fstr.length ; i++){
       if (Fstr[Fstr.length-i] != Fstr[i-1]){
         return false;
      }
    }
    return true;
}
console.log(palindrome("eye"));
