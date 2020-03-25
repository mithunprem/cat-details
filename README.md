# Pet Directory

## About
Pet Directory consumes a JSON hosted in a web service and displays all the pets of a particular type, listed under the gender of the pet owner. <br>

To match the problem statement, this application is currently programmed to only display the names of cats, sorted in alphabetical order, grouped by the owner's gender. However, the application is developed with generic components and adaptable code logic making it super easy to extend the current functionality to display any pet types based on the user choice or an external config.<br>

### Pet Details Filter Logic
##### Assumptions made :
- The pet type is assumed to be always 'Cat', because changing pet type is not specified in the problem statement.<br>
- Owner genders are assumed to be only 'Male' and 'Female', because other options are not specified in the problem statement. <br>
##### Logic :
* Step 1 : Iterate the gender array (the genders to be considered, specified as a config). <br>
* Step 2 : From the web service response, get the pet details specific to one gender at a time. <br>
* Step 3 : From the pet details, filter out only those pets that matches the filter type.<br>
* Step 4 : Sort the pets in the alphabetical order of their name. <br>
* Step 4 : Set the filtered, sorted pets array in an object with the gender as the key.<br>

### Test coverage:
Unit tests are provided for each component.

## Steps to run the application

- Install Git (https://git-scm.com) (if you want to clone, or you may choose to download the repository directly)<br>
- Install Node.js (https://nodejs.org/en/)<br>
- Download this repository - `git clone https://github.com/mithunprem/cat-details.git`

## Install dependencies

In the project directory, you can run:

### `yarn install`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
The app is ready to be deployed!
