import React from 'react';
import Admonition from '@theme/Admonition';
import Translate, {translate} from '@docusaurus/Translate';

export default function FutureFeatureNotice({ version = "v0.2" }) {
  return (
    <Admonition
      type="caution"
      title={translate({
        id: 'futureFeature.title',
        message: 'Funcionalidad en desarrollo',
        description: 'Title of the notice for a feature that is not released yet',
      })}>
      <p>
        <Translate
          id="futureFeature.body"
          description="Body of the notice for a feature that is not released yet"
          values={{version}}>
          {'Esta funcionalidad estará disponible en la próxima versión ({version}). Esta documentación es preliminar y está sujeta a cambios.'}
        </Translate>
      </p>
    </Admonition>
  );
}
