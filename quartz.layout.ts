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
      title: "Latest Post",
      limit: 1,
      filter: (f) =>
        f.slug!.startsWith("Blog/") && f.slug! !== "Blog/index" && !f.frontmatter?.noindex,
      linkToMore: "Blog/" as SimpleSlug,
      
    
    })
  ),
  Component.DesktopOnly(
    Component.RecentNotes({
      title: "Latest Book Summary",
      limit: 1,
      filter: (f) =>
        f.slug!.startsWith("Books/") && f.slug! !== "Books/index" && !f.frontmatter?.noindex,
      linkToMore: "Books/" as SimpleSlug,
      
    
    }),
    
  ),
  Component.DesktopOnly(
    Component.RecentNotes({
      title: "Latest Linkedin Post",
      limit: 1,
      filter: (f) =>
        f.slug!.startsWith("Linkedin/") && f.slug! !== "Linkedin/index" && !f.frontmatter?.noindex,
      linkToMore: "Linkedin/" as SimpleSlug,
      
    
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
