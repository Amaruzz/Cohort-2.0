const reels = [
  {
    ismuted: true,
    username: "arjun_travels",
    likeCount: 12450,
    isLiked: false,
    commentCount: 342,
    caption: "Sunrise hits different when you're on the road 🌄✨",
    video: "./reels/1.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/11.jpg",
    shareCount: 210,
    isFollowed: true
  },
  {
    ismuted: true,
    username: "fitwithneha",
    likeCount: 9820,
    isLiked: true,
    commentCount: 198,
    caption: "Consistency > Motivation 💪 Day 45 done!",
    video: "./reels/2.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/21.jpg",
    shareCount: 134,
    isFollowed: false
  },
  {
    ismuted: true,
    username: "techbyrohan",
    likeCount: 15670,
    isLiked: false,
    commentCount: 410,
    caption: "AI tools that will save you 10 hours a week 🤯",
    video: "./reels/3.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/32.jpg",
    shareCount: 520,
    isFollowed: true
  },
  {
    ismuted: true,
    username: "foodie_anu",
    likeCount: 22130,
    isLiked: true,
    commentCount: 689,
    caption: "Street food heaven 🌮🔥 Kerala edition",
    video: "./reels/4.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/45.jpg",
    shareCount: 980,
    isFollowed: true
  },
  {
    ismuted: true,
    username: "daily_designs",
    likeCount: 7340,
    isLiked: false,
    commentCount: 122,
    caption: "Minimal UI is not boring, it's powerful 🎨",
    video: "./reels/5.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/54.jpg",
    shareCount: 87,
    isFollowed: false
  },
  {
    ismuted: true,
    username: "cinematic_souls",
    likeCount: 18990,
    isLiked: true,
    commentCount: 503,
    caption: "Slow motion makes emotions louder 🎬🖤",
    video: "./reels/1.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/67.jpg",
    shareCount: 760,
    isFollowed: true
  },
  {
    ismuted: true,
    username: "learn_js_fast",
    likeCount: 6120,
    isLiked: false,
    commentCount: 96,
    caption: "JavaScript array methods explained in 30 seconds ⚡",
    video: "./reels/2.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/73.jpg",
    shareCount: 65,
    isFollowed: false
  },
  {
    ismuted: true,
    username: "nature.vibes",
    likeCount: 27450,
    isLiked: true,
    commentCount: 812,
    caption: "Close your eyes, feel the wind 🌿🍃",
    video: "./reels/3.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/58.jpg",
    shareCount: 1200,
    isFollowed: true
  },
  {
    ismuted: true,
    username: "startup_diaries",
    likeCount: 8450,
    isLiked: false,
    commentCount: 154,
    caption: "No overnight success, only overnight work 🚀",
    video: "./reels/4.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/81.jpg",
    shareCount: 190,
    isFollowed: false
  },
  {
    ismuted: true,
    username: "musicflow",
    likeCount: 16300,
    isLiked: true,
    commentCount: 377,
    caption: "Headphones on, world off 🎧✨",
    video: "./reels/5.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/90.jpg",
    shareCount: 540,
    isFollowed: true
  }
];
var allReels=document.querySelector(".all-reels")

function addData() {
  var sum=''
reels.forEach(function(elem,idx){
  sum=sum + ` <div class="reel">
    <video autoplay loop ${elem.ismuted? 'muted':''} src="${elem.video}"></video>
     <div class="mute" id=${idx}>
     ${elem.ismuted? `<i class="ri-volume-mute-fill"></i>`:`<i class="ri-volume-up-fill"></i>`}
      </div>
    <div class="bottom">
      <div class="user">
        <img src="${elem.userProfile}" alt="">
        <h4>${elem.username}</h4>
        <button id=${idx} class='follow'>${elem.isFollowed ? "Unfollow" : "Follow"}</button>
      </div>
      <h3>${elem.caption}</h3>
    </div>
    <div class="right">
      <div id=${idx} class="like">
       <h4 class="like-icon icon">${elem.isLiked? '<i class=" love ri-heart-3-fill"></i>':'<i class="  ri-heart-3-line"></i>'} </h4>
      <h6>${elem.likeCount}</h6>
      </div>
        <div class="comment">
       <h4 class="comment-icon icon"> <i class="ri-message-2-line"></i></h4>
      <h6>${elem.commentCount}</h6>
      </div>
      <div class="share">
       <h4 class="share-icon icon"><i class="ri-share-fill"></i></h4>
      <h6>${elem.shareCount}</h6>
      </div>
       <div class="menu">
       <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
      </div>


    </div>
    
  </div>`
})
allReels.innerHTML = sum;

}
addData()


allReels.addEventListener('dblclick',function(dets){
  if(dets.target.className =='like'){
  if(!reels[dets.target.id].isLiked){
  reels[dets.target.id].likeCount ++
  reels[dets.target.id].isLiked =true
  }else{
    reels[dets.target.id].likeCount --
    reels[dets.target.id].isLiked =false
  }
}
})
addData()

allReels.addEventListener('click',function(dets){
  clickTimer=setTimeout(function(){
if(dets.target.className =='follow'){
  if(!reels[dets.target.id].isFollowed){
    reels[dets.target.id].isFollowed =true
  }else{
    reels[dets.target.id].isFollowed =false
  }
}
addData()
  },250)
})
allReels.addEventListener('click',function(dets){
  if(dets.target.className =='mute'){
  if(!reels[dets.target.id].ismuted){
    reels[dets.target.id].ismuted =true
  }else{
    reels[dets.target.id].ismuted =false
  }
}
addData()
  },250)







