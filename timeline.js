$(document).ready(function(){

arr = []

// $.getJSON("http://guarded-bayou-26088.herokuapp.com/tweets", function(data){
//   console.log(data)
//   arr.push(data)
//   console.log(arr)
// })

function fetchTimeline(){
  $.getJSON("http://guarded-bayou-26088.herokuapp.com/tweets", function(data){
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
}

// function tweetPic(picture_url)

fetchTimeline()

















})
