// kilik
const buttonSubmit = document.getElementById("button");
buttonSubmit.addEventListener("click", () => {

  // element input
  const inputFields = document.getElementsByClassName("input");
  let isValid = false;
  const validInputs = Array.from(inputFields).filter((input) => {
    // jika kosong makan ada muncul warna merah
    if (input.value == "") {
      input.style.borderColor = "red";
      console.log(inputFields.length);
    }
  });
  // cetak console
  console.log(validInputs);
});