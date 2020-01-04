$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/pretty.sanwale/eclipse/reporting-2019-09/MavenBDDFramework/src/main/java/Features/dealMap.feature");
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
        "username",
        "password"
      ],
      "line": 10
    },
    {
      "cells": [
        "bewarepretty@gmail.com",
        "Active@2020"
      ],
      "line": 11
    },
    {
      "cells": [
        "abc@gmail.com",
        "Active@2020"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user is on Home page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user quit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealMapDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 20490335394,
  "status": "passed"
});
formatter.match({
  "location": "DealMapDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 164324810,
  "status": "passed"
});
formatter.match({
  "location": "DealMapDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 4978472290,
  "status": "passed"
});
formatter.match({
  "location": "DealMapDefinition.user_provided_username_and_password(DataTable)"
});
formatter.result({
  "duration": 16835514074,
  "status": "passed"
});
formatter.match({
  "location": "DealMapDefinition.user_is_on_Home_page()"
});
formatter.result({
  "duration": 4169624,
  "status": "passed"
});
formatter.match({
  "location": "DealMapDefinition.user_quit_the_browser()"
});
formatter.result({
  "duration": 110732953,
  "status": "passed"
});
});