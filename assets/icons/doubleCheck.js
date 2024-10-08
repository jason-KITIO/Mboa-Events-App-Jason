import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DoubleCheck(props) {
  return (
    <Svg
      width={44}
      height={45}
      viewBox="0 0 44 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 44.167c-10.213 0-15.32 0-18.494-3.174C.333 37.823.333 32.713.333 22.5s0-15.32 3.172-18.495C6.683.833 11.787.833 22 .833c10.214 0 15.32 0 18.493 3.172 3.174 3.177 3.174 8.282 3.174 18.495 0 10.214 0 15.32-3.174 18.493-3.17 3.174-8.28 3.174-18.493 3.174zm5.36-29.426a1.625 1.625 0 01.232 2.286l-12.38 15.167a1.625 1.625 0 01-2.518 0l-4.953-6.067a1.625 1.625 0 012.518-2.054l3.694 4.524 11.122-13.624a1.625 1.625 0 012.285-.232zm8.667 0a1.625 1.625 0 01.232 2.286l-12.38 15.167a1.625 1.625 0 01-2.622-.139l-.617-.949a1.626 1.626 0 011.906-2.418l11.195-13.715a1.625 1.625 0 012.286-.232z"
        fill="#219653"
      />
    </Svg>
  )
}

export default DoubleCheck
