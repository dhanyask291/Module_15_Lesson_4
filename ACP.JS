function showTime(){
    var date= new Date();
    var d= date.getDate();
    var m= date.getMonth();
    var y= date.getFullYear();
    var session= "AM";

    if(h>12){
        h = h-12; 
        session= "PM"; 
    }

    d= (d<10) ? "0" + d:d;
    m= (m<10) ? "0" + m:m;
    y= (y<10) ? "0" + y:y;

    var time= h+":"+ m + ":" + s + " " + session;
    document. getElementById("MyClockDisplay").innerText = date;
    
if


}

showTime();