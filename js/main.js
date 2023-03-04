$('#visualize').on('click', function(){
    let diasHabiles = $('#dias-habiles').val();
    let master = $('#master').val();
    let meta = $('#meta').val();

    let totalSku = $('#total-sku').val(master*meta);
    let skuDia = $('#sku-dia').val(Math.round($('#total-sku').val()/diasHabiles));
    let punto = $('#punto').val($('#total-sku').val()/meta);

})