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

		detectMouse:function(){
			$(document).mouseup(
				function(){
					myPixelDraw.coloring=false;
				});
		},

		resize:function(){
			$("#enter").submit(
				function(){
					var x = $("#tamanogrilla").val();
					if (x<=50 && x>=1) {
						myPixelDraw.fns.calcSize(x);
					}
					else {
						alert("Por favor ingrese un tamaño menor a 50 pixeles.")
						$("#tamanogrilla").val("");
					}
				});
		},


		colorPalette:function(){
			console.log("GG");
			$(".colores .forma").each(function(i, e){
				var color = $(e).attr("id");
				console.log(e);
				$(e).css({"background-color": color});
			});
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