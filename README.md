# API Documentation

## Backend API

### Endpoints

#### GET /
*Description:*  
Returns a welcome message for the main page.

#### GET /profile/:id
*Description:*  
Fetches the profile of a user by their ID.

#### GET /get-profile/:email
*Description:*  
Fetches the profile of a user by their email.

#### GET /profile
*Description:*  
Fetches all user profiles.

#### PUT /update-Password/:email
*Description:*  
Updates the password of a user by their email.

#### POST /signup
*Description:*  
Registers a new user.

#### POST /forgot
*Description:*  
Sends an OTP to the user's email for password reset.

#### POST /verify
*Description:*  
Verifies a user using the OTP.

#### POST /signin
*Description:*  
Handles user sign-in.

#### DELETE /profile/:id (Protected Route)
*Description:*  
Deletes a user profile by ID. Requires authentication.

#### PUT /profile/:id (Protected Route)
*Description:*  
Updates a user profile by ID. Requires authentication.
