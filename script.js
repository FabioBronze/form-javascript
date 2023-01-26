const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Verifica se o nome está vazio.
  if (nameInput.value === "") {
    alert("Por favor, preenchao o seu nome");
    return;
  }

  // Verifica se o email está preenchido e se é válido.
  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Por favor, preenchao o seu email");
    return;
  }

  // Verifica se está preenchida.
  if (!validatePassword(passwordInput.value, 8)) {
    alert("A senha precisa de ter no minímo 8 dígitos.");
    return;
  }

  // Verifica se a situação foi selecionada
  if (jobSelect.value === "") {
    alert("Por favor, selecione a sua situação.");
    return;
  }

  // Verifica se a mensagem está preenchida
  if (messageTextarea.value === "") {
    alert("Por favor, preencha a mensagem.");
    return;
  }

  // Se todos os campos estiverem corretamente preenchidos, envie o form.
  form.submit();
});

// Função que valida email.
const isEmailValid = (email) => {
  // Criar uma ReGex para validar email.
  const emailRegex = new RegExp(
    // usuario12@host.com.pt
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  // Se a validação do email estiver correta ..
  if (emailRegex.test(email)) {
    return true;
  } else {
    return false;
  }
};

// Função que valida a senha
const validatePassword = (password, minDigits) => {
  if (password.length >= minDigits) {
    // Senha válida
    return true;
  } else {
    return false;
  }
};
