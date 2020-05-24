# css-wizard

a place where there will be different UI animations to be able to easily copy and paste

## tech

* react
* Github - hosting

# specs

a web app that has different UI animations with code shown for the animation.

There will be an object at the root that has all the information. That object will be used to render the different UI animations data.

All the UI animations will be displayed on the home page and clicking on one will go to a different page with all the code for the UI animation available.

## add a new UI animation to the website


First a [codepen](https://codepen.io/) will have to be created with a UI animation you want to share.

Once it is created look and click on the button that reads 'Embed' in the bottom right of the page.

![image of embed button](./assets/embed-button.png)


Once the Embed button is pressed make sure to make the dropdown be on the 'Dark' theme.

![image of themes dropdown selected to Dark](./assets/embed-button.png)

Scroll down to the section labeled as 'Copy & Paste code'. Copy the 'HTML (recommended)' one.

![image of copy and paste](./assets/html-to-copy-and-paste.png)

Now go to 'ui-animations.js' file and create a new object in the array.

This object should have

* id - which is the previous id value plus one.
* title - a proper title for the animation
* description - a description of the animation
* CodePen - copy and paste the code you got from CodePen

Note: when copying and pasting the code from codepen make sure to remove the JavaScript that is being imported '<script async src="https://static.codepen.io/assets/embed/ei.js"></script>'.