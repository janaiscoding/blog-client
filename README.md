# BLOG CLIENT MADE WITH NEXT.JS

Very excited to learn how to do a Next.js app and also finally use TypeScript

So far, I've managed to:

- Fetch all my posts
- Fetch individual posts with dynamic routing
- Login and save my JWT inside `sessionStorage`

  ### Things I need to fix with JWT Auth:

  1. Gotta add expiry date on the token
  2. MongoDB and `express-validator` validations return as an `Unexpected end of JSON input` error in my `catch()` sequence.
  3. Because of my poor error handling at the moment, I have a weird scenario where it could set my JWT key to `undefined` which is obviously no bueno.
  4. Anyone could make up a random JWT key and post stuff on my blog technically, so I need to make sure only `Admin/Author` users are allowed to post, so I need to go back to my Mongoose Schema and fix this.


- I'm also writing many different functions and objects as utility stuff I can re-use so my code looks cleaner and way less convoluted.
