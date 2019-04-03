var wms_layers = [];
var format_Taxistandplaatsen_0 = new ol.format.GeoJSON();
var features_Taxistandplaatsen_0 = format_Taxistandplaatsen_0.readFeatures(json_Taxistandplaatsen_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taxistandplaatsen_0 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Taxistandplaatsen_0.addFeatures(features_Taxistandplaatsen_0);var lyr_Taxistandplaatsen_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Taxistandplaatsen_0, 
                style: style_Taxistandplaatsen_0,
                title: '<img src="styles/legend/Taxistandplaatsen_0.png" /> Taxistandplaatsen'
            });var format_Taxistandplaatsen200m_1 = new ol.format.GeoJSON();
var features_Taxistandplaatsen200m_1 = format_Taxistandplaatsen200m_1.readFeatures(json_Taxistandplaatsen200m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taxistandplaatsen200m_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Taxistandplaatsen200m_1.addFeatures(features_Taxistandplaatsen200m_1);var lyr_Taxistandplaatsen200m_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Taxistandplaatsen200m_1, 
                style: style_Taxistandplaatsen200m_1,
                title: '<img src="styles/legend/Taxistandplaatsen200m_1.png" /> Taxistandplaatsen200m'
            });

lyr_Taxistandplaatsen_0.setVisible(true);lyr_Taxistandplaatsen200m_1.setVisible(true);
var layersList = [lyr_Taxistandplaatsen_0,lyr_Taxistandplaatsen200m_1];
lyr_Taxistandplaatsen_0.set('fieldAliases', {'id': 'id', 'Naam': 'Naam', });
lyr_Taxistandplaatsen200m_1.set('fieldAliases', {'id': 'id', 'Naam': 'Naam', });
lyr_Taxistandplaatsen_0.set('fieldImages', {'id': 'TextEdit', 'Naam': 'TextEdit', });
lyr_Taxistandplaatsen200m_1.set('fieldImages', {'id': 'TextEdit', 'Naam': 'TextEdit', });
lyr_Taxistandplaatsen_0.set('fieldLabels', {'id': 'no label', 'Naam': 'no label', });
lyr_Taxistandplaatsen200m_1.set('fieldLabels', {'id': 'no label', 'Naam': 'no label', });
lyr_Taxistandplaatsen200m_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});