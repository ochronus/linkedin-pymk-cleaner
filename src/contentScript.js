(function( linkedin_pymk_cleaner, $, undefined ) {

    function test_element(elem) {
        return !(/^\d+$/.test($(elem).data('member-id')));
    }
 
    $('#pymk-people-card').bind('DOMNodeInserted', function(event) {
      if (event.target.nodeName === 'LI') {
        if (test_element(event.target)) {
            $(event.target).hide();
        }
      }
    });
    

    $('#pymk-people-card li.card').each(function(i, elem) {
        if (test_element(elem)) {
            $(elem).hide();
        }
    });

}( window.linkedin_pymk_cleaner = window.linkedin_pymk_cleaner || {}, jQuery ));



