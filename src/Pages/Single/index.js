import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Gallaryy from "../../components/Gallaryy";
import {
  CalenderIcon,
  CommentSection,
  ContactIcon,
  Container,
  FacebookIcon,
  COptions,
  COptionSplit,
  CPost,
  CReply,
  CTime,
  CUser,
  FirstComment,
  ImgDetailsText,
  JoinDiscussionContainer,
  LinkedInIcon,
  MessageIcon,
  RCTitle,
  RCWrapper,
  SecondComment,
  ShareWrapper,
  SPDescription,
  SPimage,
  SPimgdesc,
  SPimgdetails,
  SPtitle,
  SWtext,
  TimeIcon,
  TwitterIcon,
  WhatsAppIcon,
  Wrapper,
  COptionIcon,
  JDText,
  JDTextarea,
  JDLabel,
  JDInput,
  JDButton,
  JDInputField,
  TSWrapper,
  TSTitle,
  TCGallaryWrapper,
  JDForm,
} from "./SingleElement";
import axios from "axios";
import DOMPurify from "dompurify";

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { postId } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(
        `https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/${postId}`
      );
      setSinglePost(res.data);
    };
    fetchPost();
  }, [postId]);

  // useEffect(() => {
  //   const postComments = async () => {
  //     const res = await axios.post(
  //       `https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/${postId}`
  //     );
  //     setSinglePost(res.data);
  //   };
  //   postComments();
  // }, [postId]);
  //optional chaining
  //undefined
  //conditional rendering
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message) {
      await axios.post(
        `https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/${postId}`,
        {
          name,
          email,
          message,
        }
      );
    }
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container>
      <Wrapper>
        <SPtitle>{singlePost?.title?.rendered}</SPtitle>
        <ShareWrapper>
          <SWtext>Share This Post:</SWtext>
          <FacebookIcon />
          <TwitterIcon />
          <WhatsAppIcon />
          <LinkedInIcon />
        </ShareWrapper>
        <SPimage src={singlePost.jetpack_featured_media_url} alt="post" />
        <SPimgdesc>Financial Writer</SPimgdesc>
        <SPimgdetails>
          <ContactIcon />
          <ImgDetailsText>Solomon James</ImgDetailsText>
          <CalenderIcon />
          <ImgDetailsText>{singlePost.date}</ImgDetailsText>
          <TimeIcon />
          <ImgDetailsText>6 mins Read</ImgDetailsText>
        </SPimgdetails>
        <SPDescription
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(singlePost?.content?.rendered),
          }}
        ></SPDescription>
        <RCWrapper>
          <RCTitle>Reader Comments</RCTitle>
          <CommentSection>
            <FirstComment>
              <CPost>
                Fusce bibendum fringilla nunc vitae condimentum. Vivamus ante
                velit, fermentum id mattis sed, venenatis eu nulla. Proin lacus
                dui, faucibus sit amet maximus et,
              </CPost>
              <COptions>
                <COptionSplit>
                  <CUser>Felix</CUser>
                  <CTime>An hour ago</CTime>
                </COptionSplit>
                <COptionIcon>
                  <MessageIcon />
                  <CReply>Reply Comment</CReply>
                </COptionIcon>
              </COptions>
            </FirstComment>
            <SecondComment>
              <CPost>
                Fusce bibendum fringilla nunc vitae condimentum. Vivamus ante
                velit, fermentum id mattis sed, venenatis eu nulla. Proin lacus
                dui, faucibus sit amet maximus et,
              </CPost>
              <COptions>
                <COptionSplit>
                  <CUser>Jack</CUser>
                  <CTime>3mins ago</CTime>
                </COptionSplit>
                <COptionIcon>
                  <MessageIcon />
                  <CReply>Reply Comment</CReply>
                </COptionIcon>
              </COptions>
            </SecondComment>

            <JoinDiscussionContainer>
              <JDText>Join the discussion</JDText>
              <JDForm onSubmit={handleSubmit}>
                <JDTextarea
                  row="5"
                  placeholder="Write your comment"
                  name="user_message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <JDInputField>
                  <JDLabel>Your Name:</JDLabel>
                  <JDInput
                    type="text"
                    placeholder=""
                    name="user_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <JDLabel>Email Address:</JDLabel>
                  <JDInput
                    type="email"
                    placeholder=""
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </JDInputField>
                <JDButton>Submit</JDButton>
              </JDForm>
            </JoinDiscussionContainer>
          </CommentSection>
        </RCWrapper>
        <TSWrapper>
          <TSTitle>Top Stories</TSTitle>
          <TCGallaryWrapper>
            <Gallaryy />
          </TCGallaryWrapper>
        </TSWrapper>
      </Wrapper>
    </Container>
  );
};

export default SinglePost;
