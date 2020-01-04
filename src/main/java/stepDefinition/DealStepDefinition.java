package stepDefinition;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class DealStepDefinition {
	
	WebDriver driver;
	WebElement elem;
	
	@Given("^user is already on Login Page$")
	 public void user_is_already_on_Login_Page() {
		System.setProperty("webdriver.chrome.driver","/Users/pretty.sanwale/git/PagefactoryTest/SeleniumTestNg/chromedriver");
		driver = new ChromeDriver();	
		driver.get("https://www.freecrm.com/");
			
	} 
	
	@When("^title of login page is Free CRM$")
	public void title_of_login_page_is_Free_CRM() {
		String title = driver.getTitle();
		System.out.println(title); 
		Assert.assertEquals("Free CRM #1 cloud software for any business large or small", title);
	}
	
	@Then("^user clicks on Login button$")
	public void user_clicks_on_Login_button() {
		 elem = driver.findElement(By.xpath("//span[text()='Log In']"));
		 elem.click();
    
	}
	
	@Then("^user provided username and password$")
	public void user_provided_username_and_password(DataTable dealData) throws Throwable {
	    
	    List<List<String>> dealvalue = dealData.raw();
	    switchToChildWindow(); 
	    driver.findElement(By.name("email")).sendKeys(dealvalue.get(0).get(0));
	    driver.findElement(By.name("password")).sendKeys(dealvalue.get(0).get(1));
	    driver.findElement(By.xpath("//div[text()='Login']")).click();
	    
	    
	}

	@Then("^user is on Home page$")
	public void user_is_on_Home_page() throws Throwable {
		String hometitle = driver.getTitle();
	    System.out.println("homepage title is : " +hometitle );
	    Assert.assertEquals("Cogmento CRM", hometitle);
	    
	}

	@Then("^user quit the browser$")
	public void user_quit_the_browser() throws Throwable {
		driver.quit();
	}
	
	public void switchToChildWindow(){	
		  for(String childWindow:driver.getWindowHandles()){
			  driver.switchTo().window(childWindow);
			 }
	}



}
