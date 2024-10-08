import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
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
        d="M13.333 18.958H2.5c-.8 0-1.458-.658-1.458-1.458V6.666c0-3.683 1.941-5.625 5.625-5.625h6.666c3.684 0 5.625 1.942 5.625 5.626v6.666c0 3.684-1.941 5.625-5.625 5.625zM6.667 2.292c-2.984 0-4.375 1.391-4.375 4.375V17.5c0 .116.091.208.208.208h10.833c2.984 0 4.375-1.391 4.375-4.375V6.666c0-2.983-1.391-4.375-4.375-4.375H6.667z"
        fill="#041578"
      />
      <Path
        d="M14.167 8.541H5.833a.63.63 0 01-.625-.625.63.63 0 01.625-.625h8.334a.63.63 0 01.625.625.63.63 0 01-.625.625zM11.667 12.709H5.833a.63.63 0 01-.625-.625.63.63 0 01.625-.625h5.834a.63.63 0 01.625.625.63.63 0 01-.625.625z"
        fill="#041578"
      />
    </Svg>
  )
}

export default SvgComponent
