
function createFavorite() {
    var listOfFavorites = document.getElementsByClassName("favorite");

   console.log(listOfFavorites);
    var theFirstFavorite = listOfFavorites.item(0);

   
    var theNewFavorite = theFirstFavorite.cloneNode(true);

    
    
    var newFavoriteTitle = document.getElementById("creator-title").value;
    var newFavoriteDescription = document.getElementById("creator-description").value;
    var newFavoriteMedia = document.getElementById("creator-media").value;
    
    theNewFavorite.getElementsByClassName("title")[0].innerHTML =newFavoriteTitle;
    theNewFavorite.getElementsByClassName("description")[0].innerHTML = newFavoriteDescription;
    theNewFavorite.getElementsByClassName("media")[0].innerHTML = newFavoriteMedia;
    document.getElementById("content").appendChild(theNewFavorite); 
}