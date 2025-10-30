const accountId =1214556
let accountEmail="deepak@gmail.com"
var accountPassword ="12345"
accountCity="Solan"
let accountState;
 // initialization
// accountId= 1214557 // we cannot change value of const variable

accountEmail="otw.deepak@gmail.com"
accountPassword="67890"
accountCity="Chandigarh"

 console.log(accountId)

 /*
prefer not to use var for variable declaration
or never use var ... use let and const
beacuse of issues in block scope and funtional scope 
 */
 console.table([accountId,accountEmail,accountPassword,accountCity, accountState])