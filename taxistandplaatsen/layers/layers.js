var wms_layers = [];
var format_GemeentegrensOK_0 = new ol.format.GeoJSON();
var features_GemeentegrensOK_0 = format_GemeentegrensOK_0.readFeatures(json_GemeentegrensOK_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GemeentegrensOK_0 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_GemeentegrensOK_0.addFeatures(features_GemeentegrensOK_0);var lyr_GemeentegrensOK_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GemeentegrensOK_0, 
                style: style_GemeentegrensOK_0,
                title: '<img src="styles/legend/GemeentegrensOK_0.png" /> GemeentegrensOK'
            });var lyr_OrthofotomozaekmiddenschaligwinteropnamenkleurmeestrecentVlaanderen_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoservices.informatievlaanderen.be/raadpleegdiensten/OMWRGBMRVL/wms?",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "Ortho",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Orthofotomozaïek, middenschalig, winteropnamen, kleur, meest recent, Vlaanderen",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OrthofotomozaekmiddenschaligwinteropnamenkleurmeestrecentVlaanderen_1, 0]);var lyr_GRBbasiskaartgrijswaarden_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB-basiskaart-grijs/wms",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "GRB_BSK_GRIJS",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "GRB-basiskaart-grijswaarden",
                            opacity: 0.532000,
                            
                            
                          });
              wms_layers.push([lyr_GRBbasiskaartgrijswaarden_2, 0]);var format_Taxistandplaatsen_3 = new ol.format.GeoJSON();
var features_Taxistandplaatsen_3 = format_Taxistandplaatsen_3.readFeatures(json_Taxistandplaatsen_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taxistandplaatsen_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Taxistandplaatsen_3.addFeatures(features_Taxistandplaatsen_3);var lyr_Taxistandplaatsen_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Taxistandplaatsen_3, 
                style: style_Taxistandplaatsen_3,
                title: '<img src="styles/legend/Taxistandplaatsen_3.png" /> Taxistandplaatsen'
            });var format_Taxistandplaatsen200m_4 = new ol.format.GeoJSON();
var features_Taxistandplaatsen200m_4 = format_Taxistandplaatsen200m_4.readFeatures(json_Taxistandplaatsen200m_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taxistandplaatsen200m_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Taxistandplaatsen200m_4.addFeatures(features_Taxistandplaatsen200m_4);var lyr_Taxistandplaatsen200m_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Taxistandplaatsen200m_4, 
                style: style_Taxistandplaatsen200m_4,
                title: '<img src="styles/legend/Taxistandplaatsen200m_4.png" /> Taxistandplaatsen200m'
            });

lyr_GemeentegrensOK_0.setVisible(true);lyr_OrthofotomozaekmiddenschaligwinteropnamenkleurmeestrecentVlaanderen_1.setVisible(true);lyr_GRBbasiskaartgrijswaarden_2.setVisible(true);lyr_Taxistandplaatsen_3.setVisible(true);lyr_Taxistandplaatsen200m_4.setVisible(true);
var layersList = [lyr_GemeentegrensOK_0,lyr_OrthofotomozaekmiddenschaligwinteropnamenkleurmeestrecentVlaanderen_1,lyr_GRBbasiskaartgrijswaarden_2,lyr_Taxistandplaatsen_3,lyr_Taxistandplaatsen200m_4];
lyr_GemeentegrensOK_0.set('fieldAliases', {'ID': 'ID', 'FEATTYP': 'FEATTYP', 'ORDER00': 'ORDER00', 'ORDER01': 'ORDER01', 'ORDER02': 'ORDER02', 'ORDER03': 'ORDER03', 'ORDER04': 'ORDER04', 'ORDER05': 'ORDER05', 'ORDER06': 'ORDER06', 'ORDER07': 'ORDER07', 'ORDER08': 'ORDER08', 'FEATAREA': 'FEATAREA', 'FEATPERIM': 'FEATPERIM', 'NAME': 'NAME', 'NAMELC': 'NAMELC', 'POPCLASS': 'POPCLASS', 'POP': 'POP', 'MI_PRINX': 'MI_PRINX', });
lyr_Taxistandplaatsen_3.set('fieldAliases', {'id': 'id', 'Naam': 'Naam', });
lyr_Taxistandplaatsen200m_4.set('fieldAliases', {'id': 'id', 'Naam': 'Naam', });
lyr_GemeentegrensOK_0.set('fieldImages', {'ID': 'TextEdit', 'FEATTYP': 'TextEdit', 'ORDER00': 'TextEdit', 'ORDER01': 'TextEdit', 'ORDER02': 'TextEdit', 'ORDER03': 'TextEdit', 'ORDER04': 'TextEdit', 'ORDER05': 'TextEdit', 'ORDER06': 'TextEdit', 'ORDER07': 'TextEdit', 'ORDER08': 'TextEdit', 'FEATAREA': 'TextEdit', 'FEATPERIM': 'TextEdit', 'NAME': 'TextEdit', 'NAMELC': 'TextEdit', 'POPCLASS': 'TextEdit', 'POP': 'TextEdit', 'MI_PRINX': 'TextEdit', });
lyr_Taxistandplaatsen_3.set('fieldImages', {'id': 'TextEdit', 'Naam': 'TextEdit', });
lyr_Taxistandplaatsen200m_4.set('fieldImages', {'id': 'TextEdit', 'Naam': 'TextEdit', });
lyr_GemeentegrensOK_0.set('fieldLabels', {'ID': 'no label', 'FEATTYP': 'no label', 'ORDER00': 'no label', 'ORDER01': 'no label', 'ORDER02': 'no label', 'ORDER03': 'no label', 'ORDER04': 'no label', 'ORDER05': 'no label', 'ORDER06': 'no label', 'ORDER07': 'no label', 'ORDER08': 'no label', 'FEATAREA': 'no label', 'FEATPERIM': 'no label', 'NAME': 'no label', 'NAMELC': 'no label', 'POPCLASS': 'no label', 'POP': 'no label', 'MI_PRINX': 'no label', });
lyr_Taxistandplaatsen_3.set('fieldLabels', {'id': 'no label', 'Naam': 'no label', });
lyr_Taxistandplaatsen200m_4.set('fieldLabels', {'id': 'no label', 'Naam': 'no label', });
lyr_Taxistandplaatsen200m_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});