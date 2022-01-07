import { sendMessage } from "tg-forms";

const options = {
  token: "5015741601:AAFjF_52Ogj9CiH9K-3Ve88ggO2DnINnyIg",
  admins: [1188993462], //Telegram admin chat IDs
  parse_mode: "markdown", //Default is markdown
  message: "Custom **message** you _want_ to send",
};

const app = document.getElementById("app");
const button = document.createElement("button");
button.insertAdjacentHTML("beforeend", "Clickme to send telegram message");
button.classList.add("btn");
button.onclick = () => sendMessage(options);
app.insertAdjacentElement("afterbegin", button);
