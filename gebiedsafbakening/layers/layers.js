var wms_layers = [];
var lyr_GRBbasiskaartgrijswaarden_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB-basiskaart-grijs/wms?",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "GRB_BSK_GRIJS",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "GRB-basiskaart-grijswaarden",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_GRBbasiskaartgrijswaarden_0, 0]);var format_Gebiedsafbakening_Politie_Wijk_1 = new ol.format.GeoJSON();
var features_Gebiedsafbakening_Politie_Wijk_1 = format_Gebiedsafbakening_Politie_Wijk_1.readFeatures(json_Gebiedsafbakening_Politie_Wijk_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gebiedsafbakening_Politie_Wijk_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Gebiedsafbakening_Politie_Wijk_1.addFeatures(features_Gebiedsafbakening_Politie_Wijk_1);var lyr_Gebiedsafbakening_Politie_Wijk_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gebiedsafbakening_Politie_Wijk_1, 
                style: style_Gebiedsafbakening_Politie_Wijk_1,
                title: '<img src="styles/legend/Gebiedsafbakening_Politie_Wijk_1.png" /> Gebiedsafbakening_Politie_Wijk'
            });var format_Gebiedsafbakening_Politie_Regio_2 = new ol.format.GeoJSON();
var features_Gebiedsafbakening_Politie_Regio_2 = format_Gebiedsafbakening_Politie_Regio_2.readFeatures(json_Gebiedsafbakening_Politie_Regio_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gebiedsafbakening_Politie_Regio_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Gebiedsafbakening_Politie_Regio_2.addFeatures(features_Gebiedsafbakening_Politie_Regio_2);var lyr_Gebiedsafbakening_Politie_Regio_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gebiedsafbakening_Politie_Regio_2, 
                style: style_Gebiedsafbakening_Politie_Regio_2,
                title: '<img src="styles/legend/Gebiedsafbakening_Politie_Regio_2.png" /> Gebiedsafbakening_Politie_Regio'
            });var format_Gebiedsafbakening_Politie_Deelgemeenten_3 = new ol.format.GeoJSON();
var features_Gebiedsafbakening_Politie_Deelgemeenten_3 = format_Gebiedsafbakening_Politie_Deelgemeenten_3.readFeatures(json_Gebiedsafbakening_Politie_Deelgemeenten_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gebiedsafbakening_Politie_Deelgemeenten_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Gebiedsafbakening_Politie_Deelgemeenten_3.addFeatures(features_Gebiedsafbakening_Politie_Deelgemeenten_3);var lyr_Gebiedsafbakening_Politie_Deelgemeenten_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gebiedsafbakening_Politie_Deelgemeenten_3, 
                style: style_Gebiedsafbakening_Politie_Deelgemeenten_3,
                title: '<img src="styles/legend/Gebiedsafbakening_Politie_Deelgemeenten_3.png" /> Gebiedsafbakening_Politie_Deelgemeenten'
            });var format_Gebiedsafbakening_Sectoren_4 = new ol.format.GeoJSON();
var features_Gebiedsafbakening_Sectoren_4 = format_Gebiedsafbakening_Sectoren_4.readFeatures(json_Gebiedsafbakening_Sectoren_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gebiedsafbakening_Sectoren_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Gebiedsafbakening_Sectoren_4.addFeatures(features_Gebiedsafbakening_Sectoren_4);var lyr_Gebiedsafbakening_Sectoren_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gebiedsafbakening_Sectoren_4, 
                style: style_Gebiedsafbakening_Sectoren_4,
                title: '<img src="styles/legend/Gebiedsafbakening_Sectoren_4.png" /> Gebiedsafbakening_Sectoren'
            });var format_DEELGEMEENTEGRENZEN_5 = new ol.format.GeoJSON();
var features_DEELGEMEENTEGRENZEN_5 = format_DEELGEMEENTEGRENZEN_5.readFeatures(json_DEELGEMEENTEGRENZEN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEELGEMEENTEGRENZEN_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DEELGEMEENTEGRENZEN_5.addFeatures(features_DEELGEMEENTEGRENZEN_5);var lyr_DEELGEMEENTEGRENZEN_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DEELGEMEENTEGRENZEN_5, 
                style: style_DEELGEMEENTEGRENZEN_5,
                title: '<img src="styles/legend/DEELGEMEENTEGRENZEN_5.png" /> DEELGEMEENTEGRENZEN'
            });var format_SECTOREN_6 = new ol.format.GeoJSON();
var features_SECTOREN_6 = format_SECTOREN_6.readFeatures(json_SECTOREN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SECTOREN_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SECTOREN_6.addFeatures(features_SECTOREN_6);var lyr_SECTOREN_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SECTOREN_6, 
                style: style_SECTOREN_6,
                title: '<img src="styles/legend/SECTOREN_6.png" /> SECTOREN'
            });

lyr_GRBbasiskaartgrijswaarden_0.setVisible(true);lyr_Gebiedsafbakening_Politie_Wijk_1.setVisible(false);lyr_Gebiedsafbakening_Politie_Regio_2.setVisible(false);lyr_Gebiedsafbakening_Politie_Deelgemeenten_3.setVisible(false);lyr_Gebiedsafbakening_Sectoren_4.setVisible(true);lyr_DEELGEMEENTEGRENZEN_5.setVisible(false);lyr_SECTOREN_6.setVisible(true);
var layersList = [lyr_GRBbasiskaartgrijswaarden_0,lyr_Gebiedsafbakening_Politie_Wijk_1,lyr_Gebiedsafbakening_Politie_Regio_2,lyr_Gebiedsafbakening_Politie_Deelgemeenten_3,lyr_Gebiedsafbakening_Sectoren_4,lyr_DEELGEMEENTEGRENZEN_5,lyr_SECTOREN_6];
lyr_Gebiedsafbakening_Politie_Wijk_1.set('fieldAliases', {'Name': 'Name', 'Code': 'Code', 'Oppervlakt': 'Oppervlakt', 'Perimeter': 'Perimeter', 'Wijkinspec': 'Wijkinspec', 'Telefoon': 'Telefoon', 'Telefoon_2': 'Telefoon_2', });
lyr_Gebiedsafbakening_Politie_Regio_2.set('fieldAliases', {'Name': 'Name', 'Code': 'Code', 'Oppervlakt': 'Oppervlakt', 'Perimeter': 'Perimeter', });
lyr_Gebiedsafbakening_Politie_Deelgemeenten_3.set('fieldAliases', {'Name': 'Name', 'Gemeente': 'Gemeente', 'Postcode': 'Postcode', 'Perimeter': 'Perimeter', 'Oppervlakt': 'Oppervlakt', });
lyr_Gebiedsafbakening_Sectoren_4.set('fieldAliases', {'VOORSTEL_S': 'VOORSTEL_S', 'NAAM': 'NAAM', 'OPPERVLAKT': 'OPPERVLAKT', 'DEELGEMEEN': 'DEELGEMEEN', 'DEELGEM_CO': 'DEELGEM_CO', 'Opp': 'Opp', 'Postcode': 'Postcode', });
lyr_DEELGEMEENTEGRENZEN_5.set('fieldAliases', {'Name': 'Name', 'Gemeente': 'Gemeente', 'Postcode': 'Postcode', 'Perimeter': 'Perimeter', 'Oppervlakt': 'Oppervlakt', 'NAAM': 'NAAM', 'OPPERVLA_1': 'OPPERVLA_1', 'DEELGEMEEN': 'DEELGEMEEN', 'DEELGEM_CO': 'DEELGEM_CO', 'Opp': 'Opp', '_overlaps': '_overlaps', });
lyr_SECTOREN_6.set('fieldAliases', {'VOORSTEL_S': 'VOORSTEL_S', 'NAAM': 'NAAM', 'OPPERVLAKT': 'OPPERVLAKT', 'DEELGEMEEN': 'DEELGEMEEN', 'DEELGEM_CO': 'DEELGEM_CO', 'Opp': 'Opp', 'Postcode': 'Postcode', 'Name': 'Name', 'Code': 'Code', 'Oppervla_1': 'Oppervla_1', 'Perimeter': 'Perimeter', '_overlaps': '_overlaps', });
lyr_Gebiedsafbakening_Politie_Wijk_1.set('fieldImages', {'Name': 'TextEdit', 'Code': 'TextEdit', 'Oppervlakt': 'TextEdit', 'Perimeter': 'TextEdit', 'Wijkinspec': 'TextEdit', 'Telefoon': 'TextEdit', 'Telefoon_2': 'TextEdit', });
lyr_Gebiedsafbakening_Politie_Regio_2.set('fieldImages', {'Name': 'TextEdit', 'Code': 'TextEdit', 'Oppervlakt': 'TextEdit', 'Perimeter': 'TextEdit', });
lyr_Gebiedsafbakening_Politie_Deelgemeenten_3.set('fieldImages', {'Name': 'TextEdit', 'Gemeente': 'TextEdit', 'Postcode': 'TextEdit', 'Perimeter': 'TextEdit', 'Oppervlakt': 'TextEdit', });
lyr_Gebiedsafbakening_Sectoren_4.set('fieldImages', {'VOORSTEL_S': 'TextEdit', 'NAAM': 'TextEdit', 'OPPERVLAKT': 'TextEdit', 'DEELGEMEEN': 'TextEdit', 'DEELGEM_CO': 'TextEdit', 'Opp': 'TextEdit', 'Postcode': 'TextEdit', });
lyr_DEELGEMEENTEGRENZEN_5.set('fieldImages', {'Name': 'TextEdit', 'Gemeente': 'TextEdit', 'Postcode': 'TextEdit', 'Perimeter': 'TextEdit', 'Oppervlakt': 'TextEdit', 'NAAM': 'TextEdit', 'OPPERVLA_1': 'TextEdit', 'DEELGEMEEN': 'TextEdit', 'DEELGEM_CO': 'TextEdit', 'Opp': 'TextEdit', '_overlaps': 'TextEdit', });
lyr_SECTOREN_6.set('fieldImages', {'VOORSTEL_S': 'TextEdit', 'NAAM': 'TextEdit', 'OPPERVLAKT': 'TextEdit', 'DEELGEMEEN': 'TextEdit', 'DEELGEM_CO': 'TextEdit', 'Opp': 'TextEdit', 'Postcode': 'TextEdit', 'Name': 'TextEdit', 'Code': 'TextEdit', 'Oppervla_1': 'TextEdit', 'Perimeter': 'TextEdit', '_overlaps': 'TextEdit', });
lyr_Gebiedsafbakening_Politie_Wijk_1.set('fieldLabels', {'Name': 'no label', 'Code': 'no label', 'Oppervlakt': 'no label', 'Perimeter': 'no label', 'Wijkinspec': 'no label', 'Telefoon': 'no label', 'Telefoon_2': 'no label', });
lyr_Gebiedsafbakening_Politie_Regio_2.set('fieldLabels', {'Name': 'no label', 'Code': 'no label', 'Oppervlakt': 'no label', 'Perimeter': 'no label', });
lyr_Gebiedsafbakening_Politie_Deelgemeenten_3.set('fieldLabels', {'Name': 'no label', 'Gemeente': 'no label', 'Postcode': 'no label', 'Perimeter': 'no label', 'Oppervlakt': 'no label', });
lyr_Gebiedsafbakening_Sectoren_4.set('fieldLabels', {'VOORSTEL_S': 'no label', 'NAAM': 'no label', 'OPPERVLAKT': 'no label', 'DEELGEMEEN': 'no label', 'DEELGEM_CO': 'no label', 'Opp': 'no label', 'Postcode': 'no label', });
lyr_DEELGEMEENTEGRENZEN_5.set('fieldLabels', {'Name': 'no label', 'Gemeente': 'no label', 'Postcode': 'no label', 'Perimeter': 'no label', 'Oppervlakt': 'no label', 'NAAM': 'no label', 'OPPERVLA_1': 'no label', 'DEELGEMEEN': 'no label', 'DEELGEM_CO': 'no label', 'Opp': 'no label', '_overlaps': 'no label', });
lyr_SECTOREN_6.set('fieldLabels', {'VOORSTEL_S': 'no label', 'NAAM': 'no label', 'OPPERVLAKT': 'no label', 'DEELGEMEEN': 'no label', 'DEELGEM_CO': 'no label', 'Opp': 'no label', 'Postcode': 'no label', 'Name': 'no label', 'Code': 'no label', 'Oppervla_1': 'no label', 'Perimeter': 'no label', '_overlaps': 'no label', });
lyr_SECTOREN_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});