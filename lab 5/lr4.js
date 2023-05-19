document.addEventListener("DOMContentLoaded", function() {
  var today = new Date();
  var currentYear = today.getFullYear();
  var isLeapYear = (currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0;
  
  var message = isLeapYear ? "Поточний рік є роком проведення літньої Олімпіади (високосний рік)." : "Поточний рік не є роком проведення літньої Олімпіади (не високосний рік).";
  
  alert(message);
});
