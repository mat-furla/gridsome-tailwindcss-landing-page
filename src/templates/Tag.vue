<template>
  <Layout>
    <div class="container px-2 mt-24 md:mt-32 xl:px-32">
      <h1 class="mb-10 header">Posts com #{{ $page.tag.title }}</h1>
      <PostList
        v-if="$page.tag.belongsTo.edges.length"
        :posts="$page.tag.belongsTo.edges"
      />
      <Pager
        class="flex flex-row items-center justify-center w-full py-4 mt-4"
        linkClass="font-medium mx-2 p-2 text-gray-500 dark:text-gray-100"
        :info="$page.tag.belongsTo.pageInfo"
      />
    </div>
  </Layout>
</template>

<page-query>
query Tag($id: ID!, $page: Int) {
  tag: tag(id: $id) {
    title
    belongsTo(page: $page, perPage: 6) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on Post {
            id
            path
            title
            date(format: "DD/MM/Y")
            timeToRead
            excerpt
            image {
              path
              alt
            }
            author {
              id
              name
              image
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import PostList from '@/components/Blog/PostList'

export default {
  components: {
    Pager,
    PostList
  },
  metaInfo() {
    return {
      title: this.$page.tag.title
    }
  }
}
</script>
