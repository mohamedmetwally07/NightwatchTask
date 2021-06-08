

module.exports = {
    'NW test on Google' : function (CRUD_APP) {
      CRUD_APP
        
        .maximizeWindow()
        .url('https://codepen.io/SedatUygur/pen/jWgJdv')
        .waitForElementVisible('body', 1000)
        .waitForElementPresent('#result_div > iframe', 1000)
        .pause(1000)
        .frame(0)
        
        //Adding Recipe//
        .waitForElementVisible('#show', 1000)
        .click('#show')
        .pause(1000)
        .setValue('input[type=text]', 'Koshary')
        .setValue('textarea[type=textarea]', 'Rice,Pasta,Lentil,Fried Onions,Tomato Sauce')
        .pause(1000)
        .waitForElementVisible('#addButton', 1000)
        .click('#addButton')
        
        //Adding Recipe Assertion//
        .pause(1000)
        .assert.visible('a[data-reactid=".1.0.$3/=13.0.0.0"]:nth-child(1)')
        .pause(1000)

        //Deleting Recipe//
        .waitForElementVisible('a[data-reactid=".1.0.$3/=13.0.0.0"]:nth-child(1)', 1000)
        .click('a[data-reactid=".1.0.$3/=13.0.0.0"]:nth-child(1)')
        .pause(1000)

        .getLocationInView('#btn-del3') 
        .assert.visible('#btn-del3')
        .pause(500)
        .click('#btn-del3')
        .pause(1000)

        //Deleting Recipe Assertion//
        .assert.not.containsText("#container" , "Koshary")
        .pause(1000)
        
        //Editing Exist Recipe//
        .waitForElementVisible('a[data-reactid=".1.0.$0/=10.0.0.0"]:nth-child(1)', 1000)
        .click('a[data-reactid=".1.0.$0/=10.0.0.0"]:nth-child(1)')
        .pause(1000)

        .getLocationInView('#btn-edit0') 
        .assert.visible('#btn-edit0')
        .pause(500)
        .click('#btn-edit0')
        .pause(2000)

        .clearValue('input[type=text]')
        .pause(1000)
        .setValue('input[type=text]', 'Pasta')
        .pause(1000)
        .setValue('textarea[type=textarea]', ',Hot Sauce')
        .pause(2000)
        .waitForElementVisible('#addButton', 1000)
        .click('#addButton')
        .pause(2000)
        
        .waitForElementVisible('a[data-reactid=".1.0.$0/=10.0.0.0"]:nth-child(1)', 1000)
        .click('a[data-reactid=".1.0.$0/=10.0.0.0"]:nth-child(1)')
        .pause(1000)

        //Editing Exist Recipe Assertion//
        .assert.containsText("#container" , "Pasta")
        .pause(1000)

        .waitForElementVisible('a[data-reactid=".1.0.$3/=13.0.0.0"]:nth-child(1)', 1000)
        .click('a[data-reactid=".1.0.$3/=13.0.0.0"]:nth-child(1)')
        .pause(1000)

        
        .execute('window.scrollTo(0,document.body.scrollHeight);')
        .assert.containsText("#container" , "Hot Sauce")
        .pause(1000)
    }
  }