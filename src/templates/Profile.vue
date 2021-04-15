<template>
  <Layout>
    <div class="container px-2 mt-24 md:mt-32 xl:px-32">
      <div class="flex flex-col mb-10 md:flex-row md:items-center">
        <g-link
          :to="$page.profile.social"
          title="LinkedIn"
          aria-label="Acessar LinkedIn"
        >
          <g-image
            class="object-cover w-20 h-20 rounded-full lg:w-36 lg:h-36"
            :src="$page.profile.image"
            :alt="$page.profile.name"
          />
        </g-link>
        <div class="flex flex-col mt-2 md:ml-8 lg:mt-0">
          <g-link
            :to="$page.profile.social"
            title="LinkedIn"
            aria-label="Acessar LinkedIn"
          >
            <h1 class="mb-2 header">
              {{ $page.profile.name }}
            </h1>
          </g-link>
          <p class="text-gray-500 dark:text-gray-400">
            {{ $page.profile.description }}
          </p>
        </div>
      </div>
      <PostList
        v-if="$page.profile.belongsTo.edges.length"
        :posts="$page.profile.belongsTo.edges"
      />
      <Pager
        class="flex flex-row items-center justify-center w-full py-4 mt-4"
        linkClass="font-medium mx-2 p-2 text-gray-500 dark:text-gray-100"
        :info="$page.profile.belongsTo.pageInfo"
      />
    </div>
  </Layout>
</template>

<page-query>
query Profile($id: ID!, $page: Int) {
  profile: profile(id: $id) {
    id
    path
    name
    image
    description
    social
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
      title: this.$page.profile.name
    }
  }
}
</script>
