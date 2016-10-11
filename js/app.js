window.addEventListener("load",mostrar);
var video=document.querySelectorAll("a");
function mostrar(){
	for(var i=0;i<video.length;i++){
		var link = video[i].getAttribute('href');
		var youtu = youtube.generateThumbnailUrl(link);
        var imagen= document.createElement('img');
       	imagen.setAttribute ( "src", youtu );
       	video[i].appendChild(imagen);		
		
	}
}


