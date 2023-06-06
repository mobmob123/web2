let categories = "../categories.json";
let JsonDescription;

$.getJSON(categories, function(data) {
    $.each(data.categories, function (indexInArray, Element) { 
        let JsonimagePath = Element.strCategoryThumb;
        let jsonDetail = Element.strCategory
        JsonDescription = Element.strCategoryDescription
        let cardImg = $(".bd-placeholder-img.card-img-top").eq(indexInArray);
        let Description =$(".card-text").eq(indexInArray);
        cardImg.attr("src", JsonimagePath);
        cardImg.attr("alt", jsonDetail);
        Description.text(limitText(JsonDescription,205));
     });        
})


function limitText(text, limit) {
    if (text.length > limit) {
      var shortenedText = text.substring(0, limit) + "...";
    //   var moreLink = '<a href="#" onclick="showFullText(\'' + text + '\')">更多</a>';
      return shortenedText ;
    } else {
        return text;
    }
  }