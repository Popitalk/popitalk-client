import LocalizedStrings from "react-localization";

// To add more supported languages, add the Country Key (eg.English -> en). Keys can be found here https://material-ui.com/guides/localization/.
let strings = new LocalizedStrings({
  //  Default - English  //
  en: {
    // WelcomePage & SiteHeaderWelcome
    loginPageTitle: "Popitalk - Log In or Sign Up",
    loginPageDescription:
      "Create an account or log into Popitalk. It's FREE. Connect with friends, family and start watching together!",
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
    searchFriendsResult: "Results for",
    searchFriendsClose: "Close",
    newRoomButton: "New Room",
    // RoomIcon
    myRoom: "My room",
    // ChannelsList
    online: "online"
  },

  //  KOREAN  //
  ko: {
    // WelcomePage & SiteHeaderWelcome
    loginPageTitle: "Popitalk - 로그인 또는 회원가입",
    loginPageDescription:
      "Popitalk 계정을 만들거나 로그인하세요. 친구, 가족, 아는 사람들과 유튜브 같이 시청하고 채팅해요.",
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
    addFriendsButton: "친구 찾기",
    // ChannelsPanel & FriendsPanel
    yourChannels: "내 채널",
    yourChannelsPlaceholder: "나만의 채널을 만들어 보세요!",
    followingChannels: "팔로잉 채널",
    followingChannelsPlaceholder: "채널을 팔로우 할 수 있습니다",
    createChannelButton: "만들기",
    searchFriendsInput: "아이디로 친구 찾기",
    searchFriendsResult: "검색 결과",
    searchFriendsClose: "닫기",
    newRoomButton: "방 만들기",
    // RoomIcon
    myRoom: "내 톡방",
    // ChannelsList
    online: "온라인"
  }
});

export default strings;
