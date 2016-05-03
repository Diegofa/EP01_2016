window.onload = function()
{
	var ancho = window.innerWidth;
	var alto = window.innerHeight;
	var lienzo = new THREE.WebGLRenderer({alpha: true});
	lienzo.setSize(ancho, alto);
	document.body.appendChild(lienzo.domElement);
	var escena 		  = new THREE.Scene,
		tamanoJupiter = 300;

	var propiedades_planetas=[

	{	tamano 	: 3.4,
		x : -250,
		imagen	: 'img/mercurio.jpg',
		objeto :0
	},

	{	tamano 	: 8.4,
		x : -120,
		imagen	: 'img/venus.jpg',
		objeto :0
	},

	{	tamano 	: 8.9,
		x : 0,
		imagen	: 'img/tierra.jpg',
		objeto :0
	},

	{	tamano 	: 4.7,
		x : 100,
		imagen	: 'img/marte.jpg',
		objeto :0
	},

	];

	var crearPlaneta = function(data)
	{
		var geometria = new THREE.SphereGeometry(data.tamano,data.tamano,data.tamano);
		var textura = THREE.ImageUtils.loadTexture(data.imagen);
		var material = new THREE.MeshBasicMaterial( { map: textura } );
		return new THREE.Mesh(geometria, material);
	};
	
	var jupiter = crearPlaneta({
									tamano 	: tamanoJupiter,
									imagen	: "img/jupiter.jpg"
							  });

	escena.add(jupiter);

	for (var i=0; i< propiedades_planetas.length; i++)
	{
		propiedades_planetas[i].objeto = crearPlaneta({
														tamano 	: tamanoJupiter * (propiedades_planetas[i].tamano / 100),
														imagen	: propiedades_planetas[i].imagen
							  						});

		propiedades_planetas[i].objeto.position.x = propiedades_planetas[i].x;
        escena.add(propiedades_planetas[i].objeto);

	}
	var camara = new THREE.PerspectiveCamera(50,(ancho / alto),0.1, 10000);
	camara.position.y = 160;
	camara.position.z = 400;
	camara.lookAt(jupiter.position);
	jupiter.position.x = 500;
	escena.add(camara);

	function renderizar()
	{
		for (var i = 0 ; i < propiedades_planetas.length; i++ )
		{
			propiedades_planetas[i].objeto.rotation.y += 0.01;

		}
		jupiter.rotation.y += 0.001;
		lienzo.render(escena, camara);
		requestAnimationFrame(renderizar);
	}
	renderizar();
};
