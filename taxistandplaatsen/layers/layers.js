var wms_layers = [];
var lyr_GRBbasiskaartgrijswaarden_0 = new ol.layer.Tile({
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
              wms_layers.push([lyr_GRBbasiskaartgrijswaarden_0, 0]);var format_Taxistandplaatsen_1 = new ol.format.GeoJSON();
var features_Taxistandplaatsen_1 = format_Taxistandplaatsen_1.readFeatures(json_Taxistandplaatsen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taxistandplaatsen_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Taxistandplaatsen_1.addFeatures(features_Taxistandplaatsen_1);var lyr_Taxistandplaatsen_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Taxistandplaatsen_1, 
                style: style_Taxistandplaatsen_1,
                title: '<img src="styles/legend/Taxistandplaatsen_1.png" /> Taxistandplaatsen'
            });var format_Taxistandplaatsen200m_2 = new ol.format.GeoJSON();
var features_Taxistandplaatsen200m_2 = format_Taxistandplaatsen200m_2.readFeatures(json_Taxistandplaatsen200m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taxistandplaatsen200m_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Taxistandplaatsen200m_2.addFeatures(features_Taxistandplaatsen200m_2);var lyr_Taxistandplaatsen200m_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Taxistandplaatsen200m_2, 
                style: style_Taxistandplaatsen200m_2,
                title: '<img src="styles/legend/Taxistandplaatsen200m_2.png" /> Taxistandplaatsen200m'
            });

lyr_GRBbasiskaartgrijswaarden_0.setVisible(true);lyr_Taxistandplaatsen_1.setVisible(true);lyr_Taxistandplaatsen200m_2.setVisible(true);
var layersList = [lyr_GRBbasiskaartgrijswaarden_0,lyr_Taxistandplaatsen_1,lyr_Taxistandplaatsen200m_2];
lyr_Taxistandplaatsen_1.set('fieldAliases', {'id': 'id', 'Naam': 'Naam', });
lyr_Taxistandplaatsen200m_2.set('fieldAliases', {'id': 'id', 'Naam': 'Naam', });
lyr_Taxistandplaatsen_1.set('fieldImages', {'id': 'TextEdit', 'Naam': 'TextEdit', });
lyr_Taxistandplaatsen200m_2.set('fieldImages', {'id': 'TextEdit', 'Naam': 'TextEdit', });
lyr_Taxistandplaatsen_1.set('fieldLabels', {'id': 'no label', 'Naam': 'no label', });
lyr_Taxistandplaatsen200m_2.set('fieldLabels', {'id': 'no label', 'Naam': 'no label', });
lyr_Taxistandplaatsen200m_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});