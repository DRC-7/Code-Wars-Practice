function calc(x) {
    
    let total1 = '';

    for (let i = 0; i < x.length; i++) {
      total1 += x.charCodeAt(i);
    }

    let total2 = '';
    total2 = total1.split('7').join('1');
    
    let newt1 = 0;
    let newt2 = 0;
  
    for(let i = 0; i < total1.length; i++){
      newt1 += parseInt(total1[i]);
      newt2 += parseInt(total2[i]);
    }
  
    let difference = newt1 - newt2;

    return difference;
}

calc('aaaaaddddr');
//calc('abcdef', 6);
//calc('ifkhchlhfd', 6);
//calc('ifkhchlhfd', 30);
