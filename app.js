
// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2;

// Create a renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

// Load the Minecraft Earth texture
const textureLoader = new THREE.TextureLoader();
const minecraftEarthTexture = textureLoader.load('kgwBpnX.png');

// Create a rotating cube 
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ map: minecraftEarthTexture });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add a background plane 
const backgroundTexture = textureLoader.load('pngwing.com.png'); 
const backgroundMaterial = new THREE.MeshBasicMaterial({ map: backgroundTexture, side: THREE.BackSide }); 
const backgroundPlane = new THREE.Mesh(new THREE.PlaneGeometry(10, 10, 1), backgroundMaterial); 
scene.add(backgroundPlane);

// Position the background plane behind everything
backgroundPlane.position.z = -5; 

// Animation
const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    renderer.render(scene, camera);
};

animate();
