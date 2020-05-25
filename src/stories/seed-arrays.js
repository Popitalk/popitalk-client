const defaultThumbnail = "https://i.imgur.com/xCGu56D.jpg";

export const testImages = [
  "https://source.unsplash.com/128x128/?1,cat",
  "https://source.unsplash.com/128x128/?2,cat",
  "https://source.unsplash.com/128x128/?3,cat",
  "https://source.unsplash.com/128x128/?4,cat",
  "https://source.unsplash.com/128x128/?6,cat",
  "https://source.unsplash.com/128x128/?7,cat",
  "https://source.unsplash.com/128x128/?8,cat"
];

export const testQueue = [
  {
    id: 1,
    title: "Video 1",
    views: "20k views",
    timeFromUpload: "2 months ago",
    thumbnail: "https://i.imgur.com/aqjzchq.jpg",
    status: "queued",
    statusMessage: "In 10min",
    sourceChannelName: "sourceChannel"
  },
  {
    id: 2,
    title: "Video 2",
    views: "1M views",
    timeFromUpload: "1 week ago",
    thumbnail: "https://i.imgur.com/aqjzchq.jpg",
    status: "queued",
    statusMessage: "In 14min",
    sourceChannelName: "sourceChannel"
  },
  {
    id: 3,
    title: "Video 3",
    views: "200k views",
    timeFromUpload: "1 months ago",
    thumbnail: "https://i.imgur.com/aqjzchq.jpg",
    status: "queued",
    statusMessage: "In 18min",
    sourceChannelName: "sourceChannel"
  },
  {
    id: 4,
    title: "Video 4",
    views: "1.2M views",
    timeFromUpload: "3 months ago",
    thumbnail: "https://i.imgur.com/aqjzchq.jpg",
    status: "queued",
    statusMessage: "In 25min",
    sourceChannelName: "sourceChannel"
  },
  {
    id: 5,
    title: "Video 5",
    views: "1.2M views",
    timeFromUpload: "3 months ago",
    thumbnail: "https://i.imgur.com/aqjzchq.jpg",
    status: "queued",
    statusMessage: "In 50min",
    sourceChannelName: "sourceChannel"
  }
];

export const testUsers = [
  {
    id: 1,
    username: "Andrew",
    firstName: "Andrew",
    lastName: "Jang",
    avatar: "https://i.imgur.com/xCGu56D.jpg",
    variant: "stranger",
    owner: false
  },
  {
    id: 2,
    username: "Andrew",
    firstName: "Andrew",
    lastName: "Jang",
    avatar: "https://i.imgur.com/xCGu56D.jpg",
    variant: "friend",
    owner: true
  },
  {
    id: 3,
    username: "Andrew",
    firstName: "Andrew",
    lastName: "Jang",
    avatar: "https://i.imgur.com/xCGu56D.jpg",
    variant: "self",
    owner: false
  },
  {
    id: 4,
    username: "Andrew",
    firstName: "Andrew",
    lastName: "Jang",
    avatar: "https://i.imgur.com/xCGu56D.jpg",
    variant: "receivedRequest",
    owner: false
  },
  {
    id: 5,
    username: "Andrew",
    firstName: "Andrew",
    lastName: "Jang",
    avatar: "https://i.imgur.com/xCGu56D.jpg",
    variant: "sentRequest",
    owner: false
  }
];

export const testNotifications = [
  {
    id: 1,
    username: "Andrew",
    avatar: "https://i.imgur.com/xCGu56D.jpg",
    message: "You and Andrew are now friends"
  },
  {
    id: 2,
    username: "Andrew",
    avatar: "https://i.imgur.com/xCGu56D.jpg",
    message: "Andrew followed your channel"
  },
  {
    id: 3,
    username: "Andrew",
    avatar: "https://i.imgur.com/xCGu56D.jpg",
    message: "Andrew posted on your channel"
  },
  {
    id: 4,
    username: "Andrew",
    avatar: "https://i.imgur.com/xCGu56D.jpg",
    message: "Andrew commented on your post"
  },
  {
    id: 5,
    username: "Andrew",
    avatar: "https://i.imgur.com/xCGu56D.jpg",
    message: "Andrew liked your post"
  },
  {
    id: 6,
    username: "Andrew",
    avatar: "https://i.imgur.com/xCGu56D.jpg",
    message: "Andrew liked your comment"
  }
];

export const testVideos = [
  {
    id: 1,
    title: "Video 1",
    views: "20k views",
    timeFromUpload: "2 months ago",
    thumbnail: defaultThumbnail,
    status: "queued",
    statusMessage: "In 10min"
  },
  {
    id: 2,
    title: "Video 2",
    views: "1M views",
    timeFromUpload: "1 week ago",
    thumbnail: defaultThumbnail,
    status: "queued",
    statusMessage: "In 14min"
  },
  {
    id: 3,
    title: "Video 3",
    views: "200k views",
    timeFromUpload: "1 months ago",
    thumbnail: defaultThumbnail,
    status: "queued",
    statusMessage: "In 18min"
  },
  {
    id: 4,
    title: "Video 4",
    views: "1.2M views",
    timeFromUpload: "3 months ago",
    thumbnail: defaultThumbnail,
    status: "queued",
    statusMessage: "In 25min"
  },
  {
    id: 5,
    title: "Video 5",
    views: "1.2M views",
    timeFromUpload: "3 months ago",
    thumbnail: defaultThumbnail,
    status: "queued",
    statusMessage: "In 50min"
  }
];

export const testUserMinimal = [
  {
    id: 1,
    name: "Friend 1",
    avatar: "https://source.unsplash.com/128x128/?1,cat"
  },
  {
    id: 2,
    name: "Friend 2",
    avatar: "https://source.unsplash.com/128x128/?2,cat"
  },
  {
    id: 3,
    name: "Friend 3",
    avatar: "https://source.unsplash.com/128x128/?3,cat"
  },
  {
    id: 4,
    name: "Friend 4",
    avatar: "https://source.unsplash.com/128x128/?4,cat"
  }
];

export const testPosts = [
  {
    id: 1,
    name: "Person 1",
    avatar: "https://source.unsplash.com/128x128/?1,cat",
    liked: false,
    comments: [1, 3, 4],
    timeFromPost: "20days ago",
    text: "Post Post Post Post Post"
  },
  {
    id: 2,
    name: "Person 2",
    avatar: "https://source.unsplash.com/128x128/?1,cat",
    liked: true,
    comments: [],
    timeFromPost: "10days ago",
    text: "Post Post Post Post Post"
  },
  {
    id: 3,
    name: "Person 3",
    avatar: "https://source.unsplash.com/128x128/?1,cat",
    liked: false,
    comments: [2],
    timeFromPost: "5 days ago",
    text: "Post Post Post Post Post"
  }
];

export const testComments = [
  {
    id: 1,
    name: "Commenter 1",
    avatar: "https://source.unsplash.com/128x128/?2,cat",
    likes: 0,
    liked: false,
    timeFromPost: "40min ago",
    text: "Post Post Post Post Post"
  },
  {
    id: 2,
    name: "Commenter 2",
    avatar: "https://source.unsplash.com/128x128/?2,cat",
    likes: 2,
    liked: true,
    timeFromPost: "30min ago",
    text: "Post Post Post Post Post"
  },
  {
    id: 3,
    name: "Commenter 3",
    avatar: "https://source.unsplash.com/128x128/?2,cat",
    likes: 10,
    liked: false,
    timeFromPost: "10min ago",
    text: "Post Post Post Post Post"
  },
  {
    id: 4,
    name: "Commenter 4",
    avatar: "https://source.unsplash.com/128x128/?2,cat",
    likes: 10,
    liked: false,
    timeFromPost: "10min ago",
    text: "Post Post Post Post Post"
  }
];

export const testMessages = [
  {
    id: 1,
    name: "André Gama",
    date: new Date(),
    avatar: "https://i.imgur.com/xCGu56D.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque temporibus soluta molestias error est cumque debitis eum harum fuga, quaerat provident enim a consequatur perferendis laudantium illo ipsam corrupti earum?",
    image: ""
  },
  {
    id: 2,
    name: "André Gama",
    date: new Date(),
    message: "testees",
    avatar: "https://i.imgur.com/xCGu56D.jpg",
    image: "https://itpetblog.com.br/wp-content/uploads/2019/07/grumpy-cat.jpg"
  },
  {
    id: 3,
    name: "André Gama",
    date: new Date(),
    message: "testees",
    avatar: "https://i.imgur.com/xCGu56D.jpg",
    image: "https://itpetblog.com.br/wp-content/uploads/2019/07/grumpy-cat.jpg",
    me: true
  },
  {
    id: 4,
    name: "André Gama",
    date: new Date(),
    message: "testees",
    avatar: "https://i.imgur.com/xCGu56D.jpg",
    image: "https://itpetblog.com.br/wp-content/uploads/2019/07/grumpy-cat.jpg",
    me: true
  },
  {
    id: 5,
    name: "André Gama",
    date: new Date(),
    message: "testees",
    avatar: "https://i.imgur.com/xCGu56D.jpg",
    image: "https://itpetblog.com.br/wp-content/uploads/2019/07/grumpy-cat.jpg",
    me: true
  }
];

export const testRooms = [
  {
    id: 1,
    name: "Andrew",
    self: true,
    online: false,
    watching: false,
    notifications: null,
    message: null,
    images: ["https://source.unsplash.com/128x128/?1,cat"],
    messageSent: "1m"
  },
  {
    id: 2,
    name: "Alex",
    self: false,
    online: false,
    watching: false,
    notifications: 23,
    message: null,
    images: ["https://source.unsplash.com/128x128/?2,cat"],
    messageSent: "2m"
  },
  {
    id: 3,
    name: "John, Paul, Andrew, Jer...",
    self: false,
    online: false,
    watching: false,
    notifications: null,
    message: "You: ABCD",
    images: [
      "https://source.unsplash.com/128x128/?1,cat",
      "https://source.unsplash.com/128x128/?2,cat",
      "https://source.unsplash.com/128x128/?3,cat",
      "https://source.unsplash.com/128x128/?4,cat"
    ],
    messageSent: "Today"
  },
  {
    id: 4,
    name: "Rick, Tom, Stewart",
    self: false,
    online: false,
    watching: true,
    notifications: 2,
    message: "Tom: xyzxyz",
    images: [
      "https://source.unsplash.com/128x128/?6,cat",
      "https://source.unsplash.com/128x128/?7,cat",
      "https://source.unsplash.com/128x128/?8,cat"
    ],
    messageSent: "1/5/2019"
  }
];

export const testChannels = [
  {
    id: 1,
    name: "League of Legends",
    icon: "https://source.unsplash.com/128x128/?1,dog",
    watching: false,
    avatars: [
      "https://source.unsplash.com/128x128/?1,cat",
      "https://source.unsplash.com/128x128/?2,cat",
      "https://source.unsplash.com/128x128/?3,cat",
      "https://source.unsplash.com/128x128/?4,cat"
    ],
    numOnline: 9001
  },
  {
    id: 2,
    name: "League of Legends",
    icon: "https://source.unsplash.com/128x128/?1,dog",
    watching: true,
    avatars: [
      "https://source.unsplash.com/128x128/?1,cat",
      "https://source.unsplash.com/128x128/?2,cat",
      "https://source.unsplash.com/128x128/?3,cat",
      "https://source.unsplash.com/128x128/?4,cat"
    ],
    numOnline: 20999
  },
  {
    id: 3,
    name: "League of Legends",
    icon: "https://source.unsplash.com/128x128/?1,dog",
    watching: false,
    numOnline: 24
  },
  {
    id: 4,
    name: "League of Legends",
    icon: "https://source.unsplash.com/128x128/?1,dog",
    watching: true,
    avatars: [
      "https://source.unsplash.com/128x128/?1,cat",
      "https://source.unsplash.com/128x128/?2,cat",
      "https://source.unsplash.com/128x128/?3,cat",
      "https://source.unsplash.com/128x128/?4,cat"
    ],
    numOnline: 88
  }
];
