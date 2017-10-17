window.onload = function(){
		var buttonSent = document.getElementsByClassName("buttonSent");
		var hoverShop = document.getElementById("hoverShop");
		var shopElement = document.getElementById("shop");
		var shop = document.getElementById("shopWraper");
		var chosen = '';
		var xPrice = document.getElementById("xPrice"); 
		var shopFunction = function(){
		shop.addEventListener("DOMNodeInserted", function (event) {
			var suma = [];
			//get prive values of all add element
  			var para = document.getElementsByClassName("price");		
			for(i = 0; i< para.length; i++){
				var value  = para[i].innerHTML;
				suma.push(Number(value));
				var sum = 0;
				//math sum for price values
				suma.forEach(function addNumber(value) { sum += value; });
				//add sum to sum elemement
				xPrice.innerHTML = sum;	
			}			
		}, false);//on DOMNodeInserted
		}//and of shop function
		shopFunction();//function when elemement is add to shop div
		var addProduct = function(){
			for(var i = 0; i < buttonSent.length; i++){
			buttonSent[i].onclick = function(){
				//seting values to sent
				var price = "price";
				var price = this.name + price;
				var howMuch = "howM";
				var howMuch = this.name + howMuch;
				var valueProduct = document.getElementById(price).value;
				var howMuchProduct = document.getElementById(howMuch).value;
				//protect for set 0 values
				if(howMuchProduct < 1){
					document.getElementById(howMuch).style.animation = "mynewmove 2s 1";
					setTimeout(myFunction, 1000);
					function myFunction(){
						document.getElementById(howMuch).style.animation = "";
					}
				return;
				}
				//math on product element
				var suma = valueProduct * howMuchProduct;
				//creating delete button
				var buttonDelete = document.createElement("button");
				var buttonDeleteNode = document.createTextNode("delete");
				buttonDelete.classList.add(this.name);
				buttonDelete.appendChild(buttonDeleteNode);
				buttonDelete.setAttribute("id",this.name);
				//creating component to sent to shop wraper
				var para = document.createElement("p");
				para.setAttribute("id",this.name);
				para.setAttribute("data-price",suma);
				chosen = this.name;
				para.setAttribute("class","productItem");
				para.innerHTML = "Price:" + valueProduct + "Quantity:" + howMuchProduct + "Suma" + "<span class='price'>" + suma + "</span>";
				para.appendChild(buttonDelete);
				shop.appendChild(para);
				//event when delete button is clicked
				buttonDelete.onclick = function(){	
					var x = this.parentElement;	
					//delete buttn with parent
					x.remove();
					//clear sum array
					var suma = [];
  					var para = document.getElementsByClassName("price");	
					if(para.length == 0){
					xPrice.innerHTML = 0;
				}
						for(i = 0; i< para.length; i++){
						//add price values when one of element is delete
						var value  = para[i].innerHTML;
						suma.push(Number(value));
						var sum = 0;
						suma.forEach(function addNumber(value) { sum += value; });
						//add new values to sum element
						xPrice.innerHTML = sum;	
					}	
				};
			};
		}
		}
		addProduct();//function which is activate when click on product button
		
		
	
	
	//event on click to toogle height of shopwraper
	hoverShop.onclick = function(){
		var shopHeader = document.getElementById('shopHeader');
		if(shopHeader.style.display === "block"){
			shopElement.style.minHeight = "";
			shopElement.style.Height = "0.01%";
			shopHeader.style.display = 'none';
			shop.style.display = 'none';
		}else{
			shopHeader.style.display = 'block';
			shop.style.display = 'block';
			shopElement.style.minHeight = "200px";
		}
		
	
	};
	
	
	
	};//window on load event