
var el = document.querySelectorAll('li');

var i;
for(i = 0; i < el.length; i++){
	el[i].className = 'out complete';
}


function getTarget(e) {                          // Declare function
  if (!e) {                                      // If there is no event object
    e = window.event;                            // Use old IE event object
  }
  return e.target || e.srcElement;               // Get the target of event
}

function itemDone(e){
	var target, elParent;
	target = getTarget(e);
	
	if(target.nodeName.toLowerCase() == "a"){
		elParent = target.parentNode;
		if(elParent.className == 'out complete'){
			elParent.className = 'in complete';
		}else{
			elParent.className = 'out complete';
		}
	}
	
	if(e.preventDefault){
		e.preventDefault();
	}else{
		e.returnValue = false;
	}
}

var el = document.getElementById('sections');// Get shopping list
if (el.addEventListener) {                       // If event listeners work
  el.addEventListener('click', function(e) {     // Add listener on click
    itemDone(e);                                 // It calls itemDone()
  }, false);                                     // Use bubbling phase for flow
} else {                                         // Otherwise
  el.attachEvent('onclick', function(e) {        // Use old IE model: onclick
    itemDone(e);                                 // Call itemDone()
  });
}
