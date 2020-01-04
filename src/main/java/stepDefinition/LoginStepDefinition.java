package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {
	
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
	
//	@Then("^user enters username and password$")
//	public void user_enters_username_and_password(){
//		switchToChildWindow(); 
//	    driver.findElement(By.name("email")).sendKeys("naveenk");
//	    driver.findElement(By.name("password")).sendKeys("test@123");
//	    driver.findElement(By.xpath("//div[text()='Login']")).click();
//	}

//	//1.\"(.*)\"
//	//2. \"([^\"]*)\"
	
	   @Then("^user enters \"(.*)\" and \"(.*)\"$")
		public void user_enters_username_and_password(String username, String passward){
			switchToChildWindow(); 
		    driver.findElement(By.name("email")).sendKeys(username);
		    driver.findElement(By.name("password")).sendKeys(passward);
		    driver.findElement(By.xpath("//div[text()='Login']")).click();
		}


	@Then("^user is on Home page$")
	public void user_is_on_Home_page() {
		String hometitle = driver.getTitle();
		System.out.println("homepage title is : " +hometitle );
		Assert.assertEquals("Cogmento CRM", hometitle);
		
	}
	
	@Then("^user is moves to contacts page$")
	public void user_is_moves_to_contacts_page() throws Throwable {
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'new Contact']")).click();
	   
	}

	@Then("^user provide the contact details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_provide_the_contact_details_and_and(String firstname, String lastname, String position) throws Throwable {
		driver.findElement(By.id("first_name")).sendKeys(firstname);
		driver.findElement(By.id("surname")).sendKeys(lastname);
		driver.findElement(By.id("company_position")).sendKeys(position);
		driver.findElement(By.xpath("//input[@type='submit' and @value='save']")).click();
	    
	}

	
	@Then("^user quit the browser$")
	public void user_quit_the_browser() {
		driver.quit();
	}
	
	public void switchToChildWindow(){	
		  for(String childWindow:driver.getWindowHandles()){
			  driver.switchTo().window(childWindow);
			 }
		 }

	

}
