//BOTON DE CIERRE INICIAL
//BOTON DE CIERRE INICIAL
//BOTON DE CIERRE INICIAL

const Inicial = document.getElementById("Inicial");
const closeINIC = document.getElementById("close-INIC");

closeINIC.addEventListener("click", () => {
    Inicial.style.setProperty('display', 'none');
})

//DESPLEGABLE
//DESPLEGABLE
//DESPLEGABLE

const darkMode = document.querySelector(".dark-mode");
const body = document.body;

darkMode.addEventListener("click", () => {
    body.classList.toggle("active");
})

const butonOption = document.getElementById("buton-option");
const optionContainer = document.getElementById("option-container");
const upOption = document.getElementById("up-option");


butonOption.addEventListener("click", () => {
    optionContainer.classList.add("option-container-visible");
})

upOption.addEventListener("click", () => {
    optionContainer.classList.remove("option-container-visible");
})

const roboto = document.getElementById("roboto");
const montserrat = document.getElementById("montserrat");
const macondo = document.getElementById("macondo");

roboto.addEventListener("click", () => {
    body.classList.remove("macotoFont");
    body.classList.add("robotoFont");
})

macondo.addEventListener("click", () => {
    body.classList.remove("robotoFont");
    body.classList.add("macotoFont");
})

montserrat.addEventListener("click", () => {
    body.classList.remove("robotoFont");
    body.classList.remove("macotoFont");
})

const quest = document.getElementById("quest");
const level = document.getElementById("level");
const tabern = document.getElementById("tabern");
const dark = document.getElementById("dark");
var colorVariant = document.querySelector(':root');

quest.addEventListener("click", () => {
    colorVariant.style.setProperty('--fondoL', '#f8f8f8');
    colorVariant.style.setProperty('--fondoUL', '#fffae9');
    colorVariant.style.setProperty('--fondoD', '#544a23');
    colorVariant.style.setProperty('--fondoDL', '#1a1606');
})

level.addEventListener("click", () => {
    colorVariant.style.setProperty('--fondoL', '#f7f7f7');
    colorVariant.style.setProperty('--fondoUL', '#f4feff');
    colorVariant.style.setProperty('--fondoD', '#0d4049');
    colorVariant.style.setProperty('--fondoDL', '#02171c');
})

tabern.addEventListener("click", () => {
    colorVariant.style.setProperty('--fondoL', '#fff9f7');
    colorVariant.style.setProperty('--fondoUL', '#fff0eb');
    colorVariant.style.setProperty('--fondoD', '#542817');
    colorVariant.style.setProperty('--fondoDL', '#210900');
})

dark.addEventListener("click", () => {
    colorVariant.style.setProperty('--fondoL', '#ffffff');
    colorVariant.style.setProperty('--fondoUL', '#f1f1f1');
    colorVariant.style.setProperty('--fondoD', '#2e2e2e');
    colorVariant.style.setProperty('--fondoDL', '#000000');
})

//BOTON MENU EXTERNAL
//BOTON MENU EXTERNAL
//BOTON MENU EXTERNAL

const butonExt = document.getElementById("open-external");
const closeR = document.getElementById("close-referes");
const logExternal = document.getElementById("external-referes");
let computedExternal = getComputedStyle(logExternal);

butonExt.addEventListener("click", () => {

    if (computedExternal.getPropertyValue("display") == "flex") {
        logExternal.style.setProperty('display', 'none');
    }
    else {
        logExternal.style.setProperty('display', 'flex');
    }
})

closeR.addEventListener("click", () => {
    logExternal.style.setProperty('display', 'none');
})

//BOTONES DE LISTADO
//BOTONES DE LISTADO
//BOTONES DE LISTADO

const refer1 = document.getElementById("refer1");
const refer2 = document.getElementById("refer2");
const refer3 = document.getElementById("refer3");
const refer4 = document.getElementById("refer4");
const refer5 = document.getElementById("refer5");
const htmlCss = document.getElementById("html-css");
const phpBbdd = document.getElementById("php-bbdd");
const iaGen = document.getElementById("iaGen");
const softSkills = document.getElementById("softSkills");

function close(){
    htmlCss.style.setProperty('display', 'none');
    phpBbdd.style.setProperty('display', 'none');
    iaGen.style.setProperty('display', 'none');
    softSkills.style.setProperty('display', 'none');
}

refer1.addEventListener("click", () => {
    close();
})

refer2.addEventListener("click", () => {
    close();
    htmlCss.style.setProperty('display', 'flex');
})

refer3.addEventListener("click", () => {
    close();
    phpBbdd.style.setProperty('display', 'flex');
})

refer4.addEventListener("click", () => {
    close();
    iaGen.style.setProperty('display', 'flex');
})

refer5.addEventListener("click", () => {
    close();
    softSkills.style.setProperty('display', 'flex');
})

//BOTONES VERSION MOVIL
//BOTONES VERSION MOVIL
//BOTONES VERSION MOVIL

const closeEXternal1 = document.getElementById("close-EXternal1");
const closeEXternal2 = document.getElementById("close-EXternal2");
const closeEXternal3 = document.getElementById("close-EXternal3");
const closeEXternal4 = document.getElementById("close-EXternal4");
const closeEXternal5 = document.getElementById("close-EXternal5");
const exrefer1 = document.getElementById("eXrefer1");
const exrefer2 = document.getElementById("eXrefer2");
const exrefer3 = document.getElementById("eXrefer3");
const exrefer4 = document.getElementById("eXrefer4");
const exrefer5 = document.getElementById("eXrefer5");
const eXCV = document.getElementById("eXCV");
const eXhtmlCss = document.getElementById("eXhtml-css");
const eXphpBbdd = document.getElementById("eXphp-bbdd");
const eXiaGen = document.getElementById("eXiaGen");
const eXsoftSkills = document.getElementById("eXsoftSkills");
function closeEX(){
    eXCV.style.setProperty('display', 'none');
    eXhtmlCss.style.setProperty('display', 'none');
    eXphpBbdd.style.setProperty('display', 'none');
    eXiaGen.style.setProperty('display', 'none');
    eXsoftSkills.style.setProperty('display', 'none');
}

closeEXternal1.addEventListener("click", () => {
    closeEX();
})
closeEXternal2.addEventListener("click", () => {
    closeEX();
})
closeEXternal3.addEventListener("click", () => {
    closeEX();
})
closeEXternal4.addEventListener("click", () => {
    closeEX();
})
closeEXternal5.addEventListener("click", () => {
    closeEX();
})

exrefer1.addEventListener("click", () => {
    closeEX();
    eXCV.style.setProperty('display', 'flex');
})

exrefer2.addEventListener("click", () => {
    closeEX();
    eXhtmlCss.style.setProperty('display', 'flex');
})

exrefer3.addEventListener("click", () => {
    closeEX();
    eXphpBbdd.style.setProperty('display', 'flex');
})

exrefer4.addEventListener("click", () => {
    closeEX();
    eXiaGen.style.setProperty('display', 'flex');
})

exrefer5.addEventListener("click", () => {
    closeEX();
    eXsoftSkills.style.setProperty('display', 'flex');
})