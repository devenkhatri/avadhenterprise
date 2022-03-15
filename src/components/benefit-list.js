import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  FlexList,
  Box,
  Icon,
  Heading,
  Text,
  Space,
} from "./ui"

function Benefit(props) {
  return (
    <Box as="li" width="third" padding={4} paddingY={3}>
      {props.image && (
        <Icon alt={props.image.alt} image={props.image} size="small" />
      )}
      <Space size={2} />
      <Heading variant="subheadSmall">{props.heading}</Heading>
      {props.text && <Text>{props.text}</Text>}
      {props.html && <div
        dangerouslySetInnerHTML={{
          __html: props.html,
        }}
      />}
    </Box>
  )
}

export default function BenefitList(props) {
  return (
    <Section>
      <Container>
        <Box center>
          {props.heading && <Heading>{props.heading}</Heading>}
          {props.text && <Text variant="lead">{props.text}</Text>}
          {props.html && <div
            dangerouslySetInnerHTML={{
              __html: props.html,
            }}
          />}
        </Box>
        <Space size={3} />
        <FlexList gutter={3} variant="start" responsive wrap>
          {props.content.map((benefit) => (
            <Benefit key={benefit.id} {...benefit} />
          ))}
        </FlexList>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageBenefitListContent on HomepageBenefitList {
    id
    heading
    text    
    html
    content {
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
  }
`
