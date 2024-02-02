<h1>Signup Form Challenge</h1>
<h2>Description</h2>
<p>This is the fourth challenge I've done for Frontend Mentor. It has a simple intro component and a signup form. The form will throw an error message if the input fields are not filled out or not filled out correctly.</p>

<h2>First Commit and Initial Challeges</h2>
<p>The initial styling was not very difficult. However, early on, I did struggle with styling the error icon. I ended up using "position:relative" and "position:absulute" and a ton of padding to get the icon in the correct area. However, I felt like there might've been a better way to do this.</p>
<p>Another issue I encountered was there being white space on the right side of the screen while in mobile mode.</p>
<p>Lastly, because of how the HTML and CSS was styled, I had to write very lengthy JS to show the error messages.</p>

<h2>Second Commit and Resolutions</h2>
<p>In regards to the error message and icons, instead of using positioning, I simply made the error icon the background image in the input field. This made styling much easier and helped trim down the JS code.</p>
<p>For the white space on mobile, it turns out there was an issue with the min-width property on one of the containers. This was an easy fix that took a while to spot at first.</p>
<p>To trim down on the JS, I set all the error elements to "hidden" and added an "error" class that will display these elements if the input field is not filled out properly.</p>

<h2>What I Learned</h2>
<p>I learned how to set and position background images. This made it much simpler to position the error icon.</p>
<p>I also became more familiar with descendent selectors. The use of descendant selectors adding classList to parentElement really helped simplify the JS used.</p>
