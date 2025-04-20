# AppScan 360° Demo

![AppScan Logo](./logo.svg)

## Description

This project demonstrates the integration of HCL AppScan 360° with a React application. It showcases how static application security testing (SAST) can be seamlessly incorporated into the development workflow to identify and remediate security vulnerabilities in real-time.

## Features

- Real-time security scanning of React code
- Integration with AppScan 360° for vulnerability detection
- User-friendly interface for viewing and addressing security issues

## Technologies Used

- React
- AppScan 360°
- Visual Studio Code
- GitHub Actions (for CI/CD pipeline)

## Setup

### Prerequisites

- Node.js and npm installed
- Visual Studio Code with the AppScan CodeSweep extension
- AppScan 360° account with valid credentials

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/appscan-360-demo.git
   cd appscan-360-demo
   ```

2. Install dependencies:

   ```
   npm install
   ```
3. Configure AppScan CodeSweep in VS Code: 
{
  "configureCloudCredentials": [
    {
      "serviceUrl": "https://cloud.appscan.com",
      "keyId": "your-key-id",
      "keySecret": "your-key-secret",
      "acceptssl": true
    }
  ]
}
4. Start the development server:

    ```
    npm start
    ```

5. Open the application in your browser:

    ```
    http://localhost:3000
    ```