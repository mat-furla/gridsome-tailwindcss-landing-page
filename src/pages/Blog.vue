<template>
  <Layout>
    <div class="container px-2 mt-24 md:mt-32 xl:px-32">
      <h1 class="mb-10 header">Blog</h1>
      <PostList v-if="$page.posts.edges.length" :posts="$page.posts.edges" />
      <Pager
        class="flex flex-row items-center justify-center w-full py-4 mt-4"
        linkClass="font-medium mx-2 p-2 text-gray-500 dark:text-gray-100"
        :info="$page.posts.pageInfo"
      />
    </div>
  </Layout>
</template>

<page-query>
query Posts($page: Int) {
  posts: allPost(sortBy: "date", order: DESC, perPage: 6, page: $page)
    @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
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
</page-query>

<script>
import { Pager } from 'gridsome'
import PostList from '@/components/Blog/PostList'

export default {
  components: {
    Pager,
    PostList
  },
  metaInfo: {
    title: 'Blog'
  }
}
</script>
