import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  path: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Startup Creation",
    Svg: require("@site/static/img/landing-page/undraw_creativity.svg").default,
    description: (
      <>
        We guide you how to create a micro-startup from scratch. You will learn
        how to find a profitable niche, how to validate your idea, how to
        develop your product, how to launch your micro-startup, and how to grow
        your business.
      </>
    ),
    path: "/docs/category/startup---creation",
  },
  {
    title: "Startup Growth",
    Svg: require("@site/static/img/landing-page/undraw_growth_curve.svg")
      .default,
    description: (
      <>
        We guide you how to grow and optimize your micro-startup by applying
        proven strategies and tactics. You will learn how to increase your
        traffic, conversions, and revenue, how to reduce your costs and risks,
        and how to improve your customer satisfaction and retention.
      </>
    ),
    path: "/docs/category/startup---growth",
  },
  {
    title: "Startup Acquisition",
    Svg: require("@site/static/img/landing-page/undraw_term_sheet.svg").default,
    description: (
      <>
        We guide you prepare and sell your micro-startup for a profit. You will
        learn how to determine the optimal time and price to sell, how to market
        your micro-startup to potential buyers, and how to close the deal and
        hand over the business.
      </>
    ),
    path: "/docs/category/startup---selling",
  },
];

function Feature({ title, Svg, description, path }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p className="text--justify">{description}</p>
        <a href={path}>Read guides</a>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
