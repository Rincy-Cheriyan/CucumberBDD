package com.cg.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="features",glue="com.cg.stepdef",monochrome=true,dryRun=false,
plugin={"json:test-output/cucumber.json","junit:test-output/cucumber.xml","html:test-output"},
tags={"@B"})
public class TestRunner {

}
