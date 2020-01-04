Feature: Free CRM Login Feature
Scenario: Free CRM Login Test scenario

# Without example keyword

Given user is already on Login Page 
When title of login page is Free CRM
Then user clicks on Login button
#Then user enters username and password
Then user enters "naveenk" and "test@123"
And user is on Home page
Then user quit the browser
       




