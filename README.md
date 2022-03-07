Click [HERE](https://frontend.turing.edu/projects/module-3/showcase.html) to view the project spec
Click [HERE](https://polar-spire-35161.herokuapp.com/) to view the deployed site

### Learning Goals
With this solo project, I gathered everything I learned about
- React
- Router
- Asynchronous JavaScript
- End to end testing with Cypress

in order to create an app that makes home repair projects accessible to the common human. By gathering home repair videos based on common repair issues in one place, anyone can save themselves money fixing things that at one point seemed insurmountable.

Especially if you already find yourself hoarding a large amount of tools. 
After all, you are really who this app is for.


Table of Contents
Abstract
Tech Used
Installation and Set-Up
Features
See the Site in Action
Future Goals
Created By
Credit
Abstract
Tired of pretending to like ugly art in museums? We are too.

Art From The Heart is a web application that allows users to overcome internal and external biases to answer the only question that matters: Do I like this work of art?

The homepage greets a user with categories of art pulled directly from the Art Institute of Chicago. Upon clicking a category, a random work of art will be displayed for a user to rate up or down. Only after they rate the work of art will the details about the author, creation date, description of the work, etc. be shown to the user. This allows people to view and enjoy art without the implications of certain biases being forced upon them such as those that from classism/elitism. After they have rated the art they can then choose to see another art piece from that category or they can choose to go home and select another category.

Tech Used
React
JSX
TypeScript
Cypress Testing
HTML5
SASS/CSS
JavaScript
API Fetch Calls
React Router
Framer Motion
Art Data API used for Network Requests (https://api.artic.edu/docs/)
Project Structure Organized with GitHub Project Board
Installation and Set-Up
To install this project, please see below:

1. Clone down this Repository using `git clone git@github.com:mr-ryan12/art-from-the-heart.git`
2. Next, `cd` into the cloned repository and `npm install` to install library dependencies
3. Finally, run `npm start` and open up localhost at the port indicated to view the webpage (http://localhost:3000/)
Alternatively, you can access the deployed site HERE

Features
Variety of art categories on the homepage
Ability to rate art without external information impacting a user's rating
Details are only shown after a user has rated the art to allow them to rate in a judgement free manner. Details include Art Title, Starting Date, Ending Date, Artist, and an Artwork Description.
Dark Mode
100% Lighthouse and WAVE accessibility rating
Mobile, Tablet, and Desktop friendly responsive design
Deployed website
See the Site in Action!
Homepage View:

homepage

Individual Art View:

art-view

Art Details View:

art-details

Art From the Heart is set up to be tablet and mobile responsive and resizes nicely for different size screens:

mobile-view

Art From the Heart also features a Dark Mode and can easily be toggled by the icon in the navigation bar:

dark-mode

Future Goals
Create a backend to allow:

Tracking of user votes over time
The ability to leave and see comments for each work of art
Allow users to upload their own works of art so other users will never know if they are rating museum art or personal art
Created By:
Ryan McBride
Stevie Ambroise
Jacob Quintana
Tony Carpenter
Credit
Loading animation inspired by: https://loading.io/css/
Heart icon created by Freepik - Flaticon
