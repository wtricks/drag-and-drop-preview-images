/**
 * Show Drag & Drop multiple image preview
 * 
 * @author Anuj Kumar
 * @link https://instagram.com/webtricks.ak
 * @link https://github.com/wtricks
 * */

/** Variables */
let files = [],
form = document.querySelector('form'),
input = document.querySelector('form input'),
button = document.querySelector('.card button');
select = document.querySelector('form .select');
container = document.querySelector('.container');

/** CLICK LISTENER */
select.addEventListener('click', () => input.click());

/* INPUT CHANGE EVENT */
input.addEventListener('change', () => {
	let file = input.files;
        
        // if user select no image
        if (file.length == 0) return;
         
	for(let i = 0; i < file.length; i++) {
            if (file[i].type.split("/")[0] != 'image') continue;
            if (files.every(e => e.name != file[i].name)) files.push(file[i])
        }

	showImages();
})

/* DELETE IMAGE */
function delImage(index) {
   files.splice(index, 1);
   showImages();
}

/* DRAG & DROP */
dragArea.addEventListener('dragover', e => {
	e.preventDefault()
	dragArea.classList.add('dragover')
})

/* DRAG LEAVE */
dragArea.addEventListener('dragleave', e => {
	e.preventDefault()
	dragArea.classList.remove('dragover')
});

/* DROP EVENT */
dragArea.addEventListener('drop', e => {
	e.preventDefault()
    dragArea.classList.remove('dragover');

	let file = e.dataTransfer.files;
	for (let i = 0; i < file.length; i++) {
		/** Check selected file is image */
		if (file[i].type.split("/")[0] != 'image') continue;
		
		if (files.every(e => e.name != file[i].name)) files.push(file[i])
	}
	showImages();
});
