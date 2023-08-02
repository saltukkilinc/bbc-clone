import * as React from "react"
const HamburgerIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={22}
    fill="#fff"
    viewBox="0 0 20 19"
    {...props}
  >
    <path
      d="M0 3.634h20V0H0v3.634Zm0 7.268h20V7.268H0v3.634ZM0 18.5h20v-3.634H0V18.5Z"
      clipRule="evenodd"
    />
  </svg>
)
export default HamburgerIcon