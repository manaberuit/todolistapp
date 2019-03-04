let addTask = document.getElementById('addTask');
let inputTask = document.getElementById('inputTask');
let table = document.getElementById('table');
let allRadio = document.getElementById('allradio');
let workingRadio = document.getElementById('workingRadio');
let compRadio = document.getElementById('compRadio');
let sum = 0;//idNumberの仮置き

workingRadio.addEventListener('click',function(){
  document.getElementsByClassName("work").style.display = "block";
  document.getElementsByClassName("comp").style.display = "none";
});

//stateボタンを作成する関数
const createStateBtn = () => {
  let stateButton = document.createElement('button');
  stateButton.value = "work";
  let stateText = document.createTextNode("作業中");
  stateButton.style.backgroundColor = "lightyellow";
  stateButton.appendChild(stateText);
  /*
  ここにstateボタン押下時の処理を追加
  */
  stateButton.addEventListener('click',function(){
    let tr = stateButton.parentNode.parentNode;
    switch(stateButton.value){
      case "work":
        stateButton.value = "comp";
        tr.className = "comp";
        stateButton.innerHTML = ("完了");
        break;
      case "comp":
        stateButton.value = "work";
        tr.className = "work";
        stateButton.innerHTML = ("作業中");
        break;
    };
  });
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
  deleteButton.addEventListener('click',function(){
    let tr = this.parentNode.parentNode;
    table.removeChild(tr); 
  })
  return deleteButton;
}

addTask.addEventListener('click',function(){
  let trNode = document.createElement('tr');
  let id = document.createElement('th');
  let comment = document.createElement('th');
  let state = document.createElement('th');
  trNode.className = "work"
  //数字を置き換え
  let idNumber = document.createTextNode(sum);

  //入力フォームから値を取得、文字数字に置き換え
  let taskValue = inputTask.value
  let textNode = document.createTextNode(taskValue);

  //id
  id.appendChild(idNumber);
  trNode.appendChild(id);
  table.appendChild(trNode);
  sum++;

  //comment
  comment.appendChild(textNode);
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


