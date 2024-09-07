import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Edit(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.5 18.959h-5c-4.525 0-6.458-1.934-6.458-6.459v-5c0-4.525 1.933-6.458 6.458-6.458h1.666a.63.63 0 01.625.625.63.63 0 01-.625.625H7.5c-3.842 0-5.208 1.367-5.208 5.208v5c0 3.842 1.366 5.209 5.208 5.209h5c3.841 0 5.208-1.367 5.208-5.209v-1.666a.63.63 0 01.625-.625.63.63 0 01.625.625V12.5c0 4.525-1.933 6.459-6.458 6.459z"
        fill="#041578"
      />
      <Path
        d="M7.083 14.742c-.508 0-.975-.184-1.317-.517-.408-.409-.583-1-.491-1.625l.358-2.508c.067-.484.383-1.109.725-1.45l6.567-6.567c1.658-1.659 3.341-1.659 5 0 .908.908 1.316 1.833 1.233 2.758-.075.75-.475 1.483-1.233 2.233l-6.567 6.567c-.342.342-.967.659-1.45.725l-2.508.358c-.109.026-.217.026-.317.026zm6.725-11.784L7.241 9.525a1.696 1.696 0 00-.375.742l-.358 2.508c-.033.242.017.441.142.566.125.126.325.176.566.142l2.509-.358c.216-.034.591-.217.741-.375l6.567-6.567c.542-.542.825-1.025.867-1.475.05-.542-.234-1.117-.867-1.758-1.333-1.334-2.25-.959-3.225.008z"
        fill="#041578"
      />
      <Path
        d="M16.542 8.191a.538.538 0 01-.167-.025 6.614 6.614 0 01-4.55-4.55.633.633 0 01.434-.775.62.62 0 01.766.434 5.354 5.354 0 003.684 3.683.63.63 0 01.433.775.613.613 0 01-.6.458z"
        fill="#292D32"
      />
    </Svg>
  )
}

export default Edit
