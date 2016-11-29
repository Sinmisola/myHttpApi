//Simple http get
var Client = require('node-rest-client').Client;
 
var client = new Client();
 
// direct way 
client.get("http://www.ncat.edu/", args,
    function (data, response) {
        // parsed response body as js object 
       
        // raw response 

        
        console.log("Get StatusCode: " + response.statusCode);
    });


// POST method invocation 

// set content-type header and data as javaScript in args parameter 
var args = {
    data: { test: "hello" },
    headers: { "Content-Type": "application/json" }
};
 
client.post("http://www.ncat.edu/", args, function (data, response) {
    // parsed response body as js object 
   
    // raw response 
    console.log("Post Status Code: "+response.statusCode);
});



 
 
