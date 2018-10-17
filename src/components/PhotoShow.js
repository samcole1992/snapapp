import React from 'react';
import { PageHeader} from 'react-bootstrap';

const PhotoShow = (props) => {
console.log(props.currentPhoto);
    return(
      <div>
      <PageHeader style={{ display: "flex", padding:10}}>
        Photo {props.currentPhoto.id} by: {props.currentPhoto.user.name}
      </PageHeader>
      <div>
        <img src={props.currentPhoto.urls.regular} />
      </div>



      </div>

  )
}


export default PhotoShow
