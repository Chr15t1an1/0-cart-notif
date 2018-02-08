/cart.js



//Get cart.item_count
//if(cart.item_count) has less than 2 items quit{
// exit.
//}


////// loop cart.item_count
///if item-price is == 0 AND quantity is >1{
//fire notification.
//}//else {
// continue;
//}




// if cart has 2 or more line items loop through them
//// if quanity of line item is less than 2 {}
///////#continue
///////}
//////elseif check if the price of line item is == 0 {

///}



//Private_ce id = 268877313

private_ce_collection_id = 268877313;


// Save cart data to var.
var cc_shopifyCartData;
function functionName(a) {
  console.log( a );
  cc_shopifyCartData = a;

}


//Check number of items in cart
function functionName3(c) {
  c.item_count;
}

//Check cart total
function functionName3(d) {

}



// Loop through cart items
function functionName2(b) {
  b.items.forEach(function(element) {
  console.log(element);
});
}



// Get cart Data
// Get JSON-formatted data from the server and store in var
$.getJSON( "/cart.js",  function(data) {
  // console.log( data );
  functionName(data);
});









  // .done(function(data) {
  //   console.log( "second success" );
  //     console.log( data );
  //   //return data;
  // })
  // .fail(function() {
  //   console.log( "error" );
  // })
  // .always(function() {
  //   console.log( "complete" );
  // });

// Perform other work here ...





console.log( "post function success" );








On add to cart


// Shorthand for $( document ).ready()
$(function() {
    console.log( "ready!" );
});

var resp;

// Get JSON-formatted data from the server
$.getJSON( "/cart.js", function( resp ) {

    return resp;
    // Log each key in the response data
    // $.each( resp, function( key, value ) {
    //     console.log( key + " : " + value );
    // });

console.log( resp );

});










////cookie shop

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}
