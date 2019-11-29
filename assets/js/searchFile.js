---

---
//const mynumber = "{{ page.number }}";

const mynumber =  parseInt(document.querySelector("article").getAttribute("articleId"));

    const $preview = document.getElementById("preview");
    const $next = document.getElementById("next");

    // Creer un tableau avec les noms de fichier html a inserer dans les balises next et preview
    const fichtec = [
         {%- if site.data.mushroom.size > 0 -%}
            {% assign orderItem = site.data.mushroom | sort: 'nom_commun'  %}
            {%- for file in orderItem -%}
                "{{file.dossier_photo}}",
            {%- endfor -%}
        {% endif  %}
    ]

    const Fichtechnique = fichtec.indexOf("{{musch.dossier_photo}}");
    console.log(fichtec);
    // console.log(fichtec.length);

    if ( Fichtechnique > 0 ){
        $preview.style.display = "block";
        const previewFiche =  fichtec [ eval ( Fichtechnique - 1 ) ] + ".html";
        $preview.setAttribute( "href",previewFiche );
    }

    if ( Fichtechnique == 0) {
        $preview.style.display = "none";
    }

    if (Fichtechnique < fichtec.length) {
            $next.style.display = "block";
            const nextFiche = fichtec[eval(Fichtechnique + 1)] + ".html";
            $next.setAttribute("href", nextFiche);
    }

    if ( Fichtechnique == fichtec.length-1 ) {
        $next.style.display = "none";
    }
    