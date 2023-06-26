import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import ApiCall from "../../utils/apiCall";
import Wrapper from "../../components/wrapper/Wrapper";
import Spinner from "../../components/spinner/Spinner";
import MovieCard from "../../components/movieCard/MovieCard";
import noResults from "../../assets/no-results.png";

import "./SearchResults.css";

const SearchResults = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);

  const { query } = useParams();

  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [query]);

  const fetchInitialData = () => {
    setLoading(true);
    ApiCall(`/search/multi?query=${query}&page=${pageNum}`).then((res) => {
      setData(res);
      setPageNum((prev) => prev + 1);
      setLoading(false);
    });
  };

  const fetchNextPageData = () => {
    ApiCall(`/search/multi?query=${query}&page=${pageNum}`).then((res) => {
      if (data?.results) {
        setData({
          ...data,
          results: [...data?.results, ...res.results],
        });
      } else {
        setData(res);
      }
      setPageNum((prev) => prev + 1);
    });
  };

  return (
    <div className="searchResultsPage">
      {/* {loading && } */}
      {loading ? (
        <Spinner initial={true} />
      ) : (
        <Wrapper>
          {data?.results?.length > 0 ? (
            <>
              <div className="pageTitle">
                {`Search ${
                  data.total_results > 1 ? "results" : "result"
                } of '${query}'`}
              </div>
              <InfiniteScroll
                className="content"
                dataLength={data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum<=data?.total_pages}
                loader={<Spinner/>}
              >
                {data.results.map((item, index) => {
                  if (item.media_type === "person") return;
                  return (
                    <MovieCard key={index} data={item} fromSearch={true} />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="resultNotFound">
              Sorry, We can't find what you are lookig for.
            </span>
          )}
        </Wrapper>
      )}
    </div>
  );
};

export default SearchResults;
