let categories = "../categories.json";
let JsonDescription=[];

$.getJSON(categories, function(data) {
    $.each(data.categories, function (indexInArray, Element) { 
        let JsonimagePath = Element.strCategoryThumb;
        let jsonDetail = Element.strCategory
        JsonDescription[indexInArray] = Element.strCategoryDescription
        let cardImg = $(".bd-placeholder-img.card-img-top").eq(indexInArray);
        let Description =$(".card-text").eq(indexInArray);
        cardImg.attr("src", JsonimagePath);
        cardImg.attr("alt", jsonDetail);
        Description.text(limitText(JsonDescription[indexInArray],200));

        $(".col").eq(indexInArray).attr("num", indexInArray);
        $(".col").eq(indexInArray).attr("mycat", jsonDetail);


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

  $(".col").click(function (e) { 
    showPopup($(this).attr("mycat"),$(this).attr("num"))
  });

    // 顯示懸浮視窗
  function showPopup(str,n) {
      document.getElementById("popup").style.display = "block";
      $("#popup h2").text(str);
      $("#popup p").text(JsonDescription[n]);
  }

  // 隱藏懸浮視窗
  function hidePopup() {
      document.getElementById("popup").style.display = "none";
  }

  // 上一頁按鈕功能
  function previousPage() {
      // 在這裡實現上一頁的相關邏輯
      console.log("上一頁");
  }

  // 下一頁按鈕功能
  function nextPage() {
      // 在這裡實現下一頁的相關邏輯
      console.log("下一頁");
  }