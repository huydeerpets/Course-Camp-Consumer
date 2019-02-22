import React from 'react';
import Head from 'next/head';
import CommunityComponent from '../../frontend/reactComponents/community/communityQuestion/index';
import { GraphQlDevURI, GraphQlMutate } from '../../globalHelpers/axiosCalls';

const CommunityQuestion = ({ forumQuestion }) => (
  <div>
    <Head>
      <title>Home Page</title>
      <script src="https://code.jquery.com/jquery-3.3.1.min.js"
              integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
              crossOrigin="anonymous" />
    </Head>
    <CommunityComponent forumQuestion={ forumQuestion } />
  </div>
);

CommunityQuestion.getInitialProps = async ctx => {
  try {
    const forumQuestion = await GraphQlMutate(GraphQlDevURI, `
      {
        singleForumQuestion(forumQuestionId: "${ ctx.query.questionId }") {
          title
          date
          exercise
          sectionIndex
          videoIndex
          course {
            title
            color
            sections {
              title
              videos {
                title
              }
            }
          }
          creator {
            name
          }
        }
      }
  `);
    return { forumQuestion: forumQuestion.data.data.singleForumQuestion }
  } catch(e) {
    return {};
  }
};

export default CommunityQuestion;
