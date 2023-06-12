/** @format */
// * BEGIN IMPORTING LIBRARIES
const { EleventyI18nPlugin } = require('@11ty/eleventy')
const pluginRss = require('@11ty/eleventy-plugin-rss')
// * END IMPORTING LIBRARIES

// * BEGIN IMPORTING COLLECTIONS
const { posts, decapPosts } = require('./_11ty/collections/posts-collections')
const {
  codeCollection,
  communityCollection,
  growthCollection,
  remoteWorkCollection,
} = require('./_11ty/collections/category-collections')
const {
  sortedByTitle,
  sortedByTime,
  sortedByCategory,
  sortedByDate,
} = require('./_11ty/collections/sort-posts-collections')
// * END IMPORTING COLLECTIONS

// * BEGIN IMPORTING FILTERS
const searchFilter = require('./_11ty/filters/searchFilter')
const { postDate } = require('./_11ty/filters/filters')
const { fixCategory, dateNow } = require('./_11ty/filters/nunjucks-filters')
// * END IMPORTING FILTER

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
  // ? BEGIN PLUGINS
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: 'en', // Required
  })
  // ? END PLUGINS

  // * BEGIN CUSTOM COLLECTIONS
  // ? BEGIN CATEGORY COLLECTIONS
  eleventyConfig.addCollection('codeCollection', codeCollection)
  eleventyConfig.addCollection('communityCollection', communityCollection)
  eleventyConfig.addCollection('growthCollection', growthCollection)
  eleventyConfig.addCollection('remoteWorkCollection', remoteWorkCollection)
  // ? END CATEGORY COLLECTIONS

  // ? BEGIN POSTS COLLECTIONS
  eleventyConfig.addCollection('posts', posts)
  eleventyConfig.addCollection('decapPosts', decapPosts)
  // ? END POSTS COLLECTIONS

  // ? BEGIN SORTED POSTS COLLECTIONS
  eleventyConfig.addCollection('sortedByTitle', sortedByTitle)
  eleventyConfig.addCollection('sortedByTime', sortedByTime)
  eleventyConfig.addCollection('sortedByCategory', sortedByCategory)
  eleventyConfig.addCollection('sortedByDate', sortedByDate)
  // ? END SORTED POSTS COLLECTIONS
  // * END CUSTOM COLLECTIONS

  // * BEGIN CUSTOM FILTERS
  eleventyConfig.addFilter('search', searchFilter)
  eleventyConfig.addNunjucksFilter('fixCategory', fixCategory)
  eleventyConfig.addFilter('postDate', postDate)
  eleventyConfig.addNunjucksFilter('dateNow', dateNow)
  // * END CUSTOM FILTERS

  // * BEGIN COPY
  eleventyConfig.addPassthroughCopy('uploads')
  eleventyConfig.addPassthroughCopy('admin')
  eleventyConfig.addPassthroughCopy('filters')
  eleventyConfig.addPassthroughCopy('assets')
  // * END COPY

  return {
    passthroughFileCopy: true,
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  }
}
