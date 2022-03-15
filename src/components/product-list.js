import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  FlexList,
  Text,
  Kicker,
  Heading,
  Subhead,
  Box,
  Icon,
  LinkList,
  RichText,
} from "./ui"

function Product(props) {
  return (
    <Box center>
      {props.image && (
        <Icon alt={props.image.alt} image={props.image} size="large" />
      )}
      <Subhead>{props.heading}</Subhead>
      {props.text && <Text>{props.text}</Text>}
      {props.html && <RichText>{props.html}</RichText>}
      <LinkList links={props.links} />
    </Box>
  )
}

export default function ProductList(props) {
  return (
    <Section>
      <Container>
        <Box center paddingY={4}>
          <Heading>
            {props.kicker && <Kicker>{props.kicker}</Kicker>}
            {props.heading}
          </Heading>
          {props.text && <Text>{props.text}</Text>}
          {props.html && <RichText>{props.html}</RichText>}
        </Box>
        <FlexList gap={4} variant="responsive">
          {props.content.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
        </FlexList>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageProductListContent on HomepageProductList {
    id
    kicker
    heading
    text
    html
    content {
      id
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
  }
`
