const users = [
  {
    name: "Diyora",
    age: "18",
    email: "joh@mail.com",
    imgUrl: "./assets/img/john.png",
  }, //0
  {
    name: "Salima",
    age: "27",
    email: "joh@mail.com",
    imgUrl: "./assets/img/john.png",
  }, //0
  {
    name: "Nodira",
    age: "19",
    email: "joh@mail.com",
    imgUrl: "./assets/img/john.png",
  }, //0
  {
    name: "Dono",
    age: "35",
    email: "joh@mail.com",
    imgUrl: "./assets/img/john.png",
  }, //0
  {
    name: "Madina",
    age: "18",
    email: "smith@mail.com",
  }, //1
];

const app = document.getElementById("app");

for (let i = 0; i < users.length; i++) {
  const element = document.createElement("div");
  if (checkUser(users[i])) {
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
    const check = checkUser(users[i]);
    console.log(check);
    app.insertAdjacentElement("afterbegin", element);
  }
}

function checkUser(user) {
  let count = 0;
  if (user.age >= 18 && user.age <= 35) {
    count++;
  }
  if (user.imgUrl !== undefined) {
    count++;
  }
  if (count == 2) {
    return true;
  } else {
    return false;
  }
}

const arr2 = ["Arr1", "Arr2", "Arr3", "Arr4"];
arr2.forEach((element) => {
  console.log(element);
});
