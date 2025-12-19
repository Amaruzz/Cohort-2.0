const reels = [
  {
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

var sum=''
reels.forEach(function(elem){
  sum=sum + ` <div class="reel">
    <video autoplay loop muted src="${elem.video}"></video>
    <div class="bottom">
      <div class="user">
        <img src="${elem.userProfile}" alt="">
        <h4>${elem.username}</h4>
        <button>${elem.isFollowed ? "Following" : "Follow"}</button>
      </div>
      <h3>${elem.caption}</h3>
    </div>
    <div class="right">
      <div class="like">
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
var allReels=document.querySelector(".all-reels")
allReels.innerHTML = sum;


