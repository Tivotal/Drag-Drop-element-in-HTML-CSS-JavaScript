/* Created by Tivotal */

let boxes = document.querySelectorAll(".box");
let image = document.querySelector(".image");

//loop through boxes
boxes.forEach((box) => {
  //when draggble element dragged over box
  box.addEventListener("dragover", (e) => {
    //preventing default behaviour
    e.preventDefault();

    //adding active class to box
    box.classList.add("active");
  });

  //when draggable element leavess the box
  box.addEventListener("dragleave", () => {
    //removing active class from box
    box.classList.remove("active");
  });

  //when draggable element drops on box
  box.addEventListener("drop", () => {
    //appending image element to box
    box.appendChild(image);

    //removing active class from box
    box.classList.remove("active");
  });
});
