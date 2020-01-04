$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/pretty.sanwale/eclipse/reporting-2019-09/MavenBDDFramework/src/main/java/Features/Deal.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 2,
      "value": "# Use of DataTable"
    }
  ],
  "line": 3,
  "name": "Free CRM create new Deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user provided username and password",
  "rows": [
    {
      "cells": [
        "bewarepretty@gmail.com",
        "Active@2020"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on Home page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 4910414049,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 174641691,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 3875879945,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_provided_username_and_password(DataTable)"
});
formatter.result({
  "duration": 488114277,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_is_on_Home_page()"
});
formatter.result({
  "duration": 4896148,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_quit_the_browser()"
});
formatter.result({
  "duration": 101811361,
  "status": "passed"
});
});