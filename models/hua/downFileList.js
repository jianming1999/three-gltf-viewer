var request = require('request');
var fs = require('fs');

function download(uri, filename, callback){
  var stream = fs.createWriteStream(filename);
  request(uri).pipe(stream).on('close', callback);
}

var fileList = [
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/model.gltf",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/model.bin",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/HONGO2difuso1.jpg",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/HONGO2difuso_normal.jpg",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/m07.jpg",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/timg_normal.jpg",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/HONGO2difuso.jpg",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/timg.jpg",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/m10_BaseColor.jpg",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/m10_Normal.jpg",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/m10_Emissive.jpg",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/timg%20(17).jpg",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/model_15_BaseColo2r.jpg",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/model_15_Normal2.jpg",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/m18_BaseColor.jpg",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/m18_Normal.jpg",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/yezi.jpg",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/wxsd_building_big003_id02.jpg",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/wxsd_building_big003_id02_normal.jpg",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/wxsd_building_big003_id01.jpg",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/wxsd_building_big003_id01_normal.jpg",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/biankuang.jpg",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/biankuang_normal.jpg",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/model_12_DiffuseMap.jpg",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/model_12_NormalMap.jpg",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/sl_way_04_diffuse.jpg",
  "https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/sl_way_04_normal.jpg"
];
fileList.forEach(item => {
	download(item, item.replace('https://prod.digitalexpo.com/silkroadcg3d/3d/pre_Production/1/Natural/Models/', ''), function(){
		console.log('下载成功', item);
	})
})
