import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      {...props}
      width={props.width? props.width: 20}
      height={props.height? props.height:20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M2.3 18.2c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1l15-14.4c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1L2.9 18c-.2.1-.4.2-.6.2zM17.7 8.7c-.4-.6-1-1.2-1.6-1.8-.2-.2-.4-.4-.6-.5l-1.2 1.2c.2.2.4.4.6.5.5.5 1 1.1 1.4 1.6.1.1.1.2.2.3-.1.1-.1.2-.2.3-.4.5-.8 1.1-1.4 1.6-1.5 1.4-3.1 2.3-5 2.3-.7 0-1.4-.1-2.1-.4l-1.3 1.3c1.1.5 2.2.8 3.4.8 2.3 0 4.4-1 6.1-2.7.6-.6 1.1-1.2 1.6-1.8.3-.4.5-.7.6-.9.1-.2.1-.5 0-.8-.1-.3-.3-.6-.5-1zM7.1 10c0 .3.1.6.2.9l3.6-3.4c-.3-.1-.6-.1-.9-.1-1.6-.1-2.9 1.1-2.9 2.6z"
        fill={props.color? props.color: "#969696"}
      />
      <Path
        d="M10 12.7c1.6 0 2.9-1.2 2.9-2.7 0-.3-.1-.6-.2-.9l-3.6 3.4c.3.2.6.2.9.2zM5 11.9c-.5-.5-1-1.1-1.4-1.6-.1-.1-.1-.2-.2-.3.1-.1.1-.2.2-.3.4-.5.8-1.1 1.4-1.6 1.5-1.4 3.1-2.3 5-2.3.7 0 1.4.1 2.1.4l1.3-1.3c-1.1-.5-2.2-.8-3.4-.8-2.3 0-4.4 1-6.1 2.7-.6.6-1.1 1.2-1.6 1.8-.3.4-.5.7-.6.9-.1.2-.1.5 0 .8.1.2.3.5.6.9.4.6 1 1.2 1.6 1.8.2.2.4.4.6.5l1.2-1.2c-.3 0-.5-.2-.7-.4z"
        fill={props.color? props.color: "#969696"}
      />
    </Svg>
  )
}

export default SvgComponent