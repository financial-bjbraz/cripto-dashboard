# 03 --- Authentication

## Login Screen

Fields: - Email - Password

## Requirements

-   Client-side validation
-   Loading states
-   Error handling
-   Secure token handling (HTTP-only cookie preferred)

## BFF Endpoint

POST /auth/login

-   Validate credentials
-   Generate JWT
-   Return secure session
