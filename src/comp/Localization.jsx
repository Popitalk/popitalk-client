import LocalizedStrings from "react-localization";

// To add more supported languages, add the Country Key (eg.English -> en). Keys can be found here https://material-ui.com/guides/localization/.
let strings = new LocalizedStrings({
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
    dec: "December"
  },
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
    dec: "12월"
  }
});

export default strings;
