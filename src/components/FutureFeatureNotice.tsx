import React from 'react';
import type { ReactElement } from 'react';

interface FutureFeatureNoticeProps {
  version?: string;
}

export default function FutureFeatureNotice({ version = "v0.2" }: FutureFeatureNoticeProps): ReactElement {
  return (
    <div className="admonition admonition-caution alert alert--warning">
      <div className="admonition-heading">
        <h5>
          <span className="admonition-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path>
            </svg>
          </span>
          Funcionalidad en desarrollo
        </h5>
      </div>
      <div className="admonition-content">
        <p>
          Esta funcionalidad estará disponible en la próxima versión ({version}).
          Esta documentación es preliminar y está sujeta a cambios.
        </p>
      </div>
    </div>
  );
}
