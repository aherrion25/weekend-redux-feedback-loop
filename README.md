# Project Name
## Weekend-Redux-Feedback-Loop

## Description

For this assignment, I will be creating a feedback form. The feedback form will stretch over 4 views and have a review page with all the information from the previous 4 views and when submitted will go to the database.

### SETUP

Created a database named `prime_feedback` in Postgresql with a tables using the provided `data.sql` file. Start the server.

```
npm install
npm run server
npm run client
```

## Task
- [x] create express route 
- [x] create component for header
- [x] create component for feeling page (view 1)
- [x] create reducer for feeling
- [x] have feeling save on click 'Next'
- [x] create component for understanding page (view 2) and navigate on click 'Next' 
- [x] create a reducer for understanding 
- [x] have understanding save on click 'Next'
- [x] create a component for support page (view 3) and a navigate on click 'Next'
- [x] create a reducer for support
- [x] have support save on click 'Next'
- [x] create component for comment page (view 4) and navigate on click 'Next'
- [x] create reducer for comment
- [x] have comment save on click 'Next'
- [x] create review page and navigate on click 'Next'
- [x] have all views (feeling, understanding, support, comment) display on review page
- [x] have views (feeling, understanding, support, comment) POST to server on click 'Submit'
- [x] create progress bar