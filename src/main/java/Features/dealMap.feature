Feature: Deal data creation
# Use of DataTable
Scenario: Free CRM create new Deal scenario


Given user is already on Login Page 
When title of login page is Free CRM
Then user clicks on Login button
Then user provided username and password
|username              |password   |
|bewarepretty@gmail.com|Active@2020|
|abc@gmail.com         |Active@2020|
And user is on Home page
Then user quit the browser

      