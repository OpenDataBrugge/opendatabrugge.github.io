var wms_layers = [];
var format_B_CaPa_0 = new ol.format.GeoJSON();
var features_B_CaPa_0 = format_B_CaPa_0.readFeatures(json_B_CaPa_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B_CaPa_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_B_CaPa_0.addFeatures(features_B_CaPa_0);var lyr_B_CaPa_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_B_CaPa_0, 
                style: style_B_CaPa_0,
                title: '<img src="styles/legend/B_CaPa_0.png" /> B_CaPa'
            });var format_KAD_CAPAKEY_5_1 = new ol.format.GeoJSON();
var features_KAD_CAPAKEY_5_1 = format_KAD_CAPAKEY_5_1.readFeatures(json_KAD_CAPAKEY_5_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAD_CAPAKEY_5_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KAD_CAPAKEY_5_1.addFeatures(features_KAD_CAPAKEY_5_1);var lyr_KAD_CAPAKEY_5_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KAD_CAPAKEY_5_1, 
                style: style_KAD_CAPAKEY_5_1,
                title: '<img src="styles/legend/KAD_CAPAKEY_5_1.png" /> KAD_CAPAKEY_5'
            });var format_KAD_CAPAKEY_4_2 = new ol.format.GeoJSON();
var features_KAD_CAPAKEY_4_2 = format_KAD_CAPAKEY_4_2.readFeatures(json_KAD_CAPAKEY_4_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAD_CAPAKEY_4_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KAD_CAPAKEY_4_2.addFeatures(features_KAD_CAPAKEY_4_2);var lyr_KAD_CAPAKEY_4_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KAD_CAPAKEY_4_2, 
                style: style_KAD_CAPAKEY_4_2,
                title: '<img src="styles/legend/KAD_CAPAKEY_4_2.png" /> KAD_CAPAKEY_4'
            });var format_KAD_CAPAKEY_3_3 = new ol.format.GeoJSON();
var features_KAD_CAPAKEY_3_3 = format_KAD_CAPAKEY_3_3.readFeatures(json_KAD_CAPAKEY_3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAD_CAPAKEY_3_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KAD_CAPAKEY_3_3.addFeatures(features_KAD_CAPAKEY_3_3);var lyr_KAD_CAPAKEY_3_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KAD_CAPAKEY_3_3, 
                style: style_KAD_CAPAKEY_3_3,
                title: '<img src="styles/legend/KAD_CAPAKEY_3_3.png" /> KAD_CAPAKEY_3'
            });var format_KAD_CAPAKEY_2_4 = new ol.format.GeoJSON();
var features_KAD_CAPAKEY_2_4 = format_KAD_CAPAKEY_2_4.readFeatures(json_KAD_CAPAKEY_2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAD_CAPAKEY_2_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KAD_CAPAKEY_2_4.addFeatures(features_KAD_CAPAKEY_2_4);var lyr_KAD_CAPAKEY_2_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KAD_CAPAKEY_2_4, 
                style: style_KAD_CAPAKEY_2_4,
                title: '<img src="styles/legend/KAD_CAPAKEY_2_4.png" /> KAD_CAPAKEY_2'
            });var format_KAD_CAPAKEY_1_5 = new ol.format.GeoJSON();
var features_KAD_CAPAKEY_1_5 = format_KAD_CAPAKEY_1_5.readFeatures(json_KAD_CAPAKEY_1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAD_CAPAKEY_1_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KAD_CAPAKEY_1_5.addFeatures(features_KAD_CAPAKEY_1_5);var lyr_KAD_CAPAKEY_1_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KAD_CAPAKEY_1_5, 
                style: style_KAD_CAPAKEY_1_5,
                title: '<img src="styles/legend/KAD_CAPAKEY_1_5.png" /> KAD_CAPAKEY_1'
            });

lyr_B_CaPa_0.setVisible(true);lyr_KAD_CAPAKEY_5_1.setVisible(true);lyr_KAD_CAPAKEY_4_2.setVisible(true);lyr_KAD_CAPAKEY_3_3.setVisible(true);lyr_KAD_CAPAKEY_2_4.setVisible(true);lyr_KAD_CAPAKEY_1_5.setVisible(true);
var layersList = [lyr_B_CaPa_0,lyr_KAD_CAPAKEY_5_1,lyr_KAD_CAPAKEY_4_2,lyr_KAD_CAPAKEY_3_3,lyr_KAD_CAPAKEY_2_4,lyr_KAD_CAPAKEY_1_5];
lyr_B_CaPa_0.set('fieldAliases', {'CAPAKEY': 'CAPAKEY', 'CAPATY': 'CAPATY', 'SHAPE_AREA': 'SHAPE_AREA', 'SHEET': 'SHEET', });
lyr_KAD_CAPAKEY_5_1.set('fieldAliases', {'ID': 'ID', 'CAPAKEY': 'CAPAKEY', });
lyr_KAD_CAPAKEY_4_2.set('fieldAliases', {'ID': 'ID', 'CAPAKEY': 'CAPAKEY', });
lyr_KAD_CAPAKEY_3_3.set('fieldAliases', {'ID': 'ID', 'CAPAKEY': 'CAPAKEY', });
lyr_KAD_CAPAKEY_2_4.set('fieldAliases', {'ID': 'ID', 'CAPAKEY': 'CAPAKEY', });
lyr_KAD_CAPAKEY_1_5.set('fieldAliases', {'ID': 'ID', 'CAPAKEY': 'CAPAKEY', });
lyr_B_CaPa_0.set('fieldImages', {'CAPAKEY': 'TextEdit', 'CAPATY': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHEET': 'TextEdit', });
lyr_KAD_CAPAKEY_5_1.set('fieldImages', {'ID': 'TextEdit', 'CAPAKEY': 'TextEdit', });
lyr_KAD_CAPAKEY_4_2.set('fieldImages', {'ID': 'TextEdit', 'CAPAKEY': 'TextEdit', });
lyr_KAD_CAPAKEY_3_3.set('fieldImages', {'ID': 'TextEdit', 'CAPAKEY': 'TextEdit', });
lyr_KAD_CAPAKEY_2_4.set('fieldImages', {'ID': 'TextEdit', 'CAPAKEY': 'TextEdit', });
lyr_KAD_CAPAKEY_1_5.set('fieldImages', {'ID': 'TextEdit', 'CAPAKEY': 'TextEdit', });
lyr_B_CaPa_0.set('fieldLabels', {'CAPAKEY': 'no label', 'CAPATY': 'no label', 'SHAPE_AREA': 'no label', 'SHEET': 'no label', });
lyr_KAD_CAPAKEY_5_1.set('fieldLabels', {'ID': 'no label', 'CAPAKEY': 'no label', });
lyr_KAD_CAPAKEY_4_2.set('fieldLabels', {'ID': 'no label', 'CAPAKEY': 'no label', });
lyr_KAD_CAPAKEY_3_3.set('fieldLabels', {'ID': 'no label', 'CAPAKEY': 'no label', });
lyr_KAD_CAPAKEY_2_4.set('fieldLabels', {'ID': 'no label', 'CAPAKEY': 'no label', });
lyr_KAD_CAPAKEY_1_5.set('fieldLabels', {'ID': 'no label', 'CAPAKEY': 'no label', });
lyr_KAD_CAPAKEY_1_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});