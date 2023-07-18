document.getElementById('myform').addEventListener('submit', (e) => {
    e.preventDefault();
        email = document.getElementById('email').value,
        password = document.getElementById('password').value;
        var userData = JSON.parse(localStorage.getItem('userData'));
        console.log(userData.length);
     for(let i= 0; i < userData.length ; i++){
        userData[i].email=== email && userData[i].password=== password
     
    //   alert(userData[i].name);
      location.href='./dash.html'
     }
    //   };

    
// if(userData.email=== email && userData.password=== password){
//    alert('you have signed in');
// } else 
// alert('something went wrong');
});