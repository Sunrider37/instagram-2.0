import React from 'react'
import { useContext } from 'react';
import Skeleton from 'react-loading-skeleton'
import UserContext from '../context/user';
import usePhotos from '../hooks/use-photos'
import Post from './Post/Post';

export default function TimeLine() {


    const {photos} = usePhotos()



    return (
       <div className="container col-span-2">
           {!photos ? (
               <>
                {[...new Array(4)].map((_,index) => (
                    <Skeleton key={index} count={4} width={640} height={400} className="mb-5" />
                ))}
               </>
           ) :  photos.length > 0 ? (
               photos.map((content) => 
               <Post key={content.docId } content={content}>{content.imageSrc}</Post>)
           ) : <p className="text-center text-2xl">Follow people to see photos</p>
        }
       </div>
    )
}
