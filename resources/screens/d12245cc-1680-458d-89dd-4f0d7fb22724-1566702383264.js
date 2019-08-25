jQuery("#simulation")
  .on("pageload", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0cf28372-e7a9-4430-a42e-0bfca4c563d4",
                    "transition": {
                      "type": "fade",
                      "duration": 5000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("variablechange.jim", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .variablechange", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Panel_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_9" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_10" ]
                  },
                  "exectype": "timed",
                  "delay": 500
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_7" ]
                  },
                  "exectype": "timed",
                  "delay": 500
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_8" ]
                  },
                  "exectype": "timed",
                  "delay": 500
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_6" ]
                  },
                  "exectype": "timed",
                  "delay": 500
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });