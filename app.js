const SEARCH_BAR = document.querySelector(".searchbar");
const SEARCH_BTN = document.querySelector(".searchbar button");
const inputField = SEARCH_BAR.querySelector("#search");

//SEARCH RESULT
const AVATAR = document.querySelector(".search_result .result .avatar img");





SEARCH_BTN.addEventListener("click", (e)=>{
  e.preventDefault();
  let username = inputField.value;
  let API_URL = `https://api.github.com/search/users?q=${username}`;

  
  let fetchUsers = async ()=>{
    let response  = await fetch(API_URL);
    let data = await response.json();
    
      data.forEach(profile => {
        
        
      });
}
  
     fetchUsers();
}
)
