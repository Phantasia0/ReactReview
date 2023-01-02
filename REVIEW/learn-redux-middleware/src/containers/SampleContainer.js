import { connect } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample_saga";
import React from "react";

const { useEffect } = React;
const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers,
}) => {
  useEffect(() => {
    const fn = async () => {
      try {
        await getPost(1);
        await getUsers();
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [getPost, getUsers]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      laodingUsers={loadingUsers}
    />
  );
};

export default connect(
  ({ sample_saga, loading }) => ({
    post: sample_saga.post,
    users: sample_saga.users,
    loadingPost: loading["sample/GET_POST"],
    loadingUsers: loading["sample/GET_USERS"],
  }),
  {
    getPost,
    getUsers,
  }
)(SampleContainer);
