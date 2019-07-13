import { Link } from 'gatsby';
import React from 'react';

import { DefaultLayout } from '../components/layout';

const NotFoundPage = () => (
  <DefaultLayout siteTitle="404" siteDescription="Cette page n'existe pas.">
    <div className="error-page error-page--404">
      <div className="error__text">
        <h1>
          Cette page <span className="emphasis">n'existe pas</span>.
        </h1>
        <p>
          Ou alors vous utilisez une ancienne URL, qui n'existe plus. Vous pourriez trouver ce que vous chercher en
          retournant sur la <Link to="/">page d'accueil</Link>.
        </p>
        <p>
          Vous pouvez également <Link to="/nous-contacter">nous contacter</Link> par e-mail ou par téléphone et nous reviendrons
          vers vous au plus vite.
        </p>
      </div>
    </div>
  </DefaultLayout>
);

export default NotFoundPage;
