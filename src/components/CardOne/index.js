import React, { useEffect, useState } from "react";
// import { imageCards } from "../../data";
import { Link } from "react-router-dom";
import CardThree from "../CardThree";
import {
  Arrow,
  Container,
  ImageWrapper,
  TitleLink,
  TitleName,
  TitleWrapper,
} from "./COneElement";
import axios from "axios";

const CardOne = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(
        "https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/"
      );
      setPosts(res.data);
    };
    fetchPost();
  }, []);

  return (
    <Container>
      <TitleWrapper>
        <TitleName>Category Name</TitleName>
        <TitleLink>
          More News
          <Arrow />
        </TitleLink>
      </TitleWrapper>
      <ImageWrapper>
        {posts.map((post) => (
          <Link to={`/post/${post.id}`}>
            <CardThree
              key={post.id}
              img={post?.jetpack_featured_media_url}
              subtitle={post?.title?.rendered}
              desc={post?.content?.rendered}
              date={post?.date}
            />
          </Link>
        ))}
      </ImageWrapper>
    </Container>
  );
};

export default CardOne;
