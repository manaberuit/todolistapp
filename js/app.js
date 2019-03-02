let addTask = document.getElementById('addTask');
let inputTask = document.getElementById('inputTask');
let table = document.getElementById('table');
let sum = 0;//idNumberの仮置き

//stateボタンを作成する関数
const createStateBtn = () => {
  let stateButton = document.createElement('button');
  let stateText = document.createTextNode('作業中');
  stateButton.style.backgroundColor = "lightyellow";
  stateButton.appendChild(stateText);
  /*
  ここにstateボタン押下時の処理を追加
  */
  return stateButton;
}

//deleteボタンを作成する関数
const createDeleteBtn = () => {
  let deleteButton = document.createElement('button');
  let deleteText = document.createTextNode('削除');
  deleteButton.style.backgroundColor = "lightyellow";
  deleteButton.appendChild(deleteText);
  /*
  ここにdeleteボタン押下時の処理を追加
  */
  return deleteButton;
}

addTask.addEventListener('click',function(){
  let trnode = document.createElement('tr');
  let id = document.createElement('th');
  let comment = document.createElement('th');
  let state = document.createElement('th');
  
  //数字を置き換え
  let idNumber = document.createTextNode(sum);

  //入力フォームから値を取得、文字数字に置き換え
  let taskValue = inputTask.value
  let textNode = document.createTextNode(taskValue);

  //id
  id.appendChild(idNumber);
  trnode.appendChild(id);
  table.appendChild(trnode);
  sum++;

  //comment
  comment.appendChild(textNode);
  trnode.appendChild(comment);
  table.appendChild(trnode);

  //state
  state.appendChild(createStateBtn());
  trnode.appendChild(state);
  table.appendChild(trnode);

  //delete
  state.appendChild(createDeleteBtn());
  trnode.appendChild(state);
  table.appendChild(trnode);
});



