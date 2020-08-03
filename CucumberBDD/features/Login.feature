Feature: Login feature




@A
Scenario: positive Test Scenario
Given usre is on loginpage
When user enters "rincy" and "rincy@123"
And user clicks on signin link
Then user is on home page

@B
Scenario Outline: negative Test Scenario
Given usre is on loginpage
When user enters "<username>" and "<password>"
And user clicks on signin link
Then user is on Login page
Examples:
|username|password|
|capg|capg123|
|admin| |
| |admin@123|
|admin|a@123|

