package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage extends LaunchBrowser {
WebDriver driver;


//Element Library 
@FindBy(how = How.XPATH, using = "//*[@id=\"username\"]")
WebElement UserName;
@FindBy(how = How.XPATH, using = "//*[@id=\"password\"]")
WebElement Password;
@FindBy(how = How.XPATH, using = "/html/body/div/div/div/form/div[3]/button")
WebElement SignInButton;

// Methods to interact with the elements
public void enterUserName(String username) {
UserName.sendKeys(username);
}

public void enterPassword(String password) {
Password.sendKeys(password);
}

public void clickSignInButton() {
SignInButton.click();
} 

public String getPageTitle() {
return driver.getTitle();
}
}
