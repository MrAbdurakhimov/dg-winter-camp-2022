const users = [
  { name: "John", email: "joh@mail.com", imgUrl: "./assets/img/john.png" }, //0
  { name: "Smith", email: "smith@mail.com" }, //1
  { name: "Doe", email: "doe@mail.com", imgUrl: "./assets/img/john.png" }, //2
];

const app = document.getElementById("app");

for (let i = users.length - 1; i >= 0; i--) {
  const element = document.createElement("div");
  element.classList.add("user");
  element.insertAdjacentHTML(
    "afterbegin",
    `Name: ${users[i].name}<br/> Email: ${users[i].email}<br/>`
  );

  if (users[i].imgUrl !== undefined) {
    const image = document.createElement("img");
    image.src = users[i].imgUrl;
    image.classList.add("user-image");
    element.insertAdjacentElement("beforeend", image);
  }
  app.insertAdjacentElement("afterbegin", element);
}
