$(document).ready(function(){

    $( function() {
        $( ".draggable3" ).draggable({ containment: "#containment-wrapper", scroll: false });
            // je cible les images avec la classe jqueryUI "draggable3" avec le gestionnaire d'évènement .draggable et limite l'action dans son conteneur
        $( "#droppable" ).droppable({
            drop: function( event, ui ) {
                $( this )
                .addClass( "ui-state-highlight" )
                .find( ".#droppable" )
          }
        //   je cible la boite avec l'id jqueryUI "droppable" avec le gestionnaire d'évènement .droppable
        });  
    });
});
