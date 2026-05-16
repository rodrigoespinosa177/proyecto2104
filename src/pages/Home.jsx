import { useTranslation } from 'react-i18next'
import './Home.css'

function Home() {
  const { t } = useTranslation()

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>{t('home.hero.title')}</h1>
          <br />
          <p className="hero-subtitle">{t('home.hero.subtitle')}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;