# ZPlatform User Account Management System

This repository contains the source code and instructions for setting up the user account management system for ZPlatform. The system is designed to handle the onboarding process of new users, ensuring security, performance, and ease of use.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [System Architecture](#system-architecture)
4. [Setup Instructions](#setup-instructions)
5. [Verification Code and Caching](#verification-code-and-caching)
6. [Security Features](#security-features)
7. [User Profile](#user-profile)
8. [Account Verification](#account-verification)
9. [Testing](#testing)
10. [Developer Presentation](#developer-presentation)

## Introduction

Company Z's ZPlatform is a growing online service with a focus on improving user onboarding, ensuring high availability, and managing user data at scale. This repository addresses these needs by providing a comprehensive user account management system.

## System Architecture

The system is built using Node.js and TypeScript with the TSOA library configurations. It includes a PostgreSQL database for storing user data and a caching mechanism for handling verification codes. Docker Compose is integrated for easy deployment and testing.

## Features
1. **Account Management:**
   - Ability to create an account (signup)
   - Login and Logout
   - Password reset

2. **Security Features:**
   - Password strength enforcement and validation
   - Multi-factor authentication
   - Login Verification code support
   - Reset link support

3. **User Profile:**
   - Profile photo
   - Names (First and Last)
   - Gender
   - Age
   - Date of birth
   - Marital status (SINGLE, MARRIED, DIVORCED, or WIDOWED)
   - Nationality

4. **Account Verification:**
   - National Identification Number (NID) or passport number input
   - Upload images of official document
   - Account states: UNVERIFIED, PENDING VERIFICATION, VERIFIED

## Verification Code and Caching
- Verification codes are generated and cached for 10 minutes using a caching technique.
- This ensures that the code is valid for a limited time, improving security.

## Security Features
- Password strength is enforced and validated based on best practices.
- Multi-factor authentication is supported.
- Login link and reset link support enhances security.

## User Profile
- Users can upload an actual image for their profile photo.
- Various user details such as names, gender, age, etc., are collected for a comprehensive profile.

## Account Verification
- Users can provide NID or passport numbers and upload images of official documents.
- Accounts go through states: UNVERIFIED, PENDING VERIFICATION, and VERIFIED.
- Callback endpoint is provided for verification outcomes.
- Optional user notification upon account verification.

## Technology Stack

- Node.js/Typescript
- PostgreSQL (main database)
- Memcache (caching)
- Tsoa (API documentation)

## Setup and Run Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/frankhn/ZPlatform_backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ZPlatform
   ```

3. Run and start the application:

   ```bash
   ./script
   ```

    This will start the backend server, connected to the databases, and set up caching.

4. You will have to add environment variables in the .env file, a ,env.example file as been added: Application API documentation can be found at 

   ```
   http://localhost:[PORT]/api/docs 
   ```
 Open your browser and navigate to [http://localhost:8000/api/docs](http://localhost:8000/api/docs) to access the API documentation.

5. Follow the API documentation to test various endpoints for signup, login, profile management, and account verification.

## Additional Notes

- The caching technique is implemented using Memcache, and the verification code is cached for 10 minutes.

- Account verification is simulated, and the outcome callback endpoint can be found in the API documentation.

- The project follows best practices in terms of security and scalability.

- Tests have been implemented to ensure the robustness of the solution.

## Presentation Deck

[Google Presentation](https://docs.google.com/presentation/d/1tdeAsyfR-V2uwliwbEF1xZnMgFaIAVdDRGmtHHEkNFg/edit?usp=sharing)

## Testing
- Tests are implemented to ensure the reliability of both the backend and UI.
- Focus on security and scale in the design principles.

## Conclusion

This solution is designed to provide a seamless and secure user account management experience for ZPlatform, with a focus on scalability, security, and user verification. The architecture, technologies used, and design decisions are detailed in the presentation deck and can be further discussed during the walkthrough.
