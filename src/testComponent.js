import styles from './base.scss'

export default (app) => {
  const el = document.createElement('div')
  el.innerHTML = `<p class='${styles.text} ${styles["text--underline"]}'>Test component</p>`
  app.appendChild(el)
}