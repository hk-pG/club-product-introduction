/* 個々の展示の紹介ページ*/
import { Grid } from '@material-ui/core';
import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { AnimationBackground } from '../../shareComponents/templates/background/AnimationBackground';
import { Introduction } from '../templates/Introduction';
import { SlideShow } from '../templates/SlideShow';
import './SingleExhibit.css';
type Props = {
  name: string;
  text: string;
  title: string;
  images: string[];
  videos: string[];
};

const SingleExhibit: FC<Props> = (props: Props) => {
  const { name, text, images, title, videos } = props;
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <section className="container">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={7} xl={8}>
            <SlideShow images={images} videos={videos} />
          </Grid>
          <Grid item xs={12} lg={5} xl={12}>
            <Introduction name={name} text={text} />
          </Grid>
        </Grid>
      </section>
      <AnimationBackground />
    </>
  );
};

export { SingleExhibit };
