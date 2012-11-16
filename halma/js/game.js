var gCanvas = document.querySelector('#board');
var gContext = gCanvas.getContext('2d');
var cellWidth = 50;
var gWidth = gHeight = cellWidth*10;
var padding = 6;

function init() {
	drawBoard();
	drawPieces();
}
function drawBoard() {
	gContext.strokeStyle = '#FFFFFF';
	for (var i=0.5; i<gWidth; i+=cellWidth) {
		gContext.moveTo(i,0);
		gContext.lineTo(i,gHeight);
		gContext.moveTo(0,i);
		gContext.lineTo(gWidth,i);
		gContext.stroke();
	};
}
function drawPieces() {
	for (var i=padding; i<3*cellWidth; i+=cellWidth) {
		for (var j=padding; j<3*cellWidth; j+=cellWidth) {
			var radius = (cellWidth/2)-padding;
			var xStart = radius+i;
			var yStart = ((cellWidth*6)+radius)+j;
			makePiece(xStart,yStart,radius);
		}		
	}
}
function makePiece(x,y,radius) {
	gContext.fillStyle = "#FFFFFF";
	gContext.beginPath();
	gContext.arc(x, y, radius, 0, Math.PI * 2, false);
	gContext.fill();
}