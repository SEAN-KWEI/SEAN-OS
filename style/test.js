divs = document.getElementsByClassName("draggable");

document.getElementById("parent").addEventListener('click', e => {
    if(e.target !== e.currentTarget) console.log("child clicked") 
    else console.log("parent clicked")
});

for (e of divs) {
    randPos(e);
    e.addEventListener('mouseover', hover);
    e.addEventListener('mouseout', back);
    e.addEventListener('mousedown', 
        onMouseDown, 
        document.addEventListener('mousemove', onMouseMove)
    );
    e.addEventListener('mouseup', onMouseUp);
}

// canvas.width = window.innerWidth - 20;
// canvas.height = window.innerHeight - 20;

var toMove = ''; 
var lastMouse = { x:0, y:0 };

function randPos(e) {
    var maxW = document.body.clientWidth - 150;
    var maxH = document.body.clientHeight - 150;
    var randStartW = Math.random() * maxW + 50;
    var randStartH = Math.random() * maxH + 50;
    e.style.left = randStartW + "px";
    e.style.top = randStartH + "px";
}

function hover(e) {
    e.target.style.outline = "1px dashed red";
}

function back(e) {
    e.target.style.outline = '';
}

function onMouseDown(e) {
    e.preventDefault();
    toMove = e.target.id;                      // remember which div has been selected 
    lastMouse.x = e.clientX;                   // remember where the mouse was when it was clicked
    lastMouse.y = e.clientY;
    document.getElementById("demo").innerHTML = lastMouse.x;
    e.currentTarget.style.outline = "1px solid red";  // highlight the border of the div
    e.target.style.zIndex = divs.length;       // put this div on top
    var i = 1; 
    for (e of divs){
        if (e.id != toMove){
            e.style.zIndex = i++;              // put all other divs behind the selected one
        }
    }
    
}

function onMouseMove(e) {
    e.preventDefault();
    if (toMove == "") {
        return;
    }
    var d = document.getElementById(toMove);
    e.target.style.outline = "1px solid red";  // highlight the border of the div

    d.style.left = d.offsetLeft + e.clientX - lastMouse.x + "px";     // move the div by however much the mouse moved
    d.style.top  = d.offsetTop  + e.clientY - lastMouse.y + "px";
    document.getElementById("demo").innerHTML = d.style.left + "fuck" + d.offsetLeft + "||||" + e.clientX + "{}{}{}}" + lastMouse.x;
    lastMouse.x = e.clientX;                                          // remember where the mouse is now
    lastMouse.y = e.clientY;
    document.pointerEvents = none;
}

function onMouseUp() {
    // e.preventDefault();
    if (toMove == "") {
            return;
        }
    document.getElementById(toMove).style.outline = "1px dashed red";             // hide the border again
    toMove = "";
}



// var captionText = document.getElementById('caption');
// var box = document.getElementById('toClick');
// var iconImage = document.querySelector("#ikon");
// var container = document.querySelector("body");
// var theDraggedOne = '';

// document.getElementById('iconImage').draggable = false;
// document.getElementById('toClick').draggable = false;

// var iconFrames = document.getElementsByClassName("iconFrame");
// var iconBox = document.getElementsByClassName("iconContainer")
// var iconCaption = document.getElementsByClassName("iconCaptions");

// // for (var i = 0, len = iconCaption.length; i < len; i++) {
// //     console.log(iconCaption, iconBox[i]);
// // }

// //hover states
// iconBox[1].addEventListener('mouseover', hover);
// iconBox[1].addEventListener('mouseout', back);

// //drag state
// iconImage.addEventListener("mousedown", ()=>{
//     document.addEventListener("mousemove", moveThing)
// });

// //non drag state
// iconImage.addEventListener("mouseup", ()=>{
//     document.removeEventListener("mousemove", moveThing);
//     //return styles
//     iconBox[1].style.cursor = 'pointer';
//     iconBox[1].style.pointerEvents = 'revert';
//     iconBox[1].style.backgroundColor = 'transparent';
//     iconImage.style.cursor = 'default';
//     //revert caption to hide
//     captionText.style.whiteSpace = 'nowrap';
//     captionText.style.textOverflow = 'ellipsis';
//     captionText.style.overflow = 'hidden';
// });

// function hover() {
//     iconBox[1].style.outline = 'dashed red .5px';
//     //show text
//     captionText.style.whiteSpace = 'initial';
//     captionText.style.textOverflow = 'initial';
//     captionText.style.overflow = 'initial';
// }

// function back() {
//     iconBox[1].style.outline = '';
//     //revert caption to hide
//     captionText.style.whiteSpace = 'nowrap';
//     captionText.style.textOverflow = 'ellipsis';
//     captionText.style.overflow = 'hidden';
// }

// function moveThing(pos) {
//     // pos = pos || window.event;
//     // pos.preventDefault();
//     iconBox[1].style.backgroundColor = 'red';

// 	var xPosition = pos.clientX - container.getBoundingClientRect().left - (iconImage.clientWidth / 2);
// 	var yPosition = pos.clientY - container.getBoundingClientRect().top - (iconImage.clientHeight / 2);
// 	// in case of a wide border, the boarder-width needs to be considered in the formula above
// 	iconImage.style.left = xPosition + "px";
// 	iconImage.style.top = yPosition + "px";

//     iconBox[1].style.pointerEvents = 'none';
//     iconImage.style.cursor = 'grabbing';

//     captionText.style.whiteSpace = 'initial';
//     captionText.style.textOverflow = 'initial';
//     captionText.style.overflow = 'initial';
// }