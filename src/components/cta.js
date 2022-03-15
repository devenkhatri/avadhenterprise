import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Nudge,
  Container,
  Section,
  Heading,
  Text,
  ButtonList,
  Kicker,
  RichText,
} from "./ui"

export default function HomepageCta(props) {
  return (
    <Container width="fullbleed">
      <Section padding={5} radius="large" background="primary">
        <Heading center>
          {props.kicker && <Kicker center>{props.kicker}</Kicker>}
          {props.heading}
        </Heading>
        {props.text && <Text as="p" center variant="lead">
          {props.text}
        </Text>
        }
        {props.html && <RichText center>{props.html}</RichText>}
        <ButtonList links={props.links} variant="center" reversed />
        {props.image && (
          <Nudge left={5} right={5} bottom={5}>
            <GatsbyImage alt={props.image.alt} image={getImage(props.image)} />
          </Nudge>
        )}
      </Section>
    </Container>
  )
}

export const query = graphql`
  fragment HomepageCtaContent on HomepageCta {
    id
    kicker
    heading
    text
    html
    image {
      alt
      id
      gatsbyImageData
    }
    links {
      id
      href
      text
    }
  }
`
