function convertToRoman(num) {
    const An = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const Rn = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let r = [];
      while(num > 0){
          for(let i = 0 ; i < An.length ; i++){
              if(num >= An[i]){
                      num -= An[i];
                      r.push(Rn[i]);
                      break;
              }
          }
      }    
        return r.join('');
}

convertToRoman(798);
