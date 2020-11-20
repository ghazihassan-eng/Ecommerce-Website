function gotocart(){
  //alert("gotocart");
  var image_cart = document.getElementById("image-view").src;
  var h5_cart = document.getElementById("h5-view").textContent;
  var h4_cart = document.getElementById("h4-view").textContent;
  //alert(image_cart);
  //alert(h5_cart);
  //alert(h4_cart);
  localStorage.setItem("textvalue5",image_cart);
  localStorage.setItem("textvalue6",h5_cart);
  localStorage.setItem("textvalue7",h4_cart);


}
