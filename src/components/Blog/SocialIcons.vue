<template>
  <div class="flex flex-row space-x-2 sm:space-x-4 md:space-x-6">
    <ShareNetwork
      network="whatsapp"
      :url="`${$static.metadata.siteUrl}${this.record.path}`"
      :title="record.title"
      :description="record.excerpt"
    >
      <phone-icon
        size="1.5x"
        class="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500"
      ></phone-icon>
    </ShareNetwork>
    <ShareNetwork
      network="facebook"
      :url="`${$static.metadata.siteUrl}${this.record.path}`"
      :title="record.title"
      :description="record.excerpt"
      hashtags="asimovjr, blog"
    >
      <facebook-icon
        size="1.5x"
        class="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500"
      ></facebook-icon>
    </ShareNetwork>
    <ShareNetwork
      network="twitter"
      :url="`${$static.metadata.siteUrl}${this.record.path}`"
      :title="record.title"
      hashtags="asimovjr, blog"
    >
      <twitter-icon
        size="1.5x"
        class="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500"
      ></twitter-icon>
    </ShareNetwork>
    <ShareNetwork
      network="linkedin"
      :url="`${$static.metadata.siteUrl}${this.record.path}`"
      :title="record.title"
    >
      <linkedin-icon
        size="1.5x"
        class="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500"
      ></linkedin-icon>
    </ShareNetwork>
  </div>
</template>

<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>

<script>
import {
  PhoneIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon
} from 'vue-feather-icons'

export default {
  name: 'SocialIcons',
  components: {
    PhoneIcon,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon
  },
  props: {
    record: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
