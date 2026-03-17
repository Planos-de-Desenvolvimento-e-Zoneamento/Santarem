ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-54.745639, -2.424965, -54.710466, -2.404996]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_UnidadesdeConservao_1 = new ol.format.GeoJSON();
var features_UnidadesdeConservao_1 = format_UnidadesdeConservao_1.readFeatures(json_UnidadesdeConservao_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UnidadesdeConservao_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesdeConservao_1.addFeatures(features_UnidadesdeConservao_1);
var lyr_UnidadesdeConservao_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesdeConservao_1, 
                style: style_UnidadesdeConservao_1,
                popuplayertitle: 'Unidades de Conservação ',
                interactive: true,
                title: '<img src="styles/legend/UnidadesdeConservao_1.png" /> Unidades de Conservação '
            });
var format_FundeadourosLongoPrazo_2 = new ol.format.GeoJSON();
var features_FundeadourosLongoPrazo_2 = format_FundeadourosLongoPrazo_2.readFeatures(json_FundeadourosLongoPrazo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosLongoPrazo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosLongoPrazo_2.addFeatures(features_FundeadourosLongoPrazo_2);
var lyr_FundeadourosLongoPrazo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosLongoPrazo_2, 
                style: style_FundeadourosLongoPrazo_2,
                popuplayertitle: 'Fundeadouros - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosLongoPrazo_2.png" /> Fundeadouros - Longo Prazo '
            });
var format_FundeadourosMdioPrazo_3 = new ol.format.GeoJSON();
var features_FundeadourosMdioPrazo_3 = format_FundeadourosMdioPrazo_3.readFeatures(json_FundeadourosMdioPrazo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosMdioPrazo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosMdioPrazo_3.addFeatures(features_FundeadourosMdioPrazo_3);
var lyr_FundeadourosMdioPrazo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosMdioPrazo_3, 
                style: style_FundeadourosMdioPrazo_3,
                popuplayertitle: 'Fundeadouros - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosMdioPrazo_3.png" /> Fundeadouros - Médio Prazo '
            });
var format_FundeadourosCurtoPrazo_4 = new ol.format.GeoJSON();
var features_FundeadourosCurtoPrazo_4 = format_FundeadourosCurtoPrazo_4.readFeatures(json_FundeadourosCurtoPrazo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosCurtoPrazo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosCurtoPrazo_4.addFeatures(features_FundeadourosCurtoPrazo_4);
var lyr_FundeadourosCurtoPrazo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosCurtoPrazo_4, 
                style: style_FundeadourosCurtoPrazo_4,
                popuplayertitle: 'Fundeadouros - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosCurtoPrazo_4.png" /> Fundeadouros - Curto Prazo '
            });
var format_FundeadourosSituaoAtual_5 = new ol.format.GeoJSON();
var features_FundeadourosSituaoAtual_5 = format_FundeadourosSituaoAtual_5.readFeatures(json_FundeadourosSituaoAtual_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosSituaoAtual_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosSituaoAtual_5.addFeatures(features_FundeadourosSituaoAtual_5);
var lyr_FundeadourosSituaoAtual_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosSituaoAtual_5, 
                style: style_FundeadourosSituaoAtual_5,
                popuplayertitle: 'Fundeadouros - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosSituaoAtual_5.png" /> Fundeadouros - Situação Atual '
            });
var format_BaciasdeEvoluoLongoPrazo_6 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoLongoPrazo_6 = format_BaciasdeEvoluoLongoPrazo_6.readFeatures(json_BaciasdeEvoluoLongoPrazo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoLongoPrazo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoLongoPrazo_6.addFeatures(features_BaciasdeEvoluoLongoPrazo_6);
var lyr_BaciasdeEvoluoLongoPrazo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoLongoPrazo_6, 
                style: style_BaciasdeEvoluoLongoPrazo_6,
                popuplayertitle: 'Bacias de Evolução - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoLongoPrazo_6.png" /> Bacias de Evolução - Longo Prazo '
            });
var format_BaciasdeEvoluoMdioPrazo_7 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoMdioPrazo_7 = format_BaciasdeEvoluoMdioPrazo_7.readFeatures(json_BaciasdeEvoluoMdioPrazo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoMdioPrazo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoMdioPrazo_7.addFeatures(features_BaciasdeEvoluoMdioPrazo_7);
var lyr_BaciasdeEvoluoMdioPrazo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoMdioPrazo_7, 
                style: style_BaciasdeEvoluoMdioPrazo_7,
                popuplayertitle: 'Bacias de Evolução - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoMdioPrazo_7.png" /> Bacias de Evolução - Médio Prazo '
            });
var format_BaciasdeEvoluoCurtoPrazo_8 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoCurtoPrazo_8 = format_BaciasdeEvoluoCurtoPrazo_8.readFeatures(json_BaciasdeEvoluoCurtoPrazo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoCurtoPrazo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoCurtoPrazo_8.addFeatures(features_BaciasdeEvoluoCurtoPrazo_8);
var lyr_BaciasdeEvoluoCurtoPrazo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoCurtoPrazo_8, 
                style: style_BaciasdeEvoluoCurtoPrazo_8,
                popuplayertitle: 'Bacias de Evolução - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoCurtoPrazo_8.png" /> Bacias de Evolução - Curto Prazo '
            });
var format_BaciasdeEvoluoSituaoAtual_9 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoSituaoAtual_9 = format_BaciasdeEvoluoSituaoAtual_9.readFeatures(json_BaciasdeEvoluoSituaoAtual_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoSituaoAtual_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoSituaoAtual_9.addFeatures(features_BaciasdeEvoluoSituaoAtual_9);
var lyr_BaciasdeEvoluoSituaoAtual_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoSituaoAtual_9, 
                style: style_BaciasdeEvoluoSituaoAtual_9,
                popuplayertitle: 'Bacias de Evolução - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoSituaoAtual_9.png" /> Bacias de Evolução - Situação Atual '
            });
var format_CanaisdeAcessoLongoPrazo_10 = new ol.format.GeoJSON();
var features_CanaisdeAcessoLongoPrazo_10 = format_CanaisdeAcessoLongoPrazo_10.readFeatures(json_CanaisdeAcessoLongoPrazo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoLongoPrazo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoLongoPrazo_10.addFeatures(features_CanaisdeAcessoLongoPrazo_10);
var lyr_CanaisdeAcessoLongoPrazo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoLongoPrazo_10, 
                style: style_CanaisdeAcessoLongoPrazo_10,
                popuplayertitle: 'Canais de Acesso - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoLongoPrazo_10.png" /> Canais de Acesso - Longo Prazo '
            });
var format_CanaisdeAcessoMdioPrazo_11 = new ol.format.GeoJSON();
var features_CanaisdeAcessoMdioPrazo_11 = format_CanaisdeAcessoMdioPrazo_11.readFeatures(json_CanaisdeAcessoMdioPrazo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoMdioPrazo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoMdioPrazo_11.addFeatures(features_CanaisdeAcessoMdioPrazo_11);
var lyr_CanaisdeAcessoMdioPrazo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoMdioPrazo_11, 
                style: style_CanaisdeAcessoMdioPrazo_11,
                popuplayertitle: 'Canais de Acesso - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoMdioPrazo_11.png" /> Canais de Acesso - Médio Prazo '
            });
var format_CanaisdeAcessoCurtoPrazo_12 = new ol.format.GeoJSON();
var features_CanaisdeAcessoCurtoPrazo_12 = format_CanaisdeAcessoCurtoPrazo_12.readFeatures(json_CanaisdeAcessoCurtoPrazo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoCurtoPrazo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoCurtoPrazo_12.addFeatures(features_CanaisdeAcessoCurtoPrazo_12);
var lyr_CanaisdeAcessoCurtoPrazo_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoCurtoPrazo_12, 
                style: style_CanaisdeAcessoCurtoPrazo_12,
                popuplayertitle: 'Canais de Acesso - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoCurtoPrazo_12.png" /> Canais de Acesso - Curto Prazo '
            });
var format_CanaisdeAcessoSituaoAtual_13 = new ol.format.GeoJSON();
var features_CanaisdeAcessoSituaoAtual_13 = format_CanaisdeAcessoSituaoAtual_13.readFeatures(json_CanaisdeAcessoSituaoAtual_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoSituaoAtual_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoSituaoAtual_13.addFeatures(features_CanaisdeAcessoSituaoAtual_13);
var lyr_CanaisdeAcessoSituaoAtual_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoSituaoAtual_13, 
                style: style_CanaisdeAcessoSituaoAtual_13,
                popuplayertitle: 'Canais de Acesso - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoSituaoAtual_13.png" /> Canais de Acesso - Situação Atual '
            });
var format_AcessosHidroviriosExternos_14 = new ol.format.GeoJSON();
var features_AcessosHidroviriosExternos_14 = format_AcessosHidroviriosExternos_14.readFeatures(json_AcessosHidroviriosExternos_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosHidroviriosExternos_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosHidroviriosExternos_14.addFeatures(features_AcessosHidroviriosExternos_14);
var lyr_AcessosHidroviriosExternos_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosHidroviriosExternos_14, 
                style: style_AcessosHidroviriosExternos_14,
                popuplayertitle: 'Acessos Hidroviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosHidroviriosExternos_14.png" /> Acessos Hidroviários Externos '
            });
var format_AcessosRodoviriosInternosLongoPrazo_15 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosLongoPrazo_15 = format_AcessosRodoviriosInternosLongoPrazo_15.readFeatures(json_AcessosRodoviriosInternosLongoPrazo_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosLongoPrazo_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosLongoPrazo_15.addFeatures(features_AcessosRodoviriosInternosLongoPrazo_15);
var lyr_AcessosRodoviriosInternosLongoPrazo_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosLongoPrazo_15, 
                style: style_AcessosRodoviriosInternosLongoPrazo_15,
                popuplayertitle: 'Acessos Rodoviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosLongoPrazo_15.png" /> Acessos Rodoviários Internos - Longo Prazo '
            });
var format_AcessosRodoviriosInternosMdioPrazo_16 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosMdioPrazo_16 = format_AcessosRodoviriosInternosMdioPrazo_16.readFeatures(json_AcessosRodoviriosInternosMdioPrazo_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosMdioPrazo_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosMdioPrazo_16.addFeatures(features_AcessosRodoviriosInternosMdioPrazo_16);
var lyr_AcessosRodoviriosInternosMdioPrazo_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosMdioPrazo_16, 
                style: style_AcessosRodoviriosInternosMdioPrazo_16,
                popuplayertitle: 'Acessos Rodoviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosMdioPrazo_16.png" /> Acessos Rodoviários Internos - Médio Prazo '
            });
var format_AcessosRodoviriosInternosCurtoPrazo_17 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosCurtoPrazo_17 = format_AcessosRodoviriosInternosCurtoPrazo_17.readFeatures(json_AcessosRodoviriosInternosCurtoPrazo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosCurtoPrazo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosCurtoPrazo_17.addFeatures(features_AcessosRodoviriosInternosCurtoPrazo_17);
var lyr_AcessosRodoviriosInternosCurtoPrazo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosCurtoPrazo_17, 
                style: style_AcessosRodoviriosInternosCurtoPrazo_17,
                popuplayertitle: 'Acessos Rodoviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosCurtoPrazo_17.png" /> Acessos Rodoviários Internos - Curto Prazo '
            });
var format_AcessosRodoviriosInternosSituaoAtual_18 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosSituaoAtual_18 = format_AcessosRodoviriosInternosSituaoAtual_18.readFeatures(json_AcessosRodoviriosInternosSituaoAtual_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosSituaoAtual_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosSituaoAtual_18.addFeatures(features_AcessosRodoviriosInternosSituaoAtual_18);
var lyr_AcessosRodoviriosInternosSituaoAtual_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosSituaoAtual_18, 
                style: style_AcessosRodoviriosInternosSituaoAtual_18,
                popuplayertitle: 'Acessos Rodoviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosSituaoAtual_18.png" /> Acessos Rodoviários Internos - Situação Atual '
            });
var format_AcessosRodoviriosExternos_19 = new ol.format.GeoJSON();
var features_AcessosRodoviriosExternos_19 = format_AcessosRodoviriosExternos_19.readFeatures(json_AcessosRodoviriosExternos_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosExternos_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosExternos_19.addFeatures(features_AcessosRodoviriosExternos_19);
var lyr_AcessosRodoviriosExternos_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosExternos_19, 
                style: style_AcessosRodoviriosExternos_19,
                popuplayertitle: 'Acessos Rodoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosExternos_19.png" /> Acessos Rodoviários Externos '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual'
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasLongoPrazo_28 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasLongoPrazo_28 = format_reasNoAfetassOperaesPorturiasLongoPrazo_28.readFeatures(json_reasNoAfetassOperaesPorturiasLongoPrazo_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_28.addFeatures(features_reasNoAfetassOperaesPorturiasLongoPrazo_28);
var lyr_reasNoAfetassOperaesPorturiasLongoPrazo_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_28, 
                style: style_reasNoAfetassOperaesPorturiasLongoPrazo_28,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasLongoPrazo_28.png" /> Áreas Não Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasMdioPrazo_29 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasMdioPrazo_29 = format_reasNoAfetassOperaesPorturiasMdioPrazo_29.readFeatures(json_reasNoAfetassOperaesPorturiasMdioPrazo_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_29.addFeatures(features_reasNoAfetassOperaesPorturiasMdioPrazo_29);
var lyr_reasNoAfetassOperaesPorturiasMdioPrazo_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_29, 
                style: style_reasNoAfetassOperaesPorturiasMdioPrazo_29,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasMdioPrazo_29.png" /> Áreas Não Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasCurtoPrazo_30 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasCurtoPrazo_30 = format_reasNoAfetassOperaesPorturiasCurtoPrazo_30.readFeatures(json_reasNoAfetassOperaesPorturiasCurtoPrazo_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_30.addFeatures(features_reasNoAfetassOperaesPorturiasCurtoPrazo_30);
var lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_30, 
                style: style_reasNoAfetassOperaesPorturiasCurtoPrazo_30,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasCurtoPrazo_30.png" /> Áreas Não Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasSituaoAtual_31 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasSituaoAtual_31 = format_reasNoAfetassOperaesPorturiasSituaoAtual_31.readFeatures(json_reasNoAfetassOperaesPorturiasSituaoAtual_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_31.addFeatures(features_reasNoAfetassOperaesPorturiasSituaoAtual_31);
var lyr_reasNoAfetassOperaesPorturiasSituaoAtual_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_31, 
                style: style_reasNoAfetassOperaesPorturiasSituaoAtual_31,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasSituaoAtual_31.png" /> Áreas Não Afetas às Operações Portuárias - Situação Atual '
            });
var format_reaseInstalaesAlfandegadas_32 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadas_32 = format_reaseInstalaesAlfandegadas_32.readFeatures(json_reaseInstalaesAlfandegadas_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reaseInstalaesAlfandegadas_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadas_32.addFeatures(features_reaseInstalaesAlfandegadas_32);
var lyr_reaseInstalaesAlfandegadas_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadas_32, 
                style: style_reaseInstalaesAlfandegadas_32,
                popuplayertitle: 'Áreas e Instalações Alfandegadas ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadas_32.png" /> Áreas e Instalações Alfandegadas '
            });
var format_TerminaldePassageiros_33 = new ol.format.GeoJSON();
var features_TerminaldePassageiros_33 = format_TerminaldePassageiros_33.readFeatures(json_TerminaldePassageiros_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TerminaldePassageiros_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaldePassageiros_33.addFeatures(features_TerminaldePassageiros_33);
var lyr_TerminaldePassageiros_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaldePassageiros_33, 
                style: style_TerminaldePassageiros_33,
                popuplayertitle: 'Terminal de Passageiros ',
                interactive: true,
                title: '<img src="styles/legend/TerminaldePassageiros_33.png" /> Terminal de Passageiros '
            });
var format_AcostagemLongoPrazo_34 = new ol.format.GeoJSON();
var features_AcostagemLongoPrazo_34 = format_AcostagemLongoPrazo_34.readFeatures(json_AcostagemLongoPrazo_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemLongoPrazo_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemLongoPrazo_34.addFeatures(features_AcostagemLongoPrazo_34);
var lyr_AcostagemLongoPrazo_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemLongoPrazo_34, 
                style: style_AcostagemLongoPrazo_34,
                popuplayertitle: 'Acostagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemLongoPrazo_34.png" /> Acostagem - Longo Prazo '
            });
var format_AcostagemMdioPrazo_35 = new ol.format.GeoJSON();
var features_AcostagemMdioPrazo_35 = format_AcostagemMdioPrazo_35.readFeatures(json_AcostagemMdioPrazo_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemMdioPrazo_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemMdioPrazo_35.addFeatures(features_AcostagemMdioPrazo_35);
var lyr_AcostagemMdioPrazo_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemMdioPrazo_35, 
                style: style_AcostagemMdioPrazo_35,
                popuplayertitle: 'Acostagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemMdioPrazo_35.png" /> Acostagem - Médio Prazo '
            });
var format_AcostagemCurtoPrazo_36 = new ol.format.GeoJSON();
var features_AcostagemCurtoPrazo_36 = format_AcostagemCurtoPrazo_36.readFeatures(json_AcostagemCurtoPrazo_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemCurtoPrazo_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemCurtoPrazo_36.addFeatures(features_AcostagemCurtoPrazo_36);
var lyr_AcostagemCurtoPrazo_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemCurtoPrazo_36, 
                style: style_AcostagemCurtoPrazo_36,
                popuplayertitle: 'Acostagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemCurtoPrazo_36.png" /> Acostagem - Curto Prazo '
            });
var format_AcostagemSituaoAtual_37 = new ol.format.GeoJSON();
var features_AcostagemSituaoAtual_37 = format_AcostagemSituaoAtual_37.readFeatures(json_AcostagemSituaoAtual_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemSituaoAtual_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemSituaoAtual_37.addFeatures(features_AcostagemSituaoAtual_37);
var lyr_AcostagemSituaoAtual_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemSituaoAtual_37, 
                style: style_AcostagemSituaoAtual_37,
                popuplayertitle: 'Acostagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemSituaoAtual_37.png" /> Acostagem - Situação Atual '
            });
var format_ArmazenagemLongoPrazo_38 = new ol.format.GeoJSON();
var features_ArmazenagemLongoPrazo_38 = format_ArmazenagemLongoPrazo_38.readFeatures(json_ArmazenagemLongoPrazo_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemLongoPrazo_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemLongoPrazo_38.addFeatures(features_ArmazenagemLongoPrazo_38);
var lyr_ArmazenagemLongoPrazo_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemLongoPrazo_38, 
                style: style_ArmazenagemLongoPrazo_38,
                popuplayertitle: 'Armazenagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemLongoPrazo_38.png" /> Armazenagem - Longo Prazo '
            });
var format_ArmazenagemMdioPrazo_39 = new ol.format.GeoJSON();
var features_ArmazenagemMdioPrazo_39 = format_ArmazenagemMdioPrazo_39.readFeatures(json_ArmazenagemMdioPrazo_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemMdioPrazo_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemMdioPrazo_39.addFeatures(features_ArmazenagemMdioPrazo_39);
var lyr_ArmazenagemMdioPrazo_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemMdioPrazo_39, 
                style: style_ArmazenagemMdioPrazo_39,
                popuplayertitle: 'Armazenagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemMdioPrazo_39.png" /> Armazenagem - Médio Prazo '
            });
var format_ArmazenagemCurtoPrazo_40 = new ol.format.GeoJSON();
var features_ArmazenagemCurtoPrazo_40 = format_ArmazenagemCurtoPrazo_40.readFeatures(json_ArmazenagemCurtoPrazo_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemCurtoPrazo_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemCurtoPrazo_40.addFeatures(features_ArmazenagemCurtoPrazo_40);
var lyr_ArmazenagemCurtoPrazo_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemCurtoPrazo_40, 
                style: style_ArmazenagemCurtoPrazo_40,
                popuplayertitle: 'Armazenagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemCurtoPrazo_40.png" /> Armazenagem - Curto Prazo '
            });
var format_ArmazenagemSituaoAtual_41 = new ol.format.GeoJSON();
var features_ArmazenagemSituaoAtual_41 = format_ArmazenagemSituaoAtual_41.readFeatures(json_ArmazenagemSituaoAtual_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemSituaoAtual_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemSituaoAtual_41.addFeatures(features_ArmazenagemSituaoAtual_41);
var lyr_ArmazenagemSituaoAtual_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemSituaoAtual_41, 
                style: style_ArmazenagemSituaoAtual_41,
                popuplayertitle: 'Armazenagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemSituaoAtual_41.png" /> Armazenagem - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_46 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_46 = format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_46.readFeatures(json_reasAfetassOperaesPorturiasArrendadasLongoPrazo_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_46.addFeatures(features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_46);
var lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_46, 
                style: style_reasAfetassOperaesPorturiasArrendadasLongoPrazo_46,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasLongoPrazo_46.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_47 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_47 = format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_47.readFeatures(json_reasAfetassOperaesPorturiasArrendadasMdioPrazo_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_47.addFeatures(features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_47);
var lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_47, 
                style: style_reasAfetassOperaesPorturiasArrendadasMdioPrazo_47,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasMdioPrazo_47.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_48 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_48 = format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_48.readFeatures(json_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_48.addFeatures(features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_48);
var lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_48, 
                style: style_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_48,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasCurtoPrazo_48.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_49 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_49 = format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_49.readFeatures(json_reasAfetassOperaesPorturiasArrendadasSituaoAtual_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_49.addFeatures(features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_49);
var lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_49, 
                style: style_reasAfetassOperaesPorturiasArrendadasSituaoAtual_49,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasSituaoAtual_49.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual'
            });
var format_GranelGasoso_50 = new ol.format.GeoJSON();
var features_GranelGasoso_50 = format_GranelGasoso_50.readFeatures(json_GranelGasoso_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelGasoso_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelGasoso_50.addFeatures(features_GranelGasoso_50);
var lyr_GranelGasoso_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelGasoso_50, 
                style: style_GranelGasoso_50,
                popuplayertitle: 'Granel Gasoso',
                interactive: true,
                title: '<img src="styles/legend/GranelGasoso_50.png" /> Granel Gasoso'
            });
var format_GranelLquido_51 = new ol.format.GeoJSON();
var features_GranelLquido_51 = format_GranelLquido_51.readFeatures(json_GranelLquido_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquido_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquido_51.addFeatures(features_GranelLquido_51);
var lyr_GranelLquido_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquido_51, 
                style: style_GranelLquido_51,
                popuplayertitle: 'Granel Líquido',
                interactive: true,
                title: '<img src="styles/legend/GranelLquido_51.png" /> Granel Líquido'
            });
var format_GranelSlido_52 = new ol.format.GeoJSON();
var features_GranelSlido_52 = format_GranelSlido_52.readFeatures(json_GranelSlido_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlido_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_52.addFeatures(features_GranelSlido_52);
var lyr_GranelSlido_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_52, 
                style: style_GranelSlido_52,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_52.png" /> Granel Sólido'
            });
var format_MltiploUso_53 = new ol.format.GeoJSON();
var features_MltiploUso_53 = format_MltiploUso_53.readFeatures(json_MltiploUso_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MltiploUso_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MltiploUso_53.addFeatures(features_MltiploUso_53);
var lyr_MltiploUso_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MltiploUso_53, 
                style: style_MltiploUso_53,
                popuplayertitle: 'Múltiplo Uso',
                interactive: true,
                title: '<img src="styles/legend/MltiploUso_53.png" /> Múltiplo Uso'
            });
var format_GranelGasoso_54 = new ol.format.GeoJSON();
var features_GranelGasoso_54 = format_GranelGasoso_54.readFeatures(json_GranelGasoso_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelGasoso_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelGasoso_54.addFeatures(features_GranelGasoso_54);
var lyr_GranelGasoso_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelGasoso_54, 
                style: style_GranelGasoso_54,
                popuplayertitle: 'Granel Gasoso',
                interactive: true,
                title: '<img src="styles/legend/GranelGasoso_54.png" /> Granel Gasoso'
            });
var format_GranelLquido_55 = new ol.format.GeoJSON();
var features_GranelLquido_55 = format_GranelLquido_55.readFeatures(json_GranelLquido_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquido_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquido_55.addFeatures(features_GranelLquido_55);
var lyr_GranelLquido_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquido_55, 
                style: style_GranelLquido_55,
                popuplayertitle: 'Granel Líquido',
                interactive: true,
                title: '<img src="styles/legend/GranelLquido_55.png" /> Granel Líquido'
            });
var format_GranelSlido_56 = new ol.format.GeoJSON();
var features_GranelSlido_56 = format_GranelSlido_56.readFeatures(json_GranelSlido_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlido_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_56.addFeatures(features_GranelSlido_56);
var lyr_GranelSlido_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_56, 
                style: style_GranelSlido_56,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_56.png" /> Granel Sólido'
            });
var format_MltiploUso_57 = new ol.format.GeoJSON();
var features_MltiploUso_57 = format_MltiploUso_57.readFeatures(json_MltiploUso_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MltiploUso_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MltiploUso_57.addFeatures(features_MltiploUso_57);
var lyr_MltiploUso_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MltiploUso_57, 
                style: style_MltiploUso_57,
                popuplayertitle: 'Múltiplo Uso',
                interactive: true,
                title: '<img src="styles/legend/MltiploUso_57.png" /> Múltiplo Uso'
            });
var format_GranelGasoso_58 = new ol.format.GeoJSON();
var features_GranelGasoso_58 = format_GranelGasoso_58.readFeatures(json_GranelGasoso_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelGasoso_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelGasoso_58.addFeatures(features_GranelGasoso_58);
var lyr_GranelGasoso_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelGasoso_58, 
                style: style_GranelGasoso_58,
                popuplayertitle: 'Granel Gasoso',
                interactive: true,
                title: '<img src="styles/legend/GranelGasoso_58.png" /> Granel Gasoso'
            });
var format_GranelLquido_59 = new ol.format.GeoJSON();
var features_GranelLquido_59 = format_GranelLquido_59.readFeatures(json_GranelLquido_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquido_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquido_59.addFeatures(features_GranelLquido_59);
var lyr_GranelLquido_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquido_59, 
                style: style_GranelLquido_59,
                popuplayertitle: 'Granel Líquido',
                interactive: true,
                title: '<img src="styles/legend/GranelLquido_59.png" /> Granel Líquido'
            });
var format_GranelSlido_60 = new ol.format.GeoJSON();
var features_GranelSlido_60 = format_GranelSlido_60.readFeatures(json_GranelSlido_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlido_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_60.addFeatures(features_GranelSlido_60);
var lyr_GranelSlido_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_60, 
                style: style_GranelSlido_60,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_60.png" /> Granel Sólido'
            });
var format_MltiploUso_61 = new ol.format.GeoJSON();
var features_MltiploUso_61 = format_MltiploUso_61.readFeatures(json_MltiploUso_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MltiploUso_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MltiploUso_61.addFeatures(features_MltiploUso_61);
var lyr_MltiploUso_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MltiploUso_61, 
                style: style_MltiploUso_61,
                popuplayertitle: 'Múltiplo Uso',
                interactive: true,
                title: '<img src="styles/legend/MltiploUso_61.png" /> Múltiplo Uso'
            });
var format_Passageiros_62 = new ol.format.GeoJSON();
var features_Passageiros_62 = format_Passageiros_62.readFeatures(json_Passageiros_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Passageiros_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passageiros_62.addFeatures(features_Passageiros_62);
var lyr_Passageiros_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Passageiros_62, 
                style: style_Passageiros_62,
                popuplayertitle: 'Passageiros',
                interactive: true,
                title: '<img src="styles/legend/Passageiros_62.png" /> Passageiros'
            });
var format_GranelGasoso_63 = new ol.format.GeoJSON();
var features_GranelGasoso_63 = format_GranelGasoso_63.readFeatures(json_GranelGasoso_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelGasoso_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelGasoso_63.addFeatures(features_GranelGasoso_63);
var lyr_GranelGasoso_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelGasoso_63, 
                style: style_GranelGasoso_63,
                popuplayertitle: 'Granel Gasoso',
                interactive: true,
                title: '<img src="styles/legend/GranelGasoso_63.png" /> Granel Gasoso'
            });
var format_GranelLquido_64 = new ol.format.GeoJSON();
var features_GranelLquido_64 = format_GranelLquido_64.readFeatures(json_GranelLquido_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquido_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquido_64.addFeatures(features_GranelLquido_64);
var lyr_GranelLquido_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquido_64, 
                style: style_GranelLquido_64,
                popuplayertitle: 'Granel Líquido',
                interactive: true,
                title: '<img src="styles/legend/GranelLquido_64.png" /> Granel Líquido'
            });
var format_GranelSlido_65 = new ol.format.GeoJSON();
var features_GranelSlido_65 = format_GranelSlido_65.readFeatures(json_GranelSlido_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlido_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_65.addFeatures(features_GranelSlido_65);
var lyr_GranelSlido_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_65, 
                style: style_GranelSlido_65,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_65.png" /> Granel Sólido'
            });
var format_MltiploUso_66 = new ol.format.GeoJSON();
var features_MltiploUso_66 = format_MltiploUso_66.readFeatures(json_MltiploUso_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MltiploUso_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MltiploUso_66.addFeatures(features_MltiploUso_66);
var lyr_MltiploUso_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MltiploUso_66, 
                style: style_MltiploUso_66,
                popuplayertitle: 'Múltiplo Uso',
                interactive: true,
                title: '<img src="styles/legend/MltiploUso_66.png" /> Múltiplo Uso'
            });
var format_reasAfetassOperaesPorturiasLongoPrazo_67 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasLongoPrazo_67 = format_reasAfetassOperaesPorturiasLongoPrazo_67.readFeatures(json_reasAfetassOperaesPorturiasLongoPrazo_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasLongoPrazo_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasLongoPrazo_67.addFeatures(features_reasAfetassOperaesPorturiasLongoPrazo_67);
var lyr_reasAfetassOperaesPorturiasLongoPrazo_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasLongoPrazo_67, 
                style: style_reasAfetassOperaesPorturiasLongoPrazo_67,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasLongoPrazo_67.png" /> Áreas Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasMdioPrazo_68 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasMdioPrazo_68 = format_reasAfetassOperaesPorturiasMdioPrazo_68.readFeatures(json_reasAfetassOperaesPorturiasMdioPrazo_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasMdioPrazo_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasMdioPrazo_68.addFeatures(features_reasAfetassOperaesPorturiasMdioPrazo_68);
var lyr_reasAfetassOperaesPorturiasMdioPrazo_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasMdioPrazo_68, 
                style: style_reasAfetassOperaesPorturiasMdioPrazo_68,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasMdioPrazo_68.png" /> Áreas Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasCurtoPrazo_69 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasCurtoPrazo_69 = format_reasAfetassOperaesPorturiasCurtoPrazo_69.readFeatures(json_reasAfetassOperaesPorturiasCurtoPrazo_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_69.addFeatures(features_reasAfetassOperaesPorturiasCurtoPrazo_69);
var lyr_reasAfetassOperaesPorturiasCurtoPrazo_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_69, 
                style: style_reasAfetassOperaesPorturiasCurtoPrazo_69,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasCurtoPrazo_69.png" /> Áreas Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasSituaoAtual_70 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasSituaoAtual_70 = format_reasAfetassOperaesPorturiasSituaoAtual_70.readFeatures(json_reasAfetassOperaesPorturiasSituaoAtual_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasSituaoAtual_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasSituaoAtual_70.addFeatures(features_reasAfetassOperaesPorturiasSituaoAtual_70);
var lyr_reasAfetassOperaesPorturiasSituaoAtual_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasSituaoAtual_70, 
                style: style_reasAfetassOperaesPorturiasSituaoAtual_70,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasSituaoAtual_70.png" /> Áreas Afetas às Operações Portuárias - Situação Atual '
            });
var format_PoligonaldareadoPortoOrganizado_71 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizado_71 = format_PoligonaldareadoPortoOrganizado_71.readFeatures(json_PoligonaldareadoPortoOrganizado_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PoligonaldareadoPortoOrganizado_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizado_71.addFeatures(features_PoligonaldareadoPortoOrganizado_71);
var lyr_PoligonaldareadoPortoOrganizado_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizado_71, 
                style: style_PoligonaldareadoPortoOrganizado_71,
                popuplayertitle: 'Poligonal da Área do Porto Organizado ',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizado_71.png" /> Poligonal da Área do Porto Organizado '
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizado_71,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado '});
var group_reasAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasLongoPrazo_67,lyr_reasAfetassOperaesPorturiasMdioPrazo_68,lyr_reasAfetassOperaesPorturiasCurtoPrazo_69,lyr_reasAfetassOperaesPorturiasSituaoAtual_70,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual = new ol.layer.Group({
                                layers: [lyr_Passageiros_62,lyr_GranelGasoso_63,lyr_GranelLquido_64,lyr_GranelSlido_65,lyr_MltiploUso_66,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Situação Atual '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo = new ol.layer.Group({
                                layers: [lyr_GranelGasoso_58,lyr_GranelLquido_59,lyr_GranelSlido_60,lyr_MltiploUso_61,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Curto Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo = new ol.layer.Group({
                                layers: [lyr_GranelGasoso_54,lyr_GranelLquido_55,lyr_GranelSlido_56,lyr_MltiploUso_57,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Médio Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo = new ol.layer.Group({
                                layers: [lyr_GranelGasoso_50,lyr_GranelLquido_51,lyr_GranelSlido_52,lyr_MltiploUso_53,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Longo Prazo'});
var group_reasAfetassOperaesPorturiasArrendadas = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_46,lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_47,lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_48,lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_49,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Arrendadas '});
var group_reasAfetassOperaesPorturiasDisponveisparaArrendamento = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento '});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_ArmazenagemLongoPrazo_38,lyr_ArmazenagemMdioPrazo_39,lyr_ArmazenagemCurtoPrazo_40,lyr_ArmazenagemSituaoAtual_41,],
                                fold: 'open',
                                title: 'Armazenagem '});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_AcostagemLongoPrazo_34,lyr_AcostagemMdioPrazo_35,lyr_AcostagemCurtoPrazo_36,lyr_AcostagemSituaoAtual_37,],
                                fold: 'open',
                                title: 'Acostagem '});
var group_TerminaldePassageiros = new ol.layer.Group({
                                layers: [lyr_TerminaldePassageiros_33,],
                                fold: 'open',
                                title: 'Terminal de Passageiros '});
var group_reaseInstalaesAlfandegadas = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadas_32,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas '});
var group_reasNoAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasLongoPrazo_28,lyr_reasNoAfetassOperaesPorturiasMdioPrazo_29,lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_30,lyr_reasNoAfetassOperaesPorturiasSituaoAtual_31,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias '});
var group_reasNoAfetassOperaesPorturiasemExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta '});
var group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta '});
var group_AcessosRodoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosExternos_19,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Externos '});
var group_AcessosRodoviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosInternosLongoPrazo_15,lyr_AcessosRodoviriosInternosMdioPrazo_16,lyr_AcessosRodoviriosInternosCurtoPrazo_17,lyr_AcessosRodoviriosInternosSituaoAtual_18,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Internos '});
var group_AcessosHidroviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosHidroviriosExternos_14,],
                                fold: 'open',
                                title: 'Acessos Hidroviários Externos '});
var group_CanaisdeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaisdeAcessoLongoPrazo_10,lyr_CanaisdeAcessoMdioPrazo_11,lyr_CanaisdeAcessoCurtoPrazo_12,lyr_CanaisdeAcessoSituaoAtual_13,],
                                fold: 'open',
                                title: 'Canais de Acesso '});
var group_BaciasdeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciasdeEvoluoLongoPrazo_6,lyr_BaciasdeEvoluoMdioPrazo_7,lyr_BaciasdeEvoluoCurtoPrazo_8,lyr_BaciasdeEvoluoSituaoAtual_9,],
                                fold: 'open',
                                title: 'Bacias de Evolução '});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_FundeadourosLongoPrazo_2,lyr_FundeadourosMdioPrazo_3,lyr_FundeadourosCurtoPrazo_4,lyr_FundeadourosSituaoAtual_5,],
                                fold: 'open',
                                title: 'Fundeadouros '});
var group_UnidadesdeConservao = new ol.layer.Group({
                                layers: [lyr_UnidadesdeConservao_1,],
                                fold: 'open',
                                title: 'Unidades de Conservação '});

lyr_GoogleSatellite_0.setVisible(true);lyr_UnidadesdeConservao_1.setVisible(false);lyr_FundeadourosLongoPrazo_2.setVisible(false);lyr_FundeadourosMdioPrazo_3.setVisible(false);lyr_FundeadourosCurtoPrazo_4.setVisible(false);lyr_FundeadourosSituaoAtual_5.setVisible(false);lyr_BaciasdeEvoluoLongoPrazo_6.setVisible(false);lyr_BaciasdeEvoluoMdioPrazo_7.setVisible(false);lyr_BaciasdeEvoluoCurtoPrazo_8.setVisible(false);lyr_BaciasdeEvoluoSituaoAtual_9.setVisible(false);lyr_CanaisdeAcessoLongoPrazo_10.setVisible(false);lyr_CanaisdeAcessoMdioPrazo_11.setVisible(false);lyr_CanaisdeAcessoCurtoPrazo_12.setVisible(false);lyr_CanaisdeAcessoSituaoAtual_13.setVisible(false);lyr_AcessosHidroviriosExternos_14.setVisible(false);lyr_AcessosRodoviriosInternosLongoPrazo_15.setVisible(false);lyr_AcessosRodoviriosInternosMdioPrazo_16.setVisible(false);lyr_AcessosRodoviriosInternosCurtoPrazo_17.setVisible(false);lyr_AcessosRodoviriosInternosSituaoAtual_18.setVisible(false);lyr_AcessosRodoviriosExternos_19.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27.setVisible(false);lyr_reasNoAfetassOperaesPorturiasLongoPrazo_28.setVisible(false);lyr_reasNoAfetassOperaesPorturiasMdioPrazo_29.setVisible(false);lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_30.setVisible(false);lyr_reasNoAfetassOperaesPorturiasSituaoAtual_31.setVisible(false);lyr_reaseInstalaesAlfandegadas_32.setVisible(false);lyr_TerminaldePassageiros_33.setVisible(false);lyr_AcostagemLongoPrazo_34.setVisible(false);lyr_AcostagemMdioPrazo_35.setVisible(false);lyr_AcostagemCurtoPrazo_36.setVisible(false);lyr_AcostagemSituaoAtual_37.setVisible(false);lyr_ArmazenagemLongoPrazo_38.setVisible(false);lyr_ArmazenagemMdioPrazo_39.setVisible(false);lyr_ArmazenagemCurtoPrazo_40.setVisible(false);lyr_ArmazenagemSituaoAtual_41.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_46.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_47.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_48.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_49.setVisible(false);lyr_GranelGasoso_50.setVisible(false);lyr_GranelLquido_51.setVisible(false);lyr_GranelSlido_52.setVisible(false);lyr_MltiploUso_53.setVisible(false);lyr_GranelGasoso_54.setVisible(false);lyr_GranelLquido_55.setVisible(false);lyr_GranelSlido_56.setVisible(false);lyr_MltiploUso_57.setVisible(false);lyr_GranelGasoso_58.setVisible(false);lyr_GranelLquido_59.setVisible(false);lyr_GranelSlido_60.setVisible(false);lyr_MltiploUso_61.setVisible(false);lyr_Passageiros_62.setVisible(false);lyr_GranelGasoso_63.setVisible(false);lyr_GranelLquido_64.setVisible(false);lyr_GranelSlido_65.setVisible(false);lyr_MltiploUso_66.setVisible(false);lyr_reasAfetassOperaesPorturiasLongoPrazo_67.setVisible(false);lyr_reasAfetassOperaesPorturiasMdioPrazo_68.setVisible(false);lyr_reasAfetassOperaesPorturiasCurtoPrazo_69.setVisible(false);lyr_reasAfetassOperaesPorturiasSituaoAtual_70.setVisible(false);lyr_PoligonaldareadoPortoOrganizado_71.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_UnidadesdeConservao,group_Fundeadouros,group_BaciasdeEvoluo,group_CanaisdeAcesso,group_AcessosHidroviriosExternos,group_AcessosRodoviriosInternos,group_AcessosRodoviriosExternos,group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta,group_reasNoAfetassOperaesPorturiasemExploraoIndireta,group_reasNoAfetassOperaesPorturias,group_reaseInstalaesAlfandegadas,group_TerminaldePassageiros,group_Acostagem,group_Armazenagem,group_reasAfetassOperaesPorturiasDisponveisparaArrendamento,group_reasAfetassOperaesPorturiasArrendadas,group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual,group_reasAfetassOperaesPorturias,group_PoligonaldareadoPortoOrganizado];
lyr_UnidadesdeConservao_1.set('fieldAliases', {'Inst_Legal': 'Instrumento Legal ', 'Nome': 'Nome', 'Área': 'Área (m²) ', });
lyr_FundeadourosLongoPrazo_2.set('fieldAliases', {'N_Ident': 'Número de Identificação ', 'Calado': 'Calado (m) ', 'Função': 'Função', });
lyr_FundeadourosMdioPrazo_3.set('fieldAliases', {'N_Ident': 'Número de Identificação ', 'Calado': 'Calado (m) ', 'Função': 'Função', });
lyr_FundeadourosCurtoPrazo_4.set('fieldAliases', {'N_Ident': 'Número de Identificação ', 'Calado': 'Calado (m) ', 'Função': 'Função', });
lyr_FundeadourosSituaoAtual_5.set('fieldAliases', {'N_Ident': 'Número de Identificação ', 'Calado': 'Calado (m) ', 'Função': 'Função', });
lyr_BaciasdeEvoluoLongoPrazo_6.set('fieldAliases', {'Calado': 'Calado (m) ', 'Função': 'Função', });
lyr_BaciasdeEvoluoMdioPrazo_7.set('fieldAliases', {'Calado': 'Calado (m) ', 'Função': 'Função', });
lyr_BaciasdeEvoluoCurtoPrazo_8.set('fieldAliases', {'Calado': 'Calado (m) ', 'Função': 'Função', });
lyr_BaciasdeEvoluoSituaoAtual_9.set('fieldAliases', {'Calado': 'Calado (m) ', 'Função': 'Função', });
lyr_CanaisdeAcessoLongoPrazo_10.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoMdioPrazo_11.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoCurtoPrazo_12.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoSituaoAtual_13.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_AcessosHidroviriosExternos_14.set('fieldAliases', {'Calado': 'Calado (m) ', 'Nome': 'Nome', 'Atual': 'Atualização ', });
lyr_AcessosRodoviriosInternosLongoPrazo_15.set('fieldAliases', {'Ident': 'Identificação ', 'N_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosMdioPrazo_16.set('fieldAliases', {'Ident': 'Identificação ', 'N_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosCurtoPrazo_17.set('fieldAliases', {'Ident': 'Identificação ', 'N_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosSituaoAtual_18.set('fieldAliases', {'Ident': 'Identificação ', 'N_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosExternos_19.set('fieldAliases', {'Sigla': 'Sigla', 'Nome': 'Nome', 'Jurisdicao': 'Jurisdição ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20.set('fieldAliases', {'Área': 'Área (m²) ', 'T_Explo': 'Tipo de Exploração ', 'Nome': 'Nome', 'Util_área': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21.set('fieldAliases', {'Área': 'Área (m²) ', 'T_Explo': 'Tipo de Exploração ', 'Util_área': 'Utilização Atual da Área ', 'Nome': 'Nome', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22.set('fieldAliases', {'Área': 'Área (m²) ', 'T_Explo': 'Tipo de Exploração ', 'Util_área': 'Utilização Atual da Área ', 'Nome': 'Nome', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23.set('fieldAliases', {'Área': 'Área (m²) ', 'T_Explo': 'Tipo de Exploração ', 'Util_área': 'Utilização Atual da Área ', 'Nome': 'Nome', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'T_Cessão': 'Tipo de Cessão ', 'Respons': 'Responsável ', 'D_Inicio': 'Data de Início do Contrato ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'T_Cessão': 'Tipo de Cessão ', 'Respons': 'Responsável ', 'D_Inicio': 'Data de Início do Contrato ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'T_Cessão': 'Tipo de Cessão ', 'Respons': 'Responsável ', 'D_Inicio': 'Data de Início do Contrato ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'T_Cessão': 'Tipo de Cessão ', 'Respons': 'Responsável ', 'D_Inicio': 'Data de Início do Contrato ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_28.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'Destin': 'Destinação ', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_29.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'Destin': 'Destinação ', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_30.set('fieldAliases', {'Área': 'Área (m²) ', 'Destin': 'Destinação ', 'Nome': 'Nome', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_31.set('fieldAliases', {'Área': 'Área (m²) ', 'Destin': 'Destinação ', 'Nome': 'Nome', });
lyr_reaseInstalaesAlfandegadas_32.set('fieldAliases', {'Inst_Legal': 'Instrumento Legal ', });
lyr_TerminaldePassageiros_33.set('fieldAliases', {'A_Term': 'Área do Terminal (m²) ', 'A_Estac': 'Área do Estacionamento (m²) ', 'Nome': 'Nome', });
lyr_AcostagemLongoPrazo_34.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Perfil': 'Perfil de Carga ', });
lyr_AcostagemMdioPrazo_35.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Perfil': 'Perfil de Carga ', });
lyr_AcostagemCurtoPrazo_36.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Perfil': 'Perfil de Carga ', });
lyr_AcostagemSituaoAtual_37.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Perfil': 'Perfil de Carga ', });
lyr_ArmazenagemLongoPrazo_38.set('fieldAliases', {'T_Instal': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Área': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemMdioPrazo_39.set('fieldAliases', {'T_Instal': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Área': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemCurtoPrazo_40.set('fieldAliases', {'T_Instal': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Área': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemSituaoAtual_41.set('fieldAliases', {'T_Instal': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Área': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_46.set('fieldAliases', {'Área': 'Área (m²) ', 'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_47.set('fieldAliases', {'Área': 'Área (m²) ', 'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_48.set('fieldAliases', {'Área': 'Área (m²) ', 'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_49.set('fieldAliases', {'Área': 'Área (m²) ', 'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Nome': 'Nome', });
lyr_GranelGasoso_50.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_GranelLquido_51.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_GranelSlido_52.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_MltiploUso_53.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_GranelGasoso_54.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_GranelLquido_55.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_GranelSlido_56.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_MltiploUso_57.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_GranelGasoso_58.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_GranelLquido_59.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_GranelSlido_60.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_MltiploUso_61.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_Passageiros_62.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelGasoso_63.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelLquido_64.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelSlido_65.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_MltiploUso_66.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_67.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_68.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_69.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_70.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_PoligonaldareadoPortoOrganizado_71.set('fieldAliases', {'Inst_Legal': 'Instrumento Legal ', 'Anexo': 'Anexo', });
lyr_UnidadesdeConservao_1.set('fieldImages', {'Inst_Legal': 'TextEdit', 'Nome': 'TextEdit', 'Área': 'TextEdit', });
lyr_FundeadourosLongoPrazo_2.set('fieldImages', {'N_Ident': 'TextEdit', 'Calado': 'TextEdit', 'Função': '', });
lyr_FundeadourosMdioPrazo_3.set('fieldImages', {'N_Ident': 'TextEdit', 'Calado': 'TextEdit', 'Função': '', });
lyr_FundeadourosCurtoPrazo_4.set('fieldImages', {'N_Ident': 'TextEdit', 'Calado': 'TextEdit', 'Função': '', });
lyr_FundeadourosSituaoAtual_5.set('fieldImages', {'N_Ident': 'TextEdit', 'Calado': 'TextEdit', 'Função': '', });
lyr_BaciasdeEvoluoLongoPrazo_6.set('fieldImages', {'Calado': 'TextEdit', 'Função': 'TextEdit', });
lyr_BaciasdeEvoluoMdioPrazo_7.set('fieldImages', {'Calado': 'TextEdit', 'Função': 'TextEdit', });
lyr_BaciasdeEvoluoCurtoPrazo_8.set('fieldImages', {'Calado': 'TextEdit', 'Função': 'TextEdit', });
lyr_BaciasdeEvoluoSituaoAtual_9.set('fieldImages', {'Calado': 'TextEdit', 'Função': 'TextEdit', });
lyr_CanaisdeAcessoLongoPrazo_10.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoMdioPrazo_11.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoCurtoPrazo_12.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoSituaoAtual_13.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_AcessosHidroviriosExternos_14.set('fieldImages', {'Calado': 'TextEdit', 'Nome': 'TextEdit', 'Atual': 'TextEdit', });
lyr_AcessosRodoviriosInternosLongoPrazo_15.set('fieldImages', {'Ident': 'TextEdit', 'N_Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosMdioPrazo_16.set('fieldImages', {'Ident': 'TextEdit', 'N_Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosCurtoPrazo_17.set('fieldImages', {'Ident': 'TextEdit', 'N_Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosSituaoAtual_18.set('fieldImages', {'Ident': 'TextEdit', 'N_Pistas': 'TextEdit', });
lyr_AcessosRodoviriosExternos_19.set('fieldImages', {'Sigla': 'TextEdit', 'Nome': 'TextEdit', 'Jurisdicao': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20.set('fieldImages', {'Área': 'TextEdit', 'T_Explo': '', 'Nome': 'TextEdit', 'Util_área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21.set('fieldImages', {'Área': 'TextEdit', 'T_Explo': '', 'Util_área': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22.set('fieldImages', {'Área': 'TextEdit', 'T_Explo': '', 'Util_área': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23.set('fieldImages', {'Área': 'TextEdit', 'T_Explo': 'TextEdit', 'Util_área': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'T_Cessão': 'TextEdit', 'Respons': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'A_Desenv': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'T_Cessão': 'TextEdit', 'Respons': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'A_Desenv': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'T_Cessão': 'TextEdit', 'Respons': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'A_Desenv': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'T_Cessão': 'TextEdit', 'Respons': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'A_Desenv': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_28.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'Destin': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_29.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'Destin': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_30.set('fieldImages', {'Área': 'TextEdit', 'Destin': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_31.set('fieldImages', {'Área': 'TextEdit', 'Destin': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reaseInstalaesAlfandegadas_32.set('fieldImages', {'Inst_Legal': 'TextEdit', });
lyr_TerminaldePassageiros_33.set('fieldImages', {'A_Term': 'TextEdit', 'A_Estac': 'TextEdit', 'Nome': 'TextEdit', });
lyr_AcostagemLongoPrazo_34.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_AcostagemMdioPrazo_35.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_AcostagemCurtoPrazo_36.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_AcostagemSituaoAtual_37.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_ArmazenagemLongoPrazo_38.set('fieldImages', {'T_Instal': '', 'Capacidade': 'TextEdit', 'Área': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemMdioPrazo_39.set('fieldImages', {'T_Instal': '', 'Capacidade': 'TextEdit', 'Área': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemCurtoPrazo_40.set('fieldImages', {'T_Instal': '', 'Capacidade': 'TextEdit', 'Área': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemSituaoAtual_41.set('fieldImages', {'T_Instal': '', 'Capacidade': 'TextEdit', 'Área': 'TextEdit', 'Volume': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_46.set('fieldImages', {'Área': 'TextEdit', 'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'DateTime', 'D_term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_47.set('fieldImages', {'Área': 'TextEdit', 'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'DateTime', 'D_term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_48.set('fieldImages', {'Área': 'TextEdit', 'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'DateTime', 'D_term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_49.set('fieldImages', {'Área': 'TextEdit', 'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'DateTime', 'D_term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelGasoso_50.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelLquido_51.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelSlido_52.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_MltiploUso_53.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelGasoso_54.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelLquido_55.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelSlido_56.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_MltiploUso_57.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelGasoso_58.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelLquido_59.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelSlido_60.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_MltiploUso_61.set('fieldImages', {'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_Passageiros_62.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelGasoso_63.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelLquido_64.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelSlido_65.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_MltiploUso_66.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_67.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': '', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_68.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': '', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_69.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': '', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_70.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizado_71.set('fieldImages', {'Inst_Legal': 'TextEdit', 'Anexo': 'TextEdit', });
lyr_UnidadesdeConservao_1.set('fieldLabels', {'Inst_Legal': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_FundeadourosLongoPrazo_2.set('fieldLabels', {'N_Ident': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Função': 'inline label - visible with data', });
lyr_FundeadourosMdioPrazo_3.set('fieldLabels', {'N_Ident': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Função': 'inline label - visible with data', });
lyr_FundeadourosCurtoPrazo_4.set('fieldLabels', {'N_Ident': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Função': 'inline label - visible with data', });
lyr_FundeadourosSituaoAtual_5.set('fieldLabels', {'N_Ident': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Função': 'inline label - visible with data', });
lyr_BaciasdeEvoluoLongoPrazo_6.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Função': 'inline label - visible with data', });
lyr_BaciasdeEvoluoMdioPrazo_7.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Função': 'inline label - visible with data', });
lyr_BaciasdeEvoluoCurtoPrazo_8.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Função': 'inline label - visible with data', });
lyr_BaciasdeEvoluoSituaoAtual_9.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Função': 'inline label - visible with data', });
lyr_CanaisdeAcessoLongoPrazo_10.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoMdioPrazo_11.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoCurtoPrazo_12.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoSituaoAtual_13.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_AcessosHidroviriosExternos_14.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Atual': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosLongoPrazo_15.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosMdioPrazo_16.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosCurtoPrazo_17.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosSituaoAtual_18.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosExternos_19.set('fieldLabels', {'Sigla': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Jurisdicao': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_20.set('fieldLabels', {'Área': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Util_área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_21.set('fieldLabels', {'Área': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Util_área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_22.set('fieldLabels', {'Área': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Util_área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_23.set('fieldLabels', {'Área': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Util_área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_24.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'T_Cessão': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_25.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'T_Cessão': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_26.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'T_Cessão': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_27.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'T_Cessão': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_28.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Destin': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_29.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Destin': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_30.set('fieldLabels', {'Área': 'inline label - visible with data', 'Destin': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_31.set('fieldLabels', {'Área': 'inline label - visible with data', 'Destin': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadas_32.set('fieldLabels', {'Inst_Legal': 'inline label - visible with data', });
lyr_TerminaldePassageiros_33.set('fieldLabels', {'A_Term': 'inline label - visible with data', 'A_Estac': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_AcostagemLongoPrazo_34.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_AcostagemMdioPrazo_35.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_AcostagemCurtoPrazo_36.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_AcostagemSituaoAtual_37.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_ArmazenagemLongoPrazo_38.set('fieldLabels', {'T_Instal': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemMdioPrazo_39.set('fieldLabels', {'T_Instal': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemCurtoPrazo_40.set('fieldLabels', {'T_Instal': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemSituaoAtual_41.set('fieldLabels', {'T_Instal': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_42.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_43.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_44.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_45.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_46.set('fieldLabels', {'Área': 'inline label - visible with data', 'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_47.set('fieldLabels', {'Área': 'inline label - visible with data', 'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_48.set('fieldLabels', {'Área': 'inline label - visible with data', 'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_49.set('fieldLabels', {'Área': 'inline label - visible with data', 'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelGasoso_50.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelLquido_51.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelSlido_52.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_MltiploUso_53.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelGasoso_54.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelLquido_55.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelSlido_56.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_MltiploUso_57.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelGasoso_58.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelLquido_59.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelSlido_60.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_MltiploUso_61.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_Passageiros_62.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelGasoso_63.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelLquido_64.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelSlido_65.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_MltiploUso_66.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_67.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_68.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_69.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_70.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizado_71.set('fieldLabels', {'Inst_Legal': 'inline label - visible with data', 'Anexo': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizado_71.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});