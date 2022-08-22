import React, { useState } from "react";
import {
    FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

const SocialLogin = () => {
  const [user, setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };
  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };
  

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.error("error", error);
        setUser({});
      });
  };
  return (
    <div>
      {user.uid ? (
        <button onClick={handleSignout}>google signOut</button>
      ) : (
        <div>
          <button onClick={handleGoogleSignIn}>google sign in</button>
          <button onClick={handleGithubSignIn}>github Sign in</button>
          <button onClick={handleFacebookSignIn}>facebook Sign in</button>
        </div>
      )}
      <h2>Name:{user.displayName}</h2>
      <p>Email:{user.email}</p>
      <img src={user.photoURL} alt="profile" />
    </div>
  );
};

export default SocialLogin;
