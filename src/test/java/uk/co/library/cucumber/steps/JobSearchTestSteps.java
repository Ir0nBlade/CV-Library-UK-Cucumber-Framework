package uk.co.library.cucumber.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.library.pages.HomePage;
import uk.co.library.pages.ResultPage;

public class JobSearchTestSteps {
    @Then("^I accept cookies$")
    public void iAcceptCookies() {
        new HomePage().setAcceptCookies();
    }

    @When("^I enter \"([^\"]*)\" in job title field$")
    public void iEnterInJobTitleField(String jobTitle)  {
        new HomePage().enterJobTitle(jobTitle);
    }

    @And("^I enter \"([^\"]*)\" in location field$")
    public void iEnterInLocationField(String location)  {
        new HomePage().enterLocation(location);
    }

    @And("^I select \"([^\"]*)\" in the distance field$")
    public void iSelectInTheDistanceField(String distance)  {
        new HomePage().selectDistance(distance);
    }

    @And("^I click on the More Search Option Link$")
    public void iClickOnTheMoreSearchOptionLink() {
        new HomePage().clickOnMoreSearchOption();
    }

    @And("^I enter \"([^\"]*)\" data in the minimum salary field$")
    public void iEnterDataInTheMinimumSalaryField(String minSalary)  {
        new HomePage().enterMinSalary(minSalary);
    }

    @And("^I enter \"([^\"]*)\" data in the maximum salary field$")
    public void iEnterDataInTheMaximumSalaryField(String maxSalary)  {
        new HomePage().enterMaxSalary(maxSalary);
    }

    @And("^I select the \"([^\"]*)\" salary type$")
    public void iSelectTheSalaryType(String salaryType)  {
        new HomePage().selectSalaryType(salaryType);
    }

    @And("^I select the \"([^\"]*)\" job type$")
    public void iSelectTheJobType(String jobType)  {
        new HomePage().selectJobType(jobType);
    }

    @And("^I click on the Find Jobs Button$")
    public void iClickOnTheFindJobsButton() {
        new HomePage().clickOnFindJobsButton();
    }

    @Then("^I verify the Result \"([^\"]*)\"$")
    public void iVerifyTheResult(String result)  {
        new ResultPage().verifyTheResults(result);
    }
}
