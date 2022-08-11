var icons = document.getElementsByClassName("icons");
var linkContainer = document.getElementsByClassName("iconContainer");
var buttons = document.getElementsByClassName("iconImage");
var captions = document.getElementsByClassName("caption");

var getCurSel = '';
var curSel = '';
var curCap = '';
var curBut = '';
var curIco = '';
var curCon = '';
var toEditCap = document;
var toEditBut = document;
var toEditIco = document;
var toEditCon = document;

for (var i = 0, len = icons.length; i < len; i++) {
    // curSel = i;
    // document.write(captions[curSel].innerHTML);
    randPos(icons[i]);
    icons[i].draggable = false;
    buttons[i].addEventListener('mouseover', hover);
    buttons[i].addEventListener('mouseout', back);
    icons[i].addEventListener("mousedown", ()=>{
        document.addEventListener("mousemove", moveThing);
    });
    icons[i].addEventListener("mouseup", ()=>{
        toEditCap.innerHTML = 'fuck';
        //return styles
        toEditBut.style.cursor = 'pointer';
        toEditBut.style.pointerEvents = 'revert';
        toEditBut.style.backgroundColor = 'transparent';
        toEditIco.style.cursor = 'default';
        toEditCon.style.pointerEvents = 'revert';
        //revert caption to hide
        toEditCap.style.whiteSpace = 'initial';
        toEditCap.style.textOverflow = 'initial';
        toEditCap.style.overflow = 'initial';
        document.removeEventListener("mousemove", moveThing);
    });
}

// HELP FUNCS

function randPos(e) {
    var maxW = document.body.clientWidth - 150;
    var maxH = document.body.clientHeight - 150;
    var randStartW = Math.random() * maxW + 50;
    var randStartH = Math.random() * maxH + 50;
    e.style.left = randStartW + "px";
    e.style.top = randStartH + "px";
}

function defCur(b) {
    getCurSel = b.currentTarget.getAttribute("id");
    curSel = getCurSel.replace('b', '');

    curBut = "b" + curSel;
    curIco = "i" + curSel;
    curCap = "c" + curSel;
    curCon = "ic" + curSel;
    toEditBut = document.getElementById(curBut);
    toEditIco = document.getElementById(curIco);
    toEditCap = document.getElementById(curCap);
    toEditCon = document.getElementById(curCon);
}

function hover(b) { 
    console.log('shhhiiet');
    defCur(b);
    toEditBut.style.zIndex = 50;
    toEditIco.style.zIndex = 50;
    toEditCap.style.zIndex = 50;
    toEditCon.style.zIndex = 50;

    b.target.style.outline = 'dashed red .5px';
    b.target.style.borderRadius = '5px';
    //show text

    toEditCap.style.whiteSpace = 'initial';
    toEditCap.style.textOverflow = 'initial';
    toEditCap.style.overflow = 'initial';
}

function back(b) {
    b.target.style.outline = '';

    toEditBut.style.zIndex = 0;
    toEditIco.style.zIndex = 0;
    toEditCap.style.zIndex = 0;
    toEditCon.style.zIndex = 0;

    //revert caption to hide    
    toEditCap.style.whiteSpace = 'nowrap';
    toEditCap.style.overflow = 'hidden';
    toEditCap.style.textOverflow = 'ellipsis';
}

function moveThing(pos) {
    // pos = pos || window.event;
    toEditBut.style.zIndex = 50;
    toEditIco.style.zIndex = 50;
    toEditCap.style.zIndex = 50;
    toEditCon.style.zIndex = 50;

    toEditBut.style.backgroundColor = 'red';

	var xPosition = pos.clientX - 25;
	var yPosition = pos.clientY - 25;
	// in case of a wide border, the boarder-width needs to be considered in the formula above
	toEditIco.style.left = xPosition + "px";
	toEditIco.style.top = yPosition + "px";

    toEditCon.style.pointerEvents = 'none';
    toEditIco.style.cursor = 'grabbing';

    toEditCap.style.whiteSpace = 'initial';
    toEditCap.style.textOverflow = 'initial';
    toEditCap.style.overflow = 'initial';
}