import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11 13.667H5c-.5 0-.866-.02-1.18-.067-2.213-.24-2.653-1.566-2.653-3.766V7.167c0-2.2.44-3.527 2.673-3.773.294-.04.66-.06 1.16-.06h6c.5 0 .867.02 1.18.066 2.22.247 2.654 1.567 2.654 3.767v2.667c0 2.2-.44 3.526-2.674 3.773-.293.04-.66.06-1.16.06zM5 4.333c-.453 0-.773.02-1.033.054-1.353.153-1.8.573-1.8 2.78v2.667c0 2.206.447 2.626 1.78 2.78.28.04.6.053 1.053.053h6c.454 0 .774-.02 1.034-.053 1.353-.147 1.8-.574 1.8-2.78V7.167c0-2.207-.447-2.627-1.78-2.78-.28-.04-.6-.053-1.054-.053H5zM13 2.333H3a.504.504 0 01-.5-.5c0-.273.227-.5.5-.5h10c.273 0 .5.227.5.5 0 .274-.227.5-.5.5z"
        fill="#041578"
      />
      <Path
        d="M13.333 15.666h-10a.504.504 0 01-.5-.5c0-.273.227-.5.5-.5h10c.273 0 .5.227.5.5 0 .274-.227.5-.5.5z"
        fill="#292D32"
      />
    </Svg>
  )
}

export default SvgComponent
