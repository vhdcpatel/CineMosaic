import React, { Fragment, useState } from "react";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Wrapper from "../../../components/wrapper/Wrapper";
import useFetch from "../../../hooks/useFetch";
import Genres from "../../../components/genres/Genres";
import CircleRating from "../../../components/circleRating/circleRating";
import LazyLoadingImages from "../../../components/lazyLoadingImages/LazyLoadingImages";
import PosterFallback from "../../../assets/no-poster.png";
import PlayIcon from "./PlayIcon";
import VideoPopup from "../../../components/videoPopUp/VideoPopUp";
import "./DetailsBanner.css";

const DetailsBanner = ({ video, crew }) => {

  const [show,setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);

  const url = useSelector((state) => state.home.url);

  const genresIds = data?.genres?.map((g) => g.id);

  const directors = crew?.filter((listItem) => listItem.job === "Director");
  const writers = crew?.filter(
    (listItem) => listItem.job == "Screenplay" || listItem.job == "Story" || listItem.job === "Writer"
  );

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h ${minutes > 0 ? `${minutes}m` : ""}`;
  };

  return (
    <div className="detailsBanner">
      {!loading ? (
        <>
          {!!data && (
            <Fragment>
              <div className="backdrop-img">
                <LazyLoadingImages src={url.backdrop + data.backdrop_path} />
              </div>
              <div className="opacity-layer"></div>
              <Wrapper>
                <div className="content">
                  <div className="left">
                    {data.poster_path ? (
                      <LazyLoadingImages
                        className="posterImg"
                        src={url.backdrop + data.poster_path}
                      />
                    ) : (
                      <LazyLoadingImages
                        className="posterImg"
                        src={PosterFallback}
                      />
                    )}
                  </div>
                  <div className="right">
                    <div className="title">
                      {`${data.name || data.title} (${dayjs(
                        data.release_date
                      ).format("YYYY")})`}
                    </div>
                    <div className="subtitle">{data.tagline}</div>
                    <Genres data={genresIds} />
                    <div className="row">
                      <CircleRating rating={data.vote_average.toFixed(1)} />
                      <div className="playbtn" onClick={() => {
                        setShow(true)
                        setVideoId(video.key);
                      }}>
                        <PlayIcon />
                        <span className="text">Watch Trailer</span>
                      </div>
                    </div>
                    <div className="overview">
                      <div className="heading">Overview</div>
                      <div className="description">{data.overview}</div>
                    </div>
                    <div className="info">
                      {data.status && (
                        <div className="infoItem">
                          <span className="text bold">Status: </span>
                          <span className="text">{data.status}</span>
                        </div>
                      )}

                      {data.release_date && (
                        <div className="infoItem">
                          <span className="text bold">Release Date</span>
                          <span className="text">
                            {dayjs(data.release_date).format("D-MMM-YYYY")}
                          </span>
                        </div>
                      )}

                      {data.runtime && (
                        <div className="infoItem">
                          <span className="text bold">RunTime</span>
                          <span className="text">
                            {toHoursAndMinutes(data.runtime)}
                          </span>
                        </div>
                      )}
                    </div>
                    {directors?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Director: </span>
                        <span className="text">
                          {directors?.map((director, index) => (
                            <span key={index}>
                              {director.name}
                              {directors.length - 1 !== index && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                    {writers?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Writers: </span>
                        <span className="text">
                          {writers?.map((writer, index) => (
                            <span key={index}>
                              {writer.name}
                              {writers.length - 1 !== index && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                    {data?.created_by?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Creator: </span>
                        <span className="text">
                          {data?.created_by.map((creator, index) => (
                            <span key={index}>
                              {creator.name}
                              {data?.created_by.length - 1 !== index && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <VideoPopup
                  show={show}
                  setShow={setShow}
                  videoId={videoId}
                  setVideoId={setVideoId}
                />
              </Wrapper>
            </Fragment>
          )}
        </>
      ) : (
        // Loading Skeleton(Show untill data is not loaded.)
        <div className="detailsBannerSkeleton">
          <Wrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </Wrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
