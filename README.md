# 13|37 Code Assignment

This is my take on the 13|37 javascript assignment where you should make a application that lists all the colleagues on 1337.

According to the instructions for this assignment, I should not spend more than 6 hours in this (I have probably spend a bit more) so the end result are not as good as I would have liked. For example I had no time to style the filter. But anyway i think this says somthing about my coding structure and skills. I'm happy to discuss what could be done better!

## Running the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To use create-react-app and run this porject you need you’ll need to have [Node >= 14.0.0 and npm >= 5.6](https://nodejs.org/en/) on your machine.

### Steps to set up the project locally
1. Clone the repo to your local machine
2. Run `npm install` through a command prompt in the project root.
3. Create a file called `.env` in the project root.
Then paste in the following content
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

## Implmented storys

-  *Responsive design, works on mobile and tablets* 
-  *Filter by name and office*
-  *Use Typescript (or similar, no any’s!)*
-  *Use modern CSS throughout the application (css-grid, variables, clamp etc)*
- *Screen readers should also work but i haven't tested.*

The reasons why I chose those tasks.
1. Responsive design is important these days when many users are on mobile devices with small screens.
2. Filter is fun and also very useful for the user.
3. I like typescript. The code is easier to work with when you get compile-time errors and not runtime errors on type-related stuff. Easier to debug and gives a better understanding of what kind of objects are being sent through the application for developers new to the codebase.
4. It is good when you could use vanilla CSS and now have some of the features like variables you only found in preprocessors like scss before. I tried the native css grid functionality with flex. I haven't used that a lot before.
5. I did not have time to implement more stories but this should work. I haven't tested.

