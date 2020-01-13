import styles from './base.scss'

if (module.hot) {
  module.hot.accept();
}

const app = document.getElementById('app')
app.innerHTML = `
  <div class='${styles.text}'>
    Hello from js
    <button class='js-check'>Show component</button>
  </div>
`

document.querySelector('.js-check').addEventListener('click', async () => {
  const { default: testComponent } = await import(/* webpackChunkName: "testComponent" */ /* webpackPrefetch: true */ './testComponent')
  testComponent(app)
})

