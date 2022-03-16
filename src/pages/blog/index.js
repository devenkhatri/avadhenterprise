import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import {
    Container,
    FlexList,
    Space,
    // Text,
    Kicker,
    Heading,
    Box,
    CTALink,
} from "../../components/ui"

function BlogPost(props) {
    return (
        <Box width="third" padding={4}>
            {props.image && (
                <GatsbyImage alt={props.image.alt} image={getImage(props.image)} />
            )}
            <Space size={3} />
            <Box>
                {props.date && <Kicker>{props.date}</Kicker>}
                <Heading>{props.title}</Heading>
            </Box>
            <CTALink href={`/blog/${props.slug}`}>Read more</CTALink>
        </Box>
    )
}

export default function Blog(props) {
    const { allContentfulBlogPost } = props.data
    return (
        <Layout title="Blogs">
            <Box paddingY={5}>
                <Container width="narrow">
                    <FlexList gutter={3} variant="center" responsive wrap>
                        {allContentfulBlogPost.edges.map(({ node }) => (
                            <BlogPost key={node.id} {...node} />
                        ))}
                    </FlexList>
                </Container>
            </Box>
        </Layout>
    )
}

export const query = graphql`
  query allBlogPostsTest {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
          excerpt
          date(formatString: "DD MMM, YYYY")
          image {
            gatsbyImageData
          }
        }
      }
    }
  }
`
