Feature: This is Hook Feature

@First
Scenario: free CRM create deal test
Given user is on deal page
When user fills the form
Then deal is created

@Second
Scenario: free CRM create contact test
Given user is on contact page
When user fills the contact form
Then contact is created

@Third
Scenario: free CRM create email test
Given user is on email page
When user fills the mail form
Then mailpage is created


