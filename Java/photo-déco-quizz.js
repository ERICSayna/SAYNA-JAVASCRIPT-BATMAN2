
function displayPics()
{
  var photos = document.getElementById('images-quizz') ;
  var liens = photos.getElementsByTagName('a') ;
  var image1 = document.getElementById('image1') ;
  var titre_photo = document.getElementById('num-page').getElementsByTagName('dt')[0] ;
    var posPhoto=0;
  
  var next = document.getElementById('imageButton');
  for (var i = 0 ; i < liens.length ; i++) {
    next.onclick = function() {
      image1.src = liens[posPhoto+1].href; 
      image1.alt = liens[posPhoto+1].title; 
      titre_photo.firstChild.nodeValue = liens[posPhoto+1].title; 
	  posPhoto++;
      };
    liens[i].onclick = function() {
      image1.src = this.href; 
      image1.alt = this.title; 
      titre_photo.firstChild.nodeValue = this.title; 
	  posPhoto=this.id;
	  return false; 
      };
  } 
}

window.onload = displayPics;