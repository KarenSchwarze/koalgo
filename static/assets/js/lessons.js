/*
    $(selector) // do stuff with elements

    # regular function
    function(args) {
        # do stuff
    }

    # arrow function
    (args) => { # do stuff }

    # "this"

    var object = {
        key1: 1,
        key2: 2,
    }

    var outerContext = {
        innerContext: {
            regularFunction: function() {
                # this = innerContext
                this.regularFunction();
            },
            arrowFunction: () => {
                # arrow functions skip the "this" setting
                # this = outerContext
                this.innerContext.arrowFunction();
            }
        }
    }

*/


$(document).ready(() => {

    // step buttons
    // select all ".step h3" elements
    // .each() loops through all of the elements selected
    $('.steps .step h3').each(function() {

        // this selects the current ".step h3" element in the loop
        $(this).on('click', () => {

            // hide active step
            $('.step.active').removeClass('active');
            // show selected step
            $(this).parent().addClass('active');

            // hide active trinket
            $('iframe.active').removeClass('active');
            // show selected trinket
            var trinketId = $(this).parent().data('trinket');
            $('#trinket-' + trinketId).addClass('active');
        });
        
    });

    // reveal solution
    $('#solution h4')
        .on('click', () => {
            $('#solution iframe').toggleClass('active');
        }); 

});