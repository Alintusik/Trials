package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.Accounts;
import pages.Dashboard;
import pages.LaunchBrowser;
import pages.LoginPage;

public class AddAccountStepDefinition extends LaunchBrowser {
	LoginPage loginPage;
	Dashboard dashboard;
	Accounts accounts;
	
	@Before
	public void setup() {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		dashboard = PageFactory.initElements(driver, Dashboard.class);
		accounts = PageFactory.initElements(driver, Accounts.class);
	}

	@Given ("^User is on techfios login page$")
	public void user_is_on_techfios_login_page() {
		
		driver.get("https://techfios.com/billing/?ng=admin/");
	}
	@When("^User enters the \"([^\"]*)\"$")
	public void user_enters_the (String loginData) {
		
		//under loginData we save the values of username and password, as both feature have exact same wording, and we use only once the step(user enters the)
		if(loginData.equalsIgnoreCase("username")) {
			loginPage.enterUserName(loginData);
		} else if (loginData.equalsIgnoreCase("password")) {
			loginPage.enterUserName(loginData);
		} else {
			System.out.println("Unable to enter login data:+loginData");
		}
	}
		 
	@When("^User clicks on Sign in button$")
	public void user_clicks_on_Sign_in_button() {
	   
		loginPage.clickSignInButton();
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page()  {
		String expectedTitle = "Dashboard- iBilling";
		String actualTitle = loginPage.getPageTitle();
		Assert.assertEquals(expectedTitle, actualTitle);   
	}

	@Then("^User clicks on Bank and Cash button$")
	public void user_clicks_on_Bank_and_Cash_button()  {
	    
		dashboard.clickBankCash();
	}

	@Then("^User clicks on New Account$")
	public void user_clicks_on_New_Account()  {
	   
		dashboard.clickBankCash();
	}

	@Then("^User enters Account Title as \"([^\"]*)\" in accounts page$")
	public void user_enters_Account_Title_as_in_accounts_page(String accountTitle)  {
	   accounts.enterAccountTitle(accountTitle);
	    }

	@Then("^User enters Description as \"([^\"]*)\" in accounts page$")
	public void user_enters_Description_as_in_accounts_page(String description)  {
		accounts.enterDescription(description);
	}
	   

	@Then("^User enters Initial Balance as \"([^\"]*)\" in accounts page$")
	public void user_enters_Initial_Balance_as_in_accounts_page(String initialBalance)  {
	    accounts.enterInitialBalance(initialBalance);
	}

	@Then("^User enters Account Number as \"([^\"]*)\" in accounts page$")
	public void user_enters_Account_Number_as_in_accounts_page(String accountNumber)  {
		accounts.enterAccountNumber(accountNumber);
	}

	@Then("^User enters Contact Person as\"([^\"]*)\" in accounts page$")
	public void user_enters_Contact_Person_as_in_accounts_page(String contactPerson)  {
	    accounts.enterContactPerson(contactPerson);
	}

	@Then("^User enters Phone as \"([^\"]*)\" in accounts page$")
	public void user_enters_Phone_as_in_accounts_page(String phone)  {
	    accounts.enterPhone(phone);
	}

	@Then("^User enters Internet Banking URL as\"([^\"]*)\" in accounts page$")
	public void user_enters_Internet_Banking_URL_as_in_accounts_page(String internetBankingURL)  {
	    accounts.InternetBankingURL(internetBankingURL);
	}

	@Then("^User clicks on Submit button$")
	public void user_clicks_on_Submit_button()  {
	    accounts.Submit();
	}

	@Then("^User should be able to validate account created successfull$")
	public void user_should_be_able_to_validate_account_created_successfull()  {
	  
	}
}
