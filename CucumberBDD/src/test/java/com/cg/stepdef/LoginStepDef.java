package com.cg.stepdef;

import java.util.Map;

import org.junit.Assert;

import com.cg.pages.LoginPage;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;


public class LoginStepDef {
	LoginPage login;
	
	@Given("^usre is on loginpage$")
	public void usre_is_on_loginpage() throws Throwable {
		login=new LoginPage();
	}

	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String user, String pass) throws Throwable {
		login.enterUsername(user);
		login.enterPassword(pass);
	}

	@When("^user clicks on signin link$")
	public void user_clicks_on_signin_link() throws Throwable {
		login.clcikSignin();
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() throws Throwable {
		System.out.println("Then");  
	}
	@Then("^user is on Login page$")
	public void user_is_on_Login_page() throws Throwable {
	   Assert.assertEquals("Online Shopping India - Shop for clothes, shoes, Bags, watches @ Shoppersstop.com", login.getTitle());
	}
	
	@Given("^usre is on registrationpage$")
	public void usre_is_on_registrationpage() throws Throwable {
	   System.out.println("Registration Page");
	}

	@When("^user enters data$")
	public void user_enters_data(DataTable data) throws Throwable {
	    Map<String,String>map=data.asMap(String.class,String.class);
	    System.out.println(map.get("username"));
	    System.out.println(map.get("password"));
	    System.out.println(map.get("cpassword"));
	    System.out.println(map.get("mailid"));
	    System.out.println(map.get("mobno"));
	    
	}
	
	@After
	public void tearDown()
	{
		System.out.println("Closing");
	}




}
