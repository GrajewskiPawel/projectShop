window.onload = function(){
		var buttonSent = document.getElementsByClassName("buttonSent");
		var shop = document.getElementById("shopWraper");
		var chosen = '';
		var xPrice = document.getElementById("xPrice"); 
		shop.addEventListener("DOMNodeInserted", function (event) {
			var suma = [];
  			var para = document.getElementsByClassName("price");		
			for(i = 0; i< para.length; i++){
				
				var value  = para[i].innerHTML;
				suma.push(Number(value));

				var sum = 0;
				suma.forEach(
					function addNumber(value) { 
						sum += value; 
					}
				);
				xPrice.innerHTML = sum;	
			}			
		}, false);//on DOMNodeInserted
		
		for(var i = 0; i < buttonSent.length; i++){
			buttonSent[i].onclick = function(){
				//seting values to sent
				var price = "price";
				var price = this.name + price;
				var howMuch = "howM";
				var howMuch = this.name + howMuch;
				var valueProduct = document.getElementById(price).value;
				var howMuchProduct = document.getElementById(howMuch).value;
				if(howMuchProduct < 1){
					return;
				}
				var suma = valueProduct * howMuchProduct;
				//creating delete button
				var buttonDelete = document.createElement("button");
				var buttonDeleteNode = document.createTextNode("delete");
				buttonDelete.classList.add(this.name);
				buttonDelete.appendChild(buttonDeleteNode);
				buttonDelete.setAttribute("id",this.name);
				//creating component to set
				var para = document.createElement("p");
				para.setAttribute("id",this.name);
				para.setAttribute("data-price",suma);
				chosen = this.name;
				para.setAttribute("class","productItem");
				para.innerHTML = "Price:" + valueProduct + "Quantity:" + howMuchProduct + "Suma" + "<span class='price'>" + suma + "</span>";
				para.appendChild(buttonDelete);
				shop.appendChild(para);
				buttonDelete.onclick = function(){	
					var x = this.parentElement;					
					x.remove();
					var suma = [];
  			var para = document.getElementsByClassName("price");	
					if(para.length == 0){
					xPrice.innerHTML = 0;
				}
			for(i = 0; i< para.length; i++){
				
				var value  = para[i].innerHTML;
				suma.push(Number(value));

				var sum = 0;
				suma.forEach(
					function addNumber(value) { 
						sum += value; 
					}
				);
				xPrice.innerHTML = sum;	
			}	
				}
			}
		}
		
	}