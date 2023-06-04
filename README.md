## OWL - social network application 🦉

#### This project was created during JavaScript/Frontend Course ar [Rolling Scopes School](https://rs.school/).
___

Owl is social network application where we recreated the potential of a real social network such as: authorization and registration of the user, the ability to add or delete friends, online chat with friends, the ability to change information about yourself, upload new photos to your gallery, write posts, read friends newsfeed, etc.

### <span style="color: orange">How to run application:</span>

For the application to work, you need to install and run the server. Follow these steps to install the server:

  1. Clone this [Server repository](https://github.com/Bam6ycha/simple-api) to your computer and follow the instructions (for production) there:  

        `https://github.com/Bam6ycha/simple-api.git`

2. You should see the message in the console:

      `Server listen on port 6969`
3. Clone our [repository](https://github.com/zhuravskayalina/rss-social-network) to your computer, make sure you take the DEVELOP branch.

  1. At root project directory install dependencies:

        `npm install`
  1. Run server:

        `npm start`
2. Clear your LocalStorage
3. Now you are able to use our app!

Please, note that upload images size (unfortunately) should be really small.

### <span style="color: orange">**About OWL Application:**</span>
* The app is written using Typescript & React;
* We use an API written specifically for our application, you can view it [here](https://github.com/Bam6ycha/simple-api);
* The application implements online chat, which is implemented based on web socket technology (socket.io library). This technology makes it possible to constantly maintain a connection with the server - users can communicate online. Messages are immediately displayed to both sender and receiver without the page being overwritten;
* In addition, a user can send a message to any other user, even one who is not friends. To do this, you need to go to the page of any interested user and click on the message icon;
* User can add someone to friends or delete; 
* New user login and registration implemented;
* Possibility of changing user information;
* The application has the ability to switch 2 languages using the mouse or hot keys;
* Implemented routing (moving through the application without reloading pages);
* Application supports file upload option;
* We use modal dialogues for some cases;
* We have Photo gallery implemented with [lightgallery](https://www.npmjs.com/package/lightgallery) library;
* Animations using key frames were implemented;
* The application is made in the same style;
* You can use hot keys to change the language of the application, open side menu and to send messages;
* We keep some not secret information at Local storage;
* The application works on phone/tablet/PC.

### Hot keys:
* **Ctrl + Alt + L** - change application language;
* **Ctrl + Alt + M** - open/close side menu;
* **Enter** - send message at the dialogue window;
* **Enter + Shift** - add new post when you are at the new post modal window;
* **Esc** - close modal window;
* **Esc** - close photo gallery;

### You can use usernames and passwords below to visit already existing profiles:
1. **login**: meganfox; **password**: meganfox;
2. **login**: eminem; **password**: eminem;
3. **login**: notorius; **password**: notorius;
