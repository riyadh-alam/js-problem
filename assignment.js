//Feet To Mile 

function feetToMile(feet){
    var mile = feet / 5280+ " Mile";
    return mile;
}




// Wood Calculator

function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount =  bed  * 5;
    var total = (chairCount + tableCount + bedCount);
   return total;
}



// Brick Calculator

function brickCalculator(storey) {
    if (storey > 20){
        var restStorey = storey - 20;
        var restStoreyCount = (restStorey * 10 * 1000) + (10 * 12 * 1000) + (10 * 15 * 1000);
        return restStoreyCount;
        
    }
  
    else if (storey >10 && storey <=20){   
    var  secondStory = storey - 10 ;
     var secondTenStoryBrickCount = (secondStory * 12 * 1000) + (10 * 15 * 1000);
     return secondTenStoryBrickCount;
    }

    if (storey > 0 && storey <=10){   
    var firstTenStoreyBrickCount = (storey * 15 * 1000);
    return firstTenStoreyBrickCount;
    }

    }




//Tiny friend

function tinyFriend(smallestName) {
    var smallestFriendName = smallestName[0];
    
    for(var i = 0; i<smallestName.length; i++){
      var currentName = smallestName[i];
      if(currentName.length < 1){
         smallestFriendName != currentName;
      }
      else if (currentName.length < smallestFriendName.length){
        smallestFriendName = currentName;
      }        
     }  
      return smallestFriendName;
    }