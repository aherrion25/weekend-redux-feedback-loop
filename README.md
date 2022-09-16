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
- [] create component for feeling page (view 1)
- [] create reducer for feeling
- [] have feeling save on click 'Next'
- [] create component for understanding page (view 2) and navigate on click 'Next' 
- [] create a reducer for understanding 
- [] have understanding save on click 'Next'
- [] create a component for support page (view 3) and a navigate on click 'Next'
- [] create a reducer for support
- [] have support save on click 'Next'
- [] create component for comment page (view 4) and navigate on click 'Next'
- [] create reducer for comment
- [] have comment save on click 'Next'
- [] create review page and navigate on click 'Next'
- [] have all views (feeling, understanding, support, comment) display on review page
- [] have views (feeling, understanding, support, comment) POST to server on click 'Submit'
- [] create progress bar