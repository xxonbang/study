import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import User from "./models/User";
import {
  githubLoginCallback,
  facebookLoginCallback
} from "./controllers/userController";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`
    },
    githubLoginCallback
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FB_ID,
      clientSecret: process.env.FB_SECRET,
      callbackURL: `http://localhost:4000${routes.facebookCallback}`,
      profileFields: ["id", "displayName", "photos", "email"],
      scope: ["public_profile", "email"]
    },
    facebookLoginCallback
  )
);

// 아래의 코드가 강사 코드와 동일한 코드이나, 이 코드를 쓸 경우 Social Login 이 안됨. 이유는 모르겠음
// 그래서 해당 강의 영상 코멘트에 누가 해당 질문한 것에 대해서 강사가 아래 주석처리 된 코드로 바꿔보라 해답을 줌
// 그렇게 하면 Social Login 기능은 작동 하나, 문제는 그 외에 Video 및 User Model Schema 관련 된 로직에서 에러가 발생 (ex, req.user.save(); 기능 안됨 등..)
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// passport.serializeUser((user, done) => done(null, user));
// passport.deserializeUser((user, done) => done(null, user));