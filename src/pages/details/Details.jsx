import React from 'react'
import { useParams } from 'react-router-dom'
import DetailsBanner from './detailsBanner/DetailsBanner'

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
    <DetailsBanner video={videoData?.results[0]} crew={creditsData?.crew} />
  );
}

export default Details