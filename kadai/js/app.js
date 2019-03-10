let addTask = document.getElementById('addTask');
let inputTask = document.getElementById('inputTask');
let table = document.getElementById('table');
let allRadio = document.getElementById('allradio');
let workingRadio = document.getElementById('workingRadio');
let compRadio = document.getElementById('compRadio');
let todos = [];

workingRadio.addEventListener('click',function(){
  let result = todos.filter(x => x.status === "完了");
  for(let i = 0; i < result.length; i++){
    document.getElementsByClassName("work")[result[i].id].style.display;
  };
});

//stateボタンを作成する関数
const createStateBtn = () => {
  let stateButton = document.createElement('button');
  stateButton.className = "work"
  stateButton.value = todos.length - 1;
  let stateText = document.createTextNode("作業中");
  stateButton.style.backgroundColor = "lightyellow";
  stateButton.appendChild(stateText);
  /*
  ここにstateボタン押下時の処理を追加
  */
  stateButton.addEventListener('click',function(){
    switch(stateButton.className){
      case "work":
        stateButton.className = "comp";
        todos[stateButton.value].status = "完了";
        stateButton.innerHTML = ("完了");
        break;
      case "comp":
        stateButton.className = "work";
        todos[stateButton.value].status = "作業中";
        stateButton.innerHTML = ("作業中");
        break;
    };
  });
  return stateButton;
}

//deleteボタンを作成する関数
const createDeleteBtn = () => {
  let deleteButton = document.createElement('button');
  deleteButton.value = todos.length - 1;
  let deleteText = document.createTextNode('削除');
  deleteButton.style.backgroundColor = "lightyellow";
  deleteButton.appendChild(deleteText);
  /*
  ここにdeleteボタン押下時の処理を追加
  */
  deleteButton.addEventListener('click',function(){
    let tr = this.parentNode.parentNode;
    table.removeChild(tr);
    delete todos[deleteButton.value];
  })
  return deleteButton;
}

addTask.addEventListener('click',function(){
  let trNode = document.createElement('tr');
  let id = document.createElement('th');
  let comment = document.createElement('th');
  let state = document.createElement('th');
  trNode.className = "work";

  //配列todosの要素数をidとして使用
  let idNumber = document.createTextNode(todos.length);

  
  let tempNumber = todos.length;
  
  //入力フォームから値を取得、文字数字に置き換え
  let taskValue = inputTask.value;

  const todoObj = {};
  todoObj.id = todos.length;
  todoObj.name = taskValue;
  todoObj.status = "作業中";
  todos.push(todoObj);
  console.log(todos);

  let task = document.createTextNode(todos[tempNumber].name);

  //id
  id.appendChild(idNumber);
  trNode.appendChild(id);
  table.appendChild(trNode);
  
  //comment
  comment.appendChild(task);
  trNode.appendChild(comment);
  table.appendChild(trNode);

  //state
  state.appendChild(createStateBtn());
  trNode.appendChild(state);
  table.appendChild(trNode);

  //delete
  state.appendChild(createDeleteBtn());
  trNode.appendChild(state);
  table.appendChild(trNode);
});