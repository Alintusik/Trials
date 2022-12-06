package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Dashboard {
 
	WebDriver driver;
	//we declare that this driver it's same driver like in other pages
	public Dashboard (WebDriver driver) {
	this.driver = driver;
	}
	@FindBy (how = How.XPATH, using ="//*[@id=\"side-menu\"]/li[10]/a/span[1]")
	WebElement BankCash;
	@FindBy (how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/ul/li[1]/a")
	WebElement NewAccount;
	
	//methods to interact with the Webelements
	public void clickBankCash() {
		BankCash.click();
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
	}
	
	public void clickNewAccount() {
		NewAccount.click();
		
	}
}
