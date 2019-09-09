import React, { Component } from 'react';
import * as THREE from 'three';


class Canvas extends Component {

    state = {canvasStyle: {
        display: 'inherit',
        width: '65vw',
        height: '65vh'
    }}

    componentDidMount() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        const container = document.getElementById('container');
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setClearColor( 0x000000, 0 );
        // container.appendChild(renderer.domElement);
        this.mount.appendChild(renderer.domElement);
        const loader = new THREE.ObjectLoader();
        loader.load('assets/Model/horse.json', function (obj) {
            scene.add(obj)
        })
        // const geometry = new THREE.BoxGeometry(1, 1, 1);
        // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        // const cube = new THREE.Mesh(geometry, material);
        // scene.add(cube);
        camera.position.z = 5;
        // const animate = function () {
        //     requestAnimationFrame(animate);
        //     cube.rotation.x += 0.01;
        //     cube.rotation.y += 0.01;
        //     renderer.render(scene, camera);
        // };
        // animate();
    }
    

    render() {
        return (
            <div id='container' ref={ref => (this.mount = ref)} style={this.state.canvasStyle} />
        )
    }
}

export default Canvas;