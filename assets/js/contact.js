const contactBtn = document.querySelector("#contact");

const displayContactModal = () => {};

contactBtn.onclick = displayContactModal;

const execCmd = (Command, value = null) => {
  document.execCommand(Command, false, value);
};
document.querySelector(".Change").onclick = () => {
  var content = document.querySelector(".editor").innerText;
  console.log(content);
};
