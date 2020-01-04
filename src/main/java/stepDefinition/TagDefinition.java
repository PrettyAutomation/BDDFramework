package stepDefinition;

import cucumber.api.java.en.Given;

public class TagDefinition {
	
	@Given("^this is smoketest1$")
	public void this_is_smoketest1()  {
	    
	}
	@Given("^this is smoketest2$")
	public void this_is_smoketest2()  {
	    
	}


	@Given("^this is Regressiontest1$")
	public void this_is_Regressiontest1()  {
	   
	}
	
	@Given("^this is Regressiontest2$")
	public void this_is_Regressiontest2()  {
	   
	}

	@Given("^this is  smoke OR Regressiontest(\\d+)$")
	public void this_is_smoke_OR_Regressiontest(int arg1) {
	   
	}



}
