// targets the play button from the page and
//  stores a reference to it in the playButton variable
// this play button has global scope
var playButton =document.querySelector("#play");
var pauseButton=document.querySelector("#pause");
var prevButton=document.querySelector("#prev");
var nextButton=document.querySelector("#next");
var song=document.querySelector("#song")
var name=document.querySelector("#name")
var albumCover=document.querySelector("#albumart")
var textField=document.querySelector("textField")
var button=document.querySelector("button")

// defines the Jukebox object
function Jukebox() {
  this.audioList=[];
  this.nameList=[];
  this.coverList=[];
}
// the code for what happens when you create a Jukebox object
//  goes here

// defines the Jukebox prototype object
Jukebox.prototype.play = function(){
  document.getElementById("albumart").src=this.coverList[i];
  document.getElementById("name").innerText=this.nameList[i];
  song.play();
};

 // the code for playing a song would go here


Jukebox.prototype.addTrack=function(track,name,cover){
  this.audioList.push(track);
  this.nameList.push(name);
  this.coverList.push(cover)
};
// the rest of your prototype methods would go here

//  creates a new Jukebox object
// this variable has global scope after this point
var jukebox = new Jukebox();
jukebox.addTrack("chance.mp3","Good Ass Intro","Acidrap.jpg")
jukebox.addTrack("Jcole.mp3", "03-Adolesence", "colealbum.jpg")
jukebox.addTrack("GOMD.mp3", "GOMD", "colealbum.jpg")
// adds an event listener for when you click the play button

var i=0;

Jukebox.prototype.play=function(){
  document.getElementById("albumart").src=this.coverList[i];
  document.getElementById("name").innerText=this.nameList[i];
  song.play();
};

song.src=jukebox.audioList[i];

Jukebox.prototype.pause=function(){
  song.pause();
};


Jukebox.prototype.prev=function(){
  i--;
  if(i>=0){
    song.pause();
    song.src=jukebox.audioList[i];
    document.getElementById("albumart").src=this.coverList[i];
    document.getElementById("name").innerText=this.nameList[i];
    song.play();
  } else{
    i= jukebox.audioList.length-1;
    song.pause();
    song.src=jukebox.audioList[i];
    document.getElementById("albumart").src=this.coverList[i];
    document.getElementById("name").innerText=this.nameList[i];
    song.play();
  }
}

Jukebox.prototype.next=function(){
  i++;
  if(i<jukebox.audioList.length){
    song.pause();
    song.src=jukebox.audioList[i];
    document.getElementById("albumart").src=this.coverList[i];
    document.getElementById("name").innerText=this.nameList[i];
    song.play();
  } else{
      i=0;
      song.pause();
      song.src=jukebox.audioList[i];
      document.getElementById("albumart").src=this.coverList[i];
      document.getElementById("name").innerText=this.nameList[i];
      song.play();
  }
}

playButton.addEventListener("click",function(event){
  event.preventDefault();
  jukebox.play();
})

pauseButton.addEventListener("click",function(event){
  event.preventDefault();
  jukebox.pause();
})

prevButton.addEventListener("click",function(event){
  event.preventDefault();
  jukebox.prev();
})

nextButton.addEventListener("click",function(event){
  event.preventDefault();
  jukebox.next();
})


// the rest of your event listeners would go here
