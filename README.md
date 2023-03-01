## <span style="color: #2D5BE3">OWL - social network application</span>
___

in the app, we try to recreate the features of the social network: authorization and registration of the user, the ability to add friends, chat with friends, the ability to change information about yourself, download new photos, write posts, read friends news feed, etc.

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

## <span style="color:red">ATTENTION! :)</span>
use can use this loggins and passwords to visit already existing profiles:
1. **login**: meganfox; **password**: meganfox;
2. **login**: eminem; **password**: eminem;
3. **login**: notorius; **password**: notorius;

####  ALSO, you can try following hot keys:
* **Ctrl + Alt + L** - change application language;
* **Ctrl + Alt + M** - open/close side menu;
* **Enter** - send message at the dialogue window;

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

___
### <span style="color: orange">Как запустить приложение: </span>

Для запуска приложения вам необходимо локально запустить сервер. Следуйте инструкции ниже:

1. Клонируйте API репозиторий [Server repository](https://github.com/Bam6ycha/simple-api) и следуйте инструкции в его описании (для продакшена);

   `https://github.com/Bam6ycha/simple-api.git`

2. Когда сервер запустится, вы увидите в консоли следующее сообщение:

   `Server listen on port 6969`
3. Клонируйте наш [проект](https://github.com/zhuravskayalina/rss-social-network) из нашего репозитория на свой компьютер, убедитесь что вы стянули ветку DEVELOP.

1. В корневой папке проекта установите все зависимости:

   `npm install`
1. Запустите приложение:

     `npm start`
2. Очистите ваш LocalStorage
3. Теперь вы можете пользоваться нашим приложением!

## <span style="color:red">ВНИМАНИЕ! :)</span>
вы можете использовать эти логины и пароли для входа в уже существующие профили:
1. **логин**: meganfox; **пароль**: meganfox;
2. **логин**: eminem; **пароль**: eminem;
3. **логин**: notorius; **пароль**: notorius;

Так же, вы можете использовать следующие **HOT KEYS**:

* Shift + Alt + L = смена языка приложения;
* Shift + Alt + M = открытие/закрытие бокового меню;
* Enter - отправка сообщения в чате;

К сожалению, из-за особенностей нашего сервера размер загружаемых фотографий должен быть очень маленьким :(

### <span style="color: orange">**О приложении OWL:**</span>
* Приложение написано на Typescript & React;
* Мы используем API, написанный специально для нашего приложения, посмотреть его можно [здесь](https://github.com/Bam6ycha/simple-api);
* В приложении реализован онлайн-чат, который реализован на основе технологии веб-сокетов (библиотека socket.io). Данная технология дает возможность постоянно поддерживать соединение с сервером - пользователи могут общаться в онлайн-режиме. Сообщения немедленно отображаются и у отправителя и у получателя без перезагрузки страницы;
* Кроме того, пользователь может направить сообщение любому другому пользователю, даже тому, кто не добавлен в друзья. Для этого необходимо перейти на страничку любого интересующего юзера и нажать на иконку сообщения;
* Пользователь может добавлять других пользователей сети в друзья, а так же удалять их.
* Реализована авторизация и регистрация нового пользователя;
* Возможность изменения информации пользователя;
* В приложении есть возможность переключения 2 языков с помощью мыши или hot keys;
* Реализован routing (перемещение по приложению без перезагрузки страниц);
* Реализована возможность загрузки файлов;
* В приложении используются модальные диалоги;
* Реализована фото-галерея;
* Реализованы анимации, для создания которых используются ключевые кадры;
* Приложение выполнено в едином стиле;
* Реализованы hot keys для смены языка приложения, открытия меню отправки сообщений;
* Реализованы сохранение и загрузка данных с использованием Local storage;
* Приложение работает на телефоне/планшете/PC.
___
**Developers:**

[Anhelina Zhurauskaya](https://github.com/zhuravskayalina)

[Elena Smolina](https://github.com/esmolina)

[Pavel Troinich](https://github.com/Pavel-Troinich/)
