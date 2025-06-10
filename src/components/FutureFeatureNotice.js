import React from 'react';
import Admonition from '@theme/Admonition';

export default function FutureFeatureNotice({ version = "v0.2" }) {
  return (
    <Admonition type="caution" title="Funcionalidad en desarrollo">
      <p>
        Esta funcionalidad estará disponible en la próxima versión ({version}).
        Esta documentación es preliminar y está sujeta a cambios.
      </p>
    </Admonition>
  );
}
