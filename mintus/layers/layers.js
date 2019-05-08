var wms_layers = [];
var format_WegenBrugge_0 = new ol.format.GeoJSON();
var features_WegenBrugge_0 = format_WegenBrugge_0.readFeatures(json_WegenBrugge_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WegenBrugge_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_WegenBrugge_0.addFeatures(features_WegenBrugge_0);var lyr_WegenBrugge_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WegenBrugge_0, 
                style: style_WegenBrugge_0,
                title: '<img src="styles/legend/WegenBrugge_0.png" /> Wegen Brugge'
            });var format_wijkpolitie_1 = new ol.format.GeoJSON();
var features_wijkpolitie_1 = format_wijkpolitie_1.readFeatures(json_wijkpolitie_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wijkpolitie_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_wijkpolitie_1.addFeatures(features_wijkpolitie_1);var lyr_wijkpolitie_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_wijkpolitie_1, 
                style: style_wijkpolitie_1,
                title: '<img src="styles/legend/wijkpolitie_1.png" /> wijk (politie)'
            });var format_Werkingsgebieden_2 = new ol.format.GeoJSON();
var features_Werkingsgebieden_2 = format_Werkingsgebieden_2.readFeatures(json_Werkingsgebieden_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Werkingsgebieden_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Werkingsgebieden_2.addFeatures(features_Werkingsgebieden_2);var lyr_Werkingsgebieden_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Werkingsgebieden_2, 
                style: style_Werkingsgebieden_2,
    title: 'Werkingsgebieden<br />\
    <img src="styles/legend/Werkingsgebieden_2_0.png" /> <br />\
    <img src="styles/legend/Werkingsgebieden_2_1.png" /> ’t Werftje_KK<br />\
    <img src="styles/legend/Werkingsgebieden_2_2.png" /> ’t Werftje_stu<br />\
    <img src="styles/legend/Werkingsgebieden_2_3.png" /> d’Oude Stoasie<br />\
    <img src="styles/legend/Werkingsgebieden_2_4.png" /> De Balsemboom<br />\
    <img src="styles/legend/Werkingsgebieden_2_5.png" /> De Dijk<br />\
    <img src="styles/legend/Werkingsgebieden_2_6.png" /> Den Breydel<br />\
    <img src="styles/legend/Werkingsgebieden_2_7.png" /> Levensvreugde<br />\
    <img src="styles/legend/Werkingsgebieden_2_8.png" /> Meulewech<br />\
    <img src="styles/legend/Werkingsgebieden_2_9.png" /> Sconevelde<br />\
    <img src="styles/legend/Werkingsgebieden_2_10.png" /> \'t Reitje<br />\
    <img src="styles/legend/Werkingsgebieden_2_11.png" /> Ten Boomgaarde<br />\
    <img src="styles/legend/Werkingsgebieden_2_12.png" /> Ter Leyen<br />\
    <img src="styles/legend/Werkingsgebieden_2_13.png" /> Van Volden1<br />\
    <img src="styles/legend/Werkingsgebieden_2_14.png" /> Van Volden2<br />\
    <img src="styles/legend/Werkingsgebieden_2_15.png" /> Van Volden3<br />'
        });var format_Mintuslocaties090419_3 = new ol.format.GeoJSON();
var features_Mintuslocaties090419_3 = format_Mintuslocaties090419_3.readFeatures(json_Mintuslocaties090419_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mintuslocaties090419_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Mintuslocaties090419_3.addFeatures(features_Mintuslocaties090419_3);var lyr_Mintuslocaties090419_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mintuslocaties090419_3, 
                style: style_Mintuslocaties090419_3,
                title: '<img src="styles/legend/Mintuslocaties090419_3.png" /> Mintuslocaties090419'
            });

lyr_WegenBrugge_0.setVisible(true);lyr_wijkpolitie_1.setVisible(false);lyr_Werkingsgebieden_2.setVisible(true);lyr_Mintuslocaties090419_3.setVisible(true);
var layersList = [lyr_WegenBrugge_0,lyr_wijkpolitie_1,lyr_Werkingsgebieden_2,lyr_Mintuslocaties090419_3];
lyr_WegenBrugge_0.set('fieldAliases', {'CEVI_OID': 'CEVI_OID', 'CEVI_DATE_CREATED': 'CEVI_DATE_CREATED', 'CEVI_USERID_CREATED': 'CEVI_USERID_CREATED', 'CEVI_DATE_UPDATED': 'CEVI_DATE_UPDATED', 'CEVI_USERID_UPDATED': 'CEVI_USERID_UPDATED', 'id': 'id', '_timestamp': '_timestamp', 'UIDN': 'UIDN', 'OIDN': 'OIDN', 'OPNDATUM': 'OPNDATUM', 'RSTRNMID': 'RSTRNMID', 'RSTRNM': 'RSTRNM', '.RNISCODE': '.RNISCODE', 'RGEMEENTE': 'RGEMEENTE', 'WEGNUMMER': 'WEGNUMMER', 'MORF': 'MORF', 'LBLMORF': 'LBLMORF', 'VERH': 'VERH', 'LBLVERH': 'LBLVERH', 'LSTRNMID': 'LSTRNMID', 'LSTRNM': 'LSTRNM', 'LNISCODE': 'LNISCODE', 'LGEMEENTE': 'LGEMEENTE', });
lyr_wijkpolitie_1.set('fieldAliases', {'Name': 'Name', 'Code': 'Code', 'Oppervlakte': 'Oppervlakte', 'Perimeter': 'Perimeter', 'Wijkinspect': 'Wijkinspect', 'Telefoon': 'Telefoon', 'Telefoon 2': 'Telefoon 2', });
lyr_Werkingsgebieden_2.set('fieldAliases', {'Naam': 'Naam', 'STRAATNAAM': 'STRAATNAAM', });
lyr_Mintuslocaties090419_3.set('fieldAliases', {'Nummer': 'Nummer', 'Naam': 'Naam', 'Adres': 'Adres', 'Postcode': 'Postcode', 'Deelgemeente': 'Deelgemeente', 'Telefoonnr': 'Telefoonnr', 'Mailadres': 'Mailadres', 'Type': 'Type', });
lyr_WegenBrugge_0.set('fieldImages', {'CEVI_OID': 'TextEdit', 'CEVI_DATE_CREATED': 'TextEdit', 'CEVI_USERID_CREATED': 'TextEdit', 'CEVI_DATE_UPDATED': 'TextEdit', 'CEVI_USERID_UPDATED': 'TextEdit', 'id': 'TextEdit', '_timestamp': 'TextEdit', 'UIDN': 'TextEdit', 'OIDN': 'TextEdit', 'OPNDATUM': 'TextEdit', 'RSTRNMID': 'TextEdit', 'RSTRNM': 'TextEdit', '.RNISCODE': 'TextEdit', 'RGEMEENTE': 'TextEdit', 'WEGNUMMER': 'TextEdit', 'MORF': 'TextEdit', 'LBLMORF': 'TextEdit', 'VERH': 'TextEdit', 'LBLVERH': 'TextEdit', 'LSTRNMID': 'TextEdit', 'LSTRNM': 'TextEdit', 'LNISCODE': 'TextEdit', 'LGEMEENTE': 'TextEdit', });
lyr_wijkpolitie_1.set('fieldImages', {'Name': 'TextEdit', 'Code': 'TextEdit', 'Oppervlakte': 'TextEdit', 'Perimeter': 'TextEdit', 'Wijkinspect': 'TextEdit', 'Telefoon': 'TextEdit', 'Telefoon 2': 'TextEdit', });
lyr_Werkingsgebieden_2.set('fieldImages', {'Naam': 'TextEdit', 'STRAATNAAM': 'TextEdit', });
lyr_Mintuslocaties090419_3.set('fieldImages', {'Nummer': 'TextEdit', 'Naam': 'TextEdit', 'Adres': 'TextEdit', 'Postcode': 'TextEdit', 'Deelgemeente': 'TextEdit', 'Telefoonnr': 'TextEdit', 'Mailadres': 'TextEdit', 'Type': 'TextEdit', });
lyr_WegenBrugge_0.set('fieldLabels', {'CEVI_OID': 'no label', 'CEVI_DATE_CREATED': 'no label', 'CEVI_USERID_CREATED': 'no label', 'CEVI_DATE_UPDATED': 'no label', 'CEVI_USERID_UPDATED': 'no label', 'id': 'no label', '_timestamp': 'no label', 'UIDN': 'no label', 'OIDN': 'no label', 'OPNDATUM': 'no label', 'RSTRNMID': 'no label', 'RSTRNM': 'no label', '.RNISCODE': 'no label', 'RGEMEENTE': 'no label', 'WEGNUMMER': 'no label', 'MORF': 'no label', 'LBLMORF': 'no label', 'VERH': 'no label', 'LBLVERH': 'no label', 'LSTRNMID': 'no label', 'LSTRNM': 'no label', 'LNISCODE': 'no label', 'LGEMEENTE': 'no label', });
lyr_wijkpolitie_1.set('fieldLabels', {'Name': 'inline label', 'Code': 'no label', 'Oppervlakte': 'no label', 'Perimeter': 'no label', 'Wijkinspect': 'no label', 'Telefoon': 'no label', 'Telefoon 2': 'no label', });
lyr_Werkingsgebieden_2.set('fieldLabels', {'Naam': 'inline label', 'STRAATNAAM': 'inline label', });
lyr_Mintuslocaties090419_3.set('fieldLabels', {'Nummer': 'no label', 'Naam': 'header label', 'Adres': 'no label', 'Postcode': 'no label', 'Deelgemeente': 'no label', 'Telefoonnr': 'no label', 'Mailadres': 'no label', 'Type': 'no label', });
lyr_Mintuslocaties090419_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});