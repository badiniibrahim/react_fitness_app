import React, {FC, useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import BodyPart from './BodyPart';

interface HorizontalScrollbarProps {
  data: string[];
  bodyParts?: boolean;
  setBodyPart: (item: string) => void;
  bodyPart: string;
}

const LeftArrow: FC = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow: FC = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar: FC<HorizontalScrollbarProps> = ({
    data,
    bodyParts,
    setBodyPart,
    bodyPart,
}) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item: any) => (
            <Box>
                {bodyParts ? (
                    <BodyPart
                        item={item}
                        setBodyPart={setBodyPart}
                        bodyPart={bodyPart}
                    />
                ) : (
                    <ExerciseCard exercise={item} />
                )}
            </Box>
        ))}
    </ScrollMenu>
);

export default HorizontalScrollbar;
