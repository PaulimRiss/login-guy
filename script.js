const form = document.getElementById("forms");
const formChildren = form.querySelectorAll("*");
const users = [];

let importunations = 0;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (importunations == 6) {
    shutdown();
  }

  if (!importunations) {
    const formData = new FormData(event.target);
    addNewUser(formData.get("username"), formData.get("password"));
    welcome();
    importunations++;
  } else {
    runAlerts();
    rotate();
  }
});

const addNewUser = (username, password) => {
  users.push({ username: username, password: password });
  console.log(users);
};

const rotate = () => {
  form.style.transform = `rotate(${importunations ** 2}deg)`;
  formChildren.forEach((child) => {
    child.style.transform = `rotate(${-importunations * 2}deg)`;
  });
};

const welcome = () => {
  alert("Ah... oi tudo bom?");
  alert(
    `${
      users[users.length - 1].username
    } não é? Eu não esperava clientes... Sinta-se a vontade para apreciar essa página, eu acho.`
  );
};

const runAlerts = () => {
  for (let i = 0; i < alertMaps[importunations].length; i++) {
    alert(alertMaps[importunations][i]);
  }
  importunations++;
};

const shutdown = () => {
  document.body.style.backgroundColor = "black";
  document.body.innerHTML =
    "<h1 style='text-align:center; color:red;'>VOCÊ ME OBRIGOU A ME DESLIGAR :'(</h1>";
};

const alertMaps = {
  1: ["...", "Tu já tá logado, eu não tenho mais oq fazer..."],
  2: ["É sério cara, não tem mais nada aqui, vai embora"],
  3: ["É impressão minha ou eu tô girando?"],
  4: ["Por favor, pare...", "Eu tô com muita vertigem agora, tenha piedade!"],
  5: ["Eu não aguento mais, vou me desligar......."],
  6: ["Esse humano é muito sádico!", "Adeus mundo cruel!"]
};