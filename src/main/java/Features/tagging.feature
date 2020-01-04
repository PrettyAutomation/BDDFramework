Feature: Free CRM tagging Feature

@smoketest
Scenario: this is smoketest1
Given this is smoketest1

@smoketest
Scenario: this is smoketest2
Given this is smoketest2

@Regressiontest
Scenario: this is Regressiontest1
Given this is Regressiontest1

@Regressiontest
Scenario: this is Regressiontest2
Given this is Regressiontest2


@smoketest @Regressiontest
Scenario: this is smoke OR Regressiontest1
Given this is  smoke OR Regressiontest1


