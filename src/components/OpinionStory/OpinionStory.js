import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants'

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <Link href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <StoryDetailsWrapper>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </StoryDetailsWrapper>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: flex;
  flex-direction: row-reverse;
  gap: 16px;
  justify-content: flex-end;

  @media (${QUERIES.tabletOnly}) {
    flex-direction: column;
  }
`

const Link = styled.a`
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-gray-300);
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  @media (${QUERIES.tabletOnly}) {
    flex: 1;

    &:not(:last-child) {
      border: none;
      padding-bottom: 0;
      margin-bottom: 0;
    }
  }
`

const StoryDetailsWrapper = styled.div`
  margin-right: auto;
`

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
