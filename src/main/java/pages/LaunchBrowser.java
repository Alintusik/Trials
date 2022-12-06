package pages;

import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LaunchBrowser {
 public static WebDriver driver;

	public void initDriver() {
	System.setProperty("webdriver.chrome.driver", "driver\\chromedriver.exe");
	
	driver = new ChromeDriver();
	driver.manage().window().maximize();
	driver.manage().deleteAllCookies();
	driver.get("https://techfios.com/billing/?ng=admin/");
	driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
}
	
	public int randomIntGenerator (int endNumber) {
		Random randomIntGenerator = new Random();
		return randomIntGenerator.nextInt(endNumber) ;
	}
}
