
// color click
function blueclick(n){
    if (n===1) {
        divclorbutton.style.backgroundColor = 'blue';
    }
    else{
        divclorcheck.style.backgroundColor = 'blue';
    }
    
};
function redclick(n){
    if (n===1) {
        divclorbutton.style.backgroundColor = 'red';
    }
    else{
        divclorcheck.style.backgroundColor = 'red';
    }
    
};
function brownclick(){

    divclorcheck.style.backgroundColor = 'brown';
};
function lavender(){

    divclorcheck.style.backgroundColor = 'lavender';
};


// Bài 6 : Tạo 2 nút, nút thứ nhất có value = "Xanh", nút thứ hai có value = "Đỏ".

//get
var BluetButtonColor = document.getElementById("btn-blue");
var REdtButtonColor = document.getElementById("btn-red");
var divclorbutton = document.getElementById("div-color-btn");


// event
BluetButtonColor.addEventListener("click",function(){
    //alert("....");
    blueclick(1);
   //updateResult(result);
});
REdtButtonColor.addEventListener("click",function(){
    //alert("....");
    redclick(1);
   //updateResult(result);
});

// bài 7:Tạo một danh sách lựa chọn gồm có 4 màu: red, blue, brown và lavender.

var RedRadioColor = document.getElementById("red-color-check");
var BluetRadioColor = document.getElementById("blue-color-check");
var BrownRadioColor = document.getElementById("brown-color-check");
var LavenderRadioColor = document.getElementById("lavender-color-check");
var divclorcheck = document.getElementById("div-color-check");

RedRadioColor.addEventListener("change",()=>{
    redclick(2);

});
BluetRadioColor.addEventListener("change",()=>{
    blueclick(2);

});
BrownRadioColor.addEventListener("change",()=>{
    brownclick();
});
LavenderRadioColor.addEventListener("change",()=>{
    lavender();
});


// bài 13

var seconds =0, minute = 0, hours= 0;
function TimeHandler(){
    //xỷ lý
    seconds++;
    //console.log(seconds)
    if (seconds == 60) {
        minute += 1;
    }
    if (minute == 60) {
        hours += 1;
    }
}
setInterval(TimeHandler,1000)

//get  divtimer
var time_el=document.querySelector("div# .js-timer")
function Displaytime(){

}