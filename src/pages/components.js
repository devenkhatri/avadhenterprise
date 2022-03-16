import * as React from "react"
import Layout from "../components/layout"
import { Container, Box, SuperHeading, Text, Link, Flex, List, Heading, Subhead, Kicker, NavLink, Button, CTALink, Blockquote } from "../components/ui"

export default function AllComponents() {
  return (
    <Layout title="All Components">
      <Container>
        <SuperHeading center>
          Typography
        </SuperHeading>
        <SuperHeading>SuperHeading</SuperHeading>
        <Heading>Heading</Heading>
        <Subhead>Subhead</Subhead>
        <Kicker>Kicker</Kicker>
        <Link href={"#"}>Link</Link><br/>
        <NavLink href={"#"}>NavLink</NavLink>
        <Text>Text</Text>
        <Button>Button</Button><br/>
        <CTALink>CTALink</CTALink>
        <Blockquote>Blockquote</Blockquote>
      </Container>
    </Layout>
  )
}
