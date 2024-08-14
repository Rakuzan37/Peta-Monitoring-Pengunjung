var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_terserah_1 = new ol.format.GeoJSON();
var features_terserah_1 = format_terserah_1.readFeatures(json_terserah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_terserah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_terserah_1.addFeatures(features_terserah_1);
var lyr_terserah_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_terserah_1, 
                style: style_terserah_1,
                popuplayertitle: "terserah",
                interactive: false,
                title: '<img src="styles/legend/terserah_1.png" /> Batas Administrasi'
            });
var format_M6_2 = new ol.format.GeoJSON();
var features_M6_2 = format_M6_2.readFeatures(json_M6_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_M6_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_M6_2.addFeatures(features_M6_2);
var lyr_M6_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_M6_2, 
                style: style_M6_2,
                popuplayertitle: "5 - 11 Agustus 2024",
                interactive: true,
    title: '5 - 11 Agustus 2024<br />'
        });
var format_M5_3 = new ol.format.GeoJSON();
var features_M5_3 = format_M5_3.readFeatures(json_M5_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_M5_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_M5_3.addFeatures(features_M5_3);
var lyr_M5_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_M5_3, 
                style: style_M5_3,
                popuplayertitle: "29 Juli - 4 Agustus 2024",
                interactive: true,
    title: '29 Juli - 4 Agustus 2024<br />'
        });
var format_M4_4 = new ol.format.GeoJSON();
var features_M4_4 = format_M4_4.readFeatures(json_M4_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_M4_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_M4_4.addFeatures(features_M4_4);
var lyr_M4_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_M4_4, 
                style: style_M4_4,
                popuplayertitle: "22 - 28 Juli 2024",
                interactive: true,
    title: '22 - 28 Juli 2024<br />'
        });
var format_M3_5 = new ol.format.GeoJSON();
var features_M3_5 = format_M3_5.readFeatures(json_M3_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_M3_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_M3_5.addFeatures(features_M3_5);
var lyr_M3_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_M3_5, 
                style: style_M3_5,
                popuplayertitle: "15 - 21 Juli 2024",
                interactive: true,
    title: '15 - 21 Juli 2024<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_terserah_1.setVisible(true);lyr_M6_2.setVisible(true);lyr_M5_3.setVisible(true);lyr_M4_4.setVisible(true);lyr_M3_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_terserah_1,lyr_M6_2,lyr_M5_3,lyr_M4_4,lyr_M3_5];
lyr_terserah_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_M6_2.set('fieldAliases', {'fid': 'fid', 'Nama Wisata': 'Nama Wisata', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Rata-rata Pengunjung': 'Rata-rata Pengunjung', 'Fasilitas': 'Fasilitas', 'Kebersihan': 'Kebersihan', 'Pelayanan': 'Pelayanan', 'HTM': 'HTM', 'Tingkat Rekomendasi': 'Tingkat Rekomendasi', });
lyr_M5_3.set('fieldAliases', {'fid': 'fid', 'Nama Wisata': 'Nama Wisata', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Rata-rata Pengunjung': 'Rata-rata Pengunjung', 'Fasilitas': 'Fasilitas', 'Kebersihan': 'Kebersihan', 'Pelayanan': 'Pelayanan', 'HTM': 'HTM', 'Tingkat Rekomendasi': 'Tingkat Rekomendasi', });
lyr_M4_4.set('fieldAliases', {'fid': 'fid', 'Nama Wisata': 'Nama Wisata', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Rata-rata Pengunjung': 'Rata-rata Pengunjung', 'Fasilitas': 'Fasilitas', 'Kebersihan': 'Kebersihan', 'Pelayanan': 'Pelayanan', 'HTM': 'HTM', 'Tingkat Rekomendasi': 'Tingkat Rekomendasi', });
lyr_M3_5.set('fieldAliases', {'fid': 'fid', 'Nama Wisata': 'Nama Wisata', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Rata-rata Pengunjung': 'Rata-rata Pengunjung', 'Fasilitas': 'Fasilitas', 'Kebersihan': 'Kebersihan', 'Pelayanan': 'Pelayanan', 'HTM': 'HTM', 'Tingkat Rekomendasi': 'Tingkat Rekomendasi', });
lyr_terserah_1.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'LUAS': '', });
lyr_M6_2.set('fieldImages', {'fid': 'TextEdit', 'Nama Wisata': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Rata-rata Pengunjung': 'TextEdit', 'Fasilitas': 'TextEdit', 'Kebersihan': 'TextEdit', 'Pelayanan': 'TextEdit', 'HTM': 'TextEdit', 'Tingkat Rekomendasi': 'TextEdit', });
lyr_M5_3.set('fieldImages', {'fid': 'TextEdit', 'Nama Wisata': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Rata-rata Pengunjung': 'TextEdit', 'Fasilitas': 'TextEdit', 'Kebersihan': 'TextEdit', 'Pelayanan': 'TextEdit', 'HTM': 'TextEdit', 'Tingkat Rekomendasi': 'TextEdit', });
lyr_M4_4.set('fieldImages', {'fid': 'TextEdit', 'Nama Wisata': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Rata-rata Pengunjung': 'TextEdit', 'Fasilitas': 'TextEdit', 'Kebersihan': 'TextEdit', 'Pelayanan': 'TextEdit', 'HTM': 'TextEdit', 'Tingkat Rekomendasi': 'TextEdit', });
lyr_M3_5.set('fieldImages', {'fid': 'TextEdit', 'Nama Wisata': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Rata-rata Pengunjung': 'TextEdit', 'Fasilitas': 'TextEdit', 'Kebersihan': 'TextEdit', 'Pelayanan': 'TextEdit', 'HTM': 'TextEdit', 'Tingkat Rekomendasi': 'TextEdit', });
lyr_terserah_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_M6_2.set('fieldLabels', {'fid': 'hidden field', 'Nama Wisata': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Rata-rata Pengunjung': 'inline label - always visible', 'Fasilitas': 'inline label - always visible', 'Kebersihan': 'inline label - always visible', 'Pelayanan': 'inline label - always visible', 'HTM': 'inline label - always visible', 'Tingkat Rekomendasi': 'inline label - always visible', });
lyr_M5_3.set('fieldLabels', {'fid': 'hidden field', 'Nama Wisata': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Rata-rata Pengunjung': 'inline label - always visible', 'Fasilitas': 'inline label - always visible', 'Kebersihan': 'inline label - always visible', 'Pelayanan': 'inline label - always visible', 'HTM': 'inline label - always visible', 'Tingkat Rekomendasi': 'inline label - always visible', });
lyr_M4_4.set('fieldLabels', {'fid': 'hidden field', 'Nama Wisata': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Rata-rata Pengunjung': 'inline label - always visible', 'Fasilitas': 'inline label - always visible', 'Kebersihan': 'inline label - always visible', 'Pelayanan': 'inline label - always visible', 'HTM': 'inline label - always visible', 'Tingkat Rekomendasi': 'inline label - always visible', });
lyr_M3_5.set('fieldLabels', {'fid': 'hidden field', 'Nama Wisata': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Rata-rata Pengunjung': 'inline label - always visible', 'Fasilitas': 'inline label - always visible', 'Kebersihan': 'inline label - always visible', 'Pelayanan': 'inline label - always visible', 'HTM': 'inline label - always visible', 'Tingkat Rekomendasi': 'inline label - always visible', });
lyr_M3_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});