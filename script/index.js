//Scrip de funcionamento da lupa//
const search = document.getElementById("search")
const lupa = document.getElementById("lupa")

search.addEventListener('change', () => {
    if(search.checked) {
        lupa.focus();
    } 
})

document.addEventListener('click', desmarcarSeFora);
document.addEventListener('touchstart', desmarcarSeFora);
function desmarcarSeFora(e) {
  if (!search.contains(e.target) && !lupa.contains(e.target)) {
    search.checked = false;
    lupa.value = '';
  }
}
