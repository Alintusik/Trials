Feature: Techfios bank and cash New Account Functionality

  Scenario Outline: User should be able to login with valid credentials
    and open a new account

    Given User is on techfios login page
    When User enters the "<username>"
    When User enters the "<password>"
    And User clicks on Sign in button
    Then User should land on Dashboard page
    And User clicks on Bank and Cash button
    And User clicks on New Account
    And User enters Account Title as "<accountTitle>" in accounts page
    And User enters Description as "<description>" in accounts page
    And User enters Initial Balance as "<initialBalance>" in accounts page
    And User enters Account Number as "<accountNumber>" in accounts page
    And User enters Contact Person as"<contactPerson>" in accounts page
    And User enters Phone as "<phone>" in accounts page
    And User enters Internet Banking URL as"<internetBankingURL>" in accounts page
    And User clicks on Submit button
    Then User should be able to validate account created successfull

    Examples: 
      | username          | password | accountTitle   | description | initialBalance | accountNumber | contactPerson | phone  | internetBankingURL         |
      | demo@techfios.com | abc123   | Alina account1 | Cheking     |            890 |       3654908 | Alina Papuc   | 409755 | https://www.bing.com/      |
      | demo@techfios.com | abc123   | Alina account1 | Savings     |            890 |       3654908 | Alina Papuc   | 409755 | https://bonusoffer.wf.com/ |
