
This is a Job Listing API built using Express.js, MongoDB, and TypeScript. It provides functionality for creating, reading, updating, and deleting job listings.

Features:

Create job listings.

Retrieve all job listings or a specific job listing by ID.

Update job listings.

Delete job listings.

Prerequisites: 

Before you begin, ensure you have met the following requirements:
Node.js: v18 or higher.
MongoDB: Local installation or a cloud database.
npm: Node package manager.


Installation
Clone the repository
Navigate to the project directory:cd JobListing_Backend

Install dependencies:
npm install

Usage
Create a .env file in the root directory of the project. Use the provided .env.example file as a template.

Set up your MongoDB connection string in the .env file.

Start the application:

npm run dev 
The server will start on the default port (8000). Access the API at:
http://localhost:8000

Environment Variables
The following environment variables are required for the application to run:

MONGODB_URI: The connection string for your MongoDB database.
PORT : The port the server will run on (default is 8000).

API Endpoints

Job Management

Create a Job
Endpoint: POST /api/v1/job/createJob
Description: Creates a new job listing.

Get All Jobs
Endpoint: GET /api/v1/job/createJob
Description: Retrieves all job listings.

Get a Job by ID
Endpoint: GET /api/v1/job/createJob/:id
Description: Retrieves a specific job listing by ID.

Update a Job by ID
Endpoint: PUT /api/v1/job/updateJob/:id
Description: Updates a job listing by ID.

Delete a Job by ID
Endpoint: DELETE /api/v1/job/delete/:id
Description: Deletes a job listing by ID.

Hosted API
The API is hosted on an AWS EC2 instance. Access the live API at:http://13.203.156.55:8000
Additional Notes
Ensure your MongoDB instance is running and accessible before starting the application.
Use the .env file to securely store sensitive configuration details.
