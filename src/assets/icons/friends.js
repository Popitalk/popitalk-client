import React from "react";

const Friends = ({ active }) => (
  <svg
    className="w-8 h-8"
    viewBox="0 -32 512 512"
    fill={active === true ? "#1DA4FE" : "#808080"}
  >
    <path d="M271 15c0-8.285-6.715-15-15-15s-15 6.715-15 15v64.266c0 8.285 6.715 15 15 15s15-6.715 15-15zm0 0M181.129 105.941a14.958 14.958 0 0010.605 4.395c3.836 0 7.676-1.465 10.606-4.395 5.855-5.859 5.855-15.355 0-21.214l-32.137-32.133c-5.855-5.86-15.351-5.86-21.21 0-5.86 5.86-5.86 15.355 0 21.215zm0 0M320.266 110.332c3.84 0 7.68-1.465 10.605-4.394l32.137-32.133c5.855-5.856 5.855-15.356 0-21.211-5.86-5.86-15.356-5.86-21.215 0L309.66 84.727c-5.86 5.859-5.86 15.355 0 21.21a14.955 14.955 0 0010.606 4.395zm0 0M212.605 144.914l-.445.371-64.851 55.594a33.24 33.24 0 01-21.61 7.988H79.25c-43.77 0-79.25 35.418-79.25 79.25v144.621c0 8.282 6.715 15 15 15h128.531c8.29 0 15-6.722 15-15V295.035l76.328-65.426A17.582 17.582 0 00241 216.258v-57.59c0-14.648-17.016-22.98-28.395-13.754zm0 0M432.75 208.867H386.3a33.224 33.224 0 01-21.609-7.992l-64.851-55.59-.445-.37c-11.38-9.227-28.395-.895-28.395 13.753v57.59a17.582 17.582 0 006.14 13.351l76.329 65.426v137.7c0 8.28 6.71 15 15 15H497c8.285 0 15-6.715 15-15V288.116c0-43.832-35.48-79.25-79.25-79.25zm0 0" />
    <path d="M142.465 145.664c0-34.848-28.352-63.2-63.2-63.2s-63.199 28.352-63.199 63.2c0 34.852 28.352 63.203 63.2 63.203s63.199-28.351 63.199-63.203zm0 0M495.934 145.664c0-34.848-28.352-63.2-63.2-63.2s-63.199 28.352-63.199 63.2c0 34.852 28.352 63.203 63.2 63.203s63.199-28.351 63.199-63.203zm0 0" />
  </svg>
);

export default Friends;
