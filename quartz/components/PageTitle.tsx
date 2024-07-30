// SNIPPETS modifications 28.07.2024
import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
      <h1 class={classNames(displayClass, "page-title")} style="display:flex;align-items:center">
        <img src="/static/iconColored.png" alt="✯" height="36" style="float:left;vertical-align:middle;margin:0;margin-right:8px" />
        <a href={baseDir}>{title}</a>
      </h1>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
