const request = require('request');

request.get('https://www.google.com/', (error, response, body) => {
  console.log(error);
  // console.log(response);
  /**
   * Within the response object, we have two fundamental things:
   * 1) RESPONSE STATUS CODE
   *    200's - Everything's OK
   *    300's - Redirection
   *    400's - Client did something wrong...
   *    500's - Server did something wrong...
  */
   console.log(response.statusCode);

  /**
   *  2) RESPONSE BODY, or just BODY
   *     it contains the actual data that you want to access, it's the "protein"
   */

  console.log(response.body);
  // console.log(body);
})
