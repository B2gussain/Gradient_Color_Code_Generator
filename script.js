let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn_right=document.getElementById("btn_right");
let btn_down=document.getElementById("btn_down");
let btn_left=document.getElementById("btn_left");
let btn_up=document.getElementById("btn_up");
let btn_rt=document.getElementById("btn_r_t");
let btn_rb=document.getElementById("btn_r_b");
let btn_lt=document.getElementById("btn_l_t");
let btn_lb=document.getElementById("btn_l_b");
let main=document.querySelector(".gradientbox");
let code=document.querySelector(".codebox");
let gg_color=document.querySelector(".gg_color");

let rgb1="#ffa601";
let rgb2="#f7de51";
  const color=()=>{
    let hex_value="0123456789abcdef"
    let colorcat="#"
    for(let i=0;i<6;i++)
        {
           colorcat=colorcat + hex_value[Math.floor(Math.random()*16)];
        }
        return colorcat;
};


const button1=()=>{
rgb1=color();
console.log(rgb1);
main.style.background= `linear-gradient(to right, ${rgb1} ,${rgb2})`;
gg_color.style.background= `linear-gradient(to right, ${rgb1} ,${rgb2})`;
btn1.innerHTML=rgb1;
code.innerHTML =`background:linear-gradient(to right,${rgb1}, ${rgb2})`;

}

const button2=()=>{
rgb2=color();
    console.log(rgb2);
    main.style.background= `linear-gradient(to right, ${rgb1} ,${rgb2})`;
    gg_color.style.background= `linear-gradient(to right, ${rgb1} ,${rgb2})`;
    btn2.innerHTML=rgb2;
    code.innerHTML =`background:linear-gradient(to right,${rgb1}, ${rgb2})`;
}

btn1.addEventListener("click",button1);
btn2.addEventListener("click",button2);
 const left=()=>{
    main.style.background= `linear-gradient(to left, ${rgb1} ,${rgb2})`;
    gg_color.style.background= `linear-gradient(to left, ${rgb1} ,${rgb2})`;
    code.innerHTML =`background:linear-gradient(to left,${rgb1}, ${rgb2})`;
    btn_left.style.backgroundColor=`black`;
    btn_left.style.borderColor=`white`;
    btn_left.style.color=`white`;
    btn_right.style.backgroundColor=`white`;
    btn_right.style.borderColor=`black`;
    btn_right.style.color=`black`;
    btn_up.style.backgroundColor=`white`;
    btn_up.style.borderColor=`black`;
    btn_up.style.color=`black`;
    btn_down.style.backgroundColor=`white`;
    btn_down.style.borderColor=`black`;
    btn_down.style.color=`black`;
    btn_lt.style.backgroundColor=`white`;
    btn_lt.style.borderColor=`black`;
    btn_lt.style.color=`black`;
    btn_lb.style.backgroundColor=`white`;
    btn_lb.style.borderColor=`black`;
    btn_lb.style.color=`black`;
    btn_rt.style.backgroundColor=`white`;
    btn_rt.style.borderColor=`black`;
    btn_rt.style.color=`black`;
    btn_rb.style.backgroundColor=`white`;
    btn_rb.style.borderColor=`black`;
    btn_rb.style.color=`black`;

 }
 btn_left.addEventListener("click",left);

 const right=()=>{
    main.style.background= `linear-gradient(to right, ${rgb1} ,${rgb2})`;
    gg_color.style.background= `linear-gradient(to right, ${rgb1} ,${rgb2})`;
    code.innerHTML =`background:linear-gradient(to right,${rgb1}, ${rgb2})`;
    btn_right.style.backgroundColor=`black`;
    btn_right.style.borderColor=`white`;
    btn_right.style.color=`white`;
    btn_left.style.backgroundColor=`white`;
    btn_left.style.borderColor=`black`;
    btn_left.style.color=`black`;
    btn_left.style.backgroundColor=`white`;
    btn_up.style.backgroundColor=`white`;
    btn_up.style.borderColor=`black`;
    btn_up.style.color=`black`;
    btn_down.style.backgroundColor=`white`;
    btn_down.style.borderColor=`black`;
    btn_down.style.color=`black`;
    btn_lt.style.backgroundColor=`white`;
    btn_lt.style.borderColor=`black`;
    btn_lt.style.color=`black`;
    btn_lb.style.backgroundColor=`white`;
    btn_lb.style.borderColor=`black`;
    btn_lb.style.color=`black`;
    btn_rt.style.backgroundColor=`white`;
    btn_rt.style.borderColor=`black`;
    btn_rt.style.color=`black`;
    btn_rb.style.backgroundColor=`white`;
    btn_rb.style.borderColor=`black`;
    btn_rb.style.color=`black`;
 }
 btn_right.addEventListener("click",right);


 const bottom=()=>{
    main.style.background= `linear-gradient(to bottom, ${rgb1} ,${rgb2})`;
    gg_color.style.background= `linear-gradient(to bottom, ${rgb1} ,${rgb2})`;
    code.innerHTML =`background:linear-gradient(to bottom,${rgb1}, ${rgb2})`;
    btn_down.style.backgroundColor=`black`;
    btn_down.style.borderColor=`white`;
    btn_down.style.color=`white`;
    btn_left.style.backgroundColor=`white`;
    btn_left.style.borderColor=`black`;
    btn_left.style.color=`black`;
    btn_left.style.backgroundColor=`white`;
    btn_up.style.backgroundColor=`white`;
    btn_up.style.borderColor=`black`;
    btn_up.style.color=`black`;
    btn_right.style.backgroundColor=`white`;
    btn_right.style.borderColor=`black`;
    btn_right.style.color=`black`;
    btn_lt.style.backgroundColor=`white`;
    btn_lt.style.borderColor=`black`;
    btn_lt.style.color=`black`;
    btn_lb.style.backgroundColor=`white`;
    btn_lb.style.borderColor=`black`;
    btn_lb.style.color=`black`;
    btn_rt.style.backgroundColor=`white`;
    btn_rt.style.borderColor=`black`;
    btn_rt.style.color=`black`;
    btn_rb.style.backgroundColor=`white`;
    btn_rb.style.borderColor=`black`;
    btn_rb.style.color=`black`;
 }
 btn_down.addEventListener("click",bottom);

 const up=()=>{
    main.style.background= `linear-gradient(to top, ${rgb1} ,${rgb2})`;
    gg_color.style.background= `linear-gradient(to top, ${rgb1} ,${rgb2})`;
    code.innerHTML =`background:linear-gradient(to top,${rgb1}, ${rgb2})`;
    btn_up.style.backgroundColor=`black`;
    btn_up.style.borderColor=`white`;
    btn_up.style.color=`white`;
    btn_left.style.backgroundColor=`white`;
    btn_left.style.borderColor=`black`;
    btn_left.style.color=`black`;
    btn_left.style.backgroundColor=`white`;
    btn_right.style.backgroundColor=`white`;
    btn_right.style.borderColor=`black`;
    btn_right.style.color=`black`;
    btn_down.style.backgroundColor=`white`;
    btn_down.style.borderColor=`black`;
    btn_down.style.color=`black`;
    btn_lt.style.backgroundColor=`white`;
    btn_lt.style.borderColor=`black`;
    btn_lt.style.color=`black`;
    btn_lb.style.backgroundColor=`white`;
    btn_lb.style.borderColor=`black`;
    btn_lb.style.color=`black`;
    btn_rt.style.backgroundColor=`white`;
    btn_rt.style.borderColor=`black`;
    btn_rt.style.color=`black`;
    btn_rb.style.backgroundColor=`white`;
    btn_rb.style.borderColor=`black`;
    btn_rb.style.color=`black`;
 }
 btn_up.addEventListener("click",up);

 const lt=()=>{
    main.style.background= `linear-gradient(to left top, ${rgb1} ,${rgb2})`;
    gg_color.style.background= `linear-gradient(to left top, ${rgb1} ,${rgb2})`;
    code.innerHTML =`background:linear-gradient(to left top,${rgb1}, ${rgb2})`;
    btn_lt.style.backgroundColor=`black`;
    btn_lt.style.borderColor=`white`;
    btn_lt.style.color=`white`;
    btn_left.style.backgroundColor=`white`;
    btn_left.style.borderColor=`black`;
    btn_left.style.color=`black`;
    btn_left.style.backgroundColor=`white`;
    btn_up.style.backgroundColor=`white`;
    btn_up.style.borderColor=`black`;
    btn_up.style.color=`black`;
    btn_down.style.backgroundColor=`white`;
    btn_down.style.borderColor=`black`;
    btn_down.style.color=`black`;
    btn_right.style.backgroundColor=`white`;
    btn_right.style.borderColor=`black`;
    btn_right.style.color=`black`;
    btn_lb.style.backgroundColor=`white`;
    btn_lb.style.borderColor=`black`;
    btn_lb.style.color=`black`;
    btn_rt.style.backgroundColor=`white`;
    btn_rt.style.borderColor=`black`;
    btn_rt.style.color=`black`;
    btn_rb.style.backgroundColor=`white`;
    btn_rb.style.borderColor=`black`;
    btn_rb.style.color=`black`;
 }
 btn_lt.addEventListener("click",lt);

 const lb=()=>{
    main.style.background= `linear-gradient(to left bottom, ${rgb1} ,${rgb2})`;
    gg_color.style.background= `linear-gradient(to left bottom, ${rgb1} ,${rgb2})`;
    code.innerHTML =`background:linear-gradient(to left bottom,${rgb1}, ${rgb2})`;
    btn_lb.style.backgroundColor=`black`;
    btn_lb.style.borderColor=`white`;
    btn_lb.style.color=`white`;
    btn_left.style.backgroundColor=`white`;
    btn_left.style.borderColor=`black`;
    btn_left.style.color=`black`;
    btn_left.style.backgroundColor=`white`;
    btn_up.style.backgroundColor=`white`;
    btn_up.style.borderColor=`black`;
    btn_up.style.color=`black`;
    btn_down.style.backgroundColor=`white`;
    btn_down.style.borderColor=`black`;
    btn_down.style.color=`black`;
    btn_right.style.backgroundColor=`white`;
    btn_right.style.borderColor=`black`;
    btn_right.style.color=`black`;
    btn_lt.style.backgroundColor=`white`;
    btn_lt.style.borderColor=`black`;
    btn_lt.style.color=`black`;
    btn_rt.style.backgroundColor=`white`;
    btn_rt.style.borderColor=`black`;
    btn_rt.style.color=`black`;
    btn_rb.style.backgroundColor=`white`;
    btn_rb.style.borderColor=`black`;
    btn_rb.style.color=`black`;
 }
 btn_lb.addEventListener("click",lb);

 const rt=()=>{
    main.style.background= `linear-gradient(to right top, ${rgb1} ,${rgb2})`;
    gg_color.style.background= `linear-gradient(to right top, ${rgb1} ,${rgb2})`;
    code.innerHTML =`background:linear-gradient(to right top,${rgb1}, ${rgb2})`;
    btn_rt.style.backgroundColor=`black`;
    btn_rt.style.borderColor=`white`;
    btn_rt.style.color=`white`;
    btn_left.style.backgroundColor=`white`;
    btn_left.style.borderColor=`black`;
    btn_left.style.color=`black`;
    btn_left.style.backgroundColor=`white`;
    btn_up.style.backgroundColor=`white`;
    btn_up.style.borderColor=`black`;
    btn_up.style.color=`black`;
    btn_down.style.backgroundColor=`white`;
    btn_down.style.borderColor=`black`;
    btn_down.style.color=`black`;
    btn_right.style.backgroundColor=`white`;
    btn_right.style.borderColor=`black`;
    btn_right.style.color=`black`;
    btn_lb.style.backgroundColor=`white`;
    btn_lb.style.borderColor=`black`;
    btn_lb.style.color=`black`;
    btn_lt.style.backgroundColor=`white`;
    btn_lt.style.borderColor=`black`;
    btn_lt.style.color=`black`;
    btn_rb.style.backgroundColor=`white`;
    btn_rb.style.borderColor=`black`;
    btn_rb.style.color=`black`;
 }
 btn_rt.addEventListener("click",rt);

 const rb=()=>{
    main.style.background= `linear-gradient(to right bottom, ${rgb1} ,${rgb2})`;
    gg_color.style.background= `linear-gradient(to right bottom, ${rgb1} ,${rgb2})`;
    code.innerHTML =`background:linear-gradient(to right bottom,${rgb1}, ${rgb2})`;
    btn_rb.style.backgroundColor=`black`;
    btn_rb.style.borderColor=`white`;
    btn_rb.style.color=`white`;
    btn_left.style.backgroundColor=`white`;
    btn_left.style.borderColor=`black`;
    btn_left.style.color=`black`;
    btn_left.style.backgroundColor=`white`;
    btn_up.style.backgroundColor=`white`;
    btn_up.style.borderColor=`black`;
    btn_up.style.color=`black`;
    btn_down.style.backgroundColor=`white`;
    btn_down.style.borderColor=`black`;
    btn_down.style.color=`black`;
    btn_right.style.backgroundColor=`white`;
    btn_right.style.borderColor=`black`;
    btn_right.style.color=`black`;
    btn_lb.style.backgroundColor=`white`;
    btn_lb.style.borderColor=`black`;
    btn_lb.style.color=`black`;
    btn_lt.style.backgroundColor=`white`;
    btn_lt.style.borderColor=`black`;
    btn_lt.style.color=`black`;
    btn_rt.style.backgroundColor=`white`;
    btn_rt.style.borderColor=`black`;
    btn_rt.style.color=`black`;
 }
 btn_rb.addEventListener("click",rb);

code.addEventListener("click",()=>{
    navigator.clipboard.writeText(code.innerText);
    alert("Code copied");
});
