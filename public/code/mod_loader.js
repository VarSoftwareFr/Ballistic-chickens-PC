function loadMod(code) {
	eval(code);
}

function main() {
	var code = prompt("Enter Mod Code Provided From Source:");
	loadMod(code);
}

document.addEventListener('keydown', function(event) {
  if (event.shiftKey && event.key === 'ShiftRight') {
    main();
  }
});