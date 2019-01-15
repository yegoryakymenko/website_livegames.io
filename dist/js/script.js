const GAMES = 5,
      VISIBLE_BOXES = 5;

function shiftLeft() {
  const boxes = document.querySelectorAll(".box");
  const tmpNode = boxes[0];
  boxes[0].className = "box move-out-from-left";
  setTimeout(function() {
    if (boxes.length > VISIBLE_BOXES) {
      tmpNode.classList.add("box--hide");
      boxes[5].className = "box move-to-position5-from-left";
    }
    for (var i = 1; i < VISIBLE_BOXES; i++) {
      boxes[1].className = `box move-to-position${i}-from-left`;    }
    boxes[0].remove();
    document.querySelector(".our-games__container-wrapper_list").appendChild(tmpNode);
  }, 500);
}

function shiftRight() {
const boxes = document.querySelectorAll(".box");
boxes[4].className = "box move-out-from-right";

setTimeout(function() {
    const noOfCards = boxes.length;
    if (noOfCards > 4) {
        boxes[4].className = "box box--hide";    }
    const tmpNode = boxes[noOfCards - 1];
    tmpNode.classList.remove("box--hide");
    boxes[noOfCards - 1].remove();
    let parentObj = document.querySelector(".our-games__container-wrapper_list");
    parentObj.insertBefore(tmpNode, parentObj.firstChild);
    tmpNode.className = "box move-to-position1-from-right";
    boxes[0].className = "box move-to-position2-from-right";
    boxes[1].className = "box move-to-position3-from-right";
    boxes[2].className = "box move-to-position4-from-right";
    boxes[3].className = "box move-to-position5-from-right";
}, 500);
}

//https://github.com/internwt/3d-slider
