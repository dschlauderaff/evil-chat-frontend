import { sendMessage } from "client/chat";
import "./message-form.css";

const form = document.querySelector(".js-message-form");
const input = form.querySelector(".js-message-form--input");
const submit = form.querySelector(".js-message-form--submit");

function submitForm() {
  // Invokes sendMessage, that, in turn, invokes Ruby send_message method
  // that will create a Message instance with ActiveRecord
  sendMessage(input.value);
  input.value = "";
  input.focus();
}

// You can send a message with cmd/ctrl+enter
input.addEventListener("keydown", event => {
  if (
    (event.keyCode === 10 || event.keyCode === 13) &&
    (event.metaKey || event.ctrlKey)
  ) {
    event.preventDefault();
    submitForm();
  }
});

// or by clicking a button
submit.addEventListener("click", event => {
  event.preventDefault();
  submitForm();
});
