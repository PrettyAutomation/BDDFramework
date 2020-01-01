Feature: Free CRM Login Feature
#Scenario: Free CRM Login Test scenario

# Without example keyword

#Given user is already on Login Page 
#When title of login page is Free CRM
#Then user clicks on Login button
#Then user enters username and password
#Then user enters "naveenk" and "test@123"
#And user is on Home page
#Then user quit the browser


#with example Keyword
Scenario Outline: Free CRM Login Test scenario

Given user is already on Login Page 
When title of login page is Free CRM
Then user clicks on Login button
Then user enters "<username>" and "<password>"
And user is on Home page
Then user quit the browser

Examples:
       | username | password |
       | naveenk  | test@123 |
       | pretty   | test@243 |
       | pretty2  | test@345 |
       




