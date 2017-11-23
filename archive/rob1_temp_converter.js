

var fields = [ 

["AX25_HEADER" , "start" , 1],
["AX25_HEADER" , "length" , 16],
["AX25_TARGET" , "start" , 1],
["AX25_TARGET" , "length" , 5],
["AX25_SOURCE" , "start" , 8],
["AX25_SOURCE" , "length" , 5],
["TYPE" , "start" , 17],
["TYPE" , "length" , 1],
["TIMESTAMP" , "start" , 18],
["TIMESTAMP",  "length", 4],

["OBC_DISTOBC_RI_EXP_1" , "start" , 22],
["OBC_DISTOBC_RI_EXP_1" , "length" , 1],
["OBC_DISTRI_INT_1" , "start" , 23], 
["OBC_DISTRI_INT_1" , "length" , 1],
["OBC_DISTRI_EXP_2" , "start" , 24],
["OBC_DISTRI_EXP_2" , "length" , 1],
["OBC_DISTRI_INT_2" , "start" , 25],
["OBC_DISTRI_INT_2" , "length" , 1],
["OBC_DISTRI_OSL" , "start" , 26],
["OBC_DISTRI_OSL" , "length" , 1],
["OBC_GAIN_OSL" , "start" , 27],
["OBC_GAIN_OSL" , "length" , 1],
["OBC_TIMER_PUISSANCE" , "start" , 28],
["OBC_TIMER_PUISSANCE" , "length" , 1],
["OBC_TIME_TX" , "start" , 29],
["OBC_TIME_TX" , "length" , 1],
["OBC_TIMER_TEMP" , "start" , 30],
["OBC_TIMER_TEMP" , "length" , 1],
["OBC_TIMER_DOSE" , "start" , 31],
["OBC_TIMER_DOSE" , "length" , 2],
["OBC_TIMER_EXP" , "start" , 33],
["OBC_TIMER_EXP" , "length" , 2],

["PL_DISTRI_EXP_1" , "start" , 35],
["PL_DISTRI_EXP_1" , "length" , 1],
["PL_DISTRI_INT_1" , "start" , 36],
["PL_DISTRI_INT_1" , "length" , 1],
["PL_DISTRI_EXP_2" , "start" , 37],
["PL_DISTRI_EXP_2" , "length" , 1],
["PL_DISTRI_INT_2" , "start" , 38],
["PL_DISTRI_INT_2" , "length" , 1],
["PL_DISTRI_OSL" , "start" , 39],
["PL_DISTRI_OSL" , "length" , 1],
["PL_GAIN_OSL" , "start" , 40],
["PL_GAIN_OSL" , "length" , 1],

["PL_ICCP_LM124_EXP1" , "start" , 41],
["PL_ICCP_LM124_EXP1" , "length" , 2], 
["PL_ICCP_LM139_EXP1" , "start" , 43],
["PL_ICCP_LM139_EXP1" , "length" , 2],
["PL_ICCM_LM124_EXP1" , "start" , 45],
["PL_ICCM_LM124_EXP1" , "length" , 2],
["PL_ICCM_LM139_EXP1" , "start" , 47],
["PL_ICCM_LM139_EXP1" , "length" , 2],
["PL_IINP_LM124_EXP1" , "start" , 49],
["PL_IINP_LM124_EXP1" , "length" , 2],
["PL_IINP_LM139_EXP1" , "start" , 51],
["PL_IINP_LM139_EXP1" , "length" , 2],
["PL_IINM_LM124_EXP1" , "start" , 53],
["PL_IINM_LM124_EXP1" , "length" , 2],
["PL_IINM_LM139_EXP1" , "start" , 55],
["PL_IINM_LM139_EXP1" , "length" , 2],
["PL_VSH1_LM124_EXP1" , "start" , 57],
["PL_VSH1_LM124_EXP1" , "length" , 2],
["PL_VSH2_LM124_EXP1" , "start" , 59],
["PL_VSH2_LM124_EXP1" , "length" , 2],
["PL_VSH3_LM124_EXP1" , "start" , 61],
["PL_VSH3_LM124_EXP1" , "length" , 2],
["PL_VSH4_LM124_EXP1" , "start" , 63],
["PL_VSH4_LM124_EXP1" , "length" , 2],
["PL_VSH1_LM139_EXP1" , "start" , 65],
["PL_VSH1_LM139_EXP1" , "length" , 2],
["PL_VSH2_LM139_EXP1" , "start" , 67],
["PL_VSH2_LM139_EXP1" , "length" , 2],
["PL_VSH3_LM139_EXP1" , "start" , 69],
["PL_VSH3_LM139_EXP1" , "length" , 2],
["PL_VSH4_LM139_EXP1" , "start" , 71],
["PL_VSH4_LM139_EXP1" , "length" , 2],
["PL_VSL1_LM124_EXP1" , "start" , 73],
["PL_VSL1_LM124_EXP1" , "length" , 2],
["PL_VSL2_LM124_EXP1" , "start" , 75],
["PL_VSL2_LM124_EXP1" , "length" , 2],
["PL_VSL3_LM124_EXP1" , "start" , 77],
["PL_VSL3_LM124_EXP1" , "length" , 2],
["PL_VSL4_LM124_EXP1" , "start" , 79],
["PL_VSL4_LM124_EXP1" , "length" , 2],
["PL_VSL1_LM139_EXP1" , "start" , 81],
["PL_VSL1_LM139_EXP1" , "length" , 2],
["PL_VSL2_LM139_EXP1" , "start" , 83],
["PL_VSL2_LM139_EXP1" , "length" , 2],
["PL_VSL3_LM139_EXP1" , "start" , 85],
["PL_VSL3_LM139_EXP1" , "length" , 2],
["PL_VSL4_LM139_EXP1" , "start" , 87],
["PL_VSL4_LM139_EXP1" , "length" , 2],
["PL_ICCP_LM124_EXP2" , "start" , 89],
["PL_ICCP_LM124_EXP2" , "length" , 2],
["PL_ICCP_LM139_EXP2" , "start" , 91],
["PL_ICCP_LM139_EXP2" , "length" , 2],
["PL_ICCM_LM124_EXP2" , "start" , 93],
["PL_ICCM_LM124_EXP2" , "length" , 2],
["PL_ICCM_LM139_EXP2" , "start" , 95],
["PL_ICCM_LM139_EXP2" , "length" , 2],
["PL_IINP_LM124_EXP2" , "start" , 97],
["PL_IINP_LM124_EXP2" , "length" , 2],
["PL_IINP_LM139_EXP2" , "start" , 99],
["PL_IINP_LM139_EXP2" , "length" , 2],
["PL_IINM_LM124_EXP2" , "start" , 101],
["PL_IINM_LM124_EXP2" , "length" , 2],
["PL_IINM_LM139_EXP2" , "start" , 103],
["PL_IINM_LM139_EXP2" , "length" , 2],
["PL_VSH1_LM124_EXP2" , "start" , 105],
["PL_VSH1_LM124_EXP2" , "length" , 2],
["PL_VSH2_LM124_EXP2" , "start" , 107],
["PL_VSH2_LM124_EXP2" , "length" , 2],
["PL_VSH3_LM124_EXP2" , "start" , 109],
["PL_VSH3_LM124_EXP2" , "length" , 2],
["PL_VSH4_LM124_EXP2" , "start" , 111],
["PL_VSH4_LM124_EXP2" , "length" , 2],
["PL_VSH1_LM139_EXP2" , "start" , 113],
["PL_VSH1_LM139_EXP2" , "length" , 2],
["PL_VSH2_LM139_EXP2" , "start" , 115],
["PL_VSH2_LM139_EXP2" , "length" , 2],
["PL_VSH3_LM139_EXP2" , "start" , 117],
["PL_VSH3_LM139_EXP2" , "length" , 2],
["PL_VSH4_LM139_EXP2" , "start" , 119],
["PL_VSH4_LM139_EXP2" , "length" , 2],
["PL_VSL1_LM124_EXP2" , "start" , 121],
["PL_VSL1_LM124_EXP2" , "length" , 2],
["PL_VSL2_LM124_EXP2" , "start" , 123],
["PL_VSL2_LM124_EXP2" , "length" , 2],
["PL_VSL3_LM124_EXP2" , "start" , 125],
["PL_VSL3_LM124_EXP2" , "length" , 2],
["PL_VSL4_LM124_EXP2" , "start" , 127],
["PL_VSL4_LM124_EXP2" , "length" , 2],
["PL_VSL1_LM139_EXP2" , "start" , 129],
["PL_VSL1_LM139_EXP2" , "length" , 2],
["PL_VSL2_LM139_EXP2" , "start" , 131],
["PL_VSL2_LM139_EXP2" , "length" , 2],
["PL_VSL3_LM139_EXP2" , "start" , 133],
["PL_VSL3_LM139_EXP2" , "length" , 2],
["PL_VSL4_LM139_EXP2" , "start" , 135],
["PL_VSL4_LM139_EXP2" , "length" , 2],

["PL_TEMP_1" , "start" , 137],
["PL_TEMP_1" , "length" , 2],
["PL_MOY_TEMP_1" , "start" , 139],
["PL_MOY_TEMP_1" , "length" , 2],
["PL_ECART_TYPE_TEMP_1" , "start" , 141],
["PL_ECART_TYPE_TEMP_1" , "length" , 2],
["PL_TEMP_2" , "start" , 143],
["PL_TEMP_2" , "length" , 2],
["PL_MOY_TEMP_2" , "start" , 145],
["PL_MOY_TEMP_2" , "length" , 2],
["PL_ECART_TYPE_TEMP_2" , "start" , 147],
["PL_ECART_TYPE_TEMP_2" , "length" , 2],
["PL_SOMME_VOSL_PIC" , "start" , 149],
["PL_SOMME_VOSL_PIC" , "length" , 2],
["PL_SOMME_VOSL_FIN" , "start" , 151],
["PL_SOMME_VOSL_FIN" , "length" , 2],
["PL_VLED" , "start" , 153],
["PL_VLED" , "length" , 2],

["HM_VBAT_MAX" , "start" , 155],
["HM_VBAT_MAX" , "length" , 2],
["HM_VBAT_MIN" , "start" , 157],
["HM_VBAT_MIN" , "length" , 2],
["HM_VBAT_MOY" , "start" , 159],
["HM_VBAT_MOY" , "length" , 2],
["HM_PBAT_MAX" , "start" , 161],
["HM_PBAT_MAX" , "length" , 2],
["HM_IBAT_MOY" , "start" , 163],
["HM_IBAT_MOY" , "length" , 2],
["HM_PBAT_MOY" , "start" , 165],
["HM_PBAT_MOY" , "length" , 2],
["HM_ISH_XM_MAX" , "start" , 167],
["HM_ISH_XM_MAX" , "length" , 2], 
["HM_IXM_MOY" , "start" , 169],
["HM_IXM_MOY" , "length" , 2],
["HM_ISH_YM_MAX" , "start" , 171],
["HM_ISH_YM_MAX" , "length" , 2], 
["HM_IYM_MOY" , "start" , 173],
["HM_IYM_MOY" , "length" , 2],
["HM_ISH_ZP_MAX" , "start" , 175],
["HM_ISH_ZP_MAX" , "length" , 2], 
["HM_IZP_MOY" , "start" , 177],
["HM_IZP_MOY" , "length" , 2],
["HM_ISH_XP_MAX" , "start" , 179],
["HM_ISH_XP_MAX" , "length" , 2], 
["HM_IXP_MOY" , "start" , 181],
["HM_IXP_MOY" , "length" , 2],
["HM_IYP_MOY" , "start" , 183],
["HM_IYP_MOY" , "length" , 2],
["HM_ISH_YP_MAX" , "start" , 185],
["HM_ISH_YP_MAX" , "length" , 2],
["HM_ISH_ZM_MAX" , "start" , 187],
["HM_ISH_ZM_MAX" , "length" , 2], 
["HM_IZM_MOY" , "start" , 189],
["HM_IZM_MOY" , "length" , 2],
["HM_SOMME_PUISS_MOY" , "start" , 191],
["HM_SOMME_PUISS_MOY" , "length" , 2],

["JN_EVT_CODE_1" , "start" , 193],
["JN_EVT_CODE_1" , "length" , 1],
["JN_EVT_TIMESTAMP_1" , "start" , 194],
["JN_EVT_TIMESTAMP_1" , "length" , 4],
["JN_EVT_DATA_1" , "start" , 198],
["JN_EVT_DATA_1" , "length" , 3],
["JN_EVT_CODE_2" , "start" , 201],
["JN_EVT_CODE_2" , "length" , 1],
["JN_EVT_TIMESTAMP_2" , "start" , 202],
["JN_EVT_TIMESTAMP_2" , "length" , 4],
["JN_EVT_DATA_2" , "start" , 206],
["JN_EVT_DATA_2" , "length" , 3],
["JN_EVT_CODE_3" , "start" , 209],
["JN_EVT_CODE_3" , "length" , 1],
["JN_EVT_TIMESTAMP_3" , "start" , 210],
["JN_EVT_TIMESTAMP_3" , "length" , 4],
["JN_EVT_DATA_3" , "start" , 214],
["JN_EVT_DATA_3" , "length" , 3],
["JN_EVT_CODE_4" , "start" , 217],
["JN_EVT_CODE_4" , "length" , 1],
["JN_EVT_TIMESTAMP_4" , "start" , 218],
["JN_EVT_TIMESTAMP_4" , "length" , 4],
["JN_EVT_DATA_4" , "start" , 222],
["JN_EVT_DATA_4" , "length" , 3],
["JN_EVT_CODE_5" , "start" , 225],
["JN_EVT_CODE_5" , "length" , 1],
["JN_EVT_TIMESTAMP_5" , "start" , 226],
["JN_EVT_TIMESTAMP_5" , "length" , 4],
["JN_EVT_DATA_5" , "start" , 230],
["JN_EVT_DATA_5" , "length" , 3],
["JN_EVT_CODE_6" , "start" , 233],
["JN_EVT_CODE_6" , "length" , 1],
["JN_EVT_TIMESTAMP_6" , "start" , 234],
["JN_EVT_TIMESTAMP_6" , "length" , 4],
["JN_EVT_DATA_6" , "start" , 238],
["JN_EVT_DATA_6" , "length" , 3],
["JN_EVT_CODE_7" , "start" , 241],
["JN_EVT_CODE_7" , "length" , 1],
["JN_EVT_TIMESTAMP_7" , "start" , 242],
["JN_EVT_TIMESTAMP_7" , "length" , 4],
["JN_EVT_DATA_7" , "start" , 246],
["JN_EVT_DATA_7" , "length" , 3],
["JN_EVT_CODE_8" , "start" , 249],
["JN_EVT_CODE_8" , "length" , 1],
["JN_EVT_TIMESTAMP_8" , "start" , 250],
["JN_EVT_TIMESTAMP_8" , "length" , 4],
["JN_EVT_DATA_8" , "start" , 254],
["JN_EVT_DATA_8" , "length" , 3],
["JN_EVT_CODE_9" , "start" , 257],
["JN_EVT_CODE_9" , "length" , 1],
["JN_EVT_TIMESTAMP_9" , "start" , 258],
["JN_EVT_TIMESTAMP_9" , "length" , 4],
["JN_EVT_DATA_9" , "start" , 262],
["JN_EVT_DATA_9" , "length" , 3],
["JN_EVT_CODE_10" , "start" , 265],
["JN_EVT_CODE_10" , "length" , 1],
["JN_EVT_TIMESTAMP_10" , "start" , 266],
["JN_EVT_TIMESTAMP_10" , "length" , 4],
["JN_EVT_DATA_10" , "start" , 270],
["JN_EVT_DATA_10" , "length" , 3] 

];

console.log(fields.length);
s='';
for (var i=0; i< fields.length; i=i+2){
// console.log(i);

s+='{ name                : "' + fields[i][0] + '",\n';
s+='  frameStartPosition  : ' + fields[i][2] + ',\n';
s+='  length              : ' + fields[i+1][2] + ',\n'; 
s+='  unit                : "hex",\n';
s+='  label               : "",\n';
s+='  displayPreset       : "standard",\n';
s+='  value               : null,\n';
s+='  valueMax            : null,\n';
s+='  valueMin            : null,\n';
s+='  convFunction : function() { }\n';
s+='},\n';
s+='\n';

}

console.log(s);

