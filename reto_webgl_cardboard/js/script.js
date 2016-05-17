window.onload = function()
{
    var camera, scene, renderer;
    var effect, controls;
    var element, container, mercurio;
    var clock = new THREE.Clock();
       
    //Se crea el array de objetos que tiene las propiedades de los planetas, tales como la textura que va a tener, la posicion y el nombre
    var planetas = [
        {
            imagen : "img/planetas/jupiter.jpg",
            nombre : "Jupiter",
            vista  : false,
            position : {x : -300, y : 350, z : 30},
            objeto : 0
		},

        {
           	imagen :'img/planetas/mercurio.jpg',
            nombre : "Mercurio",
            vista  : false,
            position : { x : 250, y : 350, z : 0},
           	objeto:0
        },

        {
        imagen : 'img/planetas/venus.jpg',
        nombre : "Venus",
        vista  : false,
        position :{ x : 0, y : 200, z : -350},
        objeto:0
        },

        {
        imagen :'img/planetas/marte.jpg',
        nombre: "Marte",
        vista : false,
        position :{ x : 0, y : 180, z : 300},
        objeto: 0
        }];

    var crearPlaneta = function(data)
	{
		var geometria = new THREE.SphereGeometry(data.tamano,data.tamano,data.tamano);
		var textura = THREE.ImageUtils.loadTexture(data.imagen);
		var material = new THREE.MeshBasicMaterial( { map: textura } );
		return new THREE.Mesh(geometria, material);
	};

    var resize = function()
    {
        var width = container.offsetWidth;
        var height = container.offsetHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        effect.setSize(width, height);
    };

    var init = (function()
    {
        renderer = new THREE.WebGLRenderer();
        element = renderer.domElement;
        container = document.getElementById('example');
        container.appendChild(element);
        effect = new THREE.StereoEffect(renderer);
        effect.separation = 0.2;
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(90, 1, 0.001, 700);
        camera.position.set(0, 5, 0);
        scene.add(camera);
        controls = new THREE.OrbitControls(camera, element);
        controls.rotateUp(Math.PI / 4);
        controls.target.set
        (
            camera.position.x + 0.1,
            camera.position.y + 0.1,
            camera.position.z
        );
        controls.noZoom = false;
        controls.noPan = false;
        //controls.autoRotate = true;
        function setOrientationControls(e)
        {
            if (!e.alpha)
            {
                return;
            }
            controls = new THREE.DeviceOrientationControls(camera, true);
            controls.connect();
            controls.update();
            element.addEventListener('click', fullscreen, false);
            window.removeEventListener('deviceorientation', setOrientationControls, true);
        }
        //Adicona luz..
        window.addEventListener('deviceorientation', setOrientationControls, true);
        var light = new THREE.HemisphereLight(0x777777, 0x000000, 0.6);
        scene.add(light);

        //Crear los panetas...
        // se está dejando por defecto que los planetas tengas un tamaño de 60
        for (var i = 0; i < planetas.length; i++)
        {
      		planetas[i].objeto =	crearPlaneta({
      											                     tamano : 60,
      											                     imagen : planetas[i].imagen}
                                               );
          scene.add(planetas[i].objeto);
          planetas[i].objeto.position.x = planetas[i].position.x;
          planetas[i].objeto.position.y = planetas[i].position.y;
          planetas[i].objeto.position.z = planetas[i].position.z;

      	}

    
        //http://stemkoski.github.io/Three.js/Skybox.html
        //Para adicionar escenario en 3D...
        var imagePrefix = "img/place/place-";
        var directions  = ["xpos", "xneg", "ypos", "yneg", "zpos", "zneg"];
        var imageSuffix = ".jpg";
        var skyGeometry = new THREE.BoxGeometry( 800, 800, 800 );

        var materialArray = [];
        for (var i = 0; i < 6; i++)
        {
            materialArray.push( new THREE.MeshBasicMaterial({
                map: THREE.ImageUtils.loadTexture( imagePrefix + directions[i] + imageSuffix ),
                side: THREE.BackSide
            }));
        }
        var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
        var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
        scene.add( skyBox );
        window.addEventListener('resize', resize, false);
        setTimeout(resize, 1);
    })();

    var update = function(dt)
    {
        resize();
        camera.updateProjectionMatrix();
        controls.update(dt);
    };
    //Saber si el elemento está dentro del punto de vista que se está viendo...
    var puntoDeVista = function()
	{
        var frustum = new THREE.Frustum();
        var cameraViewProjectionMatrix = new THREE.Matrix4();
        camera.updateMatrixWorld(); // make sure the camera matrix is updated
        camera.matrixWorldInverse.getInverse( camera.matrixWorld );
        cameraViewProjectionMatrix.multiplyMatrices( camera.projectionMatrix, camera.matrixWorldInverse );
        frustum.setFromMatrix( cameraViewProjectionMatrix ) ;


        for (var i = 0; i < planetas.length; i++) {
          if(frustum.intersectsObject(planetas[i].objeto))
          {
              if(!planetas[i].vista)
              {
                  planetas[i].vista = true;
                  responsiveVoice.speak("Estas viendo el planeta "+ planetas[i].nombre , "Spanish Female");
              }
          }
          else
          {
              planetas[i].vista = false;
          }
        }

        
  	};

    var animate = function()
    {
        requestAnimationFrame(animate);
         //Se coloco este for para iterar los planetas y asi darles la rotacion
        for (var i = 0; i < planetas.length; i++) {
          planetas[i].objeto.rotation.y += 0.02;

        }

        puntoDeVista();
        update(clock.getDelta());
        effect.render(scene, camera);
    };
    animate();

    var fullscreen = function()
    {
        if (container.requestFullscreen)
        {
            container.requestFullscreen();
        }
        else if (container.msRequestFullscreen)
        {
            container.msRequestFullscreen();
        }
        else if (container.mozRequestFullScreen)
        {
            container.mozRequestFullScreen();
        }
        else if (container.webkitRequestFullscreen)
        {
            container.webkitRequestFullscreen();
        }
    }
};
