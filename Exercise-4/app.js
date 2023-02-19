/*Add three images on a page with full width but show only the first one as default.
Create two arrows below the images and slide the next one when clicking on the arrows.*/

var i = 0; 			
var images = [];	
	 
images[0] = 'image1.jpeg'
images[1] = 'image2.jpeg'
images[2] = 'image3.jpeg'


function nextImg(){
	document.slide.src = images[i];

	if(i < images.length - 1){
	  i++; 
    } else { 
        i = 0;
    };
    console.log(i)
}

function prevImg(){
    document.slide.src = images[i];

	if(i < images.length - 1){
        i++; 
    } else { 
          i = 0;
    };
    console.log(i)
}

console.log(images.length)


