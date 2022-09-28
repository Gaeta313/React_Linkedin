export const SET_ME = "SET_ME";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const UPDATE_ME = "UPDATE_ME";
export const SET_LIGHT_THEME = "SET_LIGHT_THEME";
export const SET_DARK_THEME = "SET_DARK_THEME";
export const GET_ALL_EXPERIENCES = "GET_ALL_EXPERIENCES";
export const GET_ALL_COMMENTS = "GET_ALL_COMMENTS";
export const GET_EXPERIENCE = "GET_EXPERIENCE";
export const POST_NEW_EXPERIENCES = "POST_NEW_EXPERIENCES";
export const PUT_EXPERIENCES = "PUT_EXPERIENCES";
export const SET_EXP_ID = "SET_EXP_ID";
export const SET_COMMENT_BY_ID = "SET_COMMENT_BY_ID";
export const SET_MY_LAST_COMMENTS = "SET_MY_LAST_COMMENTS";
export const SET_LOADER = "SET_LOADER";
export const SET_LOADER_COMMENTS = "SET_LOADER_COMMENTS";

export const URL = "https://striveschool-api.herokuapp.com/api";
export const TOKEN =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MWQ2ZTZkNzlhNTAwMTUwOTAyZWYiLCJpYXQiOjE2NjM1NzMzNTksImV4cCI6MTY2NDc4Mjk1OX0.us8ZDLkkp2W8eygVu_nKJqPUZKcBcc9Q66_L9RtWObc";

// TOKEN GAETANO:
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MWQ2ZTZkNzlhNTAwMTUwOTAyZWYiLCJpYXQiOjE2NjM1NzMzNTksImV4cCI6MTY2NDc4Mjk1OX0.us8ZDLkkp2W8eygVu_nKJqPUZKcBcc9Q66_L9RtWObc"

// TOKEN DANIELE:
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MWI3OTZkNzlhNTAwMTUwOTAyZWQiLCJpYXQiOjE2NjM1NzI4NTcsImV4cCI6MTY2NDc4MjQ1N30.j_4RiP8WxrixXsZ5dbWKH8rj-w44Os-v5Mxa_rlKoHU"

export const setMeAction = () => {
  return async (dispatch, getState) => {
    try {
        dispatch( setLoaderAction(true)) 
      const response = await fetch(URL + "/profile/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: SET_ME,
          payload: data,
        });
        dispatch(getMyLastCommentsAction(data._id));
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const setLoaderAction = (val) => ({
  type: SET_LOADER,
  payload: val,
});

export const setLoaderCommentsAction = (val) => ({
    type: SET_LOADER_COMMENTS,
    payload: val,
  });

export const getUserByIdAction = (userId) => {
  return async (dispatch, getState) => {
    try {
       dispatch( setLoaderAction(true)) 
      const response = await fetch(URL + "/profile/" + userId, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: SET_ME,
          payload: data,
        });
        dispatch(getMyLastCommentsAction(data._id));
        console.log(data);
      }
    } catch (err) {
      console.log(err);
      dispatch( setLoaderAction(false)) 
    }
  };
};

export const updateMeAction = (user) => {
  return async (dispatch, getState) => {
    try {
        dispatch( setLoaderAction(true)) 
      console.log(user);
      const response = await fetch(URL + "/profile/", {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: UPDATE_ME,
          payload: data,
        });
        dispatch( setLoaderAction(false)) 
        console.log(data);
      }
    } catch (err) {
      console.log(err);
      dispatch( setLoaderAction(false)) 
    }
  };
};

export const getAllUsersAction = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(URL + "/profile/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: GET_ALL_USERS,
          payload: data,
        });
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const getAllCommentsAction = () => {
  return async (dispatch, getState) => {
    try {
        dispatch( setLoaderCommentsAction(true)) 
      const response = await fetch(URL + "/posts/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      if (response.ok) {
        let data = await response.json();
        data = data.slice(-20, data.length);
        data = data.reverse();
        dispatch({
          type: GET_ALL_COMMENTS,
          payload: data,
        });
        dispatch( setLoaderCommentsAction(false)) 
        console.log(data);
      }
    } catch (err) {
      console.log(err);
      dispatch( setLoaderCommentsAction(false)) 
    }
  };
};

export const getMyLastCommentsAction = (userId) => {
  return async (dispatch, getState) => {
    try {
        dispatch( setLoaderAction(true)) 
      const response = await fetch(URL + "/posts/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      if (response.ok) {
        let data = await response.json();
        data = data.slice(-50, data.length);
        data = data.reverse();
        data = data.filter((comment) => comment.user._id === userId);
        data = data.slice(0, 5);
        dispatch({
          type: SET_MY_LAST_COMMENTS,
          payload: data,
        });
        console.log(data);
        dispatch( setLoaderAction(false)) 
      }
    } catch (err) {
        dispatch( setLoaderAction(false)) 
      console.log(err);
    }
  };
};

export const getCommentsByIdAction = (postId) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(URL + "/posts/" + postId, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: SET_COMMENT_BY_ID,
          payload: data,
        });
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const getAllExperiencesAction = (userId) => {
  return async (dispatch, getState) => {
    try {
      console.log(userId);
      const response = await fetch(
        URL + "/profile/" + userId + "/experiences",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );

      if (response.ok) {
        let data = await response.json();
        console.log(data);
        dispatch({
          type: GET_ALL_EXPERIENCES,
          payload: data,
        });
      }
    } catch (err) {
        dispatch( setLoaderAction(false)) 
      console.log(err);
    }
  };
};

export const getExperienceAction = (userId, expId) => {
  return async (dispatch, getState) => {
    try {
         
      console.log(userId);
      const response = await fetch(
        URL + "/profile/" + userId + "/experiences/" + expId,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );

      if (response.ok) {
        let data = await response.json();
        console.log(data);
        dispatch({
          type: GET_EXPERIENCE,
          payload: data,
        });
        
      }
    } catch (err) {
        dispatch( setLoaderAction(false)) 
      console.log(err);
    }
  };
};

export const postNewExperiencesAction = (userId, experience, file) => {
  return async (dispatch, getState) => {
    try {
        dispatch( setLoaderAction(true)) 
      console.log(userId);
      const response = await fetch(
        URL + "/profile/" + userId + "/experiences",
        {
          method: "POST",
          body: JSON.stringify(experience),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );

      if (response.ok) {
        let data = await response.json();
        console.log(data);
        if (file) {
          let formData = new FormData();
          formData.append("experience", file);
          try {
            let response2 = await fetch(
              URL +
                "/profile/" +
                userId +
                "/experiences/" +
                data._id +
                "/picture",
              {
                method: "POST",
                body: formData,
                headers: {
                  Authorization: `Bearer ${TOKEN}`,
                },
              }
            );

            if (response2.ok) {
              dispatch(getAllExperiencesAction(userId));
              dispatch( setLoaderAction(false)) 
            }
          } catch (e) {}
        } else {
          dispatch(getAllExperiencesAction(userId));
          dispatch( setLoaderAction(false)) 
        }
      }
    } catch (err) {
        dispatch( setLoaderAction(false)) 
      console.log(err);
    }
  };
};

export const delteteExperienceAction = (userId, expId) => {
  return async (dispatch, getState) => {
    try {
        dispatch( setLoaderAction(true)) 
      const response = await fetch(
        URL + "/profile/" + userId + "/experiences/" + expId,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );

      if (response.ok) {
        console.log("eliminata");
        dispatch(getAllExperiencesAction(userId));
        dispatch( setLoaderAction(false)) 
      }
    } catch (err) {
        dispatch( setLoaderAction(false)) 
      console.log(err);
    }
  };
};

export const putExperienceAction = (userId, expId, experience) => {
  return async (dispatch, getState) => {
    try {
        dispatch( setLoaderAction(true)) 
      const response = await fetch(
        URL + "/profile/" + userId + "/experiences/" + expId,
        {
          method: "PUT",
          body: JSON.stringify(experience),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );

      if (response.ok) {
        let data = await response.json();
        console.log(data);
        dispatch(getAllExperiencesAction(userId));
        dispatch( setLoaderAction(false)) 
      }
    } catch (err) {
      console.log(err);
      dispatch( setLoaderAction(false)) 
    }
  };
};

export const postNews = (post, file) => {
  return async (dispatch, getState) => {
    try {
        dispatch( setLoaderCommentsAction(true)) 
      let response = await fetch(URL + "/posts/", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      if (response.ok) {
        let data = await response.json();
        console.log(data);
        if (file) {
          let formData = new FormData();
          formData.append("post", file);
          try {
            let response2 = await fetch(URL + "/posts/" + data._id, {
              method: "POST",
              body: formData,
              headers: {
                Authorization: `Bearer ${TOKEN}`,
              },
            });

            if (response2.ok) {
              dispatch(getAllCommentsAction());
            }
          } catch (e) {}
        } else {
          dispatch(getAllCommentsAction());
        }
      }
    } catch (err) {
        dispatch( setLoaderCommentsAction(false)) 
    }
  };
};

export const deleteNews = (postId) => {
  return async (dispatch, getState) => {
    try {
        dispatch( setLoaderCommentsAction(true)) 
      let response = await fetch(URL + "/posts/" + postId, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      if (response.ok) {
        dispatch(getAllCommentsAction());
        dispatch(getCommentsByIdAction(postId));
      }
    } catch (err) {
      console.log(err);
      dispatch( setLoaderCommentsAction(false)) 
    }
  };
};

export const getNewsById = (postId) => {
  return async (dispatch, getState) => {
    try {
        dispatch( setLoaderAction(true)) 
      let response = await fetch(URL + "/posts/" + postId, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      if (response.ok) {
        let data = await response.json();
        console.log(data);
        dispatch({
          type: SET_COMMENT_BY_ID,
          payload: data,
        });
        dispatch( setLoaderAction(false)) 
      }
    } catch (err) {
        dispatch( setLoaderAction(false)) 
    }
  };
};
export const PutNews = (postId, post, file) => {
  return async (dispatch, getState) => {
    try {
        dispatch( setLoaderCommentsAction(true)) 
      let response = await fetch(URL + "/posts/" + postId, {
        method: "PUT",
        body: JSON.stringify(post),
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      if (response.ok) {
        if (file) {
          let formData = new FormData();
          formData.append("post", file);
          try {
            let response2 = await fetch(URL + "/posts/" + postId, {
              method: "POST",
              body: formData,
              headers: {
                Authorization: `Bearer ${TOKEN}`,
              },
            });

            if (response2.ok) {
              dispatch(getAllCommentsAction());
              dispatch(getCommentsByIdAction(postId));
            }
          } catch (e) {}
        } else {
          dispatch(getAllCommentsAction());
          dispatch(getCommentsByIdAction(postId));
        }
      }
    } catch (err) {
        dispatch( setLoaderCommentsAction(false)) 
    }
  };
};

export const setLightAction = () => ({
  type: SET_LIGHT_THEME,
  payload: true,
});

export const setDarkAction = () => ({
  type: SET_DARK_THEME,
  payload: false,
});

export const setExpIdAction = (expId) => ({
  type: SET_EXP_ID,
  payload: expId,
});
