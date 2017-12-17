var scene, camera, renderer , controls, editControls;

function init () {
    var parentDiv = document.getElementById('container')
    scene = new THREE.Scene();
    var WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight;

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(HEIGHT, WIDTH);
    document.body.appendChild(renderer.domElement);


    camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 20000);
    camera.position.set(0,6,0);
    scene.add(camera);

    setInterval(function () {
        var WIDTH = window.innerWidth;
        var HEIGHT = window.innerHeight;
        renderer.setSize(WIDTH, HEIGHT);
        camera.aspect = WIDTH / HEIGHT;
        camera.updateProjectionMatrix();
    }, 300);

    renderer.setClearColor(0x333F47, 1);

    var light = new THREE.PointLight(0xffffff);
    light.position.set(-100,200,100);
    scene.add(light);

    var geometry = new THREE.BoxGeometry(1,1,1);
    var material = new THREE.MeshLambertMaterial({color: 0x55B663});
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
}

function animate () {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
    controls.update();
}

init();
animate();

// zoom using OrbitControls.js
document.getElementById('zoomOut').addEventListener('click', function () {
    camera.zoom = camera.zoom - 1;
    // controls.dOut(1.5);
    camera.updateProjectionMatrix ()
    // controls.update();
});

document.getElementById('zoomIn').addEventListener('click', function () {
    camera.zoom = camera.zoom + 1;
    // controls.dIn(1.5);
    camera.updateProjectionMatrix ();
    // controls.update();
});
