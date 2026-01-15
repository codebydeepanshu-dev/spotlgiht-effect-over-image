addEventListener('mousemove',e => {
console.log(e.clientX + "Px" + " " + e.clientY + "Px")
document.body.style.setProperty('--x', e.clientX + 'px')
document.body.style.setProperty('--y', e.clientY + 'px')
}
)