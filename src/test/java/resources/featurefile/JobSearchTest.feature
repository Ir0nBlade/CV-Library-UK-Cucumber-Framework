Feature: Job Search Test

  Background: I am on homepage
    Then  I accept cookies

  @Regression
  Scenario Outline: Verify user should be ablt to search job successfully
    When  I enter "<JOB TITLE>" in job title field
    And   I enter "<LOCATION>" in location field
    And   I select "<DISTANCE>" in the distance field
    And   I click on the More Search Option Link
    And   I enter "<MINIMUM SALARY>" data in the minimum salary field
    And   I enter "<MAXIMUM SALARY>" data in the maximum salary field
    And   I select the "<SALARY TYPE>" salary type
    And   I select the "<JOB TYPE>" job type
    And   I click on the Find Jobs Button
    Then  I verify the Result "<RESULT>"

    Examples:
      | JOB TITLE                  | LOCATION    | DISTANCE         | MINIMUM SALARY | MAXIMUM SALARY | SALARY TYPE | JOB TYPE  | RESULT                                                         |
      | Software Tester            | Crawley     | up to 5 miles    | 30000          | 50000          | Per annum   | Permanent | Permanent Software Tester jobs in Crawley                      |
      | Software Automation Tester | Harrow      | up to 15 miles   | 30000          | 60000          | Per annum   | Contract  | Contract Software Automation Tester jobs in Harrow on the Hill |
      |Manual Software Tester      | West Sussex | up to 7 miles    | 30000          | 60000          | Per annum   | Any       | Manual Software Tester jobs in West Sussex                     |
      |Retail Manager              | Horley      | up to 25 miles   | 30000          | 50000          | Per annum   | Permanent | Permanent Retail Manager jobs in Horley                        |
      |Automation Tester           | HA1 1AB     | up to 10 miles   | 300            | 400            | Per day     | Contract  | Contract Automation Tester jobs in HA1 1AB                     |
      |Research Scientist          | SS12 0NY    | up to 50 miles   | 500            | 800            | Per day     | Contract  | Contract Research Scientist jobs in SS12 0NY                   |
      |Software Developer          | London      | up to 35 miles   | 45000          | 75000          | Per annum   | Permanent | Permanent Software Developer jobs in London                    |


