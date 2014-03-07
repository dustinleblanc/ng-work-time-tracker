angular.module('workTimeTrackerApp').factory('flipClock', function FlipClockFactory() {
  var flipClock = null,
      onInit = null;

  return {
    setElement: function(element) {
      flipClock = element.FlipClock({
        autoStart: false
      });
      if (onInit) {
        onInit();
        onInit = null;
      }
    },
    unsetElement: function() {
      flipClock = null;
      onInit = null;
    },
    restart: function(startTime) {
      if (flipClock) {
        flipClock.start();
        flipClock.setTime(startTime || 1);
      }
    },
    onInit: function(callback) {
      onInit = callback;
    }
  };
});

angular.module('workTimeTrackerApp').factory('activities', function() {
  var activities = [
    {name: 'Working', cssClass: 'default'},
    {name: 'Eating', cssClass: 'primary'},
    {name: 'Rest', cssClass: 'info'},
    {name: 'Web surfing', cssClass: 'success'},
    {name: 'Off-topic', cssClass: 'warning'},
    {name: 'Consulting', cssClass: 'danger'}
  ];

  return {
    getAll: function() {
      return activities;
    }
  };
});
