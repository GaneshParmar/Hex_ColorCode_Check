function color_show(){
    var color_display=document.getElementById("show_color");
    var color_code=text.value;
    // console.log(color_code)
    // color_display.style.background=`#+${color_code}`;
    p.innerHTML="Color Hex Code:- "+"#"+`${color_code}`;
    color_display.style.backgroundColor="#"+`${color_code}`;
    // console.log(color_display)
}