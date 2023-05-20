import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { auth } from "../../shared/firebase";

const Login: React.FC = () => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const google = () => {
    signInWithPopup(auth, googleProvider)
    // .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // The signed-in user info.
    // const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    // console.log(credential)
    // }).catch((error) => {
    // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // The email of the user's account used.
    // const email = error.customData.email;
    // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    // });
  }

  const github = () => {
    signInWithPopup(auth, githubProvider)
    // .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // The signed-in user info.
    // const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    // console.log(credential)
    // }).catch((error) => {
    // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // The email of the user's account used.
    // const email = error.customData.email;
    // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    // });
  };

  return (
    <div className="login">
      <div className="login__wrapper">
        <h1 className="login__title">Виберіть спосіб входу</h1>
        <div className="login__button login__google" onClick={google}>
          <img src="/login/google.png" alt="" className="login__icon" />
          Google
        </div>
        <div className="login__button login__github" onClick={github}>
          <img src="/login/github.png" alt="" className="login__icon" />
          Github
        </div>
      </div>
    </div>
  );
}

export default Login;