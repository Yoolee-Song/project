//
// (function (window) {
//
//
//
// })(window);

var newInput = document.getElementById("new-todo");
var newInputValue;
var todolist = document.getElementsByClassName("todo-list");
var todoRest = 0;
var todoCountNum = document.getElementsByClassName("todo-count")[0];

function numPlusCount(){
	todoRest = todoRest + 1;
	todoCountNum.innerHTML = "<strong>" + todoRest + "</strong>" + " item left";
};

function numMinusCount(){
	todoRest = todoRest - 1;
	todoCountNum.innerHTML = "<strong>" + todoRest + "</strong> item left";
};

function findListFn(label){
	var findDiv = label.parentNode;
	var findList = findDiv.parentNode;
	return findList;
};

newInput.addEventListener('keydown', function(){
	newInputValue = document.getElementById("new-todo").value;
	if (event.keyCode == 13 && !newInputValue == "") {
		addList(newInputValue);
		document.getElementById("new-todo").value = "";
	};
});

function addList(x) {
	var list = document.createElement("li");
	var div = document.createElement("div");
	div.className = "view";
	var input = document.createElement("input");
	input.className = "toggle";
	input.type = "checkbox";
	input.addEventListener('click', checked);
	var label = document.createElement("label");
	label.textContent = x;
	label.addEventListener('dblclick', newDblclick)
	var btn = document.createElement("button");
	btn.className = "destroy";
	btn.addEventListener('click', newDestroy);
	var input2 = document.createElement("input");
	input2.className = "edit";
	input2.value = x;
	div.appendChild(input);
	div.appendChild(label);
	div.appendChild(btn);
	list.appendChild(div);
	list.appendChild(input2);
	todolist[0].appendChild(list);
	numPlusCount();
};

var clearBtn = document.getElementsByClassName("clear-completed")[0];
clearBtn.addEventListener('click', function(){
	var list = todolist[0].childNodes;
	var listLength = list.length;
	var arr = [];
	for (var i = 0; i < listLength; i++) {
		if (list[i].className === "completed") {
			arr.push(list[i]);
		};
	};
		arr.forEach(function (value) {
		todolist[0].removeChild(value);
	});
});

function newDestroy(event){
	var findList = findListFn(this);
	todolist[0].removeChild(findList);
	if (!todoRest == 0 && findList.className == "") {
		numMinusCount();
	};
};

var toggleAll = document.getElementById("toggle-all");
toggleAll.addEventListener('click', function(event){
	var list = todolist[0].childNodes;
	if (todoRest == 0) {
		for (var i = 0; i < list.length; i++) {
			if (list[i].className === "completed") {
				list[i].classList.remove("completed");
				var div = list[i].childNodes[0];
				var checkbox = div.childNodes[0];
				checkbox.checked = false;
				numPlusCount()
			};
		};
	}else if (!todoRest == 0){
		for (var i = 0; i < list.length; i++) {
			if (list[i].className === "") {
				list[i].className = "completed"
				var div = list[i].childNodes[0];
				var checkbox = div.childNodes[0];
				checkbox.checked = true;
				numMinusCount();
			};
		};
	};
});

function checked(event){
	var findList = findListFn(this);
	if (this.checked) {
		findList.className = "completed";
		numMinusCount();
	}else if (!this.checked) {
		findList.classList.remove("completed");
		numPlusCount();
	};
};

function newDblclick(event){
	this.autofocus = true;
	var findList = findListFn(this);
	findList.className = "editing";
	findList.addEventListener('keypress', editEnter);
	findList.addEventListener('keydown', pushEsc);
};

function pushEsc(event){
	if (event.keyCode == 27) {
		this.classList.remove("editing");
	};
};

function editEnter(event){
	if (event.keyCode == 13) {
		var childDiv = this.childNodes[0];
		var childInput2 = this.childNodes[1];
		var childLabel = childDiv.childNodes[1];
		childLabel.innerHTML = childInput2.value;
		this.classList.remove("editing");
		if (childInput2.value === "") {
			this.parentNode.removeChild(this);
			numMinusCount();
		};
	};
};

var filtersUl = document.getElementsByClassName("filters");
var filtersAll = filtersUl[0].childNodes[1];
var filtersAct = filtersUl[0].childNodes[3];
var filtersCom = filtersUl[0].childNodes[5];

filtersAll.addEventListener('click', function allClick(){
	var list = todolist[0].childNodes;
	var arr = [];
	for (var i = 0; i < list.length; i++){
		list[i].style.display = "block";
		console.log(list[i]);
	};
});

filtersAct.addEventListener('click', function activeClick(){
	filtersAll.onclick;
	var list = todolist[0].childNodes;
	var arr = [];
	for (var i = 0; i < list.length; i++) {
		if (list[i].className === "completed"){
			list[i].style.display = "none"
			console.log(list[i]);
		};
	};
});

filtersCom.addEventListener('click', function completeClick(){
	var list = todolist[0].childNodes;
	var arr = [];
	for (var i = 0; i < list.length; i++) {
		 if (list[i].className === "") {
			list[i].style.display = "none"
			console.log(list[i]);
		};
	};
});
