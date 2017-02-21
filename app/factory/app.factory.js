'use strict';

app.factory('factory', [function () {
    var somValue = 42;
    
    return {
      someMethod: function () {
        return somValue;
      }
    };
  }])
  