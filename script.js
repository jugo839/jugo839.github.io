//document.getElementById("rating_PCA_routes").style.display = "block";


/*
$(function() {
    
    // listen for changes
    $('input[type="radio"]').on('change', function(){
        
        // get checked one            
        var $target = $('input[type="radio"]:checked');
        // hide all divs with .showhide class
        $(".showhide").hide();
        // show div that corresponds to selected radio.
        $( $target.attr('data-section') ).show();

    // trigger the change on page load
    }).trigger('change');

});


function showHide(element_id){
	//Если элемент с id-шником element_id существует
	if (document.getElementById(element_id)){
	//Записываем ссылку на элемент в переменную obj
		var obj = document.getElementById(element_id); 
		//Если css-свойство display не block, то: 
		if (obj.style.display != "block"){ 
			obj.style.display = "block"; //Показываем элемент
		}else{
			obj.style.display = "none"; //Скрываем элемент
			}
	}
	//Если элемент с id-шником element_id не найден, то выводим сообщение
	else{
		alert("Элемент с id: " + element_id + " не найден!");
	} 
}   
function showhidediv( rad )
    {
        var rads = document.getElementsByName( rad.name );
        document.getElementById( 'rating_DEA_routes' ).style.display = ( rads["dea"].checked ) ? 'block' : 'none';
        document.getElementById( 'rating_PCA_routes' ).style.display = ( rads["pca"].checked ) ? 'block' : 'none';
    }
	
	
	
function showDiv2(select){
		   if(select.checked=='dea' && select.value=='routes'){
			document.getElementById('rating_DEA_routes').style.display = "block";
			document.getElementById('rating_DEA_regions').style.display = "none";
			document.getElementById('rating_DEA_postcodes').style.display = "none";
			document.getElementById('rating_PCA_routes').style.display = "none";
			document.getElementById('rating_PCA_regions').style.display = "none";
			document.getElementById('rating_PCA_postcodes').style.display = "none";
		   }else if(select.checked=='dea' && select.value=='regions'){
			document.getElementById('rating_DEA_regions').style.display = "block";
			document.getElementById('rating_DEA_routes').style.display = "none";
			document.getElementById('rating_DEA_postcodes').style.display = "none";
			document.getElementById('rating_PCA_routes').style.display = "none";
			document.getElementById('rating_PCA_regions').style.display = "none";
			document.getElementById('rating_PCA_postcodes').style.display = "none";
		   }
		} 


*/

function showDiv(select){
		  if(select.value=='null'){
			document.getElementById('rating_DEA_routes').style.display = "none";
			document.getElementById('rating_DEA_regions').style.display = "none";
			document.getElementById('rating_DEA_postcodes').style.display = "none";
			document.getElementById('rating_PCA_routes').style.display = "none";
			document.getElementById('rating_PCA_regions').style.display = "none";
			document.getElementById('rating_PCA_postcodes').style.display = "none";
		   }
		   if(select.value=='dea-routes'){
			document.getElementById('rating_DEA_routes').style.display = "block";
			document.getElementById('rating_DEA_regions').style.display = "none";
			document.getElementById('rating_DEA_postcodes').style.display = "none";
			document.getElementById('rating_PCA_routes').style.display = "none";
			document.getElementById('rating_PCA_regions').style.display = "none";
			document.getElementById('rating_PCA_postcodes').style.display = "none";
		   }else if(select.value=='dea-regions'){
			document.getElementById('rating_DEA_regions').style.display = "block";
			document.getElementById('rating_DEA_routes').style.display = "none";
			document.getElementById('rating_DEA_postcodes').style.display = "none";
			document.getElementById('rating_PCA_routes').style.display = "none";
			document.getElementById('rating_PCA_regions').style.display = "none";
			document.getElementById('rating_PCA_postcodes').style.display = "none";
		   }else if(select.value=='dea-postcodes'){
			document.getElementById('rating_DEA_postcodes').style.display = "block";
			document.getElementById('rating_DEA_routes').style.display = "none";
			document.getElementById('rating_DEA_regions').style.display = "none";
			document.getElementById('rating_PCA_routes').style.display = "none";
			document.getElementById('rating_PCA_regions').style.display = "none";
			document.getElementById('rating_PCA_postcodes').style.display = "none";
		   }else if(select.value=='pca-routes'){
			document.getElementById('rating_PCA_routes').style.display = "block";
			document.getElementById('rating_DEA_routes').style.display = "none";
			document.getElementById('rating_DEA_regions').style.display = "none";
			document.getElementById('rating_DEA_postcodes').style.display = "none";
			document.getElementById('rating_PCA_regions').style.display = "none";
			document.getElementById('rating_PCA_postcodes').style.display = "none";
		   }else if(select.value=='pca-regions'){
			document.getElementById('rating_PCA_regions').style.display = "block";
			document.getElementById('rating_DEA_routes').style.display = "none";
			document.getElementById('rating_DEA_regions').style.display = "none";
			document.getElementById('rating_DEA_postcodes').style.display = "none";
			document.getElementById('rating_PCA_routes').style.display = "none";
			document.getElementById('rating_PCA_postcodes').style.display = "none";
		   }else if(select.value=='pca-postcodes'){
			document.getElementById('rating_PCA_postcodes').style.display = "block";
			document.getElementById('rating_DEA_routes').style.display = "none";
			document.getElementById('rating_DEA_regions').style.display = "none";
			document.getElementById('rating_DEA_postcodes').style.display = "none";
			document.getElementById('rating_PCA_routes').style.display = "none";
			document.getElementById('rating_PCA_regions').style.display = "none";
		   }
			
			
			/*else{
			document.getElementById('hidden_div').style.display = "none";
		   }*/
		} 
/* ----------------- For Parents/Coaches -------------------*/		
/*function showHide(element_id){
	//Если элемент с id-шником element_id существует
	//if (document.getElementById(element_id)){
	document.getElementsByClassName(element_id){
	//Записываем ссылку на элемент в переменную obj
		//var obj = document.getElementById(element_id); 
		var obj = document.getElementsByClassName(element_id); 
		//Если css-свойство display не block, то: 
		if (obj.style.display != "block"){ 
			obj.style.display = "block"; //Показываем элемент
		}else{
			obj.style.display = "none"; //Скрываем элемент
			}
	}
	//Если элемент с id-шником element_id не найден, то выводим сообщение
	else{
		alert("Элемент с id: " + element_id + " не найден!");
	} 
}   */