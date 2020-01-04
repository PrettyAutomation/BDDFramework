package stepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HooksDefinition {
	
	//global 
	@Before(order=0)
	public void setUp() {
		System.out.println("Launch FF");
		System.out.println("enter url for Free CRM APP");	
	}
	
	@After(order=0)
	public void tearDown() {
		System.out.println("close the browser");			
	}
	
	@Before(order=1)
	public void setUp1() {
		System.out.println("Launch FF from setup1");
		System.out.println("enter url for Free CRM APP from setup1");	
	}
	

	@After(order=1)
	public void tearDown1() {
		System.out.println("close the browser1");			
	}
	
	@Before("@Second")
	public void beforeFirst() {
		System.out.println("only for second scenario beforemethod");	
	}
	
	@After("@Second")
	public void afterFirst() {
		System.out.println("only for second scenario aftermethod");			
	}
	
	@Given("^user is on deal page$")
	public void user_is_on_deal_page(){
		System.out.println("i m on deal page");		
	}

	@When("^user fills the form$")
	public void user_fills_the_form() {
		System.out.println("i m on deal form");	
	}

	@Then("^deal is created$")
	public void deal_is_created() {
		System.out.println("i m on deal created");	 
	}

	@Given("^user is on contact page$")
	public void user_is_on_contact_page() {
		System.out.println("i m on contact page");	 
	}

	@When("^user fills the contact form$")
	public void user_fills_the_contact_form() {
		System.out.println("i m on contact form");
	}

	@Then("^contact is created$")
	public void contact_is_created() {
		System.out.println("i m on contact created");
	}

	@Given("^user is on email page$")
	public void user_is_on_email_page() {
		System.out.println("i m on email page");
	}

	@When("^user fills the mail form$")
	public void user_fills_the_mail_form() {
		System.out.println("i m on email form"); 
	}

	@Then("^mailpage is created$")
	public void mailpage_is_created() {
		System.out.println("i m on email created");
	}



}
