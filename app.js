const SEARCH_BAR = document.querySelector(".searchbar");
const SEARCH_BTN = document.querySelector(".searchbar button");
const inputField = SEARCH_BAR.querySelector("#search");

//SEARCH RESULT
const AVATAR = document.querySelector(".search_result .result .avatar img");

console.log(AVATAR);



SEARCH_BTN.addEventListener("click", (e)=>{
  e.preventDefault();
  let username = inputField.value;
  let API_URL = `https://api.github.com/users/${username}`;
  
  let fetchUsers = async ()=>{
    let response  = await fetch(API_URL);
    let data = await response.json();
    console.log(data["avatar_url"]);
    AVATAR.src = data["avatar_url"];
  }
  fetchUsers();
})
