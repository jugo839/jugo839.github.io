/* ----------------- Arrow Up -------------------*/		
window.onscroll = function arrowUp() {
  document.getElementById('arrowUp').style.display = (window.pageYOffset > '200' ? 'block' : 'none');
}

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
			
			
		} 
