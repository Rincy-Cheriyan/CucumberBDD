package com.cg.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cg.base.TestBase;

public class LoginPage extends TestBase{
	@FindBy(xpath="//input[@id='j_username']")
	private WebElement username;
	@FindBy(xpath="//input[@id='j_password']")
	private WebElement password;
	@FindBy(xpath="//button[@id='loginajax']")
	private WebElement signin;
	
	public LoginPage()
	{
		init();
		PageFactory.initElements(driver, this);
	}
	
	public String getTitle()
	{
		return driver.getTitle();
	}
	
	public void enterUsername(String user)
	{
		username.sendKeys(user);
	}
	public void enterPassword(String pass)
	{
		password.sendKeys(pass);
	}
	public void clcikSignin()
	{
		signin.click();
	}

}
