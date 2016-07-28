$(document).ready(function(){
  var api_root = 'https://guarded-bayou-26088.herokuapp.com/'



function fetchTimeline(){
  $.getJSON(api_root + 'tweets', function(data){
    $.each(data.tweets, function(i, tweet){
      tweetBuilder(tweet)
})

})
}
function tweetBuilder(tweet){
  var source = $("#tweets").html()
  var template = Handlebars.compile(source)
  var context = {picture: tweet.user.picture_url, id: tweet.user.id, body: tweet.body, name: tweet.user.name, time: moment(tweet.created_at, "YYYYMMDD").fromNow()}
  var html = template(context)
  $('.place').append(html)
  $.getJSON("https://guarded-bayou-26088.herokuapp.com/user/", {id: tweet.user.id}, function(data)
{

})
}
//
function modalPopulate(id){
  console.log(id)
  $.getJSON(api_root + "user", {id: id}, function(data){
    console.log(data.user)
    var userInfoSource = $('#user-stuff').html()
    var userInfoTemplate = Handlebars.compile(userInfoSource)
    var userInfoContext = {name: data.user.name, chirpCount:data.user.tweets.length, followersCount: data.user.followers_count, followingCount: data.user.followees_count, createdAt: data.user.created_at }
    var userHtml = userInfoTemplate(userInfoContext)
    console.log(userHtml)
    $('#user-info .modal-body').html(userHtml)
  }
)

}

fetchTimeline()

$(document.body).on('click', '.user-pic', function(ev){
  ev.preventDefault()
  modalPopulate(ev.target.getAttribute('data-id'))
  $('#user-info').modal('show')


})















})
