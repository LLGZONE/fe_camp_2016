function noRepeat(str){
  var a = {};
  var result = [];
  var strArr = str.split(",");

  for (let i = 0; i < strArr.length; i++){
    a[strArr[i]] = strArr[i];
  }

  for (let x in a){
    result.push(x);
  }
  
  return result.join(",");
}
