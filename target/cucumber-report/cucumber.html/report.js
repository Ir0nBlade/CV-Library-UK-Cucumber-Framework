$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/JobSearchTest.feature");
formatter.feature({
  "line": 1,
  "name": "Job Search Test",
  "description": "",
  "id": "job-search-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Verify user should be ablt to search job successfully",
  "description": "",
  "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"\u003cJOB TITLE\u003e\" in job title field",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"\u003cLOCATION\u003e\" in location field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"\u003cDISTANCE\u003e\" in the distance field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the More Search Option Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"\u003cMINIMUM SALARY\u003e\" data in the minimum salary field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"\u003cMAXIMUM SALARY\u003e\" data in the maximum salary field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the \"\u003cSALARY TYPE\u003e\" salary type",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the \"\u003cJOB TYPE\u003e\" job type",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Result \"\u003cRESULT\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;",
  "rows": [
    {
      "cells": [
        "JOB TITLE",
        "LOCATION",
        "DISTANCE",
        "MINIMUM SALARY",
        "MAXIMUM SALARY",
        "SALARY TYPE",
        "JOB TYPE",
        "RESULT"
      ],
      "line": 20,
      "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;1"
    },
    {
      "cells": [
        "Software Tester",
        "Crawley",
        "up to 5 miles",
        "30000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent Software Tester jobs in Crawley"
      ],
      "line": 21,
      "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3571180399,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I accept cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 216953900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify user should be ablt to search job successfully",
  "description": "",
  "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"Software Tester\" in job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"Crawley\" in location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"up to 5 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the More Search Option Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"30000\" data in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"50000\" data in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the \"Per annum\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the \"Permanent\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Result \"Permanent Software Tester jobs in Crawley\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Software Tester",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 55347001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Crawley",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 93303100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchTestSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 90834200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 272604000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 166266299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 51494700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheSalaryType(String)"
});
formatter.result({
  "duration": 30949300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheJobType(String)"
});
formatter.result({
  "duration": 44004899,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 52534901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Software Tester jobs in Crawley",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 7955749301,
  "status": "passed"
});
formatter.after({
  "duration": 613354800,
  "status": "passed"
});
});