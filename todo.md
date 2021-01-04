- Fix product page layout so each row is aligned instead of centering
- Convert images on product page to <img/> tags
- Make everything smaller.  Update Figma.  24px -> 18px, 18px -> 14px.
- Package up common code between BOW and JW Footwear, share using an NPM package or Bit
- Create reducers
- Create action creators
- Make backend URL an environment variable: process.env.BACKEND_URL || http://localhost:3001/api
- Add page name to <title>

# Code to Share
- withAuth() in hocs/withAuth.js
- apiCall() in services/api.js
- createStore() in store/index.js
- store/actions/auth.js
- store/reducers/auth.js