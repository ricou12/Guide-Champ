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
    let $vignette = event.target;
    let path = $vignette.getAttribute("src");
    // Découpe la chaine path 
    let myPath =  path.split('/');
    // recherche l'index de l'element a modifier
    let ChangePath = myPath.lastIndexOf('photo-small');
    // Modifie la valeur à l'index trouvé
    myPath[ChangePath] = 'photo-fullscreen';
    // Reconstitue la nouvelle chaine path.
    let newPath = myPath.join('/');
    // Afficher l'image.
    $fullImg.setAttribute("src",newPath);
}

