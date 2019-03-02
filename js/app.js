let addTask = document.getElementById('addTask');
let sum = 0;//idNumberの仮置き

addTask.addEventListener('click',function(){
  let table = document.getElementById('table');
  let trnode = document.createElement('tr');
  let id = document.createElement('th');
  let comment = document.createElement('th');
  let state = document.createElement('th');
  //数字を置き換え
  let idNumber = document.createTextNode(sum);
  //入力フォームから値を取得、文字数字に置き換え
  let taskValue = document.getElementById('inputTask').value
  let textNode = document.createTextNode(taskValue);
  //状態・削除ボタン作成
  let stateButton = document.createElement('button');
  stateButton.style.backgroundColor = "lightyellow"
  let deleteButton = document.createElement('button');
  deleteButton.style.backgroundColor = "lightyellow";
  let stateText = document.createTextNode('作業中');
  let deleteText = document.createTextNode('削除');
  stateButton.appendChild(stateText);
  deleteButton.appendChild(deleteText);
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
  state.appendChild(stateButton);
  trnode.appendChild(state);
  table.appendChild(trnode);
  //delete
  state.appendChild(deleteButton);
  trnode.appendChild(state);
  table.appendChild(trnode);
});



