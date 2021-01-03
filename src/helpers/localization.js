import LocalizedStrings from "react-localization";

// To add more supported languages, add the Country Key (eg.English -> en). Keys can be found here https://material-ui.com/guides/localization/.
let strings = new LocalizedStrings({
  // === Default - English === //
  en: {
    // === Moment.JS === //
    location: "en",

    // === Error Message === //
    errorMessage: "Something went wrong :(",
    minCharacter1: "Minimum 3 characters",
    minCharacter2: "Minimum 1 character.",
    maxCharacter1: "Maximum 20 characters",
    maxCharacter2: "Maximum 150 characters.",
    nameRequired: "Channel name is required.",
    descRequired: "Channel description is required.",

    // === SEO (MataData & Site Title === //
    popitalk: "Popitalk",
    mainTitle: "Popitalk - Watch together",
    mainDescription:
      "Watch videos together or listen to songs together with friends and family. Watch youtube together while chatting. synchronized at the same time.",
    mainKeywords:
      "popitalk, watch together, synchronized, youtube, videos, watch, friends, social, anime, watch2gether, funny, music, dailymotion, soundcloud, watchtogether",
    loginPageTitle: "Popitalk - Log In or Sign Up",
    loginPageDescription:
      "Log in or create an account on Popitalk. Watch videos together or listen to songs together with friends and family. Watch youtube in perfect sync together while chatting with your beloved ones.",
    createChannelTitle: "Popitalk - Create Channel",
    createChannelDescription:
      "Create a channel on Popitalk. Watch videos together or listen to songs together with friends and family. Watch youtube in perfect sync together while chatting with your beloved ones.",
    popitalkChannel: "Popitalk channel",

    // WelcomePage & SiteHeaderWelcome
    loginUsername: "Username or email",
    loginPassword: "Password",
    welcomeHeader1: "Watch videos together.",
    welcomeHeader2: "At the same time.",
    WelcomeSubheader:
      "Popitalk is an excellent way to stay connected to the people you care about during physical distancing, and brings back a small amount of normal into our otherwise chaotic world.",
    welcomeButton1: "Sign up free",
    welcomeButton2: "Browse around",

    // DescriptionSection.jsx
    descriptionHeader1: "Watch Videos and listen to Music, together.",
    descriptionHeader2: "Why use Popitalk.",
    descriptionCardTitle1: "Watch together",
    descriptionCardBody1:
      "Enjoy the internet in sync with your friends. Watch videos and listen to music together on Popitalk.",
    descriptionCardTitle2: "Chat",
    descriptionCardBody2:
      "Watch content from YouTube together. Vimeo, Crunchyroll anime, Twitch and SoundCloud are coming soon.",
    descriptionCardTitle3: "Public Channels",
    descriptionCardBody3:
      "Create your own channel and share your video playlist with everyone. Get followers and become the biggest channel!",
    descriptionCardTitle4: "Binge-Watching",
    descriptionCardBody4:
      "Popitalk is great for binge-watching your favorite web series or Let's Play with friends or other fans! Either fill the playlist with all episodes or let people vote on their favorite episodes!",
    descriptionCardTitle5: "Internet DJ",
    descriptionCardBody5:
      "Ever dreamed of being a DJ? You know the latest and greatest indie tracks on Soundcloud? Fire up your own room and build a playlist that people will remember for weeks. You don't know any good music? No problem, just leave the voting enabled and collaborate with your friends!",
    descriptionCardTitle6: "Long-Distance Relationships",
    descriptionCardBody6:
      "Long-Distance Relationships are hard and Popitalk cannot fix that. But many couples use Popitalk to watch videos together and have a movie night even when you're apart. Don't forget to mark your room as private to keep creepy strangers out.",
    descriptionCardTitle7: "Hanging Out",
    descriptionCardBody7:
      "Create a room just for you and your friends where you meet after school and watch the latest cat videos while you chat how your day went. With permanent room you always know where to find each other.",
    descriptionCardTitle8: "Your Own Channel",
    descriptionCardBody8:
      "Our users came up with pretty awesome ideas so far. Just try yours out and see if it works! Channels are very configurable and should fit your needs. Create interesting channels and try to become the biggest Channel on Popitalk!",
    descriptionCardTitle9: "Video Premieres",
    descriptionCardBody9:
      "You create videos and want to release your newest creation with a sweet event and see the reactions of your viewers as they happen? Upload your video to YouTube and flag it as hidden. You can add it to the playlist with the video link and invite your fans to the room. Hit play when you are ready to start your very own premiere!",

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
    facebook: "Facebook",
    StatusPage: "Status Page",

    // == Buttons == //
    loginButton: "Log In",
    createNewAccountButton: "Sign In",
    createChannelButton: "Create channel",
    newRoomButton: "New DR",
    directRoom: "DIRECT ROOMS",
    requestVideoButton: "Send a request to the admin",
    createButton: "Create",
    resetButton: "Reset",
    followButton: "Follow",
    followingButton: "Following",
    searchFriendsClose: "Close",
    clearButton: "Clear",
    addFriendsButton: "Add Friend",
    requestSentButton: "Request sent",
    cancelButton: "Cancel",
    deleteButton: "Delete",
    loadMoreButton: "Show more",
    backToTrendingButton: "Back to Trending",
    sendFeedbackButton: "Popitalk Team",
    copyButton: "Copy",

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

    // === ChannelsPanel & FriendsPanel === //
    // PanelHeader & MiniFriendsList
    channels: "Channels",
    friends: "Friends",
    yourChannels: "YOUR CHANNEL",
    yourChannelsPlaceholder: "Create your own public Channel!",
    followingChannels: "CHANNELS YOU FOLLOW",
    followingChannelsPlaceholder:
      "It's emtpty - Try to discover and follow channels!",
    recommendedChannels: "RECOMMENDED",
    searchFriendsInput: "Search Username",
    searchResult: "Results for",
    // LeftPanelDescription
    signInText: "Sign in to add friends and create channels.",
    // LeftPanelFooter
    loginOrSignup: "Log In/Sign Up",
    aboutUs: "About Us",
    followUson: "Follow us on",
    buyUsCoffee: "Buy us a coffee",
    becomeAPatron: "Become a Patron",
    // RoomIcon
    myRoom: "You",
    // ChannelsList
    online: "online",

    // === RecommendedView === //
    channelSearchInput: "Search for a channel",
    videoSearchInput: "Search for a video",
    following: "FOLLOWING",
    discover: "DISCOVER",
    trending: "TRENDING",
    // ChannelCard
    nothingPlaying: "Nothing is playing at this moment",
    nothingPlayingSubtitle: "Channel admin has to add a video below.",
    // VideoCard
    watch: "Watch it in a room",
    // ChannelHeader
    video: "Video",
    posts: "Posts",
    upNext: "Playlist",
    settings: "Settings",

    // == VideoPanel == //
    // VideoPlayer & VideoStatus
    paused: "Paused",
    pausedPopup: "Channel admin paused the video.",
    startingIn: "Channel admin stated the video. Starting in",
    play: "Play",
    pause: "Pause",
    mute: "Mute",
    unmute: "Unmute",
    fullScreen: "Full screen",
    playing: "Playing",
    saveAndReturn: "Save",
    // SortableList & ChannelQueue & VideoCardVerticalPlaylist
    findMoreVideos: "Search and Add Videos",
    manageUpNext: "Add Videos & Manage Playlist",
    upNextSubtitle: "Videos that ended will be removed from your playlist.",
    searchAddVideos: "Search and add more videos below!",
    //ChannelDescription & NewChannelPost & ChannelPost
    admins: "Admins",
    invite: "Invite",
    postInput: "Post something...",
    like: "Like",
    likes: "Likes",
    comment: "Comment",
    comments: "Comments",
    channelWelcomePost:
      "This is the start! Make an awesome channel and have fun watching together!",
    deletePost: "Delete post",
    deletePostSubtitle:
      "Are you sure you want to delete this Post? You cannot undo this action.",
    // Invite Modal
    inviteModalHeader: "Invite Friends to this channel",
    // InviteForm
    copyUrl: "Share this link to watch with friends",
    shareToSocialMedia: "Or share it on social media",

    // Chat Header & ChatAction
    roomMembers: "room members",
    followers: "followers",
    chatInput: "Type a message...",
    chatDisabledText: "Follow the channel to send a message.",
    signInToChat: "Log in to chat",

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
    tipHeader: "Want to get featured?",
    tipParagraph1:
      "- Channels with an icon has a better chance of getting featured.",
    tipParagraph2:
      "- Make sure to have a catchy channel name and clear description.",
    tipParagraph3: "- Have videos in your playlist once you create a channel.",
    tipParagraph4: "- And lastly, be active and invite your friends!",
    // ChannelSettingsPanel
    channelSettings: "Channel Settings",
    manageFollowers: "Manage Followers",
    manageAdmins: "Manage Admins",
    manageBannedUsers: "Manage Banned Users",
    deleteChannel: "Delete Channel",
    deleteChannelSubtitle:
      "Are you sure you want to delete your channel? You cannot undo this action.",
    // ContainerHeader
    friendRequestHeader: "Friend Requests",
    notificationHeader: "Notification",
    settingsHeader: "Settings",
    accountSettings: "Account Settings",
    blockedUsers: "Blocked Users",
    logOut: "Log Out",
    editUserInformation: "Edit User Information",
    changePassword: "Change Password",
    // InfoCardList
    nothingToShow: "Nothing to show.",
    // SearchResults
    noVideosFound: "No videos found",
    // GifTable
    sendText: "Send",
    searchGifInput: "Search for a GIF",
    // DeleteMessageModal
    deleteMessageTitle: "Delete Message",
    deleteMessageSubtitle: "Are you sure you want to delete this message?",
    // ProfileModal
    friendsText: "FRIENDS",
    // InviteFriendsContainer
    selectFriends: "Select Friends",
    // RoomExistsModal
    thisRoomExists: "This room already exists",
    enterExistingRoom: "Click below to enter the existing room",
    createNew: "Create New"
  },

  // === KOREAN === //
  ko: {
    // Moment.JS
    location: "ko",

    // === Error Message === //
    errorMessage: " 불러오지 못했습니다 :(",
    minCharacter1: "최소 3자를 입력하세요.",
    minCharacter2: "최소 1자를 입력하세요.",
    maxCharacter1: "최대 20자까지 가능합니다.",
    maxCharacter2: "최대 150자까지 가능합니다.",
    nameRequired: "채널 이름을 입력해 주세요.",
    descRequired: "채널 설명을 입력해 주세요.",

    // SEO (MataData & WelcomePage & SiteHeaderWelcome)
    popitalk: "뽀삐톡",
    mainTitle: "뽀삐톡 - 같이보는 TV",
    mainDescription:
      "뽀삐톡으로 친구들과 유튜브를 동시간에 같이 시청하고 채팅해요. 함께 실시간으로 동영상을 공유하며 영화, 음악, 모든 것을 같이 시청 해보세요.",
    mainKeywords:
      "뽀삐톡, 같이보는TV, 시청, 동시간 시청, 스트리밍, 트위치, 실시간 시청, 라이브, 라이브방송, 인터넷방송, 같이보기, 다시보기",
    loginPageTitle: "뽀삐톡 - 같이보는 TV - 로그인 또는 회원가입",
    loginPageDescription:
      "뽀삐톡 계정을 만들거나 로그인하세요. 친구, 가족, 아는 사람들과 유튜브 같이 시청하고 채팅해요. 뽀삐톡으로 친구들과 유튜브를 동시간에 같이 시청하고 채팅해요. 함께 실시간으로 동영상을 공유하며 동시에 챗을해보세요.",
    createChannelTitle: "채널 만들기 - 뽀삐톡",
    createChannelDescription:
      "뽀삐톡에서 채널을 개설하세요. 재미있는 영상들을 재생하고 팔로워들과 소통하세요. 뽀삐톡으로 친구들과 유튜브를 동시간에 같이 시청하고 채팅해요. 함께 실시간으로 동영상을 공유하며 동시에 챗을해보세요.",
    loginUsername: "이메일 또는 아이디",
    loginPassword: "비밀번호",
    popitalkChannel: "뽀삐톡 채널",

    welcomeHeader1: "같이 영상을 시청해요.",
    welcomeHeader2: "동시간에요.",
    WelcomeSubheader:
      "뽀삐톡으로 친구들과 유튜브를 동시간에 같이 시청하고 채팅해요. 함께 실시간으로 동영상을 공유하며 영화, 음악, 모든 것을 같이 시청 해보세요.",
    welcomeButton1: "무료 가입",
    welcomeButton2: "둘러보기",

    // DescriptionSection.jsx
    descriptionHeader1: "꿀잼인 동영상과 음악을 같이 시청해요.",
    descriptionHeader2: "뽀삐톡을 사용하는 이유.",
    descriptionCardTitle1: "같이 시청해요",
    descriptionCardBody1:
      "인터넷상에서 같은 시간 다른 장소에서 같이 시청할 수 있어요. 뽀삐톡으로 꿀잼인 동영상, 드라마, 영화나 음악도 같이 듣고 감상이 가능해요. ",
    descriptionCardTitle2: "채팅 기능",
    descriptionCardBody2:
      "유튜브 영상을 같이 보면서 채팅도 가능해요. 친구랑 채팅하면서 같은 영상을 같이보는 재미를 아시나요?",
    descriptionCardTitle3: "공개된 채널",
    descriptionCardBody3:
      "채널을 만들어서 인기채널이 되어보세요. 영상 편성표를 만들면 누구나 나의 채널을 팔로우하고 채팅을 할 수 있어요.",
    descriptionCardTitle4: "빈지-워치",
    descriptionCardBody4:
      "TV 프로그램 등 콘텐츠를 몰아서 봐요. 친구나 애인, 가족과 옆에 없다면 같이 볼 수 있는 뽀삐톡을 이용해보세요.",
    descriptionCardTitle5: "인터넷 DJ",
    descriptionCardBody5:
      "DJ에 재능이 있으세요? 시청자들이 좋아할 만한 프로그램으로 편성표를 짜고 널리 알려보세요. 매주 가장 인기 많은 채널은 사이트 앞에 리스팅 됩니다. 방송, 음악, 게임등 여러 카테고리의 채널을 개설해보세요!",
    descriptionCardTitle6: "장거리 연애 꿀팁",
    descriptionCardBody6:
      "장거리 연애가 힘들긴하죠. 뽀삐톡으로 그나마 연인과 같이 시간을 보낼 수 있습니다. 많은 커플들이 뽀삐톡으로 같이 드라마나 유튜브 시청을 같이 합니다. 멀리 떨어져 있어도 시간은 같이 보낼 수 있게요. 친추를 보내고 DM으로 같이 볼 수 있어요.",
    descriptionCardTitle7: "같이 놀자!",
    descriptionCardBody7:
      "요즘 비대면도 많고 갈 곳도 많지 않네요ㅠㅠ. 학교 끝나고 집에서 모임을 뽀삐톡으로 해보세요. 집에서 심심할 땐 친구들이 어디 있는지 항상 알 수 있도록 말이죠!",
    descriptionCardTitle8: "나만의 채널",
    descriptionCardBody8:
      "DM으로 친구와 비공개로 영상 시청을 할 수 있지만 공개된 채널도 만들 수 있습니다. 채널 주인은 여러가지 설정을 할 수 있습니다. 유저 관리, 관리자 설정, 알림, 메세지 권리등 여러가지를 설정해서 사용하세요",
    descriptionCardTitle9: "영상 프리미어",
    descriptionCardBody9:
      "이제 곧 여러분이 직접 영상을 올릴 수 있게 만들 예정입니다. 편성표에 자신만의 영상을 올리면 그제야 자신의 채널을 색다롭게 꾸밀 수 있겠지요!",

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
      "가입하기 버튼을 클릭하면 뽀삐톡의 약관정책에 동의하게 됩니다.",
    createNewAccountTerms1: "이용약관 확인.",
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
    aboutPopitalk: "뽀삐톡에 대해서",
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
    facebook: "페이스북",
    StatusPage: "서버 상태",

    // == Buttons == //
    loginButton: "로그인",
    createNewAccountButton: "가입하기",
    createChannelButton: "채널 생성",
    newRoomButton: "방 만들기",
    directRoom: "친구 목록",
    requestVideoButton: "채널 관리자한테 요청하세요",
    createButton: "만들기",
    resetButton: "초기화",
    followButton: "팔로우",
    followingButton: "팔로잉",
    searchFriendsClose: "닫기",
    clearButton: "지우기",
    addFriendsButton: "친구 추가",
    requestSentButton: "친추 보냄",
    cancelButton: "취소",
    deleteButton: "삭제",
    loadMoreButton: "더 보기",
    backToTrendingButton: "처음으로",
    sendFeedbackButton: "뽀삐톡 팀",
    copyButton: "복사하기",

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

    // === ChannelsPanel & FriendsPanel === //
    // PanelHeader & MiniFriendsList
    channels: "티비채널",
    friends: "친구",
    yourChannels: "내 채널",
    yourChannelsPlaceholder: "나만의 채널을 개설 하세요!",
    followingChannels: "팔로잉 채널",
    followingChannelsPlaceholder: "비었습니다 - 여러 채널을 팔로우 해보세요!",
    recommendedChannels: "추천 채널",
    searchFriendsInput: "아이디로 친구 찾기",
    searchResult: "검색 결과",
    // LeftPanelDescription
    signInText: "친구를 추가하고 같이보려면 가입해보세요.",
    // LeftPanelFooter
    loginOrSignup: "로그인/가입",
    aboutUs: "소개",
    followUson: "소셜미디어",
    buyUsCoffee: "커피 사주세요",
    becomeAPatron: "후원자가 되주세요",
    // RoomIcon
    myRoom: "내 톡방",
    // ChannelsList
    online: "온라인",
    // RecommendedView
    channelSearchInput: "채널 검색",
    videoSearchInput: "동영상 검색",
    following: "팔로잉",
    discover: "추천",
    trending: "인기",
    // ChannelCard
    nothingPlaying: "재생되고 있는 영상이 없습니다",
    nothingPlayingSubtitle: "채널 관리자가 아래에서 영상을 추가해야 합니다.",
    // VideoCard
    watch: "톡방에서 시청하기",
    // ChannelHeader
    video: "티비",
    posts: "프로필",
    upNext: "재생 목록",
    settings: "설정",

    // == VideoPanel == //
    // VideoPlayer & VideoStatus
    paused: "일시정지",
    pausedPopup: "채널 관리자가 일지성지 했습니다.",
    startingIn: "채널 관리자가 재생했습니다. 곧 재생됩니다",
    play: "재생",
    pause: "일시정지",
    mute: "음소거",
    unmute: "음소거 해제",
    fullScreen: "전체화면",
    playing: "재생중",
    // SortableList
    findMoreVideos: "더 많은 영상을 검색하세요",
    manageUpNext: "재생 목록을 관리하세요",
    saveAndReturn: "저장",
    upNextSubtitle:
      "동영상을 재생 목록에 추가, 삭제 혹은 이동할 수 있습니다. 최대 30개까지 추가가능 합니다.",
    searchAddVideos: "밑에서 동영상을 검색하고 추가하세요!",
    //ChannelDescription & NewChannelPost & ChannelPost & ChannelChat
    admins: "관리자",
    invite: "초대하기",
    postInput: "게시글을 입력하세요...",
    like: "좋아요",
    likes: "좋아요",
    comment: "댓글",
    comments: "댓글",
    channelWelcomePost: "채널을 개설했습니다!",
    deletePost: "포스트 삭세",
    deletePostSubtitle: "포스트를 삭제하면 복구할 수 없습니다.",
    // Invite Modal
    inviteModalHeader: "친구들을 이 채널로 초대해요",
    // InviteForm
    copyUrl: "아래의 링크로 친구를 초대하세요",
    shareToSocialMedia: "또는 SNS에 공유하세요",

    // ChatHeader & ChatActions
    roomMembers: "대화상대",
    followers: "팔로워",
    chatInput: "메시지를 작성하세요...",
    chatDisabledText: "팔로우를 해야 메시지를 보낼 수 있습니다.",
    signInToChat: "로그인 후 채팅",

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
    tipHeader: "내 채널이 추천에 뜨려면",
    tipParagraph1: "- 아이콘이 있는 채널이 추천에 뜰 확률이 높습니다.",
    tipParagraph2: "- 검색하기 쉬운 채널 이름과 설명을 설정해 보세요.",
    tipParagraph3: "- 채널 개설 후 재생목록에 영상을 추가하세요.",
    tipParagraph4: "- 활동이 많고 친구들을 초대 해보세요!",
    // ChannelSettingsPanel
    channelSettings: "채널 설정",
    manageFollowers: "팔로워 관리",
    manageAdmins: "관리자 설정",
    manageBannedUsers: "차단 목록",
    deleteChannel: "채널 삭제",
    deleteChannelSubtitle: "채널을 삭제하면 복구할 수 없습니다.",
    // ContainerHeader
    friendRequestHeader: "친구 추가",
    notificationHeader: "알림",
    settingsHeader: "설정",
    accountSettings: "계정 설정",
    blockedUsers: "차단 목록",
    logOut: "로그아웃",
    editUserInformation: "내 정보 변경",
    changePassword: "비밀번호 변경",
    // InfoCardList
    nothingToShow: "항목이 비었습니다.",
    // SearchResults
    noVideosFound: "검색 결과가 없습니다.",
    // GifTable
    sendText: "보내기",
    searchGifInput: "GIF 검색",
    // DeleteMessageModal
    deleteMessageTitle: "메세지 삭제",
    deleteMessageSubtitle: "삭제된 메세지는 복구가 불가합니다.",
    // ProfileModal
    friendsText: "친구",
    // InviteFriendsContainer
    selectFriends: "대화상대 선택",
    // RoomExistsModal
    thisRoomExists: "선택하신 방이 이미 존재합니다",
    enterExistingRoom: "이미 존재하는 방으로 가시려면 클릭하세요.",
    createNew: "새로 만들기"
  },

  //  Russian  //
  ru: {
    // Moment.JS
    location: "ru",
    // WelcomePage & SiteHeaderWelcome
    loginPageTitle: "Popitalk - Войдите или зарегистрируйтесь",
    loginPageDescription:
      "Создайте учетную запись или войдите в Popitalk.  БЕСПЛАТНО. Общайтесь с друзьями, семьей и начните смотреть вместе!",
    title: "Попиталк",
    description:
      "Смотрите вместе! Общайтесь с друзьями, семьей и начните смотреть вместе! Мы уверены,что текстовые сообщения станут еще веселее и приятнее",
    createChannelTitle: "Создать канал- popitalk",
    createChannelDescription:
      "Создай свой канал на Popitalk.  Добавляй видео в начало и наслаждайся вместе с подписчиками!  Мы делаем текстовые сообщения более увлекательными и приятными.",
    loginUsername: "Введите логин или почту",
    loginPassword: "Пароль",
    // CreateNewAccountForm & EditInformationForm & EditBirthdayForm
    createNewAccountTitle: "Создать новый аккаунт",
    createNewAccountSubtitle: "Испробуй сейчас. Бесплатно",
    createNewAccountFirstName: "Имя",
    createNewAccountLastName: "Фамилия",
    createNewAccountEmail: "Адрес электронной почты",
    createNewAccountUsername: "Имя пользователя",
    createNewAccountPassword: "Пароль",
    createNewAccountBirthday: "Дата рождения",
    createNewAccountTerms: "Нажимая Зарегистрироваться, вы соглашаетесь с.",
    createNewAccountTerms1: "Условия",
    // functions.js input errors
    inputTextTooShort: "Слишком короткий *",
    inputTextTooLong: "Слишком длинный *",
    inputTextRequired: "Обязательно *",
    ageLimitText: "Popitalk могут использовать лица старше 13 лет",
    invalidEmail: "Неверный адрес электронной почты.",
    passwordTooShort: "Необходимо минимум 6 символов.",
    passwordTooLong: "Максимум 32 символа.",
    lowerCaseRequired: "Требуется хотя бы одна срочная буква.",
    upperCaseRequired: "Требуется хотя бы одна заглавная буква.",
    numberRequired: "Пароль должен содержать хотя бы одну цифру",
    newPasswordRequirement: "Он должен отличаться от вашего старого пароля.",
    // Footer
    company: "Команда",
    aboutPopitalk: "О Popitalk",
    blog: "Блог",
    contact: "Контакт",
    legal: "Легально",
    termsOfUse: "Условия использования",
    privacyPolicy: "Политика конфиденциальности",
    copyright: "Авторские права",
    community: "Сообщества",
    discord: "Discord",
    twitter: "Twitter",
    youtube: "Youtube",
    // Buttons
    loginButton: "Войти",
    createNewAccountButton: "Зарегистрироваться",
    createChannelButton: "Создать",
    newRoomButton: "Создать новый чат",
    requestVideoButton: "Отправить заявку админу",
    createButton: "Создать",
    resetButton: "Сброс",
    followButton: "Подписаться",
    followingButton: "Подписчики",
    searchFriendsClose: "Закрыть",
    // clearButton: "지우기",
    addFriendsButton: "Добавить друга",
    // requestSentButton: "친추 보냄",
    // cancelButton: "취소",
    // Months
    jan: "Январь",
    feb: "Февраль",
    mar: "Март",
    apr: "Апрель",
    may: "Май",
    jun: "Июнь",
    jul: "Июль",
    aug: "Август",
    sep: "Сентябрь",
    oct: "Октябрь",
    nov: "Ноябрь",
    dec: "Декабрь",
    // PanelHeader & MiniFriendsList
    channels: "Каналы",
    friends: "Чат",
    // ChannelsPanel & FriendsPanel
    yourChannels: "Твои каналы",
    yourChannelsPlaceholder: "Создать свой собственный канал",
    followingChannels: "Следующий",
    followingChannelsPlaceholder: "Находи и подписывается!",
    searchFriendsInput: "Поиск по имени пользователя",
    searchResult: "Результаты поиска",
    // RoomIcon
    myRoom: "Мой чат",
    // ChannelsList
    online: "В сети",
    // RecommendedView
    channelSearchInput: "Поиск канала",
    videoSearchInput: "Поиск видео",
    following: "Подписчики",
    discover: "Найти",
    trending: "В тренде",
    // ChannelCard
    nothingPlaying: "В данный момент ничего не играет",
    // VideoCard
    watch: "Смотреть в чате",
    // ChannelHeader
    video: "Видео",
    posts: "Посты",
    upNext: "Playlist",
    settings: "Настройки",
    // VideoPlayer & VideoStatus
    paused: "Приостановлено",
    startingIn: "Начиная с",
    play: "Воспроизвести",
    pause: "Пауза",
    mute: "Убрать звук",
    unmute: "Включить звук",
    fullScreen: "Полный экран",
    playing: "Играет",
    // ChatHeader & ChatActions
    roomMembers: "Участники чата",
    followers: "Подписчики",
    chatInput: "Введите текст...",
    // SortableList
    findMoreVideos: "Поиск видео",
    manageUpNext: "Создай видео дольше",
    upNextSubtitle:
      "Добавляйте, удаляйте или меняйте порядок видео.  Вы можете добавить до 30 видео.",
    searchAddVideos: "Находите и добавляйте больше видео ниже",
    //ChannelDescription & NewChannelPost & ChannelPost & ChannelChat
    admins: "Админы",
    postInput: "Добавить пост...",
    like: "Нравится",
    likes: "Понравившиеся",
    comment: "Комментировать",
    comments: "Комментарии",
    channelWelcomePost:
      "Это начало. Создай свой канал и наслаждайся просмотром вместе с друзьями.",
    //CreateChannel > ChannelForm, ChannelFormSubmit
    selectChannelIcon: "Выбрать значок канала",
    changeChannelIcon: "Изменить значок канала",
    createChannelName: "Название канала *",
    channelNameInput: "Назови свой канал",
    createChannelDesc: "Создать свой канал *",
    channelDescInput: "Описание канала",
    channelCatagory: "Категории канала (необязательно)",
    readyToCreate: "Готов создать свой канал?",
    saveChannelEdit: "Сохранить изменения",
    // ChannelSettingsPanel
    channelSettings: "Настройки канала",
    manageFollowers: "Управление подписчиками",
    manageAdmins: "Управление админами",
    manageBannedUsers: "Управление над заблокированные пользователями",
    deleteChannel: "Удалить канал"
    // // ContainerHeader
    // friendRequestHeader: "친구 추가",
    // notificationHeader: "알림",
    // settingsHeader: "설정",
    // accountSettings: "계정 설정",
    // blockedUsers: "차단 목록",
    // logOut: "로그아웃",
    // editUserInformation: "내 정보 변경",
    // changePassword: "비밀번호 변경",
    // // InfoCardList
    // nothingToShow: "항목이 비었습니다."
  }
});

export default strings;
