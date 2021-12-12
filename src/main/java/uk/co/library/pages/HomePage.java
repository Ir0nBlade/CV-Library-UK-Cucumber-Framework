package uk.co.library.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.co.library.utility.Utility;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }


    @CacheLookup
    @FindBy(id = "keywords")
    WebElement jobTitleField;

    @CacheLookup
    @FindBy(id = "location")
    WebElement locationField;

    @CacheLookup
    @FindBy(id = "distance")
    WebElement distanceDropDown;

    @CacheLookup
    @FindBy(id = "toggle-hp-search")
    WebElement moreSearchOptionsLink;

    @CacheLookup
    @FindBy(id = "salarymin")
    WebElement salaryMin;

    @CacheLookup
    @FindBy(id = "salarymax")
    WebElement salaryMax;

    @CacheLookup
    @FindBy(id = "salarytype")
    WebElement salaryTypeDropDown;

    @CacheLookup
    @FindBy(id = "tempperm")
    WebElement jobTypeDropDown;

    @CacheLookup
    @FindBy(id = "hp-search-btn")
    WebElement findJobsBtn;

    @CacheLookup
    @FindBy(xpath = "//button[@id='save']")
    WebElement acceptCookies;


    @CacheLookup
    @FindBy(id = "gdpr-consent-notice")
    WebElement iframe;


    public void setAcceptCookies() {
        switchToIframe(iframe);
        clickOnElement(acceptCookies);
        driver.switchTo().defaultContent();
        log.info("Accepting cookies: " + acceptCookies.toString());
    }

    public void enterJobTitle(String jobTitle) {
        sendTextToElement(jobTitleField, jobTitle);
        log.info("Entering job title: " + jobTitleField.toString());
    }

    public void enterLocation(String location) {
        sendTextToElement(locationField, location);
        log.info("Entering location: " + locationField.toString());
    }

    public void selectDistance(String distance)  {
//        Thread.sleep(1000);
        selectByVisibleTextFromDropDown(distanceDropDown, distance);
        log.info("Selecting distance from dropdown: " + distanceDropDown.toString());
    }

    public void clickOnMoreSearchOption() {
        clickOnElement(moreSearchOptionsLink);
        log.info("Clicking on more search options: " + moreSearchOptionsLink.toString());
    }

    public void enterMinSalary(String minSalary) {
        sendTextToElement(salaryMin, minSalary);
        log.info("Entering minimum salary: " + salaryMin.toString());
    }

    public void enterMaxSalary(String maxSalary) {
        sendTextToElement(salaryMax, maxSalary);
        log.info("Entering maximum salary: " + maxSalary.toString());
    }

    public void selectSalaryType(String salaryType) {
        selectByVisibleTextFromDropDown(salaryTypeDropDown, salaryType);
        log.info("Selecting salary type from dropdown: " + salaryTypeDropDown.toString());
    }

    public void selectJobType(String jobType) {
        selectByVisibleTextFromDropDown(jobTypeDropDown, jobType);
        log.info("Selecting job type from dropdown: " + jobTypeDropDown.toString());
    }

    public void clickOnFindJobsButton() {
        clickOnElement(findJobsBtn);
        log.info("Clicking on find job button: " + findJobsBtn.toString());
    }

    //    @CacheLookup
//    @FindBy(xpath = "//span//div//span[normalize-space()='Accept All']")
//    WebElement acceptCookies;

//    public void setAcceptCookies() {
//        driver.switchTo().frame("gdpr-consent-notice");
//        clickOnElement(acceptCookies);
//    }

}


