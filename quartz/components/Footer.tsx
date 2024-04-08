import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"


interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <div class="navbar">
        <p>
         <a href="https://kiranbrahma.com" target="_blank">Kiran Brahma's</a> Personal Notes {year} 
        </p>
        <ul>
          
            <li>
              <a href="https://www.linkedin.com/in/kbrahma/" target="_blank">LinkedIn</a>
            </li>
            <li>
            <a href="https://www.instagram.com/the.brahma/" target="_blank">Instagram</a>
            </li>
            <li>
            <a href="https://photos.kiranbrahma.com" target="_blank">Photo Gallery</a>
            </li>
    
        </ul>
        </div>
        
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
