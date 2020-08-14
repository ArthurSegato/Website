/* OPEN MENU ON CLICK AND BLOCK SCROLL */
let open = false;
function toggleMenu() {
	let btn = document.getElementById('menu-btn');
	btn.classList.toggle("change");
	if (open == false) {
		document.getElementById("sideNav").style.width = "100%";
		open = true;
        let x = window.scrollX, y = window.scrollY;
        window.onscroll = function(){
            window.scrollTo(x, y);
        };
	}else{
		document.getElementById("sideNav").style.width = "0%";
		open = false;
        window.onscroll = function(){};
	}
}
/* SHOW SOCIAL ICONS*/
function show(){
    let social = document.getElementById('social-icons');
    social.classList.toggle("change");
}
/* SET SCROLL TO SMOOTH AND CLEAN URL*/
let links = document.getElementsByTagName("a");
Array.prototype.forEach.call(links, function(elem, index) {
    let elemAttr = elem.getAttribute("href");
    if (elemAttr && elemAttr.includes("#")) {
        elem.addEventListener("click", function(ev) {
            ev.preventDefault();
            document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            });
        });
    }
});