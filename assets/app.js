var image =['<img src ="imagepeng/yeti.png"></img>','<img src ="imagepeng/penguin0.png"></img>','<img src ="imagepeng/penguin1.png"></img>','<img src ="imagepeng/penguin2.png"></img>','<img src ="imagepeng/penguin3.png"></img>','<img src ="imagepeng/penguin4.png"></img>','<img src ="imagepeng/penguin5.png"></img>','<img src ="imagepeng/penguin6.png"></img>','<img src ="imagepeng/penguin7.png"></img>'];
	var rand;
	var clicked_elements = [];
	function randomimage(ele){
	    //debugger;
		ele.className=" ";
		clicked_elements.push(ele.id);
		rand = Math.floor(Math.random()*(image.length-1));
		ele.innerHTML=image[rand];
	if(image[rand] == '<img src ="imagepeng/yeti.png"></img>')
		{	
			
			debugger;
			
		//	image.getAttribute('disabled');
			for(var i=0; i < clicked_elements.length-1; i++){
				document.getElementById(clicked_elements[i]).innerHTML=" ";
			}
			document.getElementById("yeti").style.visibility = 'visible';
			document.getElementById("over").classList.add("pointer");
			
		}

		image.splice(image.indexOf(image[rand]),1);
		
		
		
		
	 }			
		
	