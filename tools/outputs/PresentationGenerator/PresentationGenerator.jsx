import { Fade, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import styles from './styles';

const PresentationGenerator = () => {
  const { response } = useSelector((state) => state.tools);

  const renderSlide = (slide, index) => (
    <Grid key={`slide-${index}`} {...styles.slideGridProps}>
      <Typography {...styles.titleProps}>{slide.title}</Typography>
      <Typography {...styles.contentProps}>{slide.content}</Typography>
      {slide.suggestions && (
        <Typography {...styles.suggestionsProps}>{slide.suggestions}</Typography>
      )}
    </Grid>
  );

  const renderSlides = () => (
    <Grid {...styles.slidesGridProps}>
      {response?.list_slides?.map((slide, index) => renderSlide(slide, index))}
    </Grid>
  );

  return (
    <Fade in>
      <Grid {...styles.mainGridProps}>
        {response && renderSlides()}
      </Grid>
    </Fade>
  );
};

export default PresentationGenerator;
