var wms_layers = [];


        var lyr_googlesatelitee_0 = new ol.layer.Tile({
            'title': 'google satelitee',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_kiedykolwiekIntersect_1 = new ol.format.GeoJSON();
var features_kiedykolwiekIntersect_1 = format_kiedykolwiekIntersect_1.readFeatures(json_kiedykolwiekIntersect_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kiedykolwiekIntersect_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kiedykolwiekIntersect_1.addFeatures(features_kiedykolwiekIntersect_1);
var lyr_kiedykolwiekIntersect_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kiedykolwiekIntersect_1, 
                style: style_kiedykolwiekIntersect_1,
                popuplayertitle: 'kiedykolwiek Intersect',
                interactive: false,
                title: '<img src="styles/legend/kiedykolwiekIntersect_1.png" /> kiedykolwiek Intersect'
            });
var format_zawszeUnion_2 = new ol.format.GeoJSON();
var features_zawszeUnion_2 = format_zawszeUnion_2.readFeatures(json_zawszeUnion_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zawszeUnion_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zawszeUnion_2.addFeatures(features_zawszeUnion_2);
var lyr_zawszeUnion_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zawszeUnion_2, 
                style: style_zawszeUnion_2,
                popuplayertitle: 'zawsze Union',
                interactive: false,
                title: '<img src="styles/legend/zawszeUnion_2.png" /> zawsze Union'
            });
var format_siatkaheksagonw_3 = new ol.format.GeoJSON();
var features_siatkaheksagonw_3 = format_siatkaheksagonw_3.readFeatures(json_siatkaheksagonw_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_siatkaheksagonw_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_siatkaheksagonw_3.addFeatures(features_siatkaheksagonw_3);
var lyr_siatkaheksagonw_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_siatkaheksagonw_3, 
                style: style_siatkaheksagonw_3,
                popuplayertitle: 'siatka heksagonów',
                interactive: false,
    title: 'siatka heksagonów<br />\
    <img src="styles/legend/siatkaheksagonw_3_0.png" /> -100 - -62<br />\
    <img src="styles/legend/siatkaheksagonw_3_1.png" /> -62 - -19<br />\
    <img src="styles/legend/siatkaheksagonw_3_2.png" /> -19 - 18<br />\
    <img src="styles/legend/siatkaheksagonw_3_3.png" /> 18 - 61<br />\
    <img src="styles/legend/siatkaheksagonw_3_4.png" /> 61 - 100<br />'
        });
var format_historyczna_1940_4 = new ol.format.GeoJSON();
var features_historyczna_1940_4 = format_historyczna_1940_4.readFeatures(json_historyczna_1940_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_historyczna_1940_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_historyczna_1940_4.addFeatures(features_historyczna_1940_4);
var lyr_historyczna_1940_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_historyczna_1940_4, 
                style: style_historyczna_1940_4,
                popuplayertitle: 'historyczna_1940',
                interactive: false,
                title: '<img src="styles/legend/historyczna_1940_4.png" /> historyczna_1940'
            });
var format_VMap_2002_5 = new ol.format.GeoJSON();
var features_VMap_2002_5 = format_VMap_2002_5.readFeatures(json_VMap_2002_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VMap_2002_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VMap_2002_5.addFeatures(features_VMap_2002_5);
var lyr_VMap_2002_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VMap_2002_5, 
                style: style_VMap_2002_5,
                popuplayertitle: 'VMap_2002',
                interactive: false,
                title: '<img src="styles/legend/VMap_2002_5.png" /> VMap_2002'
            });
var format_sentinel2_2024_2_6 = new ol.format.GeoJSON();
var features_sentinel2_2024_2_6 = format_sentinel2_2024_2_6.readFeatures(json_sentinel2_2024_2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sentinel2_2024_2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sentinel2_2024_2_6.addFeatures(features_sentinel2_2024_2_6);
var lyr_sentinel2_2024_2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sentinel2_2024_2_6, 
                style: style_sentinel2_2024_2_6,
                popuplayertitle: 'sentinel2_2024_2',
                interactive: false,
                title: '<img src="styles/legend/sentinel2_2024_2_6.png" /> sentinel2_2024_2'
            });

lyr_googlesatelitee_0.setVisible(true);lyr_kiedykolwiekIntersect_1.setVisible(true);lyr_zawszeUnion_2.setVisible(true);lyr_siatkaheksagonw_3.setVisible(true);lyr_historyczna_1940_4.setVisible(true);lyr_VMap_2002_5.setVisible(true);lyr_sentinel2_2024_2_6.setVisible(true);
var layersList = [lyr_googlesatelitee_0,lyr_kiedykolwiekIntersect_1,lyr_zawszeUnion_2,lyr_siatkaheksagonw_3,lyr_historyczna_1940_4,lyr_VMap_2002_5,lyr_sentinel2_2024_2_6];
lyr_kiedykolwiekIntersect_1.set('fieldAliases', {'FID_1940_m': 'FID_1940_m', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'FID_bug_20': 'FID_bug_20', 'Id_1': 'Id_1', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'FID_bug_21': 'FID_bug_21', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_12': 'ID_12', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_zawszeUnion_2.set('fieldAliases', {'FID_1940_m': 'FID_1940_m', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'FID_bug_20': 'FID_bug_20', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_1': 'ID_1', 'FID_bug_21': 'FID_bug_21', 'Id_12': 'Id_12', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_siatkaheksagonw_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'procent_A': 'procent_A', 'procent_B': 'procent_B', 'procent_C': 'procent_C', 'roznica_A_': 'roznica_A_', 'roznica_B_': 'roznica_B_', });
lyr_historyczna_1940_4.set('fieldAliases', {'Id': 'Id', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'obwod': 'obwod', 'pow': 'pow', 'wsp_zw': 'wsp_zw', });
lyr_VMap_2002_5.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'obwod': 'obwod', 'pow': 'pow', 'wsp_zw': 'wsp_zw', });
lyr_sentinel2_2024_2_6.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'InPoly_FID': 'InPoly_FID', 'obwod': 'obwod', 'pow': 'pow', 'wsp_zw': 'wsp_zw', });
lyr_kiedykolwiekIntersect_1.set('fieldImages', {'FID_1940_m': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'FID_bug_20': 'TextEdit', 'Id_1': 'TextEdit', 'gridcode': 'TextEdit', 'InPoly_FID': 'TextEdit', 'FID_bug_21': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_12': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_zawszeUnion_2.set('fieldImages', {'FID_1940_m': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'FID_bug_20': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_1': 'TextEdit', 'FID_bug_21': 'TextEdit', 'Id_12': 'TextEdit', 'gridcode': 'TextEdit', 'InPoly_FID': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_siatkaheksagonw_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'procent_A': 'TextEdit', 'procent_B': 'TextEdit', 'procent_C': 'TextEdit', 'roznica_A_': 'TextEdit', 'roznica_B_': 'TextEdit', });
lyr_historyczna_1940_4.set('fieldImages', {'Id': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'obwod': 'TextEdit', 'pow': 'TextEdit', 'wsp_zw': 'TextEdit', });
lyr_VMap_2002_5.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'obwod': 'TextEdit', 'pow': 'TextEdit', 'wsp_zw': 'TextEdit', });
lyr_sentinel2_2024_2_6.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'InPoly_FID': 'TextEdit', 'obwod': 'TextEdit', 'pow': 'TextEdit', 'wsp_zw': 'TextEdit', });
lyr_kiedykolwiekIntersect_1.set('fieldLabels', {'FID_1940_m': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'FID_bug_20': 'no label', 'Id_1': 'no label', 'gridcode': 'no label', 'InPoly_FID': 'no label', 'FID_bug_21': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_12': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_zawszeUnion_2.set('fieldLabels', {'FID_1940_m': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'FID_bug_20': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_1': 'no label', 'FID_bug_21': 'no label', 'Id_12': 'no label', 'gridcode': 'no label', 'InPoly_FID': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_siatkaheksagonw_3.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'GRID_ID': 'no label', 'procent_A': 'no label', 'procent_B': 'no label', 'procent_C': 'no label', 'roznica_A_': 'no label', 'roznica_B_': 'no label', });
lyr_historyczna_1940_4.set('fieldLabels', {'Id': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'obwod': 'no label', 'pow': 'no label', 'wsp_zw': 'no label', });
lyr_VMap_2002_5.set('fieldLabels', {'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'obwod': 'no label', 'pow': 'no label', 'wsp_zw': 'no label', });
lyr_sentinel2_2024_2_6.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'InPoly_FID': 'no label', 'obwod': 'no label', 'pow': 'no label', 'wsp_zw': 'no label', });
lyr_sentinel2_2024_2_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});