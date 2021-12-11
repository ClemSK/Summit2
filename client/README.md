![logoWhite](https://user-images.githubusercontent.com/83312425/143767599-a6c2b5a2-f7ea-4347-be69-59f13602e026.png)

## Live site: https://summit-exercise-dashboard.netlify.app

## Project Brief

To design and collaboratively build a full-stack app that consumes our own API (as a team of 2 in 21 days).

## Technical Requirements

- **Build a full-stack application** by making your own backend and your own front-end
- **Use a Python Django API** using Django REST Framework to serve your data from a Postgres database
- **Consume your API with a separate front-end** built with React
- **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models
- **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut
- **Have a visually impressive design** to kick your portfolio up a notch and have something to wow future clients & employers. **ALLOW** time for this.
- **Be deployed online** so it's publicly accessible.

## Technologies used

### Backend

- Python
- Django: python web framework
- SQlite: default db with Django projects. We initially used to store test data before we moved to PostgreSQL.
- PostgreSQL: database
- Heroku: hosting the back end
- Postman: to test API requests

### Frontend

- React
- HTML5
- CSS / SASS
- Webpack
- Chart.js / React-chartjs-2: for data visualisations
- Framer Motion: animations
- React-icons
- Google Recaptcha: avoiding bots
- Formspark: automated emails

### Dependencies

Using pip and pipenv for Django install the following for the back end:

- Django rest framework
- django cors headers
- Gunicorn
- Whiteniose
- Psycopg2
- Pyjwt

Using Yarn add the following dependencies to the front end:

- Babel
- Sass
- Webpack
- Axios
- Cors
- React-google-recaptcha

### Design

- Figma

### Version Control

- Git
- Github

# Summit

Summit is an app for users to track , display and share their exercise stats. After registering, users are taken to a dashboard that give them an overview of their historical data. Using the side menu users can then navigate to a particular exercise group, where they can fill out their session form to provide our API with the relevant data which is then fed back through the charts. Under each exercise, users are given a detailed exercise log of each session.

## Plan / Workflow

### Idea

The initial idea for Summit came while in the gym, entering my current gym stats into the a note-taking app on my phone. From there, we wanted to create a full-stack app that would keep track of my progress of each exercise and display that data in a visually impressive way.

Notes:
<img width="826" alt="Screenshot 2021-11-28 at 13 19 00" src="https://user-images.githubusercontent.com/83312425/143769533-8f0e4bcc-6264-47c4-a044-b760b9837781.png" align='center'>

### Design

We used Figma for brainstorming, database design, feature planning and UI concepts.

![figma-design-brainstorm](https://user-images.githubusercontent.com/83312425/143769751-0ed16783-ef79-429f-a1f0-c00e9e6c8499.png)

We used Jira to manage our workflow / ticket system and conducted daily meetings to maintain progress and momentum throughout the project.

![jira-workflow](https://user-images.githubusercontent.com/83312425/143769769-2378e579-f456-4324-a789-520f675b06c3.png)

### Colour Palette

![summit-palette](https://user-images.githubusercontent.com/83312425/143857997-cdfcb89c-a659-4e84-807c-28ecc4a58b87.png)

## Functionality

### User Auth

We used Json Web Tokens (pyjwt) to enable the login of users and used the token to identify users and user management when adding new logs.

https://user-images.githubusercontent.com/83312425/143771010-70844b79-b697-48ae-bf6e-b89f525bd952.mov

### User Story

https://user-images.githubusercontent.com/83312425/143848333-31d17287-5794-436a-89d3-51015c796041.mov

## Issues

- Given the time frame to complete the project, we were very ambitious with what we wanted this app to achieve. The trickiest part was having a useable nested data structure which had implications for our API and database.
- We navigated the challenge of using a new technology and adapting to the required methods of development.

## Wins

- Strong partnership and dedication to the project to deliver a high quality finished product.
- Despite varied challenges and setbacks, we managed to produce an intricate level of connection throughout our app.
- Valuable experience gained in larger scale project management.
- Gathering rich data and using it to drive the experience was our focus from the very beginning. Good communication and planning with our database helped us achieve that.

## Future Features

### Social

- A focus on the social side of the app will be the next feature to implement.
- Public / Private user data
- Compare and track your stats and progress among your followers.
- Publish and share progress summits reached across all platforms.

### D3

- Use D3 to produce a deeper and more comprehensive representation of the data recorded for the Cardio section of the app.

### Focus on Performance and Accessibility

- App must be fully accessible for all users.
- Squeeze every last FPS from the code.
