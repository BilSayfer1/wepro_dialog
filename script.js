let dia = document.querySelector(`#chorniy`)
let dialog = document.querySelector(`dialog`)
let closes = document.querySelector(`.close button`)


dia.onclick = () => {
dialog.showModal()
}
closes.onclick = () => {
    dialog.close()
}
