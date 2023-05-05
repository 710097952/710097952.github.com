var T3_1=document.getElementById("t3_1");
var T3_2=document.getElementById("t3_2");
var T3_3=document.getElementById("t3_3");
var T3_4=document.getElementById("t3_4");
var T3_5=document.getElementById("t3_5");
T3_1.onclick=function(){    
    T3_1.className="red_text3";
    T3_2.className="text3";
    T3_3.className="text3";
    T3_4.className="text3";
    T3_5.className="text3";
}
T3_2.onclick=function(){    
    T3_1.className="text3";
    T3_2.className="red_text3";
    T3_3.className="text3";
    T3_4.className="text3";
    T3_5.className="text3";
}
T3_3.onclick=function(){    
    T3_1.className="text3";
    T3_2.className="text3";
    T3_3.className="red_text3";
    T3_4.className="text3";
    T3_5.className="text3";
}
T3_4.onclick=function(){    
    T3_1.className="text3";
    T3_2.className="text3";
    T3_3.className="text3";
    T3_4.className="red_text3";
    T3_5.className="text3";
}
T3_5.onclick=function(){    
    T3_1.className="text3";
    T3_2.className="text3";
    T3_3.className="text3";
    T3_4.className="text3";
    T3_5.className="red_text3";
}


var T6_1=document.getElementById("t6_1");
var T6_2=document.getElementById("t6_2");
var T6_3=document.getElementById("t6_3");
var T6_4=document.getElementById("t6_4");
T6_1.onclick=function(){    
    T6_1.className="red_text6";
    T6_2.className="text6";
    T6_3.className="text6";
    T6_4.className="text6";
}
T6_2.onclick=function(){    
    T6_1.className="text6";
    T6_2.className="red_text6";
    T6_3.className="text6";
    T6_4.className="text6";
}
T6_3.onclick=function(){    
    T6_1.className="text6";
    T6_2.className="text6";
    T6_3.className="red_text6";
    T6_4.className="text6";
}
T6_4.onclick=function(){    
    T6_1.className="text6";
    T6_2.className="text6";
    T6_3.className="text6";
    T6_4.className="red_text6";
}


var T1=document.getElementById("t1");
var T2=document.getElementById("t2");
var T3=document.getElementById("t3");
var T4=document.getElementById("t4");
T1.onclick=function(){    
    T1.className="r_tool";
    T2.className="tool";
    T3.className="tool";
    T4.className="tool";
}
T2.onclick=function(){
    T1.className="tool";
    T2.className="r_tool";
    T3.className="tool";
    T4.className="tool";
}
T3.onclick=function(){
    T1.className="tool";
    T2.className="tool";
    T3.className="r_tool";
    T4.className="tool";
}
T4.onclick=function(){    
    T1.className="tool";
    T2.className="tool";
    T3.className="tool";
    T4.className="r_tool";
}