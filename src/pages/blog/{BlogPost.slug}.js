import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import { Container, Box, Heading, RichText } from "../../components/ui"

export default function BlogPost(props) {
  const { blogPost } = props.data

  return (
    <Layout {...blogPost}>
      <Box paddingY={5}>
        <Container width="narrow">
          <Container width="wide">
            {blogPost.image && (
              <GatsbyImage
                alt={blogPost.image.alt}
                image={getImage(blogPost.image)}
              />
            )}
          </Container>
          <Heading as="h1">{blogPost.title}</Heading>
          <RichText>{blogPost.html}</RichText>
        </Container>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostContent($id: String!) {
    blogPost(id: { eq: $id }) {
      id
      title
      slug
      excerpt
      image {
        id
        gatsbyImageData
      }
      html
    }
  }
`
