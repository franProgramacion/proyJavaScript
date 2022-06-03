function menuResponsive (){
	var menu = document.getElementById('botonera2')
	// Operador ternario
	menu.style.display == 'block' ? menu.style.display = 'none' : menu.style.display = 'block'
	
}

function ocultarMostrarTexto (textoOfertas) {
	var ofertas = document.getElementById(textoOfertas)
	// Operador ternario
	ofertas.style.display == 'block' ? ofertas.style.display = 'none' : ofertas.style.display = 'block'
	
}
function estiloCaja1 (){
	var cajaTexto = document.getElementById('textOfertas')

		cajaTexto.style.backgroundColor ='#000000'
		cajaTexto.style.color ='#ff6600'
		cajaTexto.style.height = '200px'
		cajaTexto.style.padding ='20px'
		cajaTexto.style.fontWeight ='bold'
		cajaTexto.style.fontSize ='20px'
		cajaTexto.style.border = '5px'
		cajaTexto.style.borderStile = 'solid'
		cajaTexto.style.borderRadius = '10%'
	}
function estiloCaja2 () {
	var cajaTexto2 = document.getElementById('textOfertas')

		cajaTexto2.style.backgroundColor = '#ff6600'
		cajaTexto2.style.color = '#000000'
		cajaTexto2.style.height = '160px'
		cajaTexto2.style.padding ='10px'
		cajaTexto2.style.fontWeight ='normal'
		cajaTexto2.style.fontSize ='16px'
		cajaTexto2.style.borderRadius = '5%'
}