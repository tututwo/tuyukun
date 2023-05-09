export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","demo.png","fonts/.DS_Store","fonts/HanYiShouJinShuFan/HanYiShouJinShuFan.ttf","fonts/HanYiShouJinShuFan/字由客户端.url","fonts/HanYiShouJinShuFan/汉仪个人非商用授权协议.url","icon.png","icon.svg","post-images/.DS_Store","post-images/observable/scrolltrigger.png","post-images/svelte-demo.png","post-images/twitterThread/cover.jpeg","projects/.DS_Store","projects/Charts/.DS_Store","projects/Charts/d3_Himalayan.png","projects/Charts/svelte-covid-cn.png","projects/Charts/svelte_teacherSalary.png","projects/Charts/tt_Beer_Produciton.png","projects/Charts/tt_Broadway.png","projects/CreativeCoding/.DS_Store","projects/CreativeCoding/Earthquake.png","projects/CreativeCoding/Observable-Star.png","projects/CreativeCoding/Observable-flowfield.png","projects/CreativeCoding/Observable_GR_animateCubes.png","projects/CreativeCoding/Observable_GR_blobRing.png","projects/CreativeCoding/Observable_GR_circlePackingMerging.png","projects/CreativeCoding/Observable_GR_lotusLeave.png","projects/CreativeCoding/Observable_GR_roughSquare.png","projects/CreativeCoding/Observable_SDF.png","projects/CreativeCoding/Observable_kois.png","projects/CreativeCoding/Observable_lattern.png","projects/CreativeCoding/Observable_lightning.png","projects/CreativeCoding/R3f-Heart.png","projects/CreativeCoding/R3f-spikey.png","projects/CreativeCoding/css-doodle-纹样.png","projects/Maps/map_Manhattan.png","projects/Maps/map_Manhattan_cover.png","projects/Maps/map_datawrapper_agriculture.png","projects/Maps/map_elevation_ridge.png","projects/Maps/map_ridgelineSichuan.png","projects/Maps/map_shuimomap_shuimo.png","projects/Maps/map_shuimomap_shuimo_cover.png","projects/Maps/map_twodragons.png","projects/Maps/map_twodragons_cover.png","印章.png","印章.svg"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".svg":"image/svg+xml",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.82db3d96.js","app":"_app/immutable/entry/app.2533f842.js","imports":["_app/immutable/entry/start.82db3d96.js","_app/immutable/chunks/index.743a3fa8.js","_app/immutable/chunks/singletons.482a040d.js","_app/immutable/chunks/index.e71e3a35.js","_app/immutable/entry/app.2533f842.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.743a3fa8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/posts",
				pattern: /^\/api\/posts\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/posts/_server.js')
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog/category",
				pattern: /^\/blog\/category\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/blog/category/[category]",
				pattern: /^\/blog\/category\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/blog/[post]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"post","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/project",
				pattern: /^\/project\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
