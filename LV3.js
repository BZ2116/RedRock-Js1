let func = function(){
    console.log(2);
}

//没太懂。。。。
Function.prototype.before = function(fn){
    let self = this;
    return function() {
        fn.apply(self, arguments);
        return self.apply(self, arguments);
    }
}
Function.prototype.after = function(func){
    let self = this;
    return function(){
        let ret = self.apply(self, arguments);
        func.apply(self, arguments);
        return ret
    }
}


func = func.before((a=1) => {
    console.log(a)
}).after((b=3) => {
    console.log(b);
})

func()
//实现func.before()以及func.after()

