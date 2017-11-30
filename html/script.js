GUIAction = {
    closeGui () {
        $('#identity').css("display", "none");
        $('#register').css("display", "none");
        $("#cursor").css("display", "none");
    },
    openGuiIdentity (data) {
        data = data || {}
        let infoMissing = 'Erreur'
        if (data.dateNaissance) {
            data.dateNaissance = data.dateNaissance.substr(0,11)
        }
        if (data.sexe !== undefined) {
            $('#identity').css('background-image', "url('carteV3_" + data.sexe +".png')")
            data.sexe = data.sexe === 'm' ? 'Homme' : 'Femme'
        }
        if (data.taille !== undefined){
            data.taille = data.taille + ' cm'
        }
		if (data.jobs !== undefined){
                if (data.jobs == "unemployed")
				data.jobs = "💼Chômeur"
			else if (data.jobs == "slaughterer")
				data.jobs = "🐓Abatteur"
			else if (data.jobs == "fisherman")
				data.jobs = "🎣Pêcheur"
			else if (data.jobs == "miner")
				data.jobs = "⛏️Mineur"
			else if (data.jobs == "lumberjack")
				data.jobs = "🌲Bûcheron"
			else if (data.jobs == "fuel")
				data.jobs = "⛽Raffineur"
			else if (data.jobs == "reporter")
				data.jobs = "🎥CNN"
			else if (data.jobs == "police")
				data.jobs = "👮LSPD"
			else if (data.jobs == "banker")
				data.jobs = "🏦Banquier"
			else if (data.jobs == "taxi")
				data.jobs = "🚖Taxi"
			else if (data.jobs == "mecano")
				data.jobs = "🔧Mécano"
			else if (data.jobs == "ambulance")
				data.jobs = "🚑LSMC"
			else if (data.jobs == "brassier")
				data.jobs = "🍺Brassier"
			else if (data.jobs == "vigneron")
				data.jobs = "🍇Vigneron"
			else if (data.jobs == "unicorn")
				data.jobs = "🦄Unicorn"
			else if (data.jobs == "foodtruck")
				data.jobs = "🍔Foodtruck"
			else if (data.jobs == "brinks")
				data.jobs = "💵Brinks"
        }
        ['nom','prenom','jobs', 'dateNaissance', 'sexe', 'taille'].forEach(k => {
            $('#'+k).text(data[k] || infoMissing)
        })

        

        $('#identity').css("display", "block");
    }
}

window.addEventListener('message', function (event){
    let method = event.data.method
    if (GUIAction[method] !== undefined) {
        GUIAction[method](event.data.data)
    }
})



//
// Gestion de la souris
//
$(document).ready(function(){
    var documentWidth = document.documentElement.clientWidth
    var documentHeight = document.documentElement.clientHeight
    var cursor = $('#cursor')
    cursorX = documentWidth / 2
    cursorY = documentHeight / 2
    cursor.css('left', cursorX)
    cursor.css('top', cursorY)
    $(document).mousemove( function (event) {
        cursorX = event.pageX
        cursorY = event.pageY
        cursor.css('left', cursorX + 1)
        cursor.css('top', cursorY + 1)
    })
})
