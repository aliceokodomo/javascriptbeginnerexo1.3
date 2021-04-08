  // fonction nommé "testPrompDialog"
  function testPromptDialog(){
    // je crée une variable result qui va recupérer la saisi dans la boite de dialogue
        var result = prompt("Ton prénom:");
    // si le resultat est différent de null
    // si result n'est pas un nombre ou qu'il est différent de vide on affiche l'alerte
            if(isNaN(result) && result != null){
// si le resultat s"affiche, il affiche "bonjour" et le resultat que l'on a tapé dans "result"
            alert("Bonjour " + result + "!");
            } else{
                alert("Veuillez vérifier votre saisie!")
            }
        }
    // on appelle la fonction
        testPromptDialog();