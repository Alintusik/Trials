$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters the \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Bank and Cash button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on New Account",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters Account Title as \"\u003caccountTitle\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters Description as \"\u003cdescription\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters Initial Balance as \"\u003cinitialBalance\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters Account Number as \"\u003caccountNumber\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters Contact Person as\"\u003ccontactPerson\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters Phone as \"\u003cphone\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters Internet Banking URL as\"\u003cinternetBankingURL\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfull",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "phone",
        "internetBankingURL"
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Alina account1",
        "Cheking",
        "890",
        "3654908",
        "Alina Papuc",
        "409755",
        "https://www.bing.com/"
      ],
      "line": 25,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Alina account1",
        "Savings",
        "890",
        "3654908",
        "Alina Papuc",
        "409755",
        "https://bonusoffer.wf.com/"
      ],
      "line": 26,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3063174900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters the \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Bank and Cash button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on New Account",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters Account Title as \"Alina account1\" in accounts page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters Description as \"Cheking\" in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters Initial Balance as \"890\" in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters Account Number as \"3654908\" in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters Contact Person as\"Alina Papuc\" in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters Phone as \"409755\" in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters Internet Banking URL as\"https://www.bing.com/\" in accounts page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfull",
  "keyword": "Then "
});
formatter.match({
  "location": "AddAccountStepDefinition.user_is_on_techfios_login_page()"
});
formatter.result({
  "duration": 200023200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_the(String)"
});
formatter.result({
  "duration": 1310400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 17
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_the(String)"
});
formatter.result({
  "duration": 45900,
  "status": "passed"
});
formatter.match({
  "location": "AddAccountStepDefinition.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "duration": 518095500,
  "status": "passed"
});
formatter.match({
  "location": "AddAccountStepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 282600,
  "error_message": "java.lang.NullPointerException\r\n\tat pages.LoginPage.getPageTitle(LoginPage.java:34)\r\n\tat steps.AddAccountStepDefinition.user_should_land_on_Dashboard_page(AddAccountStepDefinition.java:55)\r\n\tat ✽.Then User should land on Dashboard page(Login.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AddAccountStepDefinition.user_clicks_on_Bank_and_Cash_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddAccountStepDefinition.user_clicks_on_New_Account()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Alina account1",
      "offset": 30
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_Account_Title_as_in_accounts_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Cheking",
      "offset": 28
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_Description_as_in_accounts_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "890",
      "offset": 32
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_Initial_Balance_as_in_accounts_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3654908",
      "offset": 31
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_Account_Number_as_in_accounts_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Alina Papuc",
      "offset": 30
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_Contact_Person_as_in_accounts_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "409755",
      "offset": 22
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_Phone_as_in_accounts_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.bing.com/",
      "offset": 36
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_Internet_Banking_URL_as_in_accounts_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddAccountStepDefinition.user_clicks_on_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddAccountStepDefinition.user_should_be_able_to_validate_account_created_successfull()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 1955597500,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters the \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Bank and Cash button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on New Account",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters Account Title as \"Alina account1\" in accounts page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters Description as \"Savings\" in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters Initial Balance as \"890\" in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters Account Number as \"3654908\" in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters Contact Person as\"Alina Papuc\" in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters Phone as \"409755\" in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters Internet Banking URL as\"https://bonusoffer.wf.com/\" in accounts page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfull",
  "keyword": "Then "
});
formatter.match({
  "location": "AddAccountStepDefinition.user_is_on_techfios_login_page()"
});
formatter.result({
  "duration": 139366500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_the(String)"
});
formatter.result({
  "duration": 76900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 17
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_the(String)"
});
formatter.result({
  "duration": 36500,
  "status": "passed"
});
formatter.match({
  "location": "AddAccountStepDefinition.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "duration": 441476600,
  "status": "passed"
});
formatter.match({
  "location": "AddAccountStepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 114100,
  "error_message": "java.lang.NullPointerException\r\n\tat pages.LoginPage.getPageTitle(LoginPage.java:34)\r\n\tat steps.AddAccountStepDefinition.user_should_land_on_Dashboard_page(AddAccountStepDefinition.java:55)\r\n\tat ✽.Then User should land on Dashboard page(Login.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AddAccountStepDefinition.user_clicks_on_Bank_and_Cash_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddAccountStepDefinition.user_clicks_on_New_Account()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Alina account1",
      "offset": 30
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_Account_Title_as_in_accounts_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Savings",
      "offset": 28
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_Description_as_in_accounts_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "890",
      "offset": 32
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_Initial_Balance_as_in_accounts_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3654908",
      "offset": 31
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_Account_Number_as_in_accounts_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Alina Papuc",
      "offset": 30
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_Contact_Person_as_in_accounts_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "409755",
      "offset": 22
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_Phone_as_in_accounts_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://bonusoffer.wf.com/",
      "offset": 36
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_Internet_Banking_URL_as_in_accounts_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddAccountStepDefinition.user_clicks_on_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddAccountStepDefinition.user_should_be_able_to_validate_account_created_successfull()"
});
formatter.result({
  "status": "skipped"
});
});