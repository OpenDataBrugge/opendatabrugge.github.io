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
            });var format_Gebiedsafbakening_Sectoren_3 = new ol.format.GeoJSON();
var features_Gebiedsafbakening_Sectoren_3 = format_Gebiedsafbakening_Sectoren_3.readFeatures(json_Gebiedsafbakening_Sectoren_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gebiedsafbakening_Sectoren_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Gebiedsafbakening_Sectoren_3.addFeatures(features_Gebiedsafbakening_Sectoren_3);var lyr_Gebiedsafbakening_Sectoren_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gebiedsafbakening_Sectoren_3, 
                style: style_Gebiedsafbakening_Sectoren_3,
                title: '<img src="styles/legend/Gebiedsafbakening_Sectoren_3.png" /> Gebiedsafbakening_Sectoren'
            });var format_Gebiedsafbakening_Regio_Politie_Sectoren_Stad_Brugge_4 = new ol.format.GeoJSON();
var features_Gebiedsafbakening_Regio_Politie_Sectoren_Stad_Brugge_4 = format_Gebiedsafbakening_Regio_Politie_Sectoren_Stad_Brugge_4.readFeatures(json_Gebiedsafbakening_Regio_Politie_Sectoren_Stad_Brugge_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gebiedsafbakening_Regio_Politie_Sectoren_Stad_Brugge_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Gebiedsafbakening_Regio_Politie_Sectoren_Stad_Brugge_4.addFeatures(features_Gebiedsafbakening_Regio_Politie_Sectoren_Stad_Brugge_4);var lyr_Gebiedsafbakening_Regio_Politie_Sectoren_Stad_Brugge_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gebiedsafbakening_Regio_Politie_Sectoren_Stad_Brugge_4, 
                style: style_Gebiedsafbakening_Regio_Politie_Sectoren_Stad_Brugge_4,
                title: '<img src="styles/legend/Gebiedsafbakening_Regio_Politie_Sectoren_Stad_Brugge_4.png" /> Gebiedsafbakening_Regio_Politie_Sectoren_Stad_Brugge'
            });

lyr_GRBbasiskaartgrijswaarden_0.setVisible(true);lyr_Gebiedsafbakening_Politie_Wijk_1.setVisible(false);lyr_Gebiedsafbakening_Politie_Regio_2.setVisible(false);lyr_Gebiedsafbakening_Sectoren_3.setVisible(false);lyr_Gebiedsafbakening_Regio_Politie_Sectoren_Stad_Brugge_4.setVisible(true);
var layersList = [lyr_GRBbasiskaartgrijswaarden_0,lyr_Gebiedsafbakening_Politie_Wijk_1,lyr_Gebiedsafbakening_Politie_Regio_2,lyr_Gebiedsafbakening_Sectoren_3,lyr_Gebiedsafbakening_Regio_Politie_Sectoren_Stad_Brugge_4];
lyr_Gebiedsafbakening_Politie_Wijk_1.set('fieldAliases', {'Name': 'Name', 'Code': 'Code', 'Oppervlakt': 'Oppervlakt', 'Perimeter': 'Perimeter', 'Wijkinspec': 'Wijkinspec', 'Telefoon': 'Telefoon', 'Telefoon_2': 'Telefoon_2', });
lyr_Gebiedsafbakening_Politie_Regio_2.set('fieldAliases', {'Name': 'Name', 'Code': 'Code', 'Oppervlakt': 'Oppervlakt', 'Perimeter': 'Perimeter', });
lyr_Gebiedsafbakening_Sectoren_3.set('fieldAliases', {'VOORSTEL_S': 'VOORSTEL_S', 'NAAM': 'NAAM', 'OPPERVLAKT': 'OPPERVLAKT', 'DEELGEMEEN': 'DEELGEMEEN', 'DEELGEM_CO': 'DEELGEM_CO', 'Opp': 'Opp', 'Postcode': 'Postcode', });
lyr_Gebiedsafbakening_Regio_Politie_Sectoren_Stad_Brugge_4.set('fieldAliases', {'VOORSTEL_S': 'VOORSTEL_S', 'NAAM': 'NAAM', 'OPPERVLAKT': 'OPPERVLAKT', 'DEELGEMEEN': 'DEELGEMEEN', 'DEELGEM_CO': 'DEELGEM_CO', 'Opp': 'Opp', 'Postcode': 'Postcode', 'Name': 'Name', 'Code': 'Code', 'Oppervla_1': 'Oppervla_1', 'Perimeter': 'Perimeter', '_overlaps': '_overlaps', });
lyr_Gebiedsafbakening_Politie_Wijk_1.set('fieldImages', {'Name': 'TextEdit', 'Code': 'TextEdit', 'Oppervlakt': 'TextEdit', 'Perimeter': 'TextEdit', 'Wijkinspec': 'TextEdit', 'Telefoon': 'TextEdit', 'Telefoon_2': 'TextEdit', });
lyr_Gebiedsafbakening_Politie_Regio_2.set('fieldImages', {'Name': 'TextEdit', 'Code': 'TextEdit', 'Oppervlakt': 'TextEdit', 'Perimeter': 'TextEdit', });
lyr_Gebiedsafbakening_Sectoren_3.set('fieldImages', {'VOORSTEL_S': 'TextEdit', 'NAAM': 'TextEdit', 'OPPERVLAKT': 'TextEdit', 'DEELGEMEEN': 'TextEdit', 'DEELGEM_CO': 'TextEdit', 'Opp': 'TextEdit', 'Postcode': 'TextEdit', });
lyr_Gebiedsafbakening_Regio_Politie_Sectoren_Stad_Brugge_4.set('fieldImages', {'VOORSTEL_S': 'TextEdit', 'NAAM': 'TextEdit', 'OPPERVLAKT': 'TextEdit', 'DEELGEMEEN': 'TextEdit', 'DEELGEM_CO': 'TextEdit', 'Opp': 'TextEdit', 'Postcode': 'TextEdit', 'Name': 'TextEdit', 'Code': 'TextEdit', 'Oppervla_1': 'TextEdit', 'Perimeter': 'TextEdit', '_overlaps': 'TextEdit', });
lyr_Gebiedsafbakening_Politie_Wijk_1.set('fieldLabels', {'Name': 'no label', 'Code': 'no label', 'Oppervlakt': 'no label', 'Perimeter': 'no label', 'Wijkinspec': 'no label', 'Telefoon': 'no label', 'Telefoon_2': 'no label', });
lyr_Gebiedsafbakening_Politie_Regio_2.set('fieldLabels', {'Name': 'no label', 'Code': 'no label', 'Oppervlakt': 'no label', 'Perimeter': 'no label', });
lyr_Gebiedsafbakening_Sectoren_3.set('fieldLabels', {'VOORSTEL_S': 'no label', 'NAAM': 'no label', 'OPPERVLAKT': 'no label', 'DEELGEMEEN': 'no label', 'DEELGEM_CO': 'no label', 'Opp': 'no label', 'Postcode': 'no label', });
lyr_Gebiedsafbakening_Regio_Politie_Sectoren_Stad_Brugge_4.set('fieldLabels', {'VOORSTEL_S': 'no label', 'NAAM': 'no label', 'OPPERVLAKT': 'no label', 'DEELGEMEEN': 'no label', 'DEELGEM_CO': 'no label', 'Opp': 'no label', 'Postcode': 'no label', 'Name': 'no label', 'Code': 'no label', 'Oppervla_1': 'no label', 'Perimeter': 'no label', '_overlaps': 'no label', });
lyr_Gebiedsafbakening_Regio_Politie_Sectoren_Stad_Brugge_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});