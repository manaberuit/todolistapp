//DOMの取得
let addTask = document.getElementById('addTask');
let inputTask = document.getElementById('inputTask');
let table = document.getElementById('table');
let allRadio = document.getElementById('allradio');
let workingRadio = document.getElementById('workingRadio');
let compRadio = document.getElementById('compRadio');

//Todoリスト用の配列
let todos = [];

//ラジオボタンにて作業中選択時の処理
workingRadio.addEventListener('click', function () {
  let result = todos.filter(element => element.status === "完了");
  for (let i = 0; i < result.length; i++) {
    document.getElementsByClassName("work")[result[i].id].style.display;
  };
});

/*------------------------------------ 
//stateボタンを作成する関数
//ここでは、todos配列から指定された要素のstatusを変更した後、
//updateScreen()関数を呼びだすようにする
//引数には、何番目の要素のボタンが押されたのかを指定してもらう
------------------------------------ */
const createStateBtn = () => {
  //stateボタン生成
  let stateButton = document.createElement('button');
  stateButton.className = "work"
  stateButton.value = todos.length - 1;
  let stateText = document.createTextNode("作業中");
  stateButton.style.backgroundColor = "lightyellow";
  stateButton.appendChild(stateText);

  //stateボタン押下時の処理を追加
  stateButton.addEventListener('click', function () {
    switch (stateButton.className) {
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

/*------------------------------------ 
//deleteボタンを作成する関数
//ここでは、todos配列から指定された要素を削除した後、
//updateScreen()関数を呼びだすようにする
//引数には、何番目の要素のボタンが押されたのかを指定してもらう
------------------------------------ */
const createDeleteBtn = () => {
  //stateボタン生成
  let deleteButton = document.createElement('button');
  deleteButton.value = todos.length - 1;
  let deleteText = document.createTextNode('削除');
  deleteButton.style.backgroundColor = "lightyellow";
  deleteButton.appendChild(deleteText);

  //deleteボタン押下時の処理を追加
  deleteButton.addEventListener('click', function () {
    let tr = this.parentNode.parentNode;
    table.removeChild(tr);
    delete todos[deleteButton.value];
  })
  return deleteButton;
}

/*------------------------------------ 
//todosリストを表示する関数
//この関数でtodosリストの内容を表示するようにする
------------------------------------ */
const updateScreen = () => {
  todos.forEach((todo, index) => {
    //必要な要素を作成
    let trNode = document.createElement('tr');
    let id = document.createElement('th');
    let comment = document.createElement('th');
    let state = document.createElement('th');
    trNode.className = "work";

    let idNumber = document.createTextNode(index);
    let task = document.createTextNode(todo.name);

    //id
    id.appendChild(idNumber);
    trNode.appendChild(id);
    table.appendChild(trNode);

    //comment
    comment.appendChild(task);
    trNode.appendChild(comment);
    table.appendChild(trNode);

    //state
    state.appendChild(createStateBtn(index));
    trNode.appendChild(state);
    table.appendChild(trNode);

    //delete
    state.appendChild(createDeleteBtn(index));
    trNode.appendChild(state);
    table.appendChild(trNode);
  });

}

/*------------------------------------ 
//追加ボタン押下時の処理
//ここではtodos配列にtodoObjを追加した後、
//updateScreen関数を呼び出すようにする
------------------------------------ */
addTask.addEventListener('click', function () {
  //入力フォームから値を取得、文字数字に置き換え
  let taskValue = inputTask.value;

  const todoObj = {};
  todoObj.id = todos.length;
  todoObj.name = taskValue;
  todoObj.status = "作業中";
  todos.push(todoObj);
  console.log(todos);

  updateScreen();
});