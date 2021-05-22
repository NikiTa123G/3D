scene =  new THREE.Scene();
camera =  new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.x = 3;
camera.position.y = 3;
camera.position.z = 3;

renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
renderer.setClearColor(0x000000, 0);
renderer.setSize(window.innerWidth,window.innerHeight);

renderer.domElement.setAttribute("id", "model");
document.body.insertBefore(renderer.domElement, document.body.firstChild);

const aLight = new THREE.AmbientLight(0xFFFFFF, 1.2);
scene.add(aLight);

const pLight = new THREE.PointLight(0xFFFFFF, 1.2);
pLight.position.set(0,0,17);
scene.add(pLight);

// OrbitControls
let controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.update();
controls.enableDamping = true;
controls.minDistanse = 10000;

let loader = new THREE.GLTFLoader();
let obj = null;
loader.load('mdl/scene.gltf', function(gltf){
	obj = gltf;
	obj.scene.scale.set(1,1,1);
	scene.add(obj.scene);
});
function animate() {
	requestAnimationFrame(animate);
	controls.update();
	renderer.render(scene, camera);
}
animate();

