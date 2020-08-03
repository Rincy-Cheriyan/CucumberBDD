$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "negative Test Scenario",
  "description": "",
  "id": "login-feature;negative-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@B"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "usre is on loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user clicks on signin link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user is on Login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login-feature;negative-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 20,
      "id": "login-feature;negative-test-scenario;;1"
    },
    {
      "cells": [
        "capg",
        "capg123"
      ],
      "line": 21,
      "id": "login-feature;negative-test-scenario;;2"
    },
    {
      "cells": [
        "admin",
        ""
      ],
      "line": 22,
      "id": "login-feature;negative-test-scenario;;3"
    },
    {
      "cells": [
        "",
        "admin@123"
      ],
      "line": 23,
      "id": "login-feature;negative-test-scenario;;4"
    },
    {
      "cells": [
        "admin",
        "a@123"
      ],
      "line": 24,
      "id": "login-feature;negative-test-scenario;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "negative Test Scenario",
  "description": "",
  "id": "login-feature;negative-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@B"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "usre is on loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user enters \"capg\" and \"capg123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user clicks on signin link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user is on Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.usre_is_on_loginpage()"
});
formatter.result({
  "duration": 8786281700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "capg",
      "offset": 13
    },
    {
      "val": "capg123",
      "offset": 24
    }
  ],
  "location": "LoginStepDef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 2036260600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_signin_link()"
});
formatter.result({
  "duration": 283480800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_is_on_Login_page()"
});
formatter.result({
  "duration": 19903700,
  "status": "passed"
});
formatter.after({
  "duration": 167100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "negative Test Scenario",
  "description": "",
  "id": "login-feature;negative-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@B"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "usre is on loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user enters \"admin\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user clicks on signin link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user is on Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.usre_is_on_loginpage()"
});
formatter.result({
  "duration": 4996341800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "",
      "offset": 25
    }
  ],
  "location": "LoginStepDef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 2293051300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_signin_link()"
});
formatter.result({
  "duration": 241752000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_is_on_Login_page()"
});
formatter.result({
  "duration": 84192100,
  "status": "passed"
});
formatter.after({
  "duration": 66200,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "negative Test Scenario",
  "description": "",
  "id": "login-feature;negative-test-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@B"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "usre is on loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user enters \"\" and \"admin@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user clicks on signin link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user is on Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.usre_is_on_loginpage()"
});
formatter.result({
  "duration": 4262314700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    },
    {
      "val": "admin@123",
      "offset": 20
    }
  ],
  "location": "LoginStepDef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 1648035800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_signin_link()"
});
formatter.result({
  "duration": 792757600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_is_on_Login_page()"
});
formatter.result({
  "duration": 97862300,
  "status": "passed"
});
formatter.after({
  "duration": 98800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "negative Test Scenario",
  "description": "",
  "id": "login-feature;negative-test-scenario;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@B"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "usre is on loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user enters \"admin\" and \"a@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user clicks on signin link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user is on Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.usre_is_on_loginpage()"
});
formatter.result({
  "duration": 6259023300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "a@123",
      "offset": 25
    }
  ],
  "location": "LoginStepDef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 1494942600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_signin_link()"
});
formatter.result({
  "duration": 470875400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_is_on_Login_page()"
});
formatter.result({
  "duration": 34758900,
  "status": "passed"
});
formatter.after({
  "duration": 83700,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Registration Scenario",
  "description": "",
  "id": "login-feature;registration-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@A"
    },
    {
      "line": 26,
      "name": "@B"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "usre is on registrationpage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "user enters data",
  "rows": [
    {
      "cells": [
        "username",
        "rincy"
      ],
      "line": 30
    },
    {
      "cells": [
        "password",
        "rincy@123"
      ],
      "line": 31
    },
    {
      "cells": [
        "cpassword",
        "rincy@234"
      ],
      "line": 32
    },
    {
      "cells": [
        "mailid",
        "rc@rc.com"
      ],
      "line": 33
    },
    {
      "cells": [
        "mobno",
        "123456789"
      ],
      "line": 34
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "user clicks on signin link",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.usre_is_on_registrationpage()"
});
formatter.result({
  "duration": 136400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_enters_data(DataTable)"
});
formatter.result({
  "duration": 2730500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_signin_link()"
});
formatter.result({
  "duration": 2079200,
  "error_message": "java.lang.NullPointerException\r\n\tat com.cg.stepdef.LoginStepDef.user_clicks_on_signin_link(LoginStepDef.java:31)\r\n\tat ✽.And user clicks on signin link(Login.feature:35)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDef.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 97000,
  "status": "passed"
});
});