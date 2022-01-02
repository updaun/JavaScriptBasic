function calculateChange(payment, cost) {
    // 코드를 작성해 주세요.
    let change = payment-cost;
    // console.log(change);
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    
    while (change > 0){
        // console.log(change);
      if (change >= 50000){
        change -= 50000;
        count1 += 1;
      } else if (change >= 10000){
        change -= 10000;
        count2 += 1;
      } else if (change >= 5000){
        change -= 5000;
        count3 += 1;
      } else if (change >= 1000){
        change -= 1000;
        count4 += 1;
      }
      
    }
    
    console.log(`50000원 지폐: ${count1}장`);
    console.log(`10000원 지폐: ${count2}장`);
    console.log(`5000원 지폐: ${count3}장`);
    console.log(`1000원 지폐: ${count4}장`);
    
  }
  
  // 테스트 코드
  calculateChange(100000, 33000);
  console.log('');
  calculateChange(500000, 378000);