import './App.css'

const featureItems = [
  {
    title: 'すぐ出る',
    body: '余計な画面なし。',
  },
  {
    title: '切り替え',
    body: 'Show / Hide。',
  },
  {
    title: '動かせる',
    body: 'Drag / Resize。',
  },
]

const overlayTypes = [
  {
    name: 'Type1',
    label: '画像オーバーレイ',
    body: 'アイコン画像をそのまま見せるタイプ。',
  },
  {
    name: 'Type2',
    label: 'グレーのストライプ',
    body: '少し落ち着いた見た目のタイプ。',
  },
]

const steps = [
  {
    step: '01',
    title: '起動',
    body: '開いたら表示。',
  },
  {
    step: '02',
    title: '移動',
    body: 'ドラッグするだけ。',
  },
  {
    step: '03',
    title: 'サイズ',
    body: '角で調整。',
  },
  {
    step: '04',
    title: '表示',
    body: 'Esc / Cmd + B。',
  },
]

const downloadLinks = [
  {
    label: 'GitHub Releases からダウンロード',
    href: 'https://github.com/z-fujimori/miserarenaiyo-app/releases/latest',
    primary: true,
  },
  {
    label: 'ソースコードを見る',
    href: 'https://github.com/z-fujimori/miserarenaiyo-app',
    primary: false,
  },
]

function App() {
  return (
    <main className="page-shell">
      <div className="page-blob page-blob--left" aria-hidden="true" />
      <div className="page-blob page-blob--right" aria-hidden="true" />

      <header className="topbar">
        <div>
          <p className="eyebrow">Miserarenaiyo App</p>
          <h1 className="site-title">見せられないよ.app</h1>
        </div>
        <a
          className="ghost-link"
          href="https://github.com/z-fujimori/miserarenaiyo-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </header>

      <section className="hero-card">
        <div className="hero-copy">
          <p className="hero-description">画面の上に、軽く置けるオーバーレイ。</p>

          <div className="hero-actions">
            {downloadLinks.map((link) => (
              <a
                key={link.href}
                className={link.primary ? 'button button--primary' : 'button button--secondary'}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="画像差し込み用の枠">
          <div className="slot slot--hero">
            <img className="slot-image slot-image--hero" src="/img/icon.png" alt="Miserarenaiyo のアイコン" />
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Features</p>
          <h2>画面の見せたくない部分を1コマンド(Cmd+B)で隠せる</h2>
        </div>

        <div className="slot slot--wide">
          <img
            className="slot-image slot-image--wide"
            src="/img/befor-after.png"
            alt="Before と After の比較画像"
          />
        </div>

        <div className="feature-grid">
          {featureItems.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Overlay Types</p>
          <h2>2種類のオーバーレイitem</h2>
        </div>

        <div className="overlay-grid">
          {overlayTypes.map((item) => (
            <article className="overlay-card" key={item.name}>
              <div className={`overlay-preview overlay-preview--${item.name.toLowerCase()}`} aria-hidden="true">
                {item.name === 'Type1' ? (
                  <img
                    className="overlay-preview__image"
                    src="/img/miserarenaiyo_touka.png"
                    alt=""
                  />
                ) : (
                  <div className="overlay-item overlay-item--stripe" />
                )}
                <span className="overlay-preview__badge">{item.name}</span>
              </div>
              <div className="overlay-copy">
                <h3>{item.label}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="menu-callout">
          <div className="menu-callout__copy">
            <h3>メニューバーから切り替え。</h3>
            <p>画面上のメニューバーから、Type1 と Type2 を選べます。</p>
          </div>
          <div className="menu-callout__visual" aria-label="メニューバーからTypeを切り替える画像">
            <img
              className="menu-callout__image"
              src="/img/menue-bar.png"
              alt="メニューバーのメニューからType1とType2を切り替える様子"
            />
          </div>
        </div>
      </section>

      <section className="section-block section-block--split">
        <div className="section-heading">
          <p className="eyebrow">How to use</p>
          <h2>4ステップ。</h2>
        </div>

        <div className="steps-grid">
          {steps.map((item) => (
            <article className="step-card" key={item.step}>
              <span className="step-index">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="download-panel">
        <div className="download-copy">
          <p className="eyebrow">Download</p>
          <h2>GitHub へ。</h2>
          <p>最新ビルドは Releases から。</p>
        </div>

        <div className="download-side">
          <div className="download-actions">
            {downloadLinks.map((link) => (
              <a
                key={link.href}
                className={link.primary ? 'button button--primary' : 'button button--secondary'}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
