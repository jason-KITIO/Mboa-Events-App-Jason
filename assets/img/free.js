import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={26}
      height={21}
      viewBox="0 0 26 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.464 6.704l-6.53 6.53 3.712 3.712 3.706 3.706 6.548-6.55 6.543-6.542-.136-1.57c-.187-2.08-.13-1.888-.54-1.894-.925-.024-1.714-.82-1.726-1.744-.006-.602.298-1.242.701-1.484.106-.055.187-.124.187-.142 0-.025-5.76-.578-5.897-.559-.02 0-2.974 2.943-6.568 6.537zM15.49 3.27l.242.248-.85.857c-.465.465-.85.881-.85.912 0 .031.149.205.322.385l.33.33.819-.82.825-.82.248.242c.137.13.249.274.249.305 0 .037-.354.422-.789.856l-.794.795.434.435.435.434.912-.912.92-.913.247.242c.137.13.248.273.248.31 0 .032-.546.609-1.21 1.273l-1.21 1.21-1.627-1.632-1.632-1.626 1.179-1.18c.646-.645 1.21-1.179 1.242-1.179.037 0 .18.111.31.248zm-2.955 3.11l.143.192-.857.863-.862.863.36.354.354.36.794-.795c.435-.434.82-.788.857-.788.031 0 .174.111.304.248l.242.248-.82.826-.819.82.435.434.435.435.9-.9.9-.894.28.273.278.273-1.192 1.198c-.657.658-1.222 1.198-1.26 1.198-.08 0-3.197-3.116-3.197-3.197 0-.03.522-.583 1.161-1.223 1.099-1.098 1.161-1.154 1.291-1.067.068.043.193.173.273.279zM9.587 9.602c.236.087.664.503.763.727.125.298.1.701-.056 1.018l-.142.273h.496c.485 0 1.956.298 1.956.397 0 .025-.162.199-.36.398l-.354.353-1.037-.192c-.565-.112-1.099-.18-1.18-.161-.08.025-.26.136-.39.254l-.249.217.683.683.683.69-.33.322-.322.329-1.633-1.633-1.626-1.632.882-.863C8.407 9.758 8.718 9.54 9.134 9.54c.161 0 .366.025.453.062zM6.253 12.47l.267.261-.788.794-.795.795.392.385.385.391.682-.682.683-.683.26.267.268.26-.683.683-.683.683.702.702.695.7-.298.293c-.162.161-.323.291-.354.291-.081 0-3.197-3.116-3.197-3.197 0-.056 2.11-2.203 2.172-2.203.013 0 .15.118.292.26z"
        fill="#fff"
      />
      <Path
        d="M8.252 11.011l-.559.54.404.404.41.41.471-.466c.534-.527.67-.75.615-.974-.056-.242-.33-.454-.571-.454-.18 0-.292.081-.77.54zM21.821 1.632c-.857.081-1.893.298-2.123.447-.292.18-.298.646-.018.894.217.199.384.211.869.075.546-.15 1.818-.186 2.247-.062.682.198.943.558.937 1.278-.006.584-.198 1.174-.701 2.173-.205.397-.373.8-.373.894 0 .105.068.242.18.354.236.236.54.242.8.024.224-.186.982-1.694 1.218-2.408.633-1.937.173-3.147-1.341-3.544-.354-.094-1.291-.162-1.695-.125z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
