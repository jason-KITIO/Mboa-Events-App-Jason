import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.913 14.58a1.15 1.15 0 01-.6-.167L8.64 12.826a6.697 6.697 0 01-.827-.066.506.506 0 01-.4-.32.488.488 0 01.087-.5c.44-.513.667-1.127.667-1.78 0-1.614-1.42-2.927-3.167-2.927-.653 0-1.28.18-1.807.527a.506.506 0 01-.773-.36 5.28 5.28 0 01-.033-.567C2.387 3.526 5.253.84 8.773.84s6.387 2.687 6.387 5.993c0 1.813-.84 3.48-2.32 4.62l.227 1.814a1.167 1.167 0 01-1.153 1.313zm-3.146-2.76a.428.428 0 01.266.073l2.794 1.66a.148.148 0 00.173 0 .162.162 0 00.073-.167l-.26-2.106a.516.516 0 01.207-.473c1.36-.954 2.14-2.407 2.14-3.987 0-2.754-2.413-4.994-5.387-4.994-2.86 0-5.206 2.08-5.38 4.694.5-.193 1.04-.3 1.6-.3 2.3 0 4.167 1.76 4.167 3.926a3.635 3.635 0 01-.393 1.674z"
        fill="#3C4260"
      />
      <Path
        d="M3.053 15.166a.888.888 0 01-.493-.146.914.914 0 01-.42-.88l.133-1.027c-.9-.733-1.433-1.82-1.433-2.96 0-1.3.68-2.513 1.82-3.24a4.296 4.296 0 012.347-.686c2.3 0 4.166 1.76 4.166 3.926 0 .88-.32 1.747-.906 2.433-.754.914-1.88 1.447-3.12 1.487l-1.627.967a.911.911 0 01-.467.127zM5 7.226c-.653 0-1.28.18-1.807.527-.853.547-1.36 1.44-1.36 2.4 0 .927.454 1.774 1.254 2.32a.507.507 0 01.213.473l-.147 1.14 1.594-.946A.505.505 0 015 13.066c.98 0 1.907-.42 2.493-1.133.44-.52.674-1.133.674-1.787 0-1.606-1.42-2.92-3.167-2.92z"
        fill="#3C4260"
      />
    </Svg>
  )
}

export default SvgComponent
