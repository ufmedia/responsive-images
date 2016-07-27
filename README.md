# Responsive Images

Responsive images checks to see when the native height of an image is less than the height of the div within which it renders.
Once this is the case, a class is added to the image where CSS can be used to toggle between max-width and max-height.
Setup

1) Include the script in your project.

2) This div which contains the image should be given the 'res-image-container' class.

3) There are then two optional data attributes than can be applied:

data-start-point & data-end-point

The script will only function between these two break points, ie window with in px. The default values are 781 & 5001 respectively.

The class 'switch-vert-max' will be added to the image once the height of the image no longer fills the div and the window width is between the two break points.






