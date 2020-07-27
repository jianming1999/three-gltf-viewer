var request = require('request');
var fs = require('fs');

/**
JSON.stringify(performance.getEntries().map(item => {
 return item.name
}).filter(item => item.indexOf('Models') !== -1), null, 2)
*/

function download(uri, filename, callback){
  var stream = fs.createWriteStream(filename);
  request(uri).pipe(stream).on('close', callback);
}

// var fileList = [
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/model.gltf",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/model.bin",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/HONGO2difuso1.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/HONGO2difuso_normal.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/m07.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/timg_normal.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/HONGO2difuso.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/timg.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/m10_BaseColor.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/m10_Normal.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/m10_Emissive.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/timg%20(17).jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/model_15_BaseColo2r.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/model_15_Normal2.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/m18_BaseColor.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/m18_Normal.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/yezi.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/wxsd_building_big003_id02.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/wxsd_building_big003_id02_normal.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/wxsd_building_big003_id01.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/wxsd_building_big003_id01_normal.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/biankuang.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/biankuang_normal.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/model_12_DiffuseMap.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/model_12_NormalMap.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/sl_way_04_diffuse.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/sl_way_04_normal.jpg"
// ];
// var fileList = [
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Chinese/Models/model.gltf",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Chinese/Models/model.bin",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Chinese/Models/m_scene1_m00.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Chinese/Models/20200518223849.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Chinese/Models/a2.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Chinese/Models/m_scene1_m03.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Chinese/Models/m_scene1_m04.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Chinese/Models/VCG211254937767.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Chinese/Models/m_scene1_m06.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Chinese/Models/Box001VRay112.png",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Chinese/Models/m_scene1_m10.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Chinese/Models/m_scene1_m12.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Chinese/Models/m_scene1_m13.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Chinese/Models/m_scene1_m14.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Chinese/Models/wa11.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Chinese/Models/m_scene1_m16.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Chinese/Models/m_scene1_m17.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Chinese/Models/m_scene1_m18.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Chinese/Models/m_jz1_zj_2.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Chinese/Models/m_jz1.jpg",
//   "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Chinese/Models/m_scene1_m11.jpg"
// ];
var fileList = [
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Technology/Models/model.gltf",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Technology/Models/model.bin",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Technology/Models/ding_1_AO.png",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Technology/Models/bloom_1_Diffuse.png",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Technology/Models/ke_AO.png",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Technology/Models/qiang_1_AO.png",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Technology/Models/qiang_2_AO.png",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Technology/Models/qiang_3_AO.png",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Technology/Models/object_1_AO.png",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Technology/Models/qiang_4_Diffuse.png",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Technology/Models/a001.jpg",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Technology/Models/xiangkuang.png"
];
fileList.forEach(item => {
	download(item, item.replace(/^.*?Models\//, ''), function(){
		console.log('下载成功', item);
	})
})
