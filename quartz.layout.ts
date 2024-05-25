import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"


// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.RecentNotes({
      title: "Latest Blog Post",
      limit: 1,
      filter: (f) =>
        f.slug!.startsWith("blog/") && f.slug! !== "blog/index" && !f.frontmatter?.noindex,
      linkToMore: "blog/" as SimpleSlug,
      
    
    })
  ),
  Component.DesktopOnly(
    Component.RecentNotes({
      title: "Latest Book Summary",
      limit: 1,
      filter: (f) =>
        f.slug!.startsWith("books/") && f.slug! !== "books/index" && !f.frontmatter?.noindex,
      linkToMore: "books/" as SimpleSlug,
      
    
    }),
    
  ),
  Component.DesktopOnly(
    Component.RecentNotes({
      title: "Latest Linkedin Post",
      limit: 1,
      filter: (f) =>
        f.slug!.startsWith("linkedin/") && f.slug! !== "linkedin/index" && !f.frontmatter?.noindex,
      linkToMore: "linkedin/" as SimpleSlug,
      
    
    }),
  ),
  Component.DesktopOnly(
    Component.RecentNotes({
      title: "Study Guide",
      limit: 2,
      filter: (f) =>
        f.slug!.startsWith("guides/") && f.slug! !== "guides/index" && !f.frontmatter?.noindex,
      linkToMore: "guides/" as SimpleSlug,
      
    
    }),
  ),
  ],
  
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
