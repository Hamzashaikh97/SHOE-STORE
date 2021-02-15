import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Shoes from './../Shoes.json';
import { Link } from 'react-router-dom';
import './../App.css';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     '& > *': {
//       margin: theme.spacing(1),
//       width: theme.spacing(16),
//       height: theme.spacing(16),
//     },
//   },
// }));

function Product() {
  // const classes = useStyles();
  return (
    <div>

      <div className="productContainer" >
        {Object.keys(Shoes).map(keyName => {
          const shoe = Shoes[keyName]
          return (
            <Link key={keyName}
              className="link"
              to={`/product/${keyName}`} >
              <h4>{shoe.name}</h4>
              <img src={shoe.img} height={300} alt="" />
            </Link>
          )
        })

        }
      </div>

    </div>

  );
}

export default Product;
