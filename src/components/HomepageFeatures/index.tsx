import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Planea',
    Svg: require('@site/static/img/planea.svg').default,
    description: (
      <>
        Genera tu Flujo conversacional, maneja excepciones y define lo que necesitas.
      </>
    ),
  },
  {
    title: 'Siembra',
    Svg: require('@site/static/img/siembra.svg').default,
    description: (
      <>
       Siembra el primer arbol de todo tu bosque, en base a tu flujo conversacional determinista.
      </>
    ),
  },
  {
    title: 'Escala',
    Svg: require('@site/static/img/escala.svg').default,
    description: (
      <>
        Escala tus Arboles gracias a las herramientas Generativas, que amplian el enfoque determinista y cubre sus puntos ciegos.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
