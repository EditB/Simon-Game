/*$document.ready(function(){
//Note: for some strange reason $document.ready doesn't work, but window.onload does, so I just stay with that...
alert("here");
});  */
  
  window.onload = function() {
     //alert( "welcome" );
    var strictState = false;
    var userTurn = false;
    var computerArr = [];
    var userArr = [];
     
    //Strict Button logic
    $('#strict').on('click', function(){
      if(strictState){
        //set color to dark
        $('#strictLight').css("background", "#840402");
        //change state to false
        strictState = false;
      }
      else{
        //set color to light
        $('#strictLight').css("background", "#ff3a3a");
        //change state to true
        strictState = true;
      }
    });
    
    //Individual Colored Segments' logic - what happens if they get clicked (by user or by computer)
    
    //Top left segment's logic
    $('#topLeftSegment').on('click', function(){
      //alert('userTurn: ' + userTurn);
      //debugging stuff
      console.log('topleftclick; userTurn: ' + userTurn + ' userArr: ' + userArr + ' computerArr: ' + computerArr);
      
      //Play the audio and flash the colour long enough so that user can see
         new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3").play();
$('#topLeftSegment').css("background", 'rgb(5,175,247)');
      setTimeout(function(){
    $('#topLeftSegment').css("background", 'blue');
      }, 1000);
      
    //Check if the click is from the user or the computer
    if(userTurn){
      userArr.push(0);
      //debugging stuff
      console.log('in if userTurn');
      //Check if the userArr results so far match the computerArr; 
      if (matchingClick(userArr, computerArr)){
        console.log('in matchingClick');
        if (userArr.length == computerArr.length){
          //if they do and they equal compArr: userTurn = false; 
          userTurn = false;
          userArr = [];
          //continue with the extra step
          console.log('before continueGame-true; userTurn: ' + userTurn);
          continueGame(computerArr, true, function(){
            userTurn = true;
          });
          console.log('after continueGame - false; userTurn: ' + userTurn);
        }
      }
      else{
        //if they don't match: userTurn = false + zap userArr; 
        userTurn = false;
        userArr = [];
        //Also do beeping;
        new Audio("http://sampleswap.org/samples-ghost/INSTRUMENTS%20single%20samples/bells/1128[kb]one-pretty-bell.wav.mp3").play(); 
        
        if (strictState){
          computerArr = [];
          $('#counter').text("01");
          continueGame(computerArr, true, function(){
            userTurn = true;
          });
        }
        else{
          //Repeat previous steps
          console.log('user made a mistake; continueGame false to repeat stpes; userTurn: ' + userTurn);
          userTurn = continueGame(computerArr, false, function(){
            userTurn = true;
          });
          console.log('after continueGame false; userTurn: ' + userTurn);
        }
      }
    }
      
 });

  $("#topRightSegment").on("click", function(){
    //alert('userTurn: ' + userTurn);
    console.log('topRightclick; userTurn: ' + userTurn + ' userArr: ' + userArr + ' computerArr: ' + computerArr);
    
    new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3").play();
    
  $('#topRightSegment').css("background", 'rgb(104, 252, 5)');
      setTimeout(function(){
    $('#topRightSegment').css("background", 'green');
      }, 1000); 
    
    
    //Check if the click is from the user or the computer
    if(userTurn){
      userArr.push(1);
     console.log('in if userTurn');
      //Check if the userArr results so far match the computerArr; 
      if (matchingClick(userArr, computerArr)){
        console.log('in matchingClick');
        if (userArr.length == computerArr.length){
          //if they do and they equal compArr: userTurn = false; 
          userTurn = false;
          userArr = [];
          //continue with the extra step
          console.log('before continueGame-true; userTurn: ' + userTurn);
          userTurn = continueGame(computerArr, true, function(){
            userTurn = true;
          });
          console.log('after continueGame- false; userTurn: ' + userTurn);
        }
      }
      else{
        //if they don't match: userTurn = false + zap userArr; 
        userTurn = false;
        userArr = [];
        //Also do beeping;
        new Audio("http://sampleswap.org/samples-ghost/INSTRUMENTS%20single%20samples/bells/1128[kb]one-pretty-bell.wav.mp3").play(); 
        
        if (strictState){
           computerArr = [];
           $('#counter').text("01");
           continueGame(computerArr, true, function(){
             userTurn = true;
          });
        }
        else{
          //Repeat previous steps
          console.log('user made a mistake; continueGame false to repeat stpes; userTurn: ' + userTurn);
          userTurn = continueGame(computerArr, false, function(){
            userTurn = true;
          });
          console.log('after continueGame false; userTurn: ' + userTurn);
        }
      }
    }
  
  });   
    
   $("#bottomRightSegment").on("click", function(){
     //alert('userTurn: ' + userTurn);
     console.log('bottomRightClick; userTurn: ' + userTurn + ' userArr: ' + userArr + ' computerArr: ' + computerArr);
     
    new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3").play();
    
  $('#bottomRightSegment').css("background", 'rgb(234, 255, 12)');
      setTimeout(function(){
    $('#bottomRightSegment').css("background", '#F4D03F');
      }, 1000); 
     
     //Check if the click is from the user or the computer
    if(userTurn){
      userArr.push(3);
     console.log('in if userTurn');
      //Check if the userArr results so far match the computerArr; 
      if (matchingClick(userArr, computerArr)){
        console.log('in matchingClick');
        if (userArr.length == computerArr.length){
          //if they do and they equal compArr: userTurn = false; 
          userTurn = false;
          userArr = [];
          //continue with the extra step
          console.log('before continueGame-true; userTurn: ' + userTurn);
          userTurn = continueGame(computerArr, true, function(){
            userTurn = true;
          });
          console.log('after continueGame- false; userTurn: ' + userTurn);
        }
      }
      else{
        //if they don't match: userTurn = false + zap userArr; 
        userTurn = false;
        userArr = [];
        //Also do beeping;
        new Audio("http://sampleswap.org/samples-ghost/INSTRUMENTS%20single%20samples/bells/1128[kb]one-pretty-bell.wav.mp3").play(); 
        
        if (strictState){
          computerArr = [];
          $('#counter').text("01");
          continueGame(computerArr, true, function(){
             userTurn = true;
          });
        }
        else{
          //Repeat previous steps
          console.log('user made a mistake; continueGame false to repeat stpes; userTurn: ' + userTurn);
          userTurn = continueGame(computerArr, false, function(){
            userTurn = true;
          });
          console.log('after continueGame false; userTurn: ' + userTurn);
        }
      }
    }
    
  });     
    
  $("#bottomLeftSegment").on("click", function(){
    //alert('userTurn: ' + userTurn);
    console.log('bottomleftclick; userTurn: ' + userTurn + ' userArr: ' + userArr + ' computerArr: ' + computerArr);
    
    new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3").play();
    
  $('#bottomLeftSegment').css("background", 'rgb(255, 2, 2)');
      setTimeout(function(){
    $('#bottomLeftSegment').css("background", '#a30101');
      }, 1000); 
    
    //Check if the click is from the user or the computer
    if(userTurn){
      userArr.push(2);
 console.log('in if userTurn');
      //Check if the userArr results so far match the computerArr; 
      if (matchingClick(userArr, computerArr)){
        console.log('in matchingClick');
        if (userArr.length == computerArr.length){
          //if they do and they equal compArr: userTurn = false; 
          userTurn = false;
          userArr = [];
          //continue with the extra step
          console.log('before continueGame-true; userTurn: ' + userTurn);
          userTurn = continueGame(computerArr, true, function(){
            userTurn = true;
          });
          console.log('after continueGame- false; userTurn: ' + userTurn);
        }
      }
      else{
        //if they don't match: userTurn = false + zap userArr; 
        userTurn = false;
        userArr = [];
        //Also do beeping;
        new Audio("http://sampleswap.org/samples-ghost/INSTRUMENTS%20single%20samples/bells/1128[kb]one-pretty-bell.wav.mp3").play(); 
        
        if (strictState){
          computerArr = [];
          $('#counter').text("01");
          continueGame(computerArr, true, function(){
            userTurn = true;
          });
        }
        else{
          //Repeat previous steps
          console.log('user made a mistake; continueGame false to repeat stpes; userTurn: ' + userTurn);
          userTurn = continueGame(computerArr, false, function(){
            userTurn = true;
          });
          console.log('after continueGame false; userTurn: ' + userTurn);
        }
      }
    }
    
  });     
   
  $('#start').on('click', function(){
    //First, it's the computer
    userTurn = false;
    computerArr = [];
    //This is userful to test what happens after 20 steps...:
    //computerArr = [1,1,1,1,0,0,0,0,2,2,2,2,3,3,3,3,1,1];
    userArr = [];
    
    //Clear all the processes running in the background
    var id = window.setTimeout(function() {}, 0);
    while (id--) {
      window.clearTimeout(id); // will do nothing if no   timeout with id is present
    }
    //also set the segments back to their non-highlighted colors (as they might stay highlighted when the click processes are stopped above):
    $('#topLeftSegment').css("background", 'blue');
    $('#topRightSegment').css("background", 'green');
      
    $('#bottomRightSegment').css("background", '#F4D03F');
    $('#bottomLeftSegment').css("background", '#a30101');
    
    $('#youWon').html('');
    $('#counter').text("01");
    userTurn = continueGame(computerArr, true, function(){
       userTurn = true;
    });  
});
  };    

function generateRandom(){  
  return Math.floor(Math.random()*4);
}

function matchingClick(userArr, computerArr){
  var returnVal=true;
  
  for (var i = 0; i < userArr.length; i++){
      if (userArr[i] != computerArr[i]){
        returnVal = false;
      }
    }

  return returnVal;
}

function checkResults(userArr, computerArr){
  var returnVal=true;
  
  if (userArr.length != computerArr.length){
    returnVal = false;
  }
  else{
    for (var i = 0; i < userArr.length; i++){
      if (userArr[i] != computerArr[i]){
        returnVal = false;
      }
    }
      
  }
  //alert('in checkResults, returnVal: ' + returnVal);
  return returnVal;
}

function clickRandom(random){
  //alert('in clickRandom');
  console.log('in clickRandom; random: ' + random);
    switch(random){
    case 0:
        //setTimeout("$('#topLeftSegment').click()", 1000); 
        $('#topLeftSegment').click();
      break;
    case 1:
        //setTimeout("$('#topRightSegment').click()", 1000);  
        $('#topRightSegment').click();
      break;
    case 2:
        //setTimeout("$('#bottomLeftSegment').click()", 1000);  
        $('#bottomLeftSegment').click();
      break;
    case 3:
        //setTimeout("$('#bottomRightSegment').click()", 1000);  
      $('#bottomRightSegment').click();
      break;
    }  
}



function continueGame(computerArr, addNewClick, _callback){
  console.log('in continueGame, compArr: ' + computerArr + ' addNewClick: ' + addNewClick);
  
  if (computerArr.length == 20 && addNewClick){
      //User got the 20 steps right: let them know!
    
    $('#youWon').html('You Won!');
    setTimeout(function(){
      $('#youWon').html('');      
      $('#start').click();
    }, 3000);
    
  }
  else{
    //user hasn't won yet; continue as per usual
    if (addNewClick){
      console.log('in if addNewClick');
      //var random = Math.floor(Math.random()*4);
      var random = generateRandom();
      computerArr.push(random);
      var newCount = computerArr.length;
      if (newCount < 10){
        newCount = '0' + newCount;
      }
      $('#counter').html(newCount);
    }
  //console.log('after if addNewClick');
  console.log('before myLoop; compArr: ' + computerArr);
  
    var j=0;
    function myLoop(){
      console.log('in myLoop; j: ' + j + ' compArrj: ' + computerArr[j]);
      setTimeout(function(){
        //alert('in setTimeout');
        clickRandom(computerArr[j]);
        j++;
        if (j < computerArr.length){
          myLoop();
        }
        else{
          console.log('end of continueGame, just before returning true');
          //return true;
          _callback();
        }
      }, 1500);
    
    }
 
    myLoop();
  
 }
  
}

