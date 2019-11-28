/** ************************************************************************************************************
 *                                               S'EXCUTE AU CHARGEMENT DE LA PAGE
 ************************************************************************************************************ */

/** ***************************************************************************************
 *                            ID DE  BALISE HTML
 **************************************************************************************** */

// Stocke dans des constantes, les ID de balise,
// on pourra modifier, créer, supprimer des balises au niveau du fichier HTML via le DOM.
const $fullImg = document.getElementById("fullImg");

/** ************************************************************************************* */

function showFullImg(){
    // Récupere l'ensemble des attributs de la balise pour les stocker dans une variable objet.
    var $vignette = event.target;
    var path = $vignette.getAttribute("src");
    $fullImg.setAttribute("src",path);
}
