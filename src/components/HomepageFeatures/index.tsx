import type {ReactNode} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: ReactNode;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: (
      <Translate id="homepage.features.plan.title" description="Homepage feature title: plan">
        Planea
      </Translate>
    ),
    Svg: require('@site/static/img/planea.svg').default,
    description: (
      <Translate id="homepage.features.plan.description" description="Homepage feature description: plan">
        Genera tu Flujo conversacional, maneja excepciones y define lo que necesitas.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="homepage.features.plant.title" description="Homepage feature title: plant">
        Siembra
      </Translate>
    ),
    Svg: require('@site/static/img/siembra.svg').default,
    description: (
      <Translate id="homepage.features.plant.description" description="Homepage feature description: plant">
        Siembra el primer arbol de todo tu bosque, en base a tu flujo conversacional determinista.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="homepage.features.scale.title" description="Homepage feature title: scale">
        Escala
      </Translate>
    ),
    Svg: require('@site/static/img/escala.svg').default,
    description: (
      <Translate id="homepage.features.scale.description" description="Homepage feature description: scale">
        Escala tus Arboles gracias a las herramientas Generativas, que amplian el enfoque determinista y cubre sus puntos ciegos.
      </Translate>
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
