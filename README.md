# BLOG CLIENT MADE WITH NEXT.JS

Very excited to learn how to do a Next.js app and also finally use TypeScript

So far, I've managed to:

- Fetch all my posts
- Fetch individual posts with dynamic routing
- Login and save my JWT inside `sessionStorage`

  ### Things I need to fix:

  1. Gotta add expiry date on the token (will do later cuz lazy rn)
  2. MongoDB and `express-validator` validations return as an `Unexpected end of JSON input` error in my `catch()` sequence. (FIXED)
  3. Because of my poor error handling at the moment, I have a weird scenario where it could set my JWT key to `undefined` which is obviously no bueno. (FIXED)
  4. Send JWT payload with user info too for a pretty admin page :")
  5. Only display published posts on /posts path (FIXED)
  6. Admin page (working on this)

- I'm also writing many different functions and objects as utility stuff I can re-use so my code looks cleaner and way less convoluted.
