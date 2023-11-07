const SEARCH_BAR = document.querySelector(".searchbar");
const SEARCH_BTN = document.querySelector(".searchbar button");
const inputField = SEARCH_BAR.querySelector("#search");
const RESULT_SECTION = document.querySelector(".search_result")
//SEARCH RESULT
const AVATAR = document.querySelector(".search_result .result .avatar img");
const NextPage = document.querySelector(".innerContainer");
const backBTN = NextPage.querySelector(".return");
const HEADER = document.querySelector(".container header");




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
  HEADER.style.marginBottom = "3rem";
  

if(e.target.tagName=="BUTTON"){
  //PROFILE FETCH
  let PROFILE_URL = `https://api.github.com/users/${e.target.previousElementSibling.textContent}`;

  HEADER.style.marginBottom = "3rem";
  SEARCH_BAR.style.display = "none";
  RESULT_SECTION.style.display = "none";
  NextPage.style.display = "flex";


  let fetchProfile = async ()=>{
    let response  = await fetch(PROFILE_URL);
    let data = await response.json();
    console.log(data);

    let avatarContainer = document.querySelector(".innerContainer .accent");
    let avatarName = document.querySelector(".innerContainer .mainAvatar .Name");
    let avatarUserName = document.querySelector(".innerContainer .mainAvatar .userName");
    let mainName = document.querySelector(".userDetails .profileContainer h1");
    let userTag = document.querySelector(".userDetails .profileContainer .userbadge .userTag");
    let Hireable = document.querySelector(".userDetails .profileContainer .userbadge .hireable");
    let jobTitle = document.querySelector(".userDetails .profileContainer .jobTitle");
    let githubLink = document.querySelector(".userDetails .profileContainer .gitHubLink a");
    let location = document.querySelector(".userSocials .location .address");
    let website = document.querySelector(".userSocials .Website .address a");
    let followers = document.querySelector(".accountDetails .followers .number");
    let following = document.querySelector(".accountDetails .following .number");
    let publicRepos = document.querySelector(".accountDetails .public_repos .number");
    let publicGist = document.querySelector(".accountDetails .public_Gist .number");
    avatarContainer.style.backgroundImage = `url(${data.avatar_url})`; 
    avatarName.textContent = data.name;
    avatarUserName.textContent = data.login;
    mainName.textContent = data.name;
    jobTitle.textContent = data.bio;
    userTag.textContent = data.type;
    githubLink.href = data.html_url;

    if(data.hireable!=true){
      Hireable.style.display = "none";
    }

    if(data.location == null){
      location.parentElement.style.display = "none";
    }else{
      location.textContent = data.location;
    }

    if(data.blog==""){
      website.parentElement.parentElement.style.display ="none";
    }else{
      website.textContent = data.blog;
    }

    if((data.location==null) && (data.blog=="")){
      location.parentElement.parentElement.style.display = "none";
    }

    followers.textContent = data.followers;
    following.textContent = data.following;
    publicRepos.textContent = data.public_repos;
    publicGist.textContent = data.public_gists;


   
   






//REPO FETCH
    let REPO_URL = `https://api.github.com/users/${e.target.previousElementSibling.textContent}/repos`;
    let repoFetch  = await fetch(REPO_URL);
    let repodata = await repoFetch.json();
    console.log(repodata);
  }
  fetchProfile();
}
 
});



backBTN.addEventListener("click",(e)=>{
  SEARCH_BAR.style.display = "flex";
  RESULT_SECTION.style.display = "flex";
  NextPage.style.display = "none";
  HEADER.style.marginBottom = "10rem";
})
 