$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/sampleFeatureJava/sampl.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sample2"
    }
  ]
});
formatter.step({
  "name": "I want to write a step with \u003cname\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "I check for the \u003cvalue\u003e in step",
  "keyword": "When "
});
formatter.step({
  "name": "I verify the \u003cstatus\u003e in step",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter Username as \"Thara\" and Password as \"tharakk\"",
  "keyword": "When "
});
formatter.step({
  "name": "Sriram logged in",
  "keyword": "When "
});
formatter.step({
  "name": "Gunapriya logged in",
  "keyword": "When "
});
formatter.step({
  "name": "Karthi attends class",
  "keyword": "When "
});
formatter.step({
  "name": "Suba attends class",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "value",
        "status"
      ]
    },
    {
      "cells": [
        "name1",
        "5",
        "success"
      ]
    },
    {
      "cells": [
        "name2",
        "7",
        "Fail"
      ]
    },
    {
      "cells": [
        "name3",
        "5",
        "success"
      ]
    },
    {
      "cells": [
        "name4",
        "9",
        "success"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@sample2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want to write a step with name1",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.i_want_to_write_a_step_with_name(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check for the 5 in step",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.i_check_for_the_in_step(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the success in step",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.i_verify_the_success_in_step()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Username as \"Thara\" and Password as \"tharakk\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.i_enter_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sriram logged in",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.sriram_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Gunapriya logged in",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.gunapriya_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Karthi attends class",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.karthi_attends_class()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Suba attends class",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.suba_attends_class()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat sampleFeatureJava.stepdef.suba_attends_class(stepdef.java:19)\r\n\tat ✽.Suba attends class(file:src/test/java/sampleFeatureJava/sampl.feature:42)\r\n",
  "status": "pending"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@sample2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want to write a step with name2",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.i_want_to_write_a_step_with_name(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check for the 7 in step",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.i_check_for_the_in_step(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Fail in step",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.i_verify_the_Fail_in_step()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Username as \"Thara\" and Password as \"tharakk\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.i_enter_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sriram logged in",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.sriram_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Gunapriya logged in",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.gunapriya_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Karthi attends class",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.karthi_attends_class()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Suba attends class",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.suba_attends_class()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat sampleFeatureJava.stepdef.suba_attends_class(stepdef.java:19)\r\n\tat ✽.Suba attends class(file:src/test/java/sampleFeatureJava/sampl.feature:42)\r\n",
  "status": "pending"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@sample2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want to write a step with name3",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.i_want_to_write_a_step_with_name(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check for the 5 in step",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.i_check_for_the_in_step(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the success in step",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.i_verify_the_success_in_step()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Username as \"Thara\" and Password as \"tharakk\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.i_enter_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sriram logged in",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.sriram_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Gunapriya logged in",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.gunapriya_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Karthi attends class",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.karthi_attends_class()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Suba attends class",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.suba_attends_class()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat sampleFeatureJava.stepdef.suba_attends_class(stepdef.java:19)\r\n\tat ✽.Suba attends class(file:src/test/java/sampleFeatureJava/sampl.feature:42)\r\n",
  "status": "pending"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@sample2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want to write a step with name4",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.i_want_to_write_a_step_with_name(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check for the 9 in step",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.i_check_for_the_in_step(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the success in step",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.i_verify_the_success_in_step()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Username as \"Thara\" and Password as \"tharakk\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.i_enter_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sriram logged in",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.sriram_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Gunapriya logged in",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.gunapriya_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Karthi attends class",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.karthi_attends_class()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Suba attends class",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.suba_attends_class()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat sampleFeatureJava.stepdef.suba_attends_class(stepdef.java:19)\r\n\tat ✽.Suba attends class(file:src/test/java/sampleFeatureJava/sampl.feature:42)\r\n",
  "status": "pending"
});
formatter.after({
  "status": "passed"
});
});