
var btnSign = [];
var count = 0;
var nextAlph = ["O", "X"];
var alphHistory = [];
// alph, click,text
var clickHistory = [];
var textHistory = [];
var btnsHistory = [];
var btnTemp = [];
var winnerArr = [0,1,2,3,4,5,6,7,8,0,3,6,1,4,7,2,5,8,0,4,8,2,4,6];
var arr = new Array(new Array(3), new Array(3), new Array(3));
putIntoArr();
var isWinner = false;

function putIntoArr(){
  var div = document.querySelector('.game-info').children[0];
  var ol = document.querySelector('.game-info').children[1];
  ol.children[0].addEventListener('click', goToFrist);
  regBtnsText(ol, div);
  var btn = document.getElementsByTagName('button');
  for (var i = 0; i < btn.length; i++) {
    if (btn[i].className === "square") {
     btnTemp.push(btn[i]);
     btn[i].addEventListener('click', findSign);
    };
  };
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
     arr[j][i] = btnTemp[i+3];
    };
  };
};

function findSign(e){
  var indexBtn = btnTemp.indexOf(this);
  if (btnTemp[indexBtn].innerHTML === "" && btnsHistory.length-1 === count) {
    var textCount = count%2;
    count = count + 1;
    var currentCount = count%2;
    this.innerHTML = nextAlph[currentCount];
    changeStr(textCount);
    regIndex(indexBtn);
    regAlph(this.innerHTML);
  }
  else if (btnTemp[indexBtn].innerHTML === "" && btnsHistory.length-1 !== count) {
    resetBtnHistory();
    resetBtnLst();
    resetBtnTempAlphClick();
    putIntoArr();
    var textCount = count%2;
    count = count + 1;
    var currentCount = count%2;
    this.innerHTML = nextAlph[currentCount];
    changeStr(textCount);
    regIndex(indexBtn);
    regAlph(this.innerHTML);
  };
};

function resetBtnHistory(){
  var TempNum = btnsHistory.length-1;
  btnsHistory.splice(count+1, TempNum-count);
};

function resetBtnLst(){
 var ol = document.querySelector('.game-info').children[1];
 ol.remove();
 var createOl = document.createElement("OL");
 var olParents = document.querySelector('#game-info');
 olParents.appendChild(createOl);
 var ol = document.querySelector('.game-info').children[1];
 for (let i = 0; i < btnsHistory.length; i++) {
   var list = btnsHistory[i];
   ol.appendChild(list);
 };
};

function resetBtnTempAlphClick(){
  btnTemp.splice(0, btnTemp.length);
  alphHistory.splice(count, alphHistory.length-4);
  clickHistory.splice(count, clickHistory.length-4);
  var TempNum = textHistory.length-1;
  textHistory.splice(count+1, TempNum-count);
};

function changeStr(textCount){
 // if (winnerIs()) {

 // }else if (winnerIs() === 0) {
   var div = document.querySelector('.game-info').children[0];
   var ol = document.querySelector('.game-info').children[1];
   div.innerHTML = "Next Player: " + nextAlph[textCount];
   var list = document.createElement("li");
   ol.appendChild(list).innerHTML = "<button>Go to move #" + count + "</button>";
   ol.appendChild(list).addEventListener('click', showHistory);
   regBtnsText(ol, div);
 };

function regBtnsText(ol, div){
  var btnLists = ol.children;
  var tempArr = [];
  for (var i = 0; i < btnLists.length; i++) {
    tempArr.push(btnLists[i]);
    btnsHistory = tempArr.slice(0);
  };
  var tempText = div.innerHTML;
  textHistory.push(tempText);
};

function regAlph(insertedAlph){
  alphHistory.push(insertedAlph);
};

function regIndex(index) {
  clickHistory.push(index);
};

function goToFrist(){
  count = 0;
  removeAlph();
  changeText(count);
};

function showHistory(e){
  findNum(this);
  removeAlph();
  changeText(count);
  inputAlph(count);
};

function changeText(count){
  var div = document.querySelector('.game-info').children[0];
  div.innerHTML = textHistory[count];
};

function removeAlph(){
  for (let i = 0; i < btnTemp.length; i++) {
    btnTemp[i].innerHTML = "";
  };
};

function inputAlph(count){
  for (let i = 0; i < count; i++) {
    var squNum = clickHistory[i];
    btnTemp[squNum].innerText = alphHistory[i];
  };
};

function findNum(list) {
  var text = list.innerText;
  var lastStr = text.slice(-1);
  var indexNum = parseInt(lastStr);
  count = indexNum;
};
//
// function d(){
//   if (for (var i = 0; i < array.length; i++) {
//     array[i]
//   } 구문안) {
//
//   이프문안}
// 펑션안}

// function winner(){
//   for (var i = 0; i < winnerArr.length; i+3) {
//     winnerArr[i] === winnerArr[i+1] === winnerArr[i+2];
//   };
// };
//
// function winnerIs(){
//   if () {
//     isWinner = true;
//   };
// };
