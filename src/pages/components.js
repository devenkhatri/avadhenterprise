import * as React from "react"
import Layout from "../components/layout"
import { Container, Box, Heading, Text, Link, Flex } from "../components/ui"
import ChevronRight from "../components/chevron-right"
import * as styles from "../components/404.css"

export default function AllComponents() {
  return (
    <Layout title="All Components">
      <Box paddingY={4}>
        <Container>
          <Flex variant="column">
            <Heading variant="mega" className={styles.heading}>
              All Components
            </Heading>
          </Flex>
        </Container>
      </Box>
    </Layout>
  )
}
