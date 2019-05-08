var size = 0;
var placement = 'point';
function categories_Werkingsgebieden_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(141,235,240,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '’t Werftje_KK':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(203,110,47,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '’t Werftje_stu':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(211,59,168,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'd’Oude Stoasie':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(55,77,215,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'De Balsemboom':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(12,123,202,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'De Dijk':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(119,232,108,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Den Breydel':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(195,220,70,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Levensvreugde':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(62,101,240,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Meulewech':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(204,47,99,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Sconevelde':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,204,120,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '\'t Reitje':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(240,140,137,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Ten Boomgaarde':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(225,201,106,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Ter Leyen':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(223,38,239,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Van Volden1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(142,127,215,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Van Volden2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(121,237,199,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Van Volden3':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(161,112,203,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_Werkingsgebieden_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Naam");
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Werkingsgebieden_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
