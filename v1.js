////cookie managment functions
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

function cc_private_ce_check_multi_itemCookie() {
    var user = getCookie("cc_private_ce_muti_item");
    if (user == "yes") {
        return true;
    } else {
        setCookie("cc_private_ce_muti_item", "no", 5);
        return false;
    }
}


// Save cart data to var.
var cc_shopifyCartData;
function getUserCart(a) {
  // console.log(a);
  cc_shopifyCartData = a;
  return a;
}

//Check number of items in cart
function num_items_inCart(c) {
  c.item_count;
}



// // Loop through cart items
// function functionName2(b) {
//   b.items.forEach(function(element) {
//   console.log(element);
// });
// }



// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!-1" );

    if (!cc_private_ce_check_multi_itemCookie()) {

          $.getJSON( "/cart.js",  function(data) {
            // console.log( data );
            var cartObject = getUserCart(data);
            var cartItemsnum = num_items_inCart(cartObject)

            // if (cartItemsnum<2) {
            //       return;
            // }
            if (!cartItemsnum<2) {
              ///if item-price is == 0 AND quantity is >1{
              //fire notification.
            cartObject.items.forEach(function(element) {
                  var product_Price =  element.items.price;
                  var product_quantity =  element.items.quantity;
                  if (product_Price == 0 && product_quantity > 1) {
                    // Fire off the notifs
                    alert("Notif");
                  }
                });
            }
          });

    }

});







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





//Check number of items in cart
function functionName3(c) {
  c.item_count;
}

//Check cart total
function functionName3(d) {

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
