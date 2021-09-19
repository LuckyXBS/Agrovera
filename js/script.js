console.log('It works')

$(document).ready(function () {
	$('submit').click(function (event){
		event.preventDefault()
		console.log('Clicked button')
		
		var nameZone = $('.nameZone').val()
		var emailZone = $('.emailZone').val()
		var whereZone = $('.whereZone').val()
		var whomZone = $('.whomZone').val()
		var messageZone = $('.messageZone').val()
		statusElm.empty()
		
		if(emailZone.length > 5 && emailZone.includes('@') && email.includes('.')){
			statusElm.append('<div>Email is valid</div>')
		} else{
			statusElm.append('<div>Email is not valid</div>')
		}
		
		if(nameZone.length > 2){
			statusElm.append('<div>Name is valid</div>')
		} else{
			statusElm.append('<div>Name is not valid</div>')
		}
		
		if(whereZone.length > 2){
			statusElm.append('<div>Where is valid</div>')
		} else{
			statusElm.append('<div>Where is not valid</div>')
		}
		
		if(whomZone.length > 2){
			statusElm.append('<div>Whom is valid</div>')
		} else{
			statusElm.append('<div>Whom is not valid</div>')
		}
		
		if(messageZone.length > 20){
			statusElm.append('<div>Messgae is valid</div>')
		} else{
			statusElm.append('<div>Message is not valid</div>')
		}
	})
})