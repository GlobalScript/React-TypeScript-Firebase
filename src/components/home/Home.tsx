import { posts } from "../../shared/data/data_ua";
import Card from '../card/Card'

const Home: React.FC = () => {

  return (
    <div className="home">
      <header className="home__header">
        <h1 className="home__header-title">Політ на Марс не дорожче, ніж будинок в США.</h1>
      </header>
      <div className="home__card-container">
        {posts.map(post => <Card key={post.id} post={post} />)}
      </div>
      <div className="home__speech">
        <h2 className="home__speech-title">Mars Travel</h2>
        <p className="home__speech-text">Ми раді вітати вас на нашому сайті, де ви зможете дізнатися про можливі подорожі на Марс. Ми здійснюємо мрії. Це дійсно надзвичайна подорож, яка залишить незабутні враження на все життя. І ми зможемо допомогти вам здійснити цю мрію.</p>
      </div>
      <div className="home__info">
        <div className="home__info-security home__info-container">
          <img className="home__info-img" src="/images/nasa.jpg" alt="security" />
          <p className="home__info-text">Наша компанія має багаторічний досвід в організації космічних подорожей. Ми піклуємося про кожного нашого клієнта та забезпечуємо їм безпеку, комфорт та незабутні враження.</p>
        </div>
        <div className="home__info-preparation home__info-container">
          <img className="home__info-img" src="/images/preparation.jpg" alt="security" />
          <p className="home__info-text">Ми пропонуємо підготовку до подорожі, яка включає медичну огляд, тренування для адаптації до космічного середовища та підготовку до роботи з технікою. Наші фахівці забезпечать вас необхідними знаннями та навичками для безпечного перебування в космосі.</p>
        </div>
        <div className="home__info-destination home__info-container">
          <img className="home__info-img" src="/images/korsa.jpg" alt="security" />
          <p className="home__info-text">Ми пропонуємо різні програми подорожей на Марс, включаючи короткострокові та довгострокові. Ви можете вибрати програму, яка відповідає вашим потребам та бажанням. Ми також забезпечуємо можливість персоналізації програми подорожі для кожного нашого клієнта.</p>
        </div>
      </div>
    </div>
  )
}

export default Home;