function toWednesday(){
  var now = new Date();
  var dateArr = [];
  var fstWendnesday = 0;

  for (let i = 1; i <= 28; i++) {
    let day = new Date(2017, 1, i)
    if (day.getDay() === 3) {
      dateArr.push("2017/2/"+i);
      if (fstWendnesday === 0) {
        fstWendnesday = i;
      }
    }
  }

  var nowDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var fstDay = new Date(2017, 1, fstWendnesday);
  var t = fstDay.getTime() - nowDay.getTime();
  var passDay = t / (1000 * 60 * 60 * 24);

  return dateArr.map(function(t){
    return {
    date: t,
    daysBefore: passDay + dateArr.indexOf(t) * 7
    };
  });
}
