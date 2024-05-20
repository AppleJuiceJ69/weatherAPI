const submit = document.querySelector('.submit')
const username = document.querySelector('#username')
const password = document.querySelector('#password')

async function getUsers(){
   const users = await fetch('https://dummyjson.com/users')
   const allUsers = await users.json(users)
console.log(allUsers);
// changing a user
// you could also create a sign up page, that adds on to these users.
allUsers.users[0].firstName = 'Andrew';
allUsers.users[0].lastName = 'dalt'
allUsers.users[0].username = 'andrew'
allUsers.users[0].password = 'dalt'
 
    allUsers.users.forEach(element => {
     
      
        submit.addEventListener('click', (e)=>{
            if(username.value === element.username && password.value === element.password){
                
                // load index.html
                // say logged in as name
              
               window.open('index.html')
               // now if this is true, when we open up profile icon again we need it to open up the main page.
              
            }
            else{
                console.log('sorry Not a valid username or password');
            }
            
        })
    })

}
getUsers()

// get username and password if correct
// submit.addEventListener('click', (e)=>{
//     if(username.value === 'hello@gmail.com' && password.value === 'bigdadd'){
        
//         console.log('true');
       
//     }
//     else{
//         console.log('false');
//     }
    
// })