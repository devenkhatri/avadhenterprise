import * as React from "react"
import { Logo } from "./ui"

export default function GatsbyContentfulLogo({logo}) {
  return (
    <Logo alt={logo?.alt} image={logo} />
  )
}
