const database=[
		  {
		  	Username:'Anitha',
		  	Password:'176946',
		  },
		];
		  const btn=document.querySelector("#btn");
		  btn.addEventListener('click',()=>{
		  	// alert("Hello");
		  	const user=document.querySelector("#user").value;
		  	const pass=document.querySelector("#pswd").value;
		  	for( let i=0;i<database.length;i++){
		  		if(user==database[i].Username && pass==database[i].Password)
		  		{
		  			console.log(user+" Logined in");
            
		  			 window.location = "bienvenido.html";
		  			return;
		  		}
           }
           console.log("failed");
		  })
