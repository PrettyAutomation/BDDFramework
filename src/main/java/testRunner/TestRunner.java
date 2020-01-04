package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
//		features = "/Users/pretty.sanwale/eclipse/reporting-2019-09/MavenBDDFramework/src/main/java/Features/login.feature" //path of the feature file
//		features = "/Users/pretty.sanwale/eclipse/reporting-2019-09/MavenBDDFramework/src/main/java/Features/Contacts.feature"
//		features = "/Users/pretty.sanwale/eclipse/reporting-2019-09/MavenBDDFramework/src/main/java/Features/Deal.feature"
	    features = "/Users/pretty.sanwale/eclipse/reporting-2019-09/MavenBDDFramework/src/main/java/Features/dealMap.feature"
		,glue= {"stepDefinition"}, //to define the package where all definition files are present
                  format= {"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"}, //to generate good report
		dryRun = false, // to check mapping between step definition and features but no failure in execution
		strict = true, //it will strictly check the mapping between step definition and features it will fail if any step definition pending
		monochrome = true ) //to generate more readable console output

public class TestRunner {

}
 