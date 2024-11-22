# Netflix GPT
- create react app
- configured TailwindCSS
- Header
- Routing of app
- Login Form
- Sign up Form
- Form Validation
- useRef hook
- Firebase Setup
- Deploying the app to production
- create Sign up User Account in firebase
- implement sign in user API
- Set up the redux store with user slice
- Implemented sign out
- Update profile API call
- BugFix: Sign up user display name and profile picture update
- BugFix: If the user is not logged in then redirect/ browse to Login page and vice versa
- Unsubscribed to the onAuthStateChanged callback
- Add hard coded values to the constants file
- Register for TMDB API and create an app and get access token
- Get data from tmdb now playing movies list API
- Custom hook for NowPlayingMovies
- create movieSlice
- Update store with movies data
- palnning for main and secondary container
- fetch data for traiker video
- update the store with trailer video data
- embedded the youtube video and make autoplay and mute
- Tailwind classes to make main container look good




# Features
* After login, you will see the browse page
* If you go to the browse page before logged in(by typing the URL), it will take you to the sign-in page
- Login/Sign up page
    - Sign in/ Sign up form
    - Once you are logged in, only then it will take you to the Browse page.

-Browse (only comes after authentication)
   - Header
   - Main Movie
        - Trailer in the background
        - Title and description
        - Movie Suggestions
               - MovieLists * N
   - Netflix GPT      
        - Search bar
        - According to the seach bar, it will give us movie suggestions.