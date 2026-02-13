## Backend Authentication Flow – Debugging Assignment

### Summary
Fixed the broken authentication flow involving OTP-based login, session handling,
JWT generation and protected route access.

### Key Fixes
- Loaded environment variables using dotenv
- Fixed middleware flow issues (missing next())
- Corrected session handling via cookies
- Implemented JWT-based authorization for protected routes

### Result
The complete authentication lifecycle was tested and verified successfully.

Note: Sensitive values have been masked in execution proofs shared separately.
