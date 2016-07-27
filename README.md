# Responsive Images
Responsive images checks to see when the native height of an image is less than the height of the div within which it renders.

Once this is the case, a class is added to the image where CSS can be used to toggle bettween max-width and max-height.

Setup

Include the script in your project.

1) This div which contains the image should be given the 'res-image-container' class. 

2) There are then two optional data attibutes than can be applied:

data-start-point & data-end-point

The script will only function betweeen these two break points, ie window with in px. The default values are 781 & 5001 respectivly.







