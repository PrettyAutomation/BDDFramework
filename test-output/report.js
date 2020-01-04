$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/pretty.sanwale/eclipse/reporting-2019-09/MavenBDDFramework/src/main/java/Features/tagging.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM tagging Feature",
  "description": "",
  "id": "free-crm-tagging-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 12,
  "name": "this is Regressiontest1",
  "description": "",
  "id": "free-crm-tagging-feature;this-is-regressiontest1",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Regressiontest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "this is Regressiontest1",
  "keyword": "Given "
});
formatter.match({
  "location": "TagDefinition.this_is_Regressiontest1()"
});
formatter.result({
  "duration": 71786002,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "this is Regressiontest2",
  "description": "",
  "id": "free-crm-tagging-feature;this-is-regressiontest2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Regressiontest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "this is Regressiontest2",
  "keyword": "Given "
});
formatter.match({
  "location": "TagDefinition.this_is_Regressiontest2()"
});
formatter.result({
  "duration": 28242,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "this is smoke OR Regressiontest1",
  "description": "",
  "id": "free-crm-tagging-feature;this-is-smoke-or-regressiontest1",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@smoketest"
    },
    {
      "line": 20,
      "name": "@Regressiontest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "this is  smoke OR Regressiontest1",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 32
    }
  ],
  "location": "TagDefinition.this_is_smoke_OR_Regressiontest(int)"
});
formatter.result({
  "duration": 1261653,
  "status": "passed"
});
});