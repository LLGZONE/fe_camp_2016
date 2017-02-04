var module = (function(){
  var _count = 0;

  var addCount = function(){
    _count += 1;
  };

  var logCount = function(){
    console.log(_count)
  }

  return {
    addCount: addCount,
    logCount: logCount
  }
})();

//继承扩充
var module = (function(mod){
   mod.sayHello = function(mod){
    console.log("Hello, world!");
  };

  return mod;
})(window.module || {});
