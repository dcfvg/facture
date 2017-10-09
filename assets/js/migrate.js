$( document ).ready(function() {
  var base = {};
  String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
  };

  new Promise(function(fulfill, reject){
    $.ajax({
      url:'data/raw/clients.csv',
      success: function (string){
        base.clients = Papa.parse(string, { header: true }).data;
        fulfill(base);
      }
    })
  }).then(function(result){
      return new Promise(function(fulfill, reject){
        $.ajax({
          url:'data/raw/factures.csv',
          success: function (string){
            base.factures = Papa.parse(string, { header: true }).data;
            fulfill(base);
          }
        })
      });
  }).then(function(result){
      return new Promise(function(fulfill, reject){
        $.ajax({
          url:'data/raw/projets.csv',
          success: function (string){
            base.projets = Papa.parse(string, { header: true }).data;
            fulfill(base)
          }
        })
      });
  }).then(function(result){
    console.log(base);

    _.forEach(base.factures, function(facture, key) {
      if(!_.isUndefined(facture.id_projet)){
        var projet = _.find(base.projets, { 'id': facture.id_projet });
        facture.description = projet.objet.replaceAll('"',"");
        facture.title = projet.titre.replaceAll('"',"");
        facture.id_client = parseInt(projet.id_client);
        facture.id = parseInt(facture.id);
        facture.eta = parseInt(facture.eta);
        facture.type = parseInt(facture.type);
        facture.montant_HT = parseFloat(facture.montant_HT);

        facture.date = facture.date.split("-").reverse().join('/');
        facture.payed = false;

        facture.priceHT = facture.montant_HT;

        delete facture.montant_HT;
        delete facture.id_projet;
        delete facture.maj;

      }
    });

    _.forEach(base.clients, function(client, key){
      // console.log(client)
      delete client.maj;
      client.id = parseInt(client.id);
      client.cp = parseInt(client.code_postale);
      client.city = _.trim(client.code_postale.replace(client.cp,""));
      client.country = "France";
      client.person = client.interlocuteur;
      client.instituion = client.organisme;
      client.address = client.Adresse;


      delete client.maj;
      delete client.organisme;
      delete client.interlocuteur;
      delete client.code_postale;
      delete client.Adresse;

    })

    console.log(base.factures)
    console.log(base.clients)

    var papaConf = {
      quotes: false,
      quoteChar: '"',
      delimiter: ",",
      header: true,
    }

    var csv = Papa.unparse(base.factures,papaConf);
    var blob = new Blob([csv], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "invoices.csv", true);

    var csv = Papa.unparse(base.clients,papaConf);
    var blob = new Blob([csv], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "clients.csv", true);

  });
})
