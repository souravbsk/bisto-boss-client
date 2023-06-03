/***
 *------------------
 *       BASIC
 * ------------------
 * 
 * 1. do not show the link to them who should not see it, only show to the person/types of user who should see it
 * 2. Do not allow to visit the link by typing on the url
 * 3. if not admin then logOut user
 * __________________
 * TO SEND DATA
 * _______________
 * 
 * 1. verify jwt token (send authorization token in the header to the server).
 * if possible use axios to send jwt token by intercepting the request
 * 2. if it is an admin activity. Make sure only admin user is posting data
 * by using verifyAdmin
 * 
*/