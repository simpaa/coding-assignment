# 13|37 Code Assignment

This is my take on the 13|37 javascript assignment

According to the instructions for this assignment, I should not spend more than 6 hours in this (I have probably spend a bit more) so the end result are not as good as i would have liked. For example I had no time to style the filter. But anyway i think this says somthing about my coding structure and skills. I'm happy to discuss what could be done better!

## Running the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To use create-react-app and run this porject you need you’ll need to have [Node >= 14.0.0 and npm >= 5.6](https://nodejs.org/en/) on your machine.

### Steps to set up the project locally
1. Clone the repo to your local machine
2. Run `npm install` through a command prompt in the project root.
3. Create a file called `.env` in the project root.
paste the following content
```
REACT_APP_BASE_API_URL=https://api.1337co.de
REACT_APP_API_KEY=YOUR API KEY
```
Replace the text `YOUR API KEY` with your actual api key.

Now you should be all set to run the application. Run `npm start` To run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Project structure

In the `src` you have the js code for the application.

There are 3 folders.
- `components` - Contains the genric components for the application.

- `pages` Contains the pages in the application. Right now there is only one. If we were going to have multiple pages in the application I would probably be using a navigation library like React Router.

- `data` Contains the data model for the application including React context provider and logic to fetch data from the web API. The native fetch API is used to fetch data.

