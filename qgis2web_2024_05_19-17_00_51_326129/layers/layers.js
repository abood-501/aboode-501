ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([3554808.224933, 1765790.485075, 6481809.715767, 3832539.098725]);
var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: "السعودية",
                interactive: true,
    title: 'السعودية<br />\
    <img src="styles/legend/_0_0.png" /> ١٩.٩٠ - ٢٩.٨٨<br />\
    <img src="styles/legend/_0_1.png" /> ٢٩.٨٨ - ٣٠.٣٦<br />\
    <img src="styles/legend/_0_2.png" /> ٣٠.٣٦ - ٣٤.١٤<br />\
    <img src="styles/legend/_0_3.png" /> ٣٤.١٤ - ٣٤.٨٢<br />\
    <img src="styles/legend/_0_4.png" /> ٣٤.٨٢ - ٣٥.٤٠<br />'
        });

lyr__0.setVisible(true);
var layersList = [lyr__0];
lyr__0.set('fieldAliases', {'fid': 'fid', 'المنطقة': 'المنطقة', 'متوسط درجة الحراره الكبرى': 'متوسط درجة الحراره الكبرى', 'متوسط كميات الامطار': 'متوسط كميات الامطار', 'متوسط درجة الحراره الصغرى ': 'متوسط درجة الحراره الصغرى ', });
lyr__0.set('fieldImages', {'fid': 'TextEdit', 'المنطقة': 'TextEdit', 'متوسط درجة الحراره الكبرى': 'TextEdit', 'متوسط كميات الامطار': 'TextEdit', 'متوسط درجة الحراره الصغرى ': 'TextEdit', });
lyr__0.set('fieldLabels', {'fid': 'no label', 'المنطقة': 'inline label - visible with data', 'متوسط درجة الحراره الكبرى': 'inline label - visible with data', 'متوسط كميات الامطار': 'inline label - visible with data', 'متوسط درجة الحراره الصغرى ': 'inline label - visible with data', });
lyr__0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});