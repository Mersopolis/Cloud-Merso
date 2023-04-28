# Cloud-Merso

## Badges
![MIT License](https://img.shields.io/badge/license-MIT%20License-green)

## Description
A Social Networking Backend API

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#questions)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

## Installation
1. Ensure you have Node.js installed. https://nodejs.org/en/ <br/>2. Ensure you have npm installed. https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-installer-to-install-nodejs-and-npm <br/>3. Download the zip from GitHub under the Code dropdown menu. https://github.com/Mersopolis/Cloud-Merso <br/>4. Extract the contents to a folder.

## Usage
Before using the program for the first time:<br/>1. Open your system's command line and ensure the current directory is the installation folder. (On Windows, you can hold Shift and right click while in the folder and select the "Open Command Window Here" or "Open PowerShell Window Here" option.)<br/>2. Run this command:<br/>npm install<br/><br/>Once dependencies are installed:<br/>1. Open your system's command line and ensure the current directory is the installation folder.<br/>2. Run this command:<br/>npm start<br/><br/>3. Use GET requests to view things. GET requests can be sent to /api/users, /api/users/:userId, /api/thoughts, /api/thoughts/:thoughtId<br/><br/>4. Use POST requests to make new things. POST requests can be sent to /api/users with a JSON body formatted like so:<br/>{<br/>  "username": "lernantin",<br/>  "email": "lernantin@gmail.com"<br/>}<br/><br/>POST to /api/users/friends/:friendId<br/><br/>POST to /api/thoughts like so:<br/>{<br/>  "thoughtText": "Here's a cool thought...",<br/>  "username": "lernantin",<br/>  "userId": "5edff358a0fcb779aa7b118b"<br/>}<br/><br/>POST to /api/thoughts/:thoughtId/reactions like so:<br/>{<br/>  "reactionBody": "Hee hoo ha",<br/>  "username": "lernantin",<br/>  "userId": "5edff358a0fcb779aa7b118b"<br/>}<br/><br/>5. Use PUT requests to update existing things. PUT requests can be sent to /api/users/:userId with a JSON body formatted like so:<br/>{<br/>  "username": "Tarantino"<br/>  "email": "quarantino10293@gmail.com"<br/>}<br/><br/>PUT in /api/thoughts/:thoughtId like so:<br/>{<br/>  "thoughtText": "Diggy dig hole dig rock dirt"<br/>}<br/><br/>6. Use DELETE requests to delete existing things. DELETE requests can be sent to /api/users/:userId <br/>DELETE from /api/users/:userId/friends/:friendId<br/>DELETE from /api/thoughts/:thoughtId<br/>DELETE from /api/thoughts/:thoughtId/reactions/:reactionId<br/><br/>7. To exit the program, press CTRL+C

## Tests
N/A

## Questions
Questions can be directed to this GitHub profile or this email.

GitHub: [Mersopolis](https://github.com/Mersopolis)

Email: [mersopolis@gmail.com](mailto:mersopolis@gmail.com)

## Contributing
N/A

## Credits
Code based on work done by the University of Utah (See commit "Copied Mini Project Code").<br/>Node.js https://nodejs.org/en/ <br/>npm https://www.npmjs.com/ <br/><br/>express https://www.npmjs.com/package/express <br/>MongoDB https://www.mongodb.org <br/>mongoose https://www.npmjs.com/package/mongoose <br/>

## License
MIT License

Copyright (c) 2023 Devon Ethington
      
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

