this["fac"] = this["fac"] || {};
this["fac"]["client_list"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return " <div >\n  <h3>"
    + alias3(((helper = (helper = helpers.person || (depth0 != null ? depth0.person : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"person","hash":{},"data":data}) : helper)))
    + ", "
    + alias3(((helper = (helper = helpers.instituion || (depth0 != null ? depth0.instituion : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"instituion","hash":{},"data":data}) : helper)))
    + "</h3>\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.operations : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  <hr>\n</div>\n";
},"2":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <div class=\"row\">\n      <p class=\"col-xs-1\">"
    + alias3(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"date","hash":{},"data":data}) : helper)))
    + "</p>\n      <p class=\"col-xs-1 money\">"
    + alias3(((helper = (helper = helpers.priceHT || (depth0 != null ? depth0.priceHT : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"priceHT","hash":{},"data":data}) : helper)))
    + "&nbsp;€</p>\n      <p class=\"col-xs-8\">"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.clients : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["fac"]["hello"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "\n\n<h1>"
    + this.escapeExpression(((helper = (helper = helpers.flo || (depth0 != null ? depth0.flo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"flo","hash":{},"data":data}) : helper)))
    + "</h1>\n\n";
},"useData":true});
this["fac"]["invoice"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing;

  return "<div class=\"infoContact row\">\n  <p class=\"col-xs-3\">\n    <span >"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1.name : stack1), depth0))
    + "</span><br>\n    "
    + alias2((helpers.nlbr || (depth0 && depth0.nlbr) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1.adress : stack1),{"name":"nlbr","hash":{},"data":data}))
    + "\n  </p>\n  <p class=\"col-xs-4\">\n    "
    + alias2((helpers.nlbr || (depth0 && depth0.nlbr) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1.infos : stack1),{"name":"nlbr","hash":{},"data":data}))
    + "\n  </p>\n    <div class=\"col-xs-2\">N° ordre MDA</div>\n    <div class=\"col-xs-2 invoiceID up\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1.mda : stack1), depth0))
    + "</div>\n\n    <div class=\"col-xs-2\">N° SIRET</div>\n    <div class=\"col-xs-2 invoiceID up\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1.siret : stack1), depth0))
    + "</div>\n\n    <div class=\"col-xs-2\">N° T.V.A. intra.</div>\n    <div class=\"col-xs-2 invoiceID up\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1.tvaIntra : stack1), depth0))
    + "</div>\n\n    <div class=\"col-xs-2\">code APE</div>\n    <div class=\"col-xs-2 invoiceID up\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1.ape : stack1), depth0))
    + "</div>\n</div>\n\n<div class=\"description row\">\n  <p class=\"col-xs-7\">facture n° <span class=\"up invoiceID\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.invoice : depth0)) != null ? stack1.id_string : stack1), depth0))
    + "</span>\n  </p>\n  <p class=\"col-xs-5\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.invoice : depth0)) != null ? stack1.date : stack1), depth0))
    + "</p>\n\n  <div class=\"col-xs-7\">\n    <h4>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.invoice : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h4>\n    <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.invoice : depth0)) != null ? stack1.description : stack1), depth0))
    + "</p>\n  </div>\n  <div class=\"col-xs-5\">\n\n    <h4>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.invoice : depth0)) != null ? stack1.client : stack1)) != null ? stack1.instituion : stack1), depth0))
    + "</h4>\n    <p>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.invoice : depth0)) != null ? stack1.client : stack1)) != null ? stack1.person : stack1), depth0))
    + "</p>\n\n    <p>\n    "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.invoice : depth0)) != null ? stack1.client : stack1)) != null ? stack1.address : stack1), depth0))
    + "<br>\n    "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.invoice : depth0)) != null ? stack1.client : stack1)) != null ? stack1.cp : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.invoice : depth0)) != null ? stack1.client : stack1)) != null ? stack1.city : stack1), depth0))
    + "<br>\n    "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.invoice : depth0)) != null ? stack1.client : stack1)) != null ? stack1.country : stack1), depth0))
    + "<br>\n    </p>\n  </div>\n</div>\n\n<div class=\"howmuch\">\n  <div class=\"row\">\n      <p class=\"col-xs-5\">Montant hors taxes</p>\n      <p class=\"col-xs-2 money\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.invoice : depth0)) != null ? stack1.priceHT : stack1), depth0))
    + "</p>\n  </div>\n  <div class=\"row\">\n      <p class=\"col-xs-5\">T.V.A. ("
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.invoice : depth0)) != null ? stack1.tx : stack1), depth0))
    + ")</p>\n      <p class=\"col-xs-2 money\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.invoice : depth0)) != null ? stack1.tva : stack1), depth0))
    + "</p>\n  </div>\n  <div class=\"row\">\n      <h4 class=\"col-xs-5 up total\">Montant T.T.C. (net à payer)</h4>\n      <h4 class=\"col-xs-2 up total money\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.invoice : depth0)) != null ? stack1.ttc : stack1), depth0))
    + "</h4>\n  </div>\n</div>\n\n<div class=\"row rib\">\n  <div class=\"col-xs-6 mentions\">\n      "
    + alias2((helpers.nlbr || (depth0 && depth0.nlbr) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1.mentions : stack1),{"name":"nlbr","hash":{},"data":data}))
    + "\n  </div>\n  <div class=\"col-xs-offset-1 col-xs-5\">\n    <table class=\"table\">\n      <tr>\n        <td colspan=\"4\">Relevé d’Identité Bancaire</td>\n      </tr>\n      <tr>\n        <th colspan=\"2\">Titulaire du compte</th>\n        <th colspan=\"2\">Domiciliation</th>\n      </tr>\n      <tr>\n        <td colspan=\"2\">"
    + alias2((helpers.nlbr || (depth0 && depth0.nlbr) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1['rib-owner'] : stack1),{"name":"nlbr","hash":{},"data":data}))
    + "</td>\n        <td colspan=\"2\">"
    + alias2((helpers.nlbr || (depth0 && depth0.nlbr) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1['rib-bankName'] : stack1),{"name":"nlbr","hash":{},"data":data}))
    + "</td>\n      </tr>\n      <tr>\n        <th colspan=\"4\">RIB (Identifiant national de compte)</th>\n      </tr>\n      <tr>\n        <td>éTABLISSEMENT<br>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1['rib-etablissement'] : stack1), depth0))
    + "</td>\n        <td>GUICHET<br>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1['rib-guichet'] : stack1), depth0))
    + "</td>\n        <td>N°&nbsp;COMPTE<br><span class=\"invoiceID\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1.compteId : stack1), depth0))
    + "</span></td>\n        <td>CLé&nbsp;RIB<br>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1['rib-key'] : stack1), depth0))
    + "</td>\n      </tr>\n      </table>\n      <table class=\"table\">\n      <tr>\n        <th>IBAN (Identifiant international de compte)</th>\n        <th>BIC</th>\n      </tr>\n      <tr class=\"invoiceID\">\n        <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1['rib-iban'] : stack1), depth0))
    + "</td>\n        <td>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1['rib-bic'] : stack1), depth0))
    + "</td>\n      </tr>\n      </table>\n      <table class=\"table\">\n\n    </table>\n  </div>\n</div>\n</div>\n";
},"useData":true});
this["fac"]["invoices"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return " <div class=\"row invoiceButton\" id=\""
    + alias3(((helper = (helper = helpers.id_string || (depth0 != null ? depth0.id_string : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id_string","hash":{},"data":data}) : helper)))
    + "\">\n  <p class=\"col-xs-1\">"
    + alias3(((helper = (helper = helpers.id_string || (depth0 != null ? depth0.id_string : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id_string","hash":{},"data":data}) : helper)))
    + "</p>\n  <p class=\"col-xs-1\">"
    + alias3(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"date","hash":{},"data":data}) : helper)))
    + "</p>\n  <p class=\"col-xs-1 money\">"
    + alias3(((helper = (helper = helpers.priceHT || (depth0 != null ? depth0.priceHT : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"priceHT","hash":{},"data":data}) : helper)))
    + "</p>\n  <p class=\"col-xs-4\">"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.client : depth0)) != null ? stack1.person : stack1), depth0))
    + "/"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.client : depth0)) != null ? stack1.instituion : stack1), depth0))
    + "</p>\n  <p class=\"col-xs-5\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\n</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.invoices : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});