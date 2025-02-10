const fileInput = document.getElementById("file-upload")
const uploadIcon = document.querySelector(".upload-icon")
const fileName = document.querySelector(".file-name")

fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    // Alterar o ícone para indicar que um arquivo foi selecionado
    uploadIcon.style.backgroundImage = "url('../assets/icons/upload-before.svg')"

    // Atualizar o nome do arquivo selecionado
    fileName.textContent = fileInput.files[0].name
  } else {
    // Restaurar o ícone padrão se nenhum arquivo estiver selecionado
    uploadIcon.style.backgroundImage = "url('../assets/icons/upload-after.svg')"
    fileName.textContent = "Nenhum arquivo selecionado"
  }
})
