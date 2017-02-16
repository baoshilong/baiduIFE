    var number;
    document.getElementById("input").addEventListener("change",function(){
        number=document.getElementById("input").value;

    });
    var button= new Array(4);
    var counter = 0;
    divMainObj = document.getElementById("divMain");
    formObj =document.getElementById("form");
    for(var i=0;i<4;i++){
        button[i]=document.getElementById("button"+(i+1));
    }
    button[0].addEventListener("click",function(){
        if(counter>=60){
            alert("不能超过60个数字！");
            return;
        }
        if(number>99||number<10){
            alert("必须在10~100之间！");
            return;
        }
        var a = document.createElement("div");
        addFormAttr(0);
        a.appendChild(document.createTextNode(number));
        divMainObj.insertBefore(a,divMainObj.firstChild);

        counter++;
    });
    button[1].addEventListener("click",function(){
        if(counter>=60){
            alert("不能超过60个数字！");
            return;
        }
        if(number>99||number<10){
            alert("必须在10~100之间！");
            return;
        }
        var a = document.createElement("div");
        addFormAttr(1);
        a.appendChild(document.createTextNode(number));
        divMainObj.appendChild(a);

        counter++;
    });
    button[2].addEventListener("click",function(){
        divMainObj.removeChild(divMainObj.firstChild);
        formObj.removeChild(formObj.firstChild);
        counter--;
    });
    button[3].addEventListener("click",function(){
        divMainObj.removeChild(divMainObj.lastChild);
        formObj.removeChild(formObj.lastChild);
        counter--;
    });

function addFormAttr(k){
    var temp =document.createElement("div");
    temp.style.top=(100-number)+"px";
    if(k==0){
        formObj.insertBefore(temp,formObj.firstChild);
    }
    else{
        formObj.appendChild(temp);
    }
}