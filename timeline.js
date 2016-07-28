$(document).ready(function(){

arr = []

function fetchTimeline(){
  $.getJSON("https://guarded-bayou-26088.herokuapp.com/tweets", function(data){
    $.each(data.tweets, function(i, tweet){
      tweetBuilder(tweet)
})

})
}
function tweetBuilder(tweet){
  source = $("#tweets").html()
  template = Handlebars.compile(source)
  context = {picture: tweet.user.picture_url, body: tweet.body, name: tweet.user.name, time: moment(tweet.created_at, "YYYYMMDD").fromNow()}
  html = template(context)
  $('.place').append(html)
  $.getJSON("https://guarded-bayou-26088.herokuapp.com/user/", {id: tweet.user.id}, function(data)
{
  console.log(data)

})
}

// function tweetPic(picture_url)

fetchTimeline()

















})
