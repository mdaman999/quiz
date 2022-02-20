var arr = [
  {
    question: "Q:1 this is question",
    a: "answer1",
    b: "answer2",
    c: "answer3",
    d: "answer4",
    ans: "c"
  },
  {
    question: "Q:2 this is question",
    a: "answer01",
    b: "answer02",
    c: "answer03",
    d: "answer04",
    ans: "a"
  },
  {
    question: "Q:3 this is question",
    a: "answer11",
    b: "answer12",
    c: "answer13",
    d: "answer14",
    ans: "c"
  }
];

var l=arr.length;
var s=0,j=0,atp=0,p=0;

document.getElementById("start").addEventListener("click",function(){
    document.getElementById("start").style.display="none";
    document.getElementById("detail").style.display="none";
    document.getElementById("container").style.display="flex";
    load();
});

function remove() {
    var ele = document.getElementsByTagName("input");
    for (var i = 0; i < ele.length; i++)  if (ele[i].checked) ele[i].checked = false;
  }

function ans(){
    var ele=document.getElementsByTagName("input");
    for(var i=0;i<ele.length;i++){
        if(ele[i].checked){
            atp++;
            if(ele[i].value==arr[j++].ans) {
              s+=10;
              console.log(s);
            }
        }
    }
}

function load(){
    remove();
    document.getElementById("que").innerText=arr[p].question;
    document.getElementById("opt1").innerText=" "+arr[p].a;
    document.getElementById("opt2").innerText=" "+arr[p].b;
    document.getElementById("opt3").innerText=" "+arr[p].c;
    document.getElementById("opt4").innerText=" "+arr[p].d;
    document.getElementById("counting").innerHTML=(p+1)+"/"+l+"Question";
}

function next(){
    p++;
    if(p==l-1) {
        document.getElementById("next").innerText="submit";
        ans();
        load();
    }
    else if(p==l){
        ans();
        document.getElementById("container").style.display="none";
        document.getElementById("head").style.display="none";
        document.getElementById("score").style.display="flex";
        document.getElementById("result").innerText="Your Score : "+s;
        document.getElementById("attemp").innerText="You Attempt : "+atp+"/"+arr.length;
    }
    else{
    ans();
    load();
    }
}