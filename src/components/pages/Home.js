import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase-config";


function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);

  
  return (
    <div className=" py-5">
      {postLists.map((post) => {
        return (
          <div className=" m-10 text-center bg-slate-300 py-10">
            <div className=" pb-3">
              <div className=" my-5">
                <h1 className=" text-2xl"> {post.title}</h1>
              </div>
            </div>
            <div className="py-5"> {post.postText} </div>
            <div className="pb-3 m-5">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button className=" bg-red-500 rounded-full p-3"
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    Delete
                  </button>
                )}
              </div>
            <h3>@{post.author.name}</h3>
          </div>
          
        );
      })}
    </div>
  );
}

export default Home;