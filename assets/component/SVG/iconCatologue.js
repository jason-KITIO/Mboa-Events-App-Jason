import * as React from "react"
import Svg, { Path } from "react-native-svg"

function IconCatalogueSvgComponent(props) {
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
        d="M13.333 18.959H6.667c-3.042 0-4.792-1.75-4.792-4.792V5.834c0-3.042 1.75-4.792 4.792-4.792h6.666c3.042 0 4.792 1.75 4.792 4.792v8.333c0 3.042-1.75 4.792-4.792 4.792zM6.667 2.292c-2.384 0-3.542 1.158-3.542 3.542v8.333c0 2.383 1.158 3.542 3.542 3.542h6.666c2.384 0 3.542-1.159 3.542-3.542V5.834c0-2.384-1.158-3.542-3.542-3.542H6.667z"
        fill="#3C4260"
      />
      <Path
        d="M15.417 7.708H13.75a2.29 2.29 0 01-2.292-2.291V3.75a.63.63 0 01.625-.625.63.63 0 01.625.625v1.667c0 .575.467 1.041 1.042 1.041h1.667a.63.63 0 01.625.625.63.63 0 01-.625.625zM10 11.458H6.667a.63.63 0 01-.625-.625.63.63 0 01.625-.625H10a.63.63 0 01.625.625.63.63 0 01-.625.625z"
        fill="#3C4260"
      />
      <Path
        d="M13.333 14.792H6.667a.63.63 0 01-.625-.625.63.63 0 01.625-.625h6.666a.63.63 0 01.625.625.63.63 0 01-.625.625z"
        fill="#292D32"
      />
    </Svg>
  )
}

export default IconCatalogueSvgComponent
