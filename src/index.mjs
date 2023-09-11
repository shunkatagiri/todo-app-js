import "./styles.css";

const onClickAdd =  () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row"
  
  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // button（完了)タグを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  console.log(completeButton);

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  
  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

