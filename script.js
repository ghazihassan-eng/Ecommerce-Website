
function view(clicke_id)
{
//  alert(clicke_id);
  var btnid = clicke_id;

  var imgtxt = "image-"+btnid;
  var h5txt = "h5-"+btnid;
  var ptxt = "p-"+btnid;
  var h4txt = "h4-"+btnid;
//  alert(imgtxt);
//  alert(h5txt);
//  alert(ptxt);
//  alert(h4txt);
  var view_h5 = document.getElementById(h5txt).textContent;
  var view_p = document.getElementById(ptxt).textContent;
  var view_h4 = document.getElementById(h4txt).textContent;
  var view_image = document.getElementById(imgtxt).src;
//alert(view_image)
//  var view_img = document.getElementById(imgtxt).getAttribute("src");
//  alert(view_img);
//  alert(view_h5);
//  alert(view_p);
//  alert(view_h4);
  localStorage.setItem("textvalue1",view_h5);
  localStorage.setItem("textvalue2",view_p);
  localStorage.setItem("textvalue3",view_h4);
  localStorage.setItem("textvalue4",view_image);

}
