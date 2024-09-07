import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Global(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.5 23.25c-5.93 0-10.75-4.82-10.75-10.75S6.57 1.75 12.5 1.75 23.25 6.57 23.25 12.5 18.43 23.25 12.5 23.25zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z"
        fill="#1E2448"
      />
      <Path
        d="M9.5 22.25h-1c-.41 0-.75-.34-.75-.75s.32-.74.73-.75a29.49 29.49 0 010-16.5.745.745 0 01-.73-.75c0-.41.34-.75.75-.75h1c.24 0 .47.12.61.31.14.2.18.45.1.68a27.948 27.948 0 000 17.53c.08.23.04.48-.1.68-.14.18-.37.3-.61.3zM15.5 22.25a.745.745 0 01-.71-.99 27.948 27.948 0 000-17.53.749.749 0 111.42-.48 29.318 29.318 0 010 18.47c-.1.33-.4.53-.71.53z"
        fill="#1E2448"
      />
      <Path
        d="M12.5 17.7c-2.79 0-5.57-.39-8.25-1.18-.01.4-.34.73-.75.73s-.75-.34-.75-.75v-1c0-.24.12-.47.31-.61.2-.14.45-.18.68-.1a27.948 27.948 0 0017.53 0 .75.75 0 01.68.1c.2.14.31.37.31.61v1c0 .41-.34.75-.75.75s-.74-.32-.75-.73c-2.69.79-5.47 1.18-8.26 1.18zM21.5 10.25c-.08 0-.16-.01-.24-.04a27.948 27.948 0 00-17.53 0c-.4.13-.82-.08-.95-.47-.12-.4.09-.82.48-.95a29.318 29.318 0 0118.47 0c.39.13.61.56.47.95a.73.73 0 01-.7.51z"
        fill="#1E2448"
      />
    </Svg>
  )
}

export default Global
