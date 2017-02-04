function isPassWord(str){
  str = str.replace(/-/g, "").toUpperCase();
    try {
      if (str.length === 20){
        return str;
      }else {
        throw "无效的密码格式";
      }
    }
    catch (e){
      console.log(e);
    }
  }
