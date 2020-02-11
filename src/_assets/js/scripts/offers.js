// Offers from Egregora APP 
$(document).ready(function() {
  // Returns successful
  $.ajax('https://api.egregora.app/store/products/feed?company_id=ec90b423-1c37-42bc-969c-49f24763ce30&page=1', {
    type: 'GET',
    headers: { 'Content-Type': 'application/json' },
    crossDomain: true,
  })
    .done(function(data) {
      const formatter = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2
      });

      //console.log(data);
      data.data.map(function(promo) {
        $("#promocoes").append('<div class="promocao">'
        +'<div class="image"><img src='+promo.attributes.images.square+' alt='+promo.attributes.name+'</img></div>'
        +'<div class="name">'+promo.attributes.name+'</div>'
        +'<div class="price">De: R$ '+formatter.format(promo.attributes['regular-price'])+'</div>'
        +'<div class="disc-price">Por: R$ '+formatter.format(promo.attributes['discount-price'])+'</div>'
      +'</div>');
      });
    })
    .fail(function(xhr, status, error) {
      //console.log('promocao nao cadastrada');
    });
});
