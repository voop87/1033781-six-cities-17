import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Page404() {
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoute.Main} className="header__logo-link">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Ooops! 404 Page not found!</h1>
            <Link to={AppRoute.Main}>&lt;&lt; Return to main page</Link>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Page404;
