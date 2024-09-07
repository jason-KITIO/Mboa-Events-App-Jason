import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Payant(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.825 5.42l.209 2.472-2.07 1.719c-1.856 1.543-2.124 1.737-2.615 1.896a2.05 2.05 0 00-.948.59l-.401.41.244 2.81c.134 1.545.317 2.99.407 3.209.24.582 1.013 1.194 2.215 1.753 1.638.76 2.024.82 4.11.629 1.965-.18 2.538-.347 2.978-.87.306-.36.376-.607.34-1.189l-.027-.424.342-.155c.188-.085.403-.228.477-.318.212-.256.37-.954.296-1.303-.064-.304-.052-.328.272-.54.448-.292.662-.78.623-1.42l-.029-.478L24 13.244 23.168 4 6.825 5.42zm13.922 1.158c.124.102.411.23.639.281l.414.095.32 3.562-.49.249c-.512.26-.555.323-.817 1.203-.03.104-.776.213-2.474.36-2.217.19-2.432.19-2.45-.003-.017-.194.028-.227.507-.378 1.267-.4 2.023-1.417 1.99-2.68-.021-.836-.321-1.443-.99-2-.91-.76-1.943-.875-3.043-.339-.625.305-1.285 1.19-1.402 1.88-.078.461-.026 1.072.13 1.527.062.182-.116.217-1.963.384-1.117.1-2.064.156-2.104.122-.04-.033-.13-.673-.198-1.42L8.69 8.06l.358-.127c.428-.15.92-.782.887-1.14-.019-.207.338-.254 5.138-.671l5.158-.449.145.358c.08.198.246.443.37.546zm-5.705 5.684c.02.414-.167.715-.59.95-.138.077-1.046.212-2.018.301-1.413.13-1.791.201-1.888.356-.09.142-.072.244.063.385.148.156.345.182 1.02.137l.837-.056.025.368c.047.684-.344.897-1.79.974-.996.053-1.182.12-1.155.421.028.31.328.405 1.163.373l.841-.034.04.361c.078.688-.391.937-1.84.978-.904.025-1.132.114-1.104.428.028.306.3.395 1.09.357l.793-.038.005.335c.012.839-.393 1.036-2.576 1.256-1.912.193-2.473.096-4.061-.698-1.113-.557-1.107-.553-1.412-.988-.185-.264-.273-.818-.473-2.964-.28-2.995-.292-2.94.711-3.275.531-.178.757-.34 2.37-1.692.982-.822 1.84-1.528 1.91-1.569.086-.05.156.258.223.984.074.795.057 1.117-.069 1.3-.128.186-.131.281-.013.412.127.139.765.118 3.54-.116 3.478-.293 3.8-.279 4.183.182.086.102.164.36.175.572z"
        fill="#002040"
      />
    </Svg>
  )
}

export default Payant
