function addWall(scene) {
    var floor_materials = [
        new THREE.MeshLambertMaterial({ ambient:0xbbbbbb, map:THREE.ImageUtils.loadTexture('http://derekliu.blog.51cto.com/album/4479510/133601721149.png') }),
        new THREE.MeshBasicMaterial({ color:0xffffff, wireframe:false, transparent:true, opacity:0.1 })
    ];
    var celling_materials = [
        new THREE.MeshLambertMaterial({ ambient:0xbbbbbb, map:THREE.ImageUtils.loadTexture('http://derekliu.blog.51cto.com/album/4479510/133601719031.jpg') }),
        new THREE.MeshBasicMaterial({ color:0xffffff, wireframe:false, transparent:true, opacity:0.1 })
    ];
    var materials = [
        new THREE.MeshLambertMaterial({ ambient:0xbbbbbb, map:THREE.ImageUtils.loadTexture('http://derekliu.blog.51cto.com/album/4479510/133601724534.png') }),
        new THREE.MeshBasicMaterial({ color:0xffffff, wireframe:false, transparent:true, opacity:0.1 })
    ];
    var carpet_materials = [
        new THREE.MeshLambertMaterial({ ambient:0xbbbbbb, map:THREE.ImageUtils.loadTexture('http://derekliu.blog.51cto.com/album/4479510/133601717824.png') }),
        new THREE.MeshBasicMaterial({ color:0xffffff, wireframe:false, transparent:true, opacity:0.1 })
    ];
    var floorbrick_materials = [
        new THREE.MeshLambertMaterial({ ambient:0xbbbbbb, map:THREE.ImageUtils.loadTexture('http://derekliu.blog.51cto.com/album/4479510/133601723217.png') }),
        new THREE.MeshBasicMaterial({ color:0xffffff, wireframe:false, transparent:true, opacity:0.1 })
    ];

    //bacon and bell room floor
    var object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(360, 20, 550, 36, 2, 55), carpet_materials);
    object.position.set(0 + 180, 0 + 10, -(0 + 275));
    scene.add(object);
    //bacon
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(20, 100, 150, 2, 10, 15), materials);
    object.position.set(0 + 10, 20 + 50, -(0 + 75));
    scene.add(object);
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(320, 100, 20, 32, 10, 2), materials);
    object.position.set(20 + 160, 20 + 50, -(0 + 10));
    scene.add(object);
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(20, 100, 150, 2, 10, 15), materials);
    object.position.set(340 + 10, 20 + 50, -(0 + 75));
    scene.add(object);

    //bed room
    //back wall
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(100, 330, 20, 10, 33, 2), materials);
    object.position.set(0 + 50, 20 + 165, -(150 + 10));
    scene.add(object);
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(160, 100, 20, 16, 10, 2), materials);
    object.position.set(100 + 80, 250 + 50, -(150 + 10));
    scene.add(object);
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(100, 330, 20, 10, 33, 2), materials);
    object.position.set(260 + 50, 20 + 165, -(150 + 10));
    scene.add(object);
    //front wall
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(220, 330, 20, 22, 33, 2), materials);
    object.position.set(0 + 110, 20 + 165, -(530 + 10));
    scene.add(object);
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(100, 80, 20, 10, 8, 2), materials);
    object.position.set(220 + 50, 270 + 40, -(530 + 10));
    scene.add(object);
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(40, 330, 20, 4, 33, 5), materials);
    object.position.set(320 + 20, 20 + 165, -(530 + 10));
    scene.add(object);
    //left and right wall
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(20, 330, 360, 5, 33, 36), materials);
    object.position.set(0 + 10, 20 + 165, -(170 + 180));
    scene.add(object);
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(20, 330, 360, 2, 33, 36), materials);
    object.position.set(340 + 10, 20 + 165, -(170 + 180));
    scene.add(object);
    //celling
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(360, 20, 400, 36, 2, 40), celling_materials);
    object.position.set(0 + 180, 350 + 10, -(150 + 200));
    scene.add(object);

    //living room floor
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(340, 20, 380, 34, 2, 38), floor_materials);
    object.position.set(180 + 170, 0 + 10, -(550 + 190));
    scene.add(object);
    //living room celling
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(340, 20, 380, 34, 2, 38), celling_materials);
    object.position.set(180 + 170, 350 + 10, -(550 + 190));
    scene.add(object);
    //rest room floor
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(180, 20, 200, 18, 2, 20), floorbrick_materials);
    object.position.set(0 + 90, 0 + 10, -(550 + 100));
    scene.add(object);
    //rest room celling
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(180, 20, 200, 18, 2, 20), celling_materials);
    object.position.set(0 + 90, 350 + 10, -(550 + 100));
    scene.add(object);
    //kitchen room floor
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(270, 20, 180, 27, 2, 18), floorbrick_materials);
    object.position.set(-90 + 135, 0 + 10, -(750 + 90));
    scene.add(object);
    //kitchen room celling
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(270, 20, 180, 27, 2, 18), celling_materials);
    object.position.set(-90 + 135, 350 + 10, -(750 + 90));
    scene.add(object);

    //kitchen front wall
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(310, 330, 20, 31, 33, 2), materials);
    object.position.set(-90 + 155, 20 + 165, -(910 + 10));
    scene.add(object);
    //living front wall
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(180, 330, 20, 18, 22, 2), materials);
    object.position.set(340 + 90, 20 + 165, -(910 + 10));
    scene.add(object);
    //kitchen back wall 1
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(70, 100, 20, 7, 10, 2), materials);
    object.position.set(-70 + 35, 20 + 50, -(750 + 10));
    scene.add(object);
    //kitchen back wall 2
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(70, 100, 20, 7, 10, 2), materials);
    object.position.set(-70 + 35, 250 + 50, -(750 + 10));
    scene.add(object);
    //kitchen back wall 3
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(180, 330, 20, 18, 33, 2), materials);
    object.position.set(0 + 90, 20 + 165, -(750 + 10));
    scene.add(object);
    //kitchen left wall
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(20, 330, 160, 2, 33, 16), materials);
    object.position.set(-90 + 10, 20 + 165, -(750 + 80));
    scene.add(object);
    //kitchen right wall
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(20, 330, 10, 2, 33, 1), materials);
    object.position.set(180 + 10, 20 + 165, -(900 + 5));
    scene.add(object);
    //kitchen and rest right wall
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(20, 330, 130, 2, 33, 13), materials);
    object.position.set(180 + 10, 20 + 165, -(670 + 65));
    scene.add(object);
    //rest right wall
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(20, 330, 20, 2, 33, 2), materials);
    object.position.set(180 + 10, 20 + 165, -(550 + 10));
    scene.add(object);
    //rest left wall 1
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(20, 330, 50, 2, 33, 5), materials);
    object.position.set(0 + 10, 20 + 165, -(700 + 25));
    scene.add(object);
    //rest left wall 2
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(20, 330, 50, 2, 33, 5), materials);
    object.position.set(0 + 10, 20 + 165, -(550 + 25));
    scene.add(object);
    //rest left wall 3
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(20, 100, 100, 2, 10, 10), materials);
    object.position.set(0 + 10, 20 + 50, -(600 + 50));
    scene.add(object);
    //rest left wall 4
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(20, 100, 100, 2, 10, 10), materials);
    object.position.set(0 + 10, 250 + 50, -(600 + 50));
    scene.add(object);
    //living back wall 1
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(140, 120, 20, 14, 12, 2), materials);
    object.position.set(360 + 70, 0 + 60, -(530 + 10));
    scene.add(object);
    //living back wall 2
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(140, 100, 20, 14, 10, 2), materials);
    object.position.set(360 + 70, 250 + 50, -(530 + 10));
    scene.add(object);
    //living back wall 3
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(140, 20, 60, 14, 2, 6), materials);
    object.position.set(360 + 70, 100 + 10, -(470 + 30));
    scene.add(object);
    //living right wall
    object = THREE.SceneUtils.createMultiMaterialObject(new THREE.CubeGeometry(20, 330, 440, 2, 33, 44), materials);
    object.position.set(500 + 10, 20 + 165, -(470 + 220));
    scene.add(object);
}