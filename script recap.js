// console.log(document.head);
// console.log(document.body);

// const header = document.getElementById("header");
// console.log(header);

// const header = document.querySelector("#header");
// console.log(header);

// const para = document.getElementsByClassName("text");
// console.log(para);

// const para2 = document.querySelectorAll(".text");
// console.log(para2);

// =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const header = document.getElementById("header");
// header.innerText = "new text added";
// console.log(header.innerText);

// const para2 = document.querySelectorAll(".text");
// for (let i = 0; i < para2.length; i++) {
//   para2[i].innerText = "wish yours";
// }

// const box = document.getElementById("box");
// box.innerHTML = "<h1>Hello</h1>";

// const para = document.querySelectorAll(".text");
// para[0].classList.add("hidden");
// para[1].classList.add("highlight");

// para2[0].classList.remove("hidden");
// para2[1].classList.remove("highlight");

// const para2 = document.querySelectorAll(".text");
// const btn = document.querySelector("#handle");
// btn.addEventListener("click", function () {
//   para2[0].classList.remove("hidden");
//   para2[0].classList.add("bold");
//   para2[1].classList.add("bold", "bg");
// });

// const containerDiv = document.querySelector("#container");
// console.log(containerDiv);
// const div = document.createElement("div");
// const name = "programming";
// div.innerHTML = `
//  <div>
//      <p>This is a ${name} paragraph</p>
//      <button>Click</button>
//  </div>
//  `;
// containerDiv.appendChild(div);

// const delegation = document.getElementById("delegation");
// delegation.addEventListener("click", function (event) {
//   console.log(event.target);
// });

let arr = [1, 2, 5, 7, 5];

// const findMethod = arr.find((i) => i === 5)
// console.log(findMethod);

// const filterMethod = arr.filter((i) => i === 5);
// console.log(filterMethod);

const filterMethod = arr.filter((i) => i !== 7);
console.log(filterMethod);
