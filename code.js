var reminderList = [];
var newReminder;
var countOutput;

onEvent("addButton", "click", function() {
  newReminder = getText("reminderInput");
  appendItem(reminderList, newReminder);
  countOutput = reminderList.length;
  setProperty("reminderOutput", "text", reminderList[reminderList.length - 1]);
  setProperty("countOutput", "text", countOutput);
  setProperty("reminderInput", "text", "");
});

onEvent("leftButton", "click", function() {
  if(countOutput > 1)
    countOutput = countOutput - 1;
    updateScreen();
});

onEvent("rightButton", "click", function() {
  if(countOutput < reminderList.length)
    countOutput = countOutput + 1;
    updateScreen();
});

function updateScreen() {
  setProperty("reminderOutput", "text", reminderList[countOutput - 1]);
  setProperty("countOutput", "text", countOutput);
}