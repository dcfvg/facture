var txTVA = 10;
var base = {};
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

var onCsv = function (csvs){
  var papaConf = {
    header: true,
    skipEmptyLines: true,
    delimiter: ",",
    dynamicTyping: true,
  };

  base = {
    clients:Papa.parse(csvs[0], papaConf).data,
    invoices:Papa.parse(csvs[1], papaConf).data,
    config:Papa.parse(csvs[2], papaConf).data
  }

  _.forEach(base.invoices, function(invoice){
     invoice.client = _.find(base.clients, { 'id': invoice.client });
  })

  var newConfig = {};

  _.forEach(base.config, function(config){ newConfig[config.key] = config.value })
  base.config = newConfig;

  console.log(base);

  init(base);
}

function init(base){

  var clients =  _.map(base.clients,function(client){
    client.operations = _.filter(base.invoices, { 'client': client.id });
    return client
  })

  displayList();

  $( "#invoices-button" ).click(displayList);
}
function displayList(){

  var sorted = _(base.invoices).sortBy(function(inv){
    return inv.date.split("/").reverse().join('-');
  }).value().reverse();

   $("#render").html(fac.invoices({invoices:sorted}))
   document.title = '';
   $( ".invoiceButton" ).click(function() {
      console.log($(this).attr('id'));
      var invoice = _.find(base.invoices, { 'id_string': $(this).attr('id') });
      $("#render").html(fac.invoice({invoice:invoice, config:base.config}));

      document.title = invoice.id_string
        +'_'+ invoice.date.replaceAll("/","-")
        +'_'+ invoice.title.replaceAll(" ","_")
        +'_'+ invoice.client.instituion.replaceAll(" ","_")
   });

}
Handlebars.registerHelper('nlbr', function(text) {
    text = Handlebars.Utils.escapeExpression(text);
    text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
    return new Handlebars.SafeString(text);
});

