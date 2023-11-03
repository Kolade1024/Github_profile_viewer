const SEARCH_BAR = document.querySelector(".searchbar");
const SEARCH_BTN = document.querySelector(".searchbar button");
const inputField = SEARCH_BAR.querySelector("#search");
const RESULT_SECTION = document.querySelector(".search_result")
//SEARCH RESULT
const AVATAR = document.querySelector(".search_result .result .avatar img");





SEARCH_BTN.addEventListener("click", (e)=>{
  e.preventDefault();
  RESULT_SECTION.innerHTML = "";
  let username = inputField.value;
  let API_URL = `https://api.github.com/search/users?q=${username}`;
  

  
  let fetchUsers = async ()=>{
    let response  = await fetch(API_URL);
    let data = await response.json();
    console.log(data.items);
    
    data.items.forEach(element => {
      let result = document.createElement("div");
      let avatar = document.createElement("div");
      let image = document.createElement("img");
      let user = document.createElement("div");
      let span = document.createElement("span");
      let button = document.createElement("button");
      result.className = "result";
      avatar.className = "avatar";
      image.src = element.avatar_url;
      user.className = "user";
      span.className = "user_name";
      span.textContent = element.login;
      button.textContent = "Visit profile";

      avatar.appendChild(image);
      user.appendChild(span);
      user.appendChild(button);
      result.appendChild(avatar);
      result.appendChild(user);

      RESULT_SECTION.appendChild(result);
    });

  
     
}
fetchUsers();
});
 
RESULT_SECTION.addEventListener("click", (e)=>{
  e.preventDefault();
  

if(e.target.tagName=="BUTTON"){
  //PROFILE FETCH
  let PROFILE_URL = `https://api.github.com/users/${e.target.previousElementSibling.textContent}`;
  let fetchProfile = async ()=>{
    let response  = await fetch(PROFILE_URL);
    let data = await response.json();
    console.log(data);

//REPO FETCH
    let REPO_URL = `https://api.github.com/users/${e.target.previousElementSibling.textContent}/repos`;
    let repoFetch  = await fetch(REPO_URL);
    let repodata = await repoFetch.json();
    console.log(repodata);
  }
  fetchProfile();
}
 
});
 