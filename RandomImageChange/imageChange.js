var images = ["2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg"];

function changeImage()
{
    var randomNo= Math.floor(Math.random() * images.length);
    var img=document.getElementById("imgs");
    img.src=images[randomNo];
}
function toReset()
{
    var img=document.getElementById("imgs");
    img.src="1.jpg";
}