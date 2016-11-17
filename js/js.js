var myPixelDraw = {
	colorPicked: 0,
	cellColor: "#ecf0f1",
	celdasdefault: 30,
	coloring: false,
	fns: {

		grabimage: function(numero){
			console.log("Prueba funcion Grabimage");
		},

		calcSize:function(cantceldas){

			if(cantceldas===undefined){
				cantceldas=myPixelDraw.celdasdefault;
			}

			var totalceldas = cantceldas*cantceldas;

			myPixelDraw.Mycontenedor.empty();

			for (var i = 0; i < totalceldas; i++) {
				myPixelDraw.Mycontenedor.append("<div class='celda' draggable></div>")

			};

			var tamañocelda =  myPixelDraw.Mycontenedor.width()/cantceldas;

			$(".celda").width(tamañocelda);
			$(".celda").height(tamañocelda);
			
		},

		detectMose:function(){

		},

		colorPalette:function(){

		},

		pickcolor:function(){

		},

		colorlt:function(){

		},

		colorOnDrag:function(){

		},
		reset:function(){

		},
		toggleBorders:function(){

		},
		disableRightClick:function(){

		}
	},

	init:function(contenedor){
		this.Mycontenedor=contenedor;

		var arraydefunciones = Object.keys(myPixelDraw.fns);

		for (var i = 0; i < arraydefunciones.length; i++) {
			myPixelDraw.fns[arraydefunciones[i]]();
		}
	}
};

$(document).ready(function(){

	myPixelDraw.init($(".grilla"));

});