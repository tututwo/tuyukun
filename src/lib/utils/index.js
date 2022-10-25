//!  grab all our Markdown files and return their data
export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob('/src/routes/blog/posts/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)
  
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const postPath = path.slice(11, -3).replace("posts/", "")
      // console.log(postPath)
      return {
        meta: metadata,
        path: postPath,
      }
    })
  )

  return allPosts
}