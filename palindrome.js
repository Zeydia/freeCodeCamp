function palindrome(str) {
    function filtre(str){
      const re = /\w/ ;
    let Tstr = str.split("");
    let Nstr = []; 
    for (let i = 0 ; i < str.length ; i++) {
    if(re.test(str[i])){
      Nstr.push(str[i]);
    }
    }
    return Nstr;
    }
  const Fstr = filtre(str);

    for(let i = 1 ; i <= str.length ; i++){
      if (str[str.length-i] != str[i-1]){
        return false;
      }
      return true;
    }
}
console.log(palindrome("eye"));
