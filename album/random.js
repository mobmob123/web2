let random = "https://www.themealdb.com/api/json/v1/1/random.php";
let Ingredient = [];
let Measure = [];
let Name = []; 
let YtVideo;



$.getJSON(random, function (recipe) {
  data = recipe
  let Meal = recipe.meals[0].strMeal;
  let Category = recipe.meals[0].strCategory;
  let Area = recipe.meals[0].strArea;
  let instruction = recipe.meals[0].strInstructions;
  let MealThumb = recipe.meals[0].strMealThumb;
  YtVideo = recipe.meals[0].strYoutube.split("=")[1];
  Name.push(Meal);
  for (let i = 1; ; i++) {
    const ingredientKey = "strIngredient" + i;
    const Measurekey = "strMeasure" + i;
    const ingredientValue = recipe.meals[0][ingredientKey];
    const MeasureValue = recipe.meals[0][Measurekey];
    if (ingredientValue === "") {
      break;
    }
    else {
      Ingredient.push(ingredientValue);
      Measure.push(MeasureValue);
    }
  }


  $(".CMeal").append(`<p>${Meal}</p>`);
  $(".CCategory").append(`<p>${Category}</p>`);
  $(".CMealThumb").append(`<img  style=" margin-left: 0%;" src="${MealThumb}" height="300 px"></img>`);
  //處理換行問題
  $(".Cinstruction").append(instruction.replace(/\r\n/g, "<br>"));
  pageloaded()
})


//下面是youtube撥放器

function loadYouTube() {
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: YtVideo,
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady, 
      // 'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function stopVideo() {
  player.stopVideo();
}


function pageloaded() {
  $(".add").css("visibility", "visible");
  loadYouTube();
}