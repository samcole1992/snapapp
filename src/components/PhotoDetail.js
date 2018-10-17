import React, { Component } from 'react';
import { Link } from 'react-router-dom'


const PhotoDetail = (props) => {

		return(

      <li style={{listStyleType: 'none'}}>
      <div onClick={()=>props.onClick(props.photo)}>
			   <img src={props.photo.urls.thumb} />
		  </div>


    		<p>
    			Photo author:
    			<a href={props.photo.user.links.html} target="_blank"> {props.photo.user.username}</a>
    		</p>
    	</li>

	    )
	}


export default PhotoDetail;
