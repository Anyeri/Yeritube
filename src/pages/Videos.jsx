import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import axios from "axios";

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], async () => {
    //keyword가 있으면 검색 결과를 JSON으로 읽어오고, 아니라면 popular JSON 읽어옴
    return (
      //mock data
      axios
        .get(`/videos/${keyword ? "search" : "popular"}.json`)
        //items만 읽어오게끔 반환
        .then((res) => res.data.items)
    );
  });

  return (
    <>
      <div>Videos {keyword ? `🔍${keyword}` : "🔥"}</div>

      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong!!😢</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
