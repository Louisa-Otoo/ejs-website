function authenticationIsSuccessful(username, password) {
    // Add your authentication logic here
    // For example, you can compare the username and password with a stored user's credentials
    if (username === 'admin' && password === 'admin123') {
      return true; // Authentication successful
    } else {
      return false; // Authentication failed
    }
  }
  
  module.exports = authenticationIsSuccessful;