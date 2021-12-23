export const sortByDate = (a, b) => {
  return (
    new Date(b && b.frontmatter && b.frontmatter.createdAt) -
    new Date(a && a.frontmatter && a.frontmatter.createdAt)
  )
}
