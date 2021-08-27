var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
rover_height=90
rover_width=100
var rover_x=10;
rover_y=10;
var img=["img1.jpg","img2.jpg","img3.jpg","img4.jpg"]
random_number=Math.floor(Math.random()*4)
console.log(random_number)
background_image=img[random_number]
rover_img="rover.png"
function add(){
background_imagetag=new Image()
background_imagetag.onload=uploadbackground
background_imagetag.src=background_image;
rover_imgtag=new Image();
rover_imgtag.onload=uploadrover;
rover_imgtag.src=rover_img;

}
function uploadbackground(){
ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height)
}
function uploadrover(){
ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height)
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress)
    if (keypress=='37') {
        console.log("left key pressed")
        left()
    }
    if (keypress=='39') {
        console.log("right key pressed")
        right()
    }
    if (keypress=='38') {
        console.log("up key pressed")
        up()
    }
    if (keypress=='40') {
        console.log("down key pressed")
        down()
    }
}
function right(){
    if (rover_x <=600) {
        rover_x=rover_x+10  
        console.log("when right arrow is pressed, x="+rover_x+"y="+rover_y)
        uploadbackground()  
        uploadrover()
        
    }

}
function left(){
    if (rover_x >=0) {
        rover_x=rover_x-10
        console.log("when left arrow is pressed, x="+rover_x+"y="+rover_y)
        uploadbackground()
        uploadrover()
    }
}
function down(){
    if (rover_y <=535) {
        rover_y=rover_y+10
        console.log("when down arrow is presses, y="+rover_y+"x="+rover_x)
        uploadbackground()
        uploadrover()
    }
}
function up(){
    if (rover_y >=0) {
        rover_y=rover_y-10
        console.log("when up arrow is presses, y="+rover_y+"x="+rover_x)
        uploadbackground()
        uploadrover()
    }
}