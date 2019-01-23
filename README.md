This is Git api client app developed using Angular 6 and using a github library called 'github-api' from Github.js

Components:
Login - to authenticate and authorize a user to access his/her profile information and to edit their profile
Userview- used to display searched user information and their repos
profile- to display authenticated user information

Service: 
Github.Service.ts - to make call and to authenticate user in this application

in Login component-There is a login form and it get value from the user and chek whether its correct or not using github Library once checked it allows user to profile view otherwise it throws error

in Profile component- There is template to show information of the user and there is a form to create repos and we can view user's gists and followers

in userview component- there is a search bar to search for users and it displays all information about the user without being looged in
