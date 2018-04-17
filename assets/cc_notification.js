

// A $( document ).ready() block.
$( document ).ready(function() {
///////////fireing Notif///////////

// $('#cc__fancy_notification').css('pointer-events','all');
// $('.overlay').addClass('is-active');



///////////Closing Notif///////////
//Close svg X
$('#cc__fancy_notification .overlay .cc__notif__modal .title svg,#cc__closebutton,#cc__cartbutton').click(function(){
      $('#cc__fancy_notification').css('pointer-events','none');
      $('.cc__notif__modal').addClass('fade');

      setTimeout(function(){
        $('.overlay').removeClass('is-active');
        $('.cc__notif__modal').removeClass('fade');
      }, 1500);
});

});


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
