function sum(a, b, c) {
    return a + b + c;
  }

  let curriedSum = curry(sum);
  
  alert( curriedSum(1, 2, 3) ); // 6，仍然可以被正常调用
  alert( curriedSum(1)(2,3) ); // 6，对第一个参数的柯里化
  alert( curriedSum(1)(2)(3) ); // 6，全柯里化
  
  //写一个curry函数来实现此功能

    function curry(f) { // curry(f) 执行柯里化转换
    return function(...a) {
        if(a.length==3){
            return f(...a)
        }
      return function(...b) {
        if(a.length+b.length==3){
            return f(...a,...b)
        }
        return function(...c){
        return f(...a,...b,...c);
      };
    }
    };
  }
