import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import DetailsBanner from './detailsBanner/DetailsBanner'
import CastSection from './cast/Cast'
import VideosSection from './VideoSection/VideoSection'
import SimilarSection from './carousels/SimilarSection'
import RecommendationsSection from './carousels/RecommendationsSection'

import useFetch from '../../hooks/useFetch'


const Details = () => {
  const { mediaType, id } = useParams();
  const { data: videoData, loading: videoDataLoading } = useFetch(
    `/${mediaType}/${id}/videos`
  );
  const { data: creditsData, loading: creditsDataLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
   

  return (
    <Fragment>
      <DetailsBanner video={videoData?.results[0]} crew={creditsData?.crew} />
      <CastSection data={creditsData?.cast} loading={creditsDataLoading} />
      <VideosSection data={videoData} loading={videoDataLoading} />
      <SimilarSection mediaType={mediaType} id={id} />
      <RecommendationsSection mediaType={mediaType} id={id} />
    </Fragment>
  );
}

export default Details