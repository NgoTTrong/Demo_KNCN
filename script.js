member1 = document.querySelector("#member1");
member2 = document.querySelector("#member2");
member3 = document.querySelector("#member3");
member4 = document.querySelector("#member4");

card1 = document.querySelector("#card1");
card2 = document.querySelector("#card2");
card3 = document.querySelector("#card3");
card4 = document.querySelector("#card4");


card1.addEventListener("click",()=>{
    member1.classList.add("visible");
});
card2.addEventListener("click",()=>{
    member2.classList.add("visible");
});
card3.addEventListener("click",()=>{
    member3.classList.add("visible");
});
card4.addEventListener("click",()=>{
    member4.classList.add("visible");
});

member1.addEventListener("click",()=>{
    member1.classList.remove("visible");
});
member2.addEventListener("click",()=>{
    member2.classList.remove("visible");
});
member3.addEventListener("click",()=>{
    member3.classList.remove("visible");
});
member4.addEventListener("click",()=>{
    member4.classList.remove("visible");
});
