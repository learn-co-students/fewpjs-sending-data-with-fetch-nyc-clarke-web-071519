// Add your code here
function submitData(userName, userEmail) {
    let formData = {
        name: userName,
        email: userEmail
      };
       
    let configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
    };
    
    return fetch("http://localhost:3000/users", configObj)
        .then(response => response.json())
        .then(function(json) {
            const userId = json.id;
            const body = document.querySelector('body');
            body.innerHTML = json.id
        })
        .catch(function(error) {
            const body = document.querySelector('body');
            body.innerHTML = error.message
          });
}