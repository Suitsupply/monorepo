/* eslint-disable @next/next/no-img-element */
import ClientDynamicMedia from './ClientDynamicMedia';
import styles from './TextAndImageRowBannerSection.module.scss';

export type DynamicMediaProps = {
  automationPageId: string;
};

export function DynamicMedia(automationPageId: Readonly<DynamicMediaProps>) {
  return (
    <ClientDynamicMedia data-testid={`${automationPageId}_dynamic-media`}>
      <div className="halfcanvas-animation__images">
        <img
          className={styles['halfcanvas-animation__inside-left']}
          alt=""
          loading="lazy"
          src="https://cdn.suitsupply.com/image/upload/fl_progressive,f_auto,q_auto,w_600/suitsupply/campaigns/ss21/about-our-jackets/half-canvas-explosion/4_Left-min.png"
        />
        <img
          className={styles['halfcanvas-animation__inside-right']}
          alt=""
          loading="lazy"
          src="https://cdn.suitsupply.com/image/upload/fl_progressive,f_auto,q_auto,w_600/suitsupply/campaigns/ss21/about-our-jackets/half-canvas-explosion/4_Right-min.png"
        />
        <img
          className={styles['halfcanvas-animation__shoulder-4-left']}
          alt=""
          loading="lazy"
          src="https://cdn.suitsupply.com/image/upload/fl_progressive,f_auto,q_auto,w_600/suitsupply/campaigns/ss21/about-our-jackets/full-canvas-explosion/Shoulder_4_Left-min.png"
        />
        <img
          className={styles['halfcanvas-animation__shoulder-4-right']}
          alt=""
          loading="lazy"
          src="https://cdn.suitsupply.com/image/upload/fl_progressive,f_auto,q_auto,w_600/suitsupply/campaigns/ss21/about-our-jackets/full-canvas-explosion/Shoulder_4_Right-min.png"
        />
        <img
          className={styles['halfcanvas-animation__shoulder-3-left']}
          alt=""
          loading="lazy"
          src="https://cdn.suitsupply.com/image/upload/fl_progressive,f_auto,q_auto,w_600/suitsupply/campaigns/ss21/about-our-jackets/full-canvas-explosion/Shoulder_3_Left-min.png"
        />
        <img
          className={styles['halfcanvas-animation__shoulder-3-right']}
          alt=""
          loading="lazy"
          src="https://cdn.suitsupply.com/image/upload/fl_progressive,f_auto,q_auto,w_600/suitsupply/campaigns/ss21/about-our-jackets/full-canvas-explosion/Shoulder_3_Right-min.png"
        />
        <img
          className={styles['halfcanvas-animation__shoulder-2-left']}
          alt=""
          loading="lazy"
          src="https://cdn.suitsupply.com/image/upload/fl_progressive,f_auto,q_auto,w_600/suitsupply/campaigns/ss21/about-our-jackets/full-canvas-explosion/Shoulder_2_Left-min.png"
        />
        <img
          className={styles['halfcanvas-animation__shoulder-2-right']}
          alt=""
          loading="lazy"
          src="https://cdn.suitsupply.com/image/upload/fl_progressive,f_auto,q_auto,w_600/suitsupply/campaigns/ss21/about-our-jackets/full-canvas-explosion/Shoulder_2_Right-min.png"
        />
        <img
          className={styles['halfcanvas-animation__shoulder-1-left']}
          alt=""
          loading="lazy"
          src="https://cdn.suitsupply.com/image/upload/fl_progressive,f_auto,q_auto,w_600/suitsupply/campaigns/ss21/about-our-jackets/full-canvas-explosion/Shoulder_1_Left-min.png"
        />
        <img
          className={styles['halfcanvas-animation__shoulder-1-right']}
          alt=""
          loading="lazy"
          src="https://cdn.suitsupply.com/image/upload/fl_progressive,f_auto,q_auto,w_600/suitsupply/campaigns/ss21/about-our-jackets/full-canvas-explosion/Shoulder_1_Right-min.png"
        />
        <img
          className={styles['halfcanvas-animation__pad-front-left']}
          alt=""
          loading="lazy"
          src="https://cdn.suitsupply.com/image/upload/fl_progressive,f_auto,q_auto,w_600/suitsupply/campaigns/ss21/about-our-jackets/full-canvas-explosion/3_Left-min.png"
        />
        <img
          className={styles['halfcanvas-animation__pad-front-right']}
          alt=""
          loading="lazy"
          src="https://cdn.suitsupply.com/image/upload/fl_progressive,f_auto,q_auto,w_600/suitsupply/campaigns/ss21/about-our-jackets/full-canvas-explosion/3_Right-min.png"
        />
        <img
          className={styles['halfcanvas-animation__half-front-left']}
          alt=""
          loading="lazy"
          src="https://cdn.suitsupply.com/image/upload/fl_progressive,f_auto,q_auto,w_600/suitsupply/campaigns/ss21/about-our-jackets/full-canvas-explosion/2_Left-min.png"
        />
        <img
          className={styles['halfcanvas-animation__half-front-right']}
          alt=""
          loading="lazy"
          src="https://cdn.suitsupply.com/image/upload/fl_progressive,f_auto,q_auto,w_600/suitsupply/campaigns/ss21/about-our-jackets/full-canvas-explosion/2_Right-min.png"
        />
        <img
          className={styles['halfcanvas-animation__front-left']}
          alt=""
          loading="lazy"
          src="https://cdn.suitsupply.com/image/upload/fl_progressive,f_auto,q_auto,w_600/suitsupply/campaigns/ss21/about-our-jackets/half-canvas-explosion/1_Left-min.png"
        />
        <img
          className={styles['halfcanvas-animation__front-right']}
          alt=""
          loading="lazy"
          src="https://cdn.suitsupply.com/image/upload/fl_progressive,f_auto,q_auto,w_600/suitsupply/campaigns/ss21/about-our-jackets/half-canvas-explosion/1_Right-min.png"
        />
        <img
          className="halfcanvas-animation__static-img halfcanvas-animation__collar"
          alt=""
          loading="lazy"
          src="https://cdn.suitsupply.com/image/upload/fl_progressive,f_auto,q_auto,w_600/suitsupply/campaigns/ss21/about-our-jackets/full-canvas-explosion/Collar-min.png"
        />
      </div>
    </ClientDynamicMedia>
  );
}
