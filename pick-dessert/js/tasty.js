/*********************
	Set up the page
**********************/
$(function() {
	$('.bt').click(pick);
	retrieveState();
});

/*********************
	Actual Code
**********************/

function pick(event) {
	var t = $(event.target).attr('id');
	var r = 3
	switch (t) {
    case "pie":
      $('#dessert').attr('src','img/pie.jpg');
      break;
    case "cake": 
      $('#dessert').attr('src','img/cake.jpg');
      break;
    case "cream":
      $('#dessert').attr('src','img/cream.jpg');
      break;
    default:
      console.log(t);
  }
}
function storeState() {
	localStorage.dessert = $('form').html();
}
function retrieveState() {
	if (localStorage.dessert) {
		$('form').append(localStorage.dessert);
	}
}