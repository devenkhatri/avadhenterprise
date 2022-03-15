import * as React from "react"
import { Avatar } from "./ui"

export default function GatsbyContentfulLogo({logo}) {
  return (
    <Avatar alt={logo?.alt} image={logo} />
  )
}
