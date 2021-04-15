<template>
  <Layout>
    <div class="container flex flex-col px-2 mx-auto mt-24 md:mt-32">
      <h1 class="header">{{ $page.post.title }}</h1>
      <div class="flex flex-row justify-between my-4">
        <div class="flex flex-row items-center">
          <g-link :to="$page.post.author.path">
            <g-image
              class="object-cover rounded-full w-14 h-14 lg:w-24 lg:h-24"
              :src="$page.post.author.image"
              :alt="$page.post.author.id"
            />
          </g-link>
          <div
            class="flex flex-col ml-2 text-sm text-gray-500 dark:text-gray-400 lg:ml-4 lg:text-base"
          >
            <g-link class="hover:underline" :to="$page.post.author.path">
              <span> {{ $page.post.author.name }} </span>
            </g-link>
            <span>{{ $page.post.date }}</span>
            <span>{{ $page.post.timeToRead }} min</span>
          </div>
        </div>
        <div class="my-auto">
          <SocialIcons :record="$page.post" />
        </div>
      </div>

      <g-image
        class="object-cover w-full my-4 h-60 md:h-96"
        :src="$page.post.image.path"
        :alt="$page.post.image.alt"
      />

      <div class="pt-6 mx-auto text-left">
        <div class="flex flex-wrap lg:flex-row-reverse">
          <div class="w-full lg:w-1/4">
            <Sidebar :record="$page.post" />
          </div>

          <div
            class="w-full prose dark:prose-dark lg:pr-12 lg:w-3/4 lg:prose-xl dark:lg:prose-xl-dark max-w-none"
          >
            <div class="content" v-html="$page.post.content" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post($path: String!) {
  post: post(path: $path) {
    path
    title
    date(format: "DD/MM/Y")
    timeToRead
    content
    excerpt
    image {
      path
      alt
    }
    author {
      id
      name
      image
      path
    }
    headings {
      depth
      value
      anchor
    }
    tags {
      id
      title
      path
    }
  }
}
</page-query>

<script>
import Sidebar from '@/components/Blog/Sidebar'
import SocialIcons from '@/components/Blog/SocialIcons'
import SEO from '@/components/Blog/SEO'

export default {
  components: {
    SEO,
    Sidebar,
    SocialIcons
  },
  mixins: [SEO]
}
</script>
