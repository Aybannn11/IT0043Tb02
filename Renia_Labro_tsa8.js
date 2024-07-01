const flexContainer = document.getElementById('flexContainer');

function resetPosition() {
  document.getElementById('gap').value = 0;
  document.getElementById('grow1').value = 1;
  document.getElementById('grow2').value = 1;
  document.getElementById('grow3').value = 1;
  flexContainer.style.gap = '0px';
  flexContainer.style.flexDirection = 'row';
  flexContainer.style.justifyContent = 'flex-start';
  flexContainer.style.alignItems = 'flex-start';
  updateFlexGrow(1);
  updateFlexGrow(2);
  updateFlexGrow(3);
}

function updateGap() {
  const gap = document.getElementById('gap').value;
  flexContainer.style.gap = `${gap}px`;
}

function setFlexDirection(direction) {
  flexContainer.style.flexDirection = direction;
}

function setJustifyContent(justify) {
  flexContainer.style.justifyContent = justify;
}

function setAlignItems(align) {
  flexContainer.style.alignItems = align;
}

function updateFlexGrow(boxNumber) {
  const growValue = document.getElementById(`grow${boxNumber}`).value;
  flexContainer.children[boxNumber - 1].style.flexGrow = growValue;
}
resetPosition();
