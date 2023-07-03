# JanaIsCoding's Blog 

[Live Deploy](https://blog-client-smoky.vercel.app/) | [CMS Repo](https://github.com/janaiscoding/blog-cms) | [REST API Repo](https://github.com/janaiscoding/blog-api)



- Fullstack application made with MERN stack.
- Blog website fetching data from the REST API, which has protected routes, with JWT Token Auth. 
- Anyone can comment, but only the admin can manipulate the blog posts, from the CMS client (where I am using a content-rich text editor called [TinyMCE](https://www.tiny.cloud/))
- The actual styling of the app is very minimal atm.
- Using Server Side components for fetching posts, also revalidating homepage on-demand every 60seconds. 
- Comments will trigger a re-rendering of the comment section. 

## Live Demo 
![Preview on desktop]()

## Getting Started - Installing and running 
```
git clone git@github.com:janaiscoding/blog-client.git
cd blog-client
npm install 
npm run dev 
Listening on localhost:3000
```

# Built with

## Technologies 

- ReactJs, Next.js
- JavaScript, TypeScript
- TailwindCSS

## Tools Used

- Visual Studio Code
- npm package manager
- Linux Terminal
- Git and Github


## Random thoughts and insights

Very excited to learn how to do a Next.js app and also finally use TypeScript

So far, I've managed to:

- Fetch all my posts
- Fetch individual posts with dynamic routing
- Login and save my JWT inside `sessionStorage`

  ### Things I need to fix:

  1. Gotta add expiry date on the token (FIXED)
  2. MongoDB and `express-validator` validations return as an `Unexpected end of JSON input` error in my `catch()` sequence. (FIXED)
  3. Because of my poor error handling at the moment, I have a weird scenario where it could set my JWT key to `undefined` which is obviously no bueno. (FIXED)
  4. Send JWT payload with user info too for a pretty admin page :") (FIXED)
  5. Only display published posts on /posts path (FIXED)
  6. Admin page -- SEPARATING ONTO A CMS (FINISHED)
  7. Fix `Unexpected token '<', "<!DOCTYPE "... is not valid JSON` error on send comment event : I get it when posting this type of stuff: ';;';'; (FIXED, this was an error where the escaped characters exceeded the maximum length specified in the mongoose validation schema)

- I'm also writing many different functions and objects as utility stuff I can re-use so my code looks cleaner and way less convoluted.
