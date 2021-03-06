import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Section, Text, SuperHeading, RichText } from "./ui"
import * as styles from "./about-hero.css.ts"

export default function AboutHero(props) {
  return (
    <Section>
      <Container>
        <SuperHeading className={styles.aboutHeroHeader}>
          {props.heading}
        </SuperHeading>
        {props.text && (
          <Text className={styles.aboutHeroText}>{props.text}</Text>
        )}
        {props.html && <RichText>{props.html}</RichText>}
      </Container>
      <Container width="wide">
        {props.image && (
          <GatsbyImage
            alt={props.image.alt}
            image={getImage(props.image)}
            className={styles.aboutHeroImage}
          />
        )}
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment AboutHeroContent on AboutHero {
    id
    heading
    text
    html
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
