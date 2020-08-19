import LocalizedStrings from "react-localization";

// To add more supported languages, add the Country Key (eg.English -> en). Keys can be found here https://material-ui.com/guides/localization/.
let strings = new LocalizedStrings({
  //  Default - English  //
  en: {
    // Moment.JS
    location: "en",
    // MataData & WelcomePage & SiteHeaderWelcome
    loginPageTitle: "Popitalk - Log In or Sign Up",
    loginPageDescription:
      "Create an account or log into Popitalk. It's FREE. Connect with friends, family and start watching together!",
    title: "Popitalk",
    description:
      "Watch together! Connect with friends, family and start watching together! We believe in making texting more fun and enjoyable.",
    createChannelTitle: "Create Channel - Popitalk",
    createChannelDescription:
      "Create your own channel on Popitalk. Add videos to up next and enjoy your time with followers! We believe in making texting more fun and enjoyable.",
    loginUsername: "Username or email",
    loginPassword: "Password",
    loginButton: "Log In",
    // CreateNewAccountForm & EditInformationForm & EditBirthdayForm
    createNewAccountTitle: "Create a new account",
    createNewAccountSubtitle: "Get the full experience. It's FREE!",
    createNewAccountFirstName: "First Name",
    createNewAccountLastName: "Last Name",
    createNewAccountEmail: "Email",
    createNewAccountUsername: "Username",
    createNewAccountPassword: "Password",
    createNewAccountBirthday: "Birthday",
    createNewAccountTerms: "By clicking Sign Up, you agree to the",
    createNewAccountTerms1: "Terms and Policy.",
    createNewAccountButton: "Sign Up",
    // functions.js input errors
    inputTextTooShort: "Too short *",
    inputTextTooLong: "Too long *",
    inputTextRequired: "Required *",
    ageLimitText: "You can't use Popitalk if you are younger than 13.",
    invalidEmail: "Invalid email *",
    passwordTooShort: "At least 6 characters needed *",
    passwordTooLong: "Maximum 32 characters *",
    lowerCaseRequired: "At least one lowercase letter needed *",
    upperCaseRequired: "At least one uppercase letter needed *",
    numberRequired: "Password should have at least one number.",
    newPasswordRequirement: "It must be different from your old password.",
    // Footer
    company: "Company",
    aboutPopitalk: "About Popitalk",
    blog: "Blog",
    contact: "Contact",
    legal: "Legal",
    termsOfUse: "Terms of Use",
    privacyPolicy: "Privacy Policy",
    copyright: "Copyright",
    community: "Community",
    discord: "Discord",
    twitter: "Twitter",
    youtube: "Youtube",
    // Months
    jan: "January",
    feb: "February",
    mar: "March",
    apr: "April",
    may: "May",
    jun: "June",
    jul: "July",
    aug: "August",
    sep: "September",
    oct: "October",
    nov: "November",
    dec: "December",
    // PanelHeader & MiniFriendsList
    channels: "Channels",
    friends: "Chat",
    addFriendsButton: "Add Friends",
    // ChannelsPanel & FriendsPanel
    yourChannels: "Your Channels",
    yourChannelsPlaceholder: "Create your own public Channel!",
    followingChannels: "Following",
    followingChannelsPlaceholder: "Discover and Follow Channels!",
    createChannelButton: "Create",
    searchFriendsInput: "Search Username",
    searchResult: "Results for",
    searchFriendsClose: "Close",
    newRoomButton: "New Room",
    // RoomIcon
    myRoom: "My room",
    // ChannelsList
    online: "online",
    // RecommendedView
    channelSearchInput: "Search for a channel",
    videoSearchInput: "Search for a video",
    following: "# Following",
    discover: "# Discover",
    trending: "# Trending",
    // ChannelCard
    follow: "Follow",
    nothingPlaying: "Nothing is Playing at this moment",
    // VideoCard
    watch: "Watch it in a room",
    // ChannelHeader
    video: "Video",
    posts: "Posts",
    upNext: "Up Next",
    settings: "Settings",
    // VideoPlayer & VideoStatus
    paused: "Paused",
    startingIn: "Starting in",
    play: "Play",
    pause: "Pause",
    mute: "Mute",
    unmute: "Unmute",
    fullScreen: "Full screen",
    playing: "Playing",
    requestVideoButton: "Send a request to the admin",
    // Chat Header
    roomMembers: "room members",
    followers: "followers",
    chatInput: "Type a message...",
    // SortableList & ChannelQueue & VideoMinimalQueueCard
    findMoreVideos: "Search for videos",
    manageUpNext: "Manage videos up next",
    upNextSubtitle:
      "Add, delete or change the orders of the videos. You can add up to 30 videos.",
    searchAddVideos: "Search and add more videos below!",
    //ChannelDescription & NewChannelPost & ChannelPost
    admins: "Admins",
    postInput: "Post something...",
    like: "Like",
    likes: "Likes",
    comment: "Comment",
    comments: "Comments",
    channelWelcomePost:
      "This is the start! Make an awesome channel and have fun watching together!",
    //CreateChannel > ChannelForm, ChannelFormSubmit
    selectChannelIcon: "Select Channel Icon",
    changeChannelIcon: "Change Channel Icon",
    createChannelName: "Channel Name *",
    channelNameInput: "Name your channel",
    createChannelDesc: "Channel Description *",
    channelDescInput: "Describe your channel",
    channelCatagory: "Channel Catagory (optional)",
    readyToCreate: "Ready to create your own channel?",
    saveChannelEdit: "Remember to save your changes.",
    createButton: "Create",
    resetButton: "Reset"
  },

  //  KOREAN  //
  ko: {
    // Moment.JS
    location: "ko",
    // WelcomePage & SiteHeaderWelcome
    loginPageTitle: "Popitalk - 로그인 또는 회원가입",
    loginPageDescription:
      "Popitalk 계정을 만들거나 로그인하세요. 친구, 가족, 아는 사람들과 유튜브 같이 시청하고 채팅해요.",
    title: "포피톡",
    description:
      "Popitalk으로 친구와 가족들과 유튜브 같이 시청하고 채팅해요. 새로운 채널을 구독하고 재미있는 영상을 시청하세요",
    createChannelTitle: "채널 만들기 - Popitalk",
    createChannelDescription:
      "포피톡에서 채널을 개설하세요. 재미있는 영상들을 재생하고 팔로워들과 소통하세요.",
    loginUsername: "이메일 또는 아이디",
    loginPassword: "비밀번호",
    loginButton: "로그인",
    // CreateNewAccountForm & EditInformationForm & EditBirthdayForm
    createNewAccountTitle: "가입하기",
    createNewAccountSubtitle:
      "빠르고 간편하게 같이 시청하세요. 무료 서비스입니다.",
    createNewAccountFirstName: "이름",
    createNewAccountLastName: "성(姓)",
    createNewAccountEmail: "이메일",
    createNewAccountUsername: "아이디",
    createNewAccountPassword: "비밀번호",
    createNewAccountBirthday: "생년월일",
    createNewAccountTerms:
      "가입하기 버튼을 클릭하면 Popitalk의 약관정책에 동의하게 됩니다.",
    createNewAccountTerms1: "이용약관 확인.",
    createNewAccountButton: "가입하기",
    // functions.js input errors
    inputTextTooShort: "너무 짧습니다 *",
    inputTextTooLong: "너무 깁니다 *",
    inputTextRequired: "필수 항목 *",
    ageLimitText: "만 13세 이하는 이용하실 수 없습니다.",
    invalidEmail: "잘못된 이메일 형식입니다.",
    passwordTooShort: "최소 6자여야 합니다.",
    passwordTooLong: "최대 32자까지 가능합니다.",
    lowerCaseRequired: "소문자가 최소한 1개가 필요합니다.",
    upperCaseRequired: "대문자가 최소한 1개가 필요합니다.",
    numberRequired: "최소한 숫자 1개가 필요합니다.",
    newPasswordRequirement: "전 비밀번호와 다르게 설정해주세요.",
    // Footer
    company: "회사소개",
    aboutPopitalk: "Popitalk에 대해서",
    blog: "블로그",
    contact: "연락하기",
    legal: "정책",
    termsOfUse: "이용약관",
    privacyPolicy: "개인정보 정책",
    copyright: "저작권",
    community: "커뮤니티",
    discord: "디스코드",
    twitter: "트위터",
    youtube: "유튜브",
    // Months
    jan: "1월",
    feb: "2월",
    mar: "3월",
    apr: "4월",
    may: "5월",
    jun: "6월",
    jul: "7월",
    aug: "8월",
    sep: "9월",
    oct: "10월",
    nov: "11월",
    dec: "12월",
    // PanelHeader & MiniFriendsList
    channels: "티비채널",
    friends: "채팅",
    addFriendsButton: "친구 추가",
    // ChannelsPanel & FriendsPanel
    yourChannels: "내 채널",
    yourChannelsPlaceholder: "나만의 채널을 만들어 보세요!",
    followingChannels: "팔로잉 채널",
    followingChannelsPlaceholder: "채널을 팔로우 할 수 있습니다",
    createChannelButton: "만들기",
    searchFriendsInput: "아이디로 친구 찾기",
    searchResult: "검색 결과",
    searchFriendsClose: "닫기",
    newRoomButton: "방 만들기",
    // RoomIcon
    myRoom: "내 톡방",
    // ChannelsList
    online: "온라인",
    // RecommendedView
    channelSearchInput: "채널 검색",
    videoSearchInput: "동영상 검색",
    following: "# 팔로잉",
    discover: "# 추천",
    trending: "# 인기",
    // ChannelCard
    follow: "팔로우",
    nothingPlaying: "재생되고 있는 영상이 없습니다",
    // VideoCard
    watch: "톡방에서 시청하기",
    // ChannelHeader
    video: "티비",
    posts: "프로필",
    upNext: "재생 목록",
    settings: "설정",
    // VideoPlayer & VideoStatus
    paused: "일시정지",
    startingIn: "곧 재생됩니다",
    play: "재생",
    pause: "일시정지",
    mute: "음소거",
    unmute: "음소거 해제",
    fullScreen: "전체화면",
    playing: "재생중",
    requestVideoButton: "채널 관리자한테 요청하세요",
    // ChatHeader & ChatActions
    roomMembers: "대화상대",
    followers: "팔로워",
    chatInput: "메시지를 작성하세요...",
    // SortableList
    findMoreVideos: "더 많은 영상을 검색하세요",
    manageUpNext: "재생 목록을 관리하세요",
    upNextSubtitle:
      "동영상을 재생 목록에 추가, 삭제 혹은 이동할 수 있습니다. 최대 30개까지 추가가능 합니다.",
    searchAddVideos: "밑에서 동영상을 검색하고 추가하세요!",
    //ChannelDescription & NewChannelPost & ChannelPost & ChannelChat
    admins: "관리자",
    postInput: "게시글을 입력하세요...",
    like: "좋아요",
    likes: "좋아요",
    comment: "댓글",
    comments: "댓글",
    channelWelcomePost: "채널을 개설했습니다!",
    //CreateChannel > ChannelForm, ChannelFormSubmit
    selectChannelIcon: "채널 프사 업로드",
    changeChannelIcon: "채널 프사 변경",
    createChannelName: "채널 이름 *",
    channelNameInput: "이름을 지어주세요",
    createChannelDesc: "채널 설명 *",
    channelDescInput: "어떤 채널인가요?",
    channelCatagory: "카테고리 (선택)",
    readyToCreate: "채널 개설 준비되셨습니까?",
    saveChannelEdit: "변경된 내용을 저장하시겠습니가?",
    createButton: "만들기",
    resetButton: "초기화"
  }
});

export default strings;
