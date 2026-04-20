#Functionality 1: Show A Lightbox
First, I set an empty HTML element as a lightbox template, which is normally hidden. Then I use querySelector to select the lightbox and the elements on it to be changed with the new data from the JS file.

These are stored in a dynamic object, with the keys being the same as the product to be displayed. Each of the keys is another object with properties: title, description, image to be displayed, and button color.

I also need another variable object to store the clicked item and its associated image (on the thumbnail).

Add an event listener for click to the button. The event function will turn off the hidden state of the lightbox, making it visible. It will also inject the data from the object into the elements.

I use the dataset attribute on the clicked element, to relate it back to the relevant fruit key in the object. I also use the syntax object[key_name] to access that property key by its name. This is needed because if the properties were jars, instead of needing for the content in a jar, I need the jar itself.

Finally, append the image associated with the object into its position in the lightbox. To close the lightbox, append the image back to the thumbnail, and then set the hidden class to the lightbox again.

#Functionality 2: Toggle expand a story
In the about section, user may click "See More" to view the second part of the story. To do this, I add an click event listener to the button. Then, I set a global variable to track if the story is expanded. If it is not then first save the original content to another variable, then replace the story text with the new content. And, because the story is now expanded, set the tracking variable to true. Now if we want it to turn it back, set the story content to the saved original, and change the tracking variable to false.

#Functionality 3: Validate and simulate subscription
There is a email form field where user can type their email address in to subscribe. I haven't learn to properly do this yet, but I'll try my best to simulate it. Upon clicking the subscribe button, the script will read the email address.

It will run another function to validate the email address using a regular expression, which is something I have to borrow wisdom from the internet. Again, this is my first time knowing about such things as regular expressions.

Now to simulate the loading of email into the system, we can use a reload method, set after a few seconds. In the meantime the text above will display a thanking message. I have to use setTimeout to do this, but to prevent freezing of the browser, we need to disable the submitting functionality while it is still counting the seconds. Another way is to use clearTimeout to immediately stop the counting.

So if the email is valid, the script will update the notification text, showing a message thanking the user, disable the form, and then simulate the loading with a timeout. If this is not the case, it will update the text to ask the user to check the email address again.

To update the text and keep track of the original content, I use a text object, with these properties: the text item and the original text. The update method will update the content in the text item to a new string, but after a timeout it will revert back. And to prevent freezing, this method also clear the existing timer.
