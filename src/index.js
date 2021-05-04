

//~ CONTS N' NODES
const baseImageUrl = "https://loremflickr.com/320/440/"
const imageContainer = document.querySelector(".image-container");
const activityParagraph = document.getElementById("activity");
const nextBtn = document.getElementById("nextImg");
const addTextBtn = document.getElementById("add_text")
const textColorBtn = document.getElementById("textColor");
const boredBtn = document.getElementById("bored");
const ACT_URL = "http://www.boredapi.com/api/activity/";
const memeImage = document.getElementById("meme-pic");
let topTextInput = document.getElementById("top_text_input");
let bottomTextInput = document.getElementById("bottom_text_input");
const topText = document.getElementById("top_text");
const bottomText = document.getElementById("bottom_text");
let h3 = document.querySelectorAll("h3");
let preventCacheRandomNum = 2;
let searchTerm;
const catagoryInput = document.getElementById("cat_input")


//~ SERVER COMMUNICATIONS
const newImg = () => {  //GETS new image
    topText.innerText = "";
    bottomText.innerText = "";
    ++preventCacheRandomNum
    let image_random_stringer = "?lock=" + preventCacheRandomNum
    image_subject = catagoryInput.value;  
    let IMG_URL = baseImageUrl + image_subject + image_random_stringer  
    renderNewImage(IMG_URL);
    };
  
const newActivity = () => { //GETS new activity
    fetch(ACT_URL)
    .then(res => res.json())
    .then(activity => {
        renderNewActivity(activity);
    })
    .catch(function(error) {
        console.log('Request failed', error)
      });
}

//~ DOM MANIPULATION
const renderNewImage = img => { //renders new image
    memeImage.src = "";
    memeImage.src = img;
    imageContainer.append(memeImage);
    setTimeout(() => {displayText();},900);
}

const renderNewActivity = activity => { //renders new activity text
    console.log(activity.type);
    let activityText = activity.activity;
    activityText = activityText.toLowerCase();
    activityParagraph.innerText = activityText + ".\"";
}

const changeTextColor = () => { //toggles caption text color
    topText.classList.toggle("black");
    bottomText.classList.toggle("black");
};

const displayText = () => { //renders caption text
    topText.innerText = topTextInput.value;
    bottomText.innerText = bottomTextInput.value;
}


//~ EVENT HANDERS
nextBtn.addEventListener("click", newImg);

boredBtn.addEventListener("click", newActivity);

textColorBtn.addEventListener("click", changeTextColor);

topTextInput.addEventListener("input", displayText);

bottomTextInput.addEventListener("input", displayText);

//~ HELPER FUNCTIONS

newImg();