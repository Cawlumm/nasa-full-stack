# NASA Full Stack Project

![NASA Logo](link-to-nasa-logo.png) ![SpaceX Logo](link-to-spacex-logo.png)

This project is an exciting showcase of simulated NASA launches using NASA and SpaceX APIs. It combines a React frontend, an Express backend, and relies on a MongoDB database to bring these launches to life.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Stack](#project-stack)
- [Features](#features)
- [Contributors](#contributors)
- [License](#license)

## Installation

To get your local environment up and running with this project, follow these straightforward steps:

1. Begin by cloning the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/nasa-full-stack.git
   cd nasa-full-stack
   ```

Usage
Explore the wonders of this project by simulating NASA launches and discovering exciting details about space exploration. Be sure to follow these guidelines to make the most of your experience.

Project Stack
Frontend: React
Backend: Express
Database: MongoDB

Features
This project is packed with features and utilizes several modules and dependencies to ensure a smooth and engaging experience:

React: The frontend is built using React, providing a dynamic and interactive user interface.

Express: The backend is powered by Express, which handles API requests, data storage, and routing.

MongoDB: MongoDB serves as the database for storing information about launches and user data.

Cors: The Cors middleware enables Cross-Origin Resource Sharing, allowing the frontend to communicate with the backend.

csv-parse: This module facilitates the parsing of CSV files, making it easier to import data.

morgan: Morgan is used for HTTP request logging, providing insights into server activity.

Jest: Jest is employed for testing purposes, ensuring the reliability and correctness of the codebase.

Nodemon: Nodemon aids in the development process by automatically restarting the server upon code changes.

PM2: The project showcases basic load balancing with clusters using PM2, improving server performance.

Node Modules:
Clustering => By using the cluster module, you can take advantage of multiple CPU cores or processes to improve the performance and reliability of your Node.js applications, especially in situations where you expect a high volume of incoming requests.

Dependencies:

Cors => By using the "cors" middleware in your Node.js application, you can effectively control which domains are allowed to access your server's resources via XMLHttpRequest, Fetch API, or other client-side technologies. This helps enhance the security of your web application by preventing unauthorized cross-origin requests while still allowing legitimate ones.

csv-parse => The csv-parse module is a Node.js library used for parsing CSV (Comma-Separated Values) data. CSV is a widely used format for storing and exchanging structured data in a plain text format. The csv-parse module allows you to easily convert CSV data into JavaScript objects or arrays for further processing in your Node.js applications.

express => self explainitary

morgan => Morgan is a popular middleware for Node.js applications, specifically designed for logging HTTP request details. It's used to generate request logs, providing valuable information about incoming HTTP requests, such as their method, URL, response status, and more. Morgan is often used in combination with web frameworks like Express.js to enhance the debugging and monitoring of web applications.

Dev Dependencies:

jest => Jest is a popular JavaScript testing framework that is commonly used for testing JavaScript and TypeScript applications, including frontend applications (e.g., React, Vue) and backend applications (e.g., Node.js). Developed and maintained by Facebook, Jest is designed to be easy to set up and use while providing a robust set of features for writing and running tests.

nodemon => Nodemon is a utility for Node.js applications that helps streamline the development process by automatically restarting the Node.js application whenever changes are detected in the source code. It's particularly valuable when building server-side applications or command-line tools during development. Nodemon is often used to avoid the manual stopping and restarting of the application server each time a code change is made.
