$(function () {

    $('#visualize').on('click', function () {
        let diasHabiles = $('#dias-habiles').val();
        let master = $('#master').val();
        let meta = $('#meta').val();

        $('#total-sku').val(master * meta);
        $('#sku-dia').val(Math.round($('#total-sku').val() / diasHabiles));
        $('#punto').val($('#total-sku').val() / meta);

    })


})