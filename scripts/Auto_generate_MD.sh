
# echo "Recherche et extrait les donnée puis créer un fichier markdown"
# $i=0
# grep dossier_photo _data/mushroom.yml | tr ':' '\n' | tr '"' '\n' | while read var
# do
#     echo "Indice du tableau : ${i}"
#     i=$(($i + 1))
# if [ $var != "dossier_photo" ]
# then
#     echo "Création du fichier Markdown"
    # touch "assets/html/Fiches/${var}".md
    # echo "Ecriture dans le fichier Markdown"
    # echo "---" >> "assets/html/Fiches/${var}".md
    # echo "layout: ficheTech" >> "assets/html/Fiches/${var}".md
    # echo "number:" >> "assets/html/Fiches/${var}".md
    # echo "---" >> "assets/html/Fiches/${var}".md
# fi
# done
