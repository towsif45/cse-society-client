import { Route, Routes } from "react-router-dom";
import AppBody from "./components/AppBody/AppBody";
import Feed from "./components/Feed/Feed";
import NavBar from "./components/NavBar/NavBar";
import ProfilePage from "./components/Profile/ProfilePage";
import SearchResult from "./components/SearchResult/SearchResult";
import SignIn from "./components/SignIn/SignInPage";
import CreatePollPage from "./components/Voting/Admin/CreatePollPage";
import ManagePollPage from "./components/Voting/Admin/ManagePollPage";
import PollEventPage from "./components/Voting/User/PollEventPage";


const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/" element={<><NavBar /> <AppBody component={<Feed />} /></>} />
        <Route exact path="/polls" element={<><NavBar /> <AppBody component={<PollEventPage />} /></>} />
        <Route exact path="/create-poll" element={<><NavBar /> <AppBody component={<CreatePollPage />} /></>} />
        <Route exact path="/manage-poll" element={<><NavBar /> <AppBody component={<ManagePollPage />} /></>} />
        <Route exact path="/search-result" element={<> <NavBar /> <AppBody component={<SearchResult />} /></>} />
        <Route exact path="/profile" element={<> <NavBar /> <AppBody component={<ProfilePage />} /></>} />
      </Routes>

    </>
  );
};

export default App;