import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostImg from "../../images/Rectangle 49.svg";
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

  console.log(singlePost);

  //optional chaining
  //undefined
  //conditional rendering

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
              <JDForm>
                <JDTextarea
                  row="5"
                  placeholder="Write your comment"
                  name="user_message"
                />
                <JDInputField>
                  <JDLabel>Your Name:</JDLabel>
                  <JDInput type="text" placeholder="" name="user_name" />
                  <JDLabel>Email Address:</JDLabel>
                  <JDInput type="email" placeholder="" name="email" />
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
