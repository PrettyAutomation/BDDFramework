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
		driver.switchTo().frame(0);
		driver.findElement(By.xpath("//span[text()='Contacts']")).click();
		driver.findElement(By.xpath("//*[text()='New']")).click();   
	}

	@Then("^user provide the contact details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_provide_the_contact_details_and_and(String firstname, String lastname, String email) throws Throwable {
		driver.findElement(By.cssSelector("input[name='first_name']")).sendKeys(firstname);
		driver.findElement(By.cssSelector("input[name='last_name']")).sendKeys(lastname);
		driver.findElement(By.cssSelector("input[placeholder='Email address']")).sendKeys(email);		
		driver.findElement(By.xpath("//*[text()='Save']")).click();
		    
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
