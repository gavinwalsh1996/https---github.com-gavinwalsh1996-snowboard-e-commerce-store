import React from 'react'

//Icons
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Ratings({arr}) {

    return (
        <div>
          {arr.rating >= 8 ? (
            <span>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </span>
          ) : arr.rating >= 5 ? (
            <span>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarBorderIcon />
              <StarBorderIcon />
            </span>
          ) : (
            <span>
              <StarIcon />
              <StarIcon />
              <StarBorderIcon />
              <StarBorderIcon />
              <StarBorderIcon />
            </span>
          )}
        </div>
      );
      

}

export default Ratings