let arr = [];
let a = document.getElementById('name'),
    b = document.getElementById('address'),
    c = document.getElementById('email'),
    d = document.getElementById('password');

document.getElementById('myform').addEventListener('submit', (e) => {
    e.preventDefault();

    let name = a.value,
        address = b.value,
        email = c.value,
        password = d.value;
    // console.log(a.value);

    var userData = {
        name: name,
        address: address,
        email: email,
        password: password
    };

    // arr.push(userData);
    // localStorage.setItem('userData', JSON.stringify(arr));

    function clearFields() {
        document.getElementById('name').value = '',
            document.getElementById('address').value = '',
            document.getElementById('email').value = '',
            document.getElementById('password').value = ''
    };
    clearFields();

    if (name === '' || address === '' || email === '' || password === '') {
        alert('please fill all the fields');
    }

    else {
    
        if(localStorage.getItem('userData')){
             userdata = JSON.parse(localStorage.userData);
               userdata.forEach(e => {
            if (e.email === userData.email && e.password === userData.password) {
                alert('already filled')
            }
            else {
                arr.push(userData);
                localStorage.setItem('userData', JSON.stringify(arr));
            }
        });
        }else{
            arr.push(userData);
            localStorage.setItem('userData', JSON.stringify(arr));
        }
   
    }

});
// sumanname = [];
// su = JSON.parse(localStorage.userData)
// su.forEach(e => {
//     sumanname.push(e.name);
// })
// console.log(sumanname)


// userdata = JSON.parse(localStorage.userData)
// userdata.forEach(e => {
//     if (e.email === userData.email && e.password === userData.password) {
//         alert('already filled')
//     }
//     else {
//         arr.push(userData);
//         localStorage.setItem('userData', JSON.stringify(arr));
//     }
// });
// console.log(array);












    // const name = document.getElementById('name');
// var address = document.getElementById('address');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const form = document.getElementById('button');

// form.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(name.value);
//     console.log(address.value);
//     console.log(email.value);
//     console.log(password.value);
// });

// // localStorage.setItem(address ,'prasauni');
// // var address = localStorage.getItem('address');
// // console.log(address);

// ad = address.value;
// localStorage.setItem('address', address);
// var retrievedAddress = localStorage.getItem('address');
// console.log(retrievedAddress);
