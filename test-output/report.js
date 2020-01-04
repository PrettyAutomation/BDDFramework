$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/pretty.sanwale/eclipse/reporting-2019-09/MavenBDDFramework/src/main/java/Features/Contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 2,
      "value": "#with example Keyword"
    }
  ],
  "line": 3,
  "name": "Free CRM Login Test scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on Home page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user is moves to contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user provide the contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cpositions\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user quit the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "positions"
      ],
      "line": 15,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "Tom",
        "peter",
        "manager"
      ],
      "line": 16,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "pretty",
        "test@243",
        "david",
        "Dsouza",
        "Director"
      ],
      "line": 17,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM Login Test scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on Home page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user is moves to contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user provide the contact details \"Tom\" and \"peter\" and \"manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 14995954867,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 242284992,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 4373669450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 357798285,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Home_page()"
});
formatter.result({
  "duration": 4668427,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_moves_to_contacts_page()"
});
formatter.result({
  "duration": 43385454,
  "error_message": "org.openqa.selenium.NoSuchFrameException: No frame element found by name or id mainpanel\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MBLR02712FBE\u0027, ip: \u0027fd58:bad4:d214:7900:90c0:a11:1419:eecb%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.5\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:885)\n\tat stepDefinition.LoginStepDefinition.user_is_moves_to_contacts_page(LoginStepDefinition.java:71)\n\tat ✽.Then user is moves to contacts page(/Users/pretty.sanwale/eclipse/reporting-2019-09/MavenBDDFramework/src/main/java/Features/Contacts.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 34
    },
    {
      "val": "peter",
      "offset": 44
    },
    {
      "val": "manager",
      "offset": 56
    }
  ],
  "location": "LoginStepDefinition.user_provide_the_contact_details_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM Login Test scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters \"pretty\" and \"test@243\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on Home page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user is moves to contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user provide the contact details \"david\" and \"Dsouza\" and \"Director\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 8412512064,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 111060112,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 5923402954,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pretty",
      "offset": 13
    },
    {
      "val": "test@243",
      "offset": 26
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 282034367,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Home_page()"
});
formatter.result({
  "duration": 24833926,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_moves_to_contacts_page()"
});
formatter.result({
  "duration": 28920058,
  "error_message": "org.openqa.selenium.NoSuchFrameException: No frame element found by name or id mainpanel\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MBLR02712FBE\u0027, ip: \u0027fd58:bad4:d214:7900:90c0:a11:1419:eecb%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.5\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:885)\n\tat stepDefinition.LoginStepDefinition.user_is_moves_to_contacts_page(LoginStepDefinition.java:71)\n\tat ✽.Then user is moves to contacts page(/Users/pretty.sanwale/eclipse/reporting-2019-09/MavenBDDFramework/src/main/java/Features/Contacts.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "david",
      "offset": 34
    },
    {
      "val": "Dsouza",
      "offset": 46
    },
    {
      "val": "Director",
      "offset": 59
    }
  ],
  "location": "LoginStepDefinition.user_provide_the_contact_details_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});