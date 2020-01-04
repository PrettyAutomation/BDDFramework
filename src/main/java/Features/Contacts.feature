Feature: Free CRM Login Feature
#with example Keyword
Scenario Outline: Free CRM Login Test scenario

Given user is already on Login Page 
When title of login page is Free CRM
Then user clicks on Login button
Then user enters "<username>" and "<password>"
And user is on Home page
Then user is moves to contacts page
Then user provide the contact details "<firstname>" and "<lastname>" and "<positions>"
Then user quit the browser

Examples:
       | username | password | firstname|lastname|positions|
       | naveenk  | test@123 | Tom      |peter   |manager  |
       | pretty   | test@243 | david    |Dsouza  |Director |
      