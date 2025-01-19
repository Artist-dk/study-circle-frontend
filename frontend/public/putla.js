

import * as THREE from 'three';

import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

import { PLYLoader } from 'three/addons/loaders/PLYLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let renderer, scene, camera;

let light1, light2, light3, light4;
let spotLight, lightHelper, object;
const clock = new THREE.Clock();
let a=2;

init();
animate();

function init() {

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( renderer.domElement );
    document.getElementById('bg').appendChild( renderer.domElement );

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    renderer.outputEncoding = THREE.sRGBEncoding;

    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;

    renderer.setAnimationLoop( render );

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.set( 70, 50, 10 );

    const controls = new OrbitControls( camera, renderer.domElement );
    controls.minDistance = 20;
    controls.maxDistance = 100;
    controls.maxPolarAngle = Math.PI / 2;
    controls.target.set( 0, 18, 0 );
    controls.update();

    const ambient = new THREE.HemisphereLight( 0xffffff, 0x000000, 0.01 ); //444444
    scene.add( ambient );

    const loader = new THREE.TextureLoader().setPath( '' );
    const filenames = [ 'disturb.jpg', 'colors.png', 'uv_grid_opengl.jpg' ];

    const textures = { none: null };

    for ( let i = 0; i < filenames.length; i ++ ) {

        const filename = filenames[ i ];

        const texture = loader.load( filename );
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.encoding = THREE.sRGBEncoding;

        textures[ filename ] = texture;

    }

    spotLight = new THREE.SpotLight( 0xff0000, 10 );
    spotLight.position.set(60,60,60 );// 25, 50, 25
    spotLight.position.set(25, 50, 25);// 
    spotLight.position.set(0,150,0);// 
    // spotLight.angle = 1.0471975511965976; //Math.PI / 6;
    // spotLight.angle = 2;
    spotLight.angle = 0.5;
    // spotLight.penumbra = 0.5;
    // spotLight.penumbra = 1;
    spotLight.penumbra = 1;
    spotLight.decay = 2;
    spotLight.distance = 200;
    spotLight.map = textures[ 'disturb.jpg' ];

    spotLight.castShadow = true;


    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    spotLight.shadow.mapSize.height = 1024;
    // spotLight.shadow.camera.near = 10;
    spotLight.shadow.camera.near = 5;
    // spotLight.shadow.camera.far = 200;
    spotLight.shadow.camera.far = 20;
    spotLight.shadow.focus = 1;
    scene.add( spotLight );
    //
    
    // const sphere = new THREE.SphereGeometry( 0.5, 16, 8 );
    const sphere = new THREE.SphereGeometry( 0.5, 16, 8 );
    
    //lights
    
    
    // light1 = new THREE.PointLight( 0xff0099, 10, 20 );
    // light1.position.set(10, 30, 42); // 0, 10, 40
    // light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xff0099 } ) ) );
    // scene.add( light1 );
    
    // light2 = new THREE.PointLight( 0x0040ff, 20, 20 );
    // light2.position.set(0, 20, 30); // 0, 10, 40
    // light2.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x0040ff } ) ) );
    // scene.add( light2 );
    
    // light3 = new THREE.PointLight( 0xff0000, 5, 5 );
    // light3.add(new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xff0000 } ) ) );
    // light3.position.set(2, 10, 40);
    // scene.add( light3 );
    

    lightHelper = new THREE.SpotLightHelper( spotLight );
    // lightHelper.opacity = 0.33;
    // scene.add( lightHelper );



    light1 = new THREE.PointLight( 0xff0040, 2, 50 );
    light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xff0040 } ) ) );
    // scene.add( light1 );

    light2 = new THREE.PointLight( 0x0040ff, 2, 50 );
    light2.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x0040ff } ) ) );
    // scene.add( light2 );

    light3 = new THREE.PointLight( 0x80ff80, 2, 50 );
    light3.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x80ff80 } ) ) );
    // scene.add( light3 );

    light4 = new THREE.PointLight( 0xffaa00, 2, 50 );
    light4.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xffaa00 } ) ) );
    // scene.add( light4 );


    //

    // const geometry = new THREE.PlaneGeometry( 1000, 1000 );
    const geometry = new THREE.PlaneGeometry( 18000, 18000 );
    const material = new THREE.MeshLambertMaterial( { color: 0x808080 } );

    const mesh = new THREE.Mesh( geometry, material );
    mesh.position.set( 0, 1, 0 );
    // mesh.position.set( 800, -1, 600 );
    mesh.rotation.x = - Math.PI / 2;
    mesh.receiveShadow = true;
    scene.add( mesh );

    //
    /*

    new PLYLoader().load( 'Lucy100k.ply', function ( geometry ) {

        geometry.scale( 0.024, 0.024, 0.024 );
        geometry.scale( a,a,a);
        // geometry.scale( 0.014, 0.014, 0.0124 );
        geometry.computeVertexNormals();

        const material = new THREE.MeshLambertMaterial();

        const mesh = new THREE.Mesh( geometry, material );
        mesh.rotation.y = - Math.PI / 2;
        mesh.rotation.x =  Math.PI ;
        mesh.rotation.z =  Math.PI ;
        mesh.position.y = 12;
        mesh.position.y = 12;
        mesh.position.z = 20;
        mesh.position.z = 0;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add( mesh );

    } );

    */
    window.addEventListener( 'resize', onWindowResize );

    // GUI
    
    /*  const gui = new GUI();
    const params = {
        map: textures[ 'cha.jpg' ],
        color: spotLight.color.getHex(),
        intensity: spotLight.intensity,
        distance: spotLight.distance,
        angle: spotLight.angle,
        penumbra: spotLight.penumbra,
        decay: spotLight.decay,
        focus: spotLight.shadow.focus,
        shadows: true
    };

    gui.add( params, 'map', textures ).onChange( function ( val ) {

        spotLight.map = val;

    } );

    gui.addColor( params, 'color' ).onChange( function ( val ) {

        spotLight.color.setHex( val );

    } );

    gui.add( params, 'intensity', 0, 10 ).onChange( function ( val ) {

        spotLight.intensity = val;

    } );


    gui.add( params, 'distance', 50, 200 ).onChange( function ( val ) {

        spotLight.distance = val;

    } );

    gui.add( params, 'angle', 0, Math.PI / 3 ).onChange( function ( val ) {

        spotLight.angle = val;

    } );

    gui.add( params, 'penumbra', 0, 1 ).onChange( function ( val ) {

        spotLight.penumbra = val;

    } );

    gui.add( params, 'decay', 1, 2 ).onChange( function ( val ) {

        spotLight.decay = val;

    } );

    gui.add( params, 'focus', 0, 1 ).onChange( function ( val ) {

        spotLight.shadow.focus = val;

    } );


    gui.add( params, 'shadows' ).onChange( function ( val ) {

        renderer.shadowMap.enabled = val;

        scene.traverse( function ( child ) {

            if ( child.material ) {

                child.material.needsUpdate = true;

            }

        } );

    } );

    // gui.open(); */


}
function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    // camera.aspect = 400 / 400;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
    // renderer.setSize( 400,400 );

}

function render() {

    const time = performance.now() / 30000;

    spotLight.position.x = Math.cos( time ) * 25;
    spotLight.position.z = Math.sin( time ) * 25;

    lightHelper.update();

    renderer.render( scene, camera );

}

function animate() {

    requestAnimationFrame( animate );

    rend();

}
function rend() {

    const time = Date.now() * 0.0005;
    const delta = clock.getDelta();

    // if ( object ) object.rotation.y -= 0.5 * delta;

    a = Math.sin(time*0.2)*1;

    light1.position.x = Math.sin( time * 0.7 ) * 1;
    light1.position.y = Math.cos( time * 0.5 ) * 30;
    light1.position.z = Math.cos( time * 0.3 ) * 1;

    light2.position.x = Math.cos( time * 0.3 ) * 0;
    light2.position.y = Math.sin( time * 0.5 ) * 30;
    light2.position.z = Math.sin( time * 0.7 ) *0;

    light3.position.x = Math.sin( time * 0.7 ) * 10;
    light3.position.y = Math.cos( time * 0.3 ) * 30;
    light3.position.z = Math.sin( time * 0.5 ) * 10;

    // light4.position.x = Math.sin( time * 0.3 ) * 30;
    // light4.position.y = Math.cos( time * 0.7 ) * 40;
    // light4.position.z = Math.sin( time * 0.5 ) * 30;

    // renderer.render( scene, camera );

}

