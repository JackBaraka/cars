
function populateCalendar() {
  var pickupDate = document.getElementById("pickup-date").value;
  var returnDate = document.getElementById("return-date").value;
  var startDate = new Date(pickupDate);
  var endDate = new Date(returnDate);

  var numDays = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
  for (var i = 0; i < numDays; i++) {
    var currentDate = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
    if (isDateAvailable(currentDate)) {
      addDateToCalendar(currentDate);
    } else {
      markDateAsUnavailable(currentDate);
    }
  }
}
function isDateAvailable(date) {
  return true;
}
function addDateToCalendar(date) {
  
  console.log(date);
}

function markDateAsUnavailable(date) {
  /
  console.log(date + " is not available for rental");

document.getElementById("pickup-date").addEventListener("change", populateCalendar);
document.getElementById("return-date").addEventListener("change", populateCalendar);
}
