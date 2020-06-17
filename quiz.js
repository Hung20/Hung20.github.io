
function sending(){
    var objList = document.getElementsByName("radio1");
    var objList2 = document.getElementsByName("radio2");
    var objList3 = document.getElementsByName("radio3");
    var objList4 = document.getElementsByName("radio4");
    var objList5 = document.getElementsByName("radio5");
    var objList6 = document.getElementsByName("radio6");
    
    for(var i=0;i<objList.length;i++)
{
if(objList[i].checked)
{
if(objList[i].value == "2")
{
    var one=1;
}
else
{
    one=0;
    
}


}
}


for(var p=0;p<objList2.length;p++)
{
if(objList2[p].checked)
{
if(objList2[p].value == "2")
{
    var sec=1;
}
else
{
    sec=0;
}


}

}

for(var o=0;o<objList3.length;o++)
{
if(objList3[o].checked)
{
if(objList3[o].value == "2")
{
    var thi=1;
}
else
{
    thi=0;
}


}

}

for(var q=0;q<objList4.length;q++)
{
if(objList4[q].checked)
{
if(objList4[q].value == "2")
{
    var fou=1;
}
else
{
    fou=0;
}


}

}

for(var t=0;t<objList5.length;t++)
{
if(objList5[t].checked)
{
if(objList5[t].value == "2")
{
    var fif=1;
}
else
{
    fif=0;
}


}

}

for(var z=0;z<objList6.length;z++)
{
if(objList6[z].checked)
{
if(objList6[z].value == "2")
{
    var six=1;
}
else
{
    six=0;
}


}

}

if(one+sec+thi+fou+fif+six==6){
    var mg=document.createElement("div");
    mg.setAttribute('id','score'); 
    mg.innerHTML = "你答對了所有題目！"; 
    document.getElementById("roll").appendChild(mg);
    y();
    var de = document.createElement("div"); 
    mg.appendChild(de);
    de.setAttribute('class', 'a'); 
    de.innerHTML = '再看一次認識動物';
    de.onclick=function () { 
        window.location.href = 'Animalhome.html';    
    }
    var mi = document.createElement("div"); 
    mg.appendChild(mi);
    mi.setAttribute('class', 'b'); 
    mi.innerHTML = '前往出任務囉';
    mi.onclick=function () { 
        window.location.href = 'Aqua-man-mission.html';     
    }
}
else if(one+sec+thi+fou+fif+six==5){
    var mg=document.createElement("div");
    mg.setAttribute('id','score'); 
    mg.innerHTML = "你答對了五題！"; 
    document.getElementById("roll").appendChild(mg);
    y();
    var de = document.createElement("div"); 
    mg.appendChild(de);
    de.setAttribute('class', 'a'); 
    de.innerHTML = '再看一次認識動物';
    de.onclick=function () { 
        window.location.href = 'Animalhome.html';
    }
    var mi = document.createElement("div"); 
    mg.appendChild(mi);
    mi.setAttribute('class', 'b'); 
    mi.innerHTML = '前往出任務囉';
    mi.onclick=function () { 
        window.location.href = 'Aqua-man-mission.html';    
    }
}
else if(one+sec+thi+fou+fif+six==4){
    var mg=document.createElement("div");
    mg.setAttribute('id','score'); 
    mg.innerHTML = "你答對了四題！"; 
    document.getElementById("roll").appendChild(mg);
    y();
    var de = document.createElement("div"); 
    mg.appendChild(de);
    de.setAttribute('class', 'a'); 
    de.innerHTML = '再看一次認識動物';
    de.onclick=function () {
        window.location.href = 'Animalhome.html';
    }
    var mi = document.createElement("div"); 
    mg.appendChild(mi);
    mi.setAttribute('class', 'b'); 
    mi.innerHTML = '前往出任務囉';
    mi.onclick=function () { 
        window.location.href = 'Aqua-man-mission.html';    
    }
}
else if(one+sec+thi+fou+fif+six==3){
    var mg=document.createElement("div");
    mg.setAttribute('id','score'); 
    mg.innerHTML = "你答對了三題！"; 
    document.getElementById("roll").appendChild(mg);
    y();
    var de = document.createElement("div"); 
    mg.appendChild(de);
    de.setAttribute('class', 'a'); 
    de.innerHTML = '再看一次認識動物';
    de.onclick=function () { 
        window.location.href = 'Animalhome.html';
    }
    var mi = document.createElement("div"); 
    mg.appendChild(mi);
    mi.setAttribute('class', 'b'); 
    mi.innerHTML = '前往出任務囉';
    mi.onclick=function () { 
        window.location.href = 'Aqua-man-mission.html'; 
    }
}
else if(one+sec+thi+fou+fif+six==2){
    var mg=document.createElement("div");
    mg.setAttribute('id','score'); 
    mg.innerHTML = "你答對了兩題！"; 
    document.getElementById("roll").appendChild(mg);
    y();
    var de = document.createElement("div"); 
    mg.appendChild(de);
    de.setAttribute('class', 'a'); 
    de.innerHTML = '再看一次認識動物';
    de.onclick=function () { 
        window.location.href = 'Animalhome.html';
    }
    var mi = document.createElement("div"); 
    mg.appendChild(mi);
    mi.setAttribute('class', 'b'); 
    mi.innerHTML = '前往出任務囉';
    mi.onclick=function () { 
        window.location.href = 'Aqua-man-mission.html';    
    }
}
else if(one+sec+thi+fou+fif+six==1){
    var mg=document.createElement("div");
    mg.setAttribute('id','score'); 
    mg.innerHTML = "你答對了一題！"; 
    document.getElementById("roll").appendChild(mg);
    y();
    var de = document.createElement("div"); 
    mg.appendChild(de);
    de.setAttribute('class', 'a'); 
    de.innerHTML = '再看一次認識動物';
    de.onclick=function () { 
        window.location.href = 'Animalhome.html';    
    }
    var mi = document.createElement("div"); 
    mg.appendChild(mi);
    mi.setAttribute('class', 'b'); 
    mi.innerHTML = '前往出任務囉';
    mi.onclick=function () { 
        window.location.href = 'Aqua-man-mission.html';     
    }
}
else  if(one+sec+thi+fou+fif+six==0){
    var mg=document.createElement("div");
    mg.setAttribute('id','score2'); 
    mg.innerHTML = "看來你對海洋動物還不熟哦！"; 
    document.getElementById("roll").appendChild(mg);
    y();

    var de = document.createElement("div"); 
    mg.appendChild(de);
    de.setAttribute('class', 'a'); 
    de.innerHTML = '再看一次認識動物';
    de.onclick=function () { 
        window.location.href = 'Animalhome.html';
    }
    var mi = document.createElement("div"); 
    mg.appendChild(mi);
    mi.setAttribute('class', 'b'); 
    mi.innerHTML = '前往出任務囉';
    mi.onclick=function () { 
        window.location.href = 'Aqua-man-mission.html';    
    }
}
else{
    alert('你還有沒做完的題目哦！')
    return 0;
}

    }


function y(){
    var mg1=document.createElement("div");
    mg1.setAttribute('id','c'); 
    mg1.innerHTML = "正確答案：白海豚"; 
    document.getElementById("question").appendChild(mg1);

    var mg2=document.createElement("div");
    mg2.setAttribute('id','c'); 
    mg2.innerHTML = "正確答案：26度"; 
    document.getElementById("question2").appendChild(mg2);

    var mg3=document.createElement("div");
    mg3.setAttribute('id','c'); 
    mg3.innerHTML = "正確答案：海豹"; 
    document.getElementById("question3").appendChild(mg3);

    var mg4=document.createElement("div");
    mg4.setAttribute('id','c'); 
    mg4.innerHTML = "正確答案：海豹"; 
    document.getElementById("question4").appendChild(mg4);

    var mg5=document.createElement("div");
    mg5.setAttribute('id','c'); 
    mg5.innerHTML = "正確答案：海牛和鯨魚"; 
    document.getElementById("question5").appendChild(mg5);

    var mg6=document.createElement("div");
    mg6.setAttribute('id','c'); 
    mg6.innerHTML = "正確答案：海龜"; 
    document.getElementById("question6").appendChild(mg6);
   
}
