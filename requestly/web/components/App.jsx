import { SignedInOrRedirect, SignedOut, SignedOutOrRedirect, Provider, SignedIn, useSignOut, useUser } from "@gadgetinc/react";
import { Suspense, useEffect } from "react";
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useNavigate, Link } from "react-router";
import { api } from "../api";
import Index from "../routes/index";
import SignedInPage from "../routes/signed-in";
import SignInPage from "../routes/sign-in";
import SignUpPage from "../routes/sign-up";
import ResetPasswordPage from "../routes/reset-password";
import VerifyEmailPage from "../routes/verify-email";
import ChangePassword from "../routes/change-password";
import ForgotPassword from "../routes/forgot-password";
import ListingsPage from "../routes/listings";
import CreateListing from "../routes/create-listing";
import "./App.css";



const App = () => {
  useEffect(() => {
    document.title = `${process.env.GADGET_APP}`;
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <SignedOutOrRedirect>
              <Index />
            </SignedOutOrRedirect>
          }
        />
        <Route
          path="signed-in"
          element={
            <SignedInOrRedirect>
              <SignedInPage />
            </SignedInOrRedirect>
          }
        />
        <Route
          path="change-password"
          element={
            <SignedInOrRedirect>
              <ChangePassword />
            </SignedInOrRedirect>
          }
        />
        <Route
          path="forgot-password"
          element={
            <SignedOutOrRedirect>
              <ForgotPassword />
            </SignedOutOrRedirect>
          }
        />
        <Route
          path="sign-in"
          element={
            <SignedOutOrRedirect>
              <SignInPage />
            </SignedOutOrRedirect>
          }
        />
        <Route
          path="sign-up"
          element={
            <SignedOutOrRedirect>
              <SignUpPage />
            </SignedOutOrRedirect>
          }
        />
        <Route
          path="reset-password"
          element={
            <ResetPasswordPage />
          }
        />
        <Route
          path="verify-email"
          element={
            <VerifyEmailPage />
          }
        />
        <Route
          path="listings"
          element={
            <SignedInOrRedirect>
              <ListingsPage />
            </SignedInOrRedirect>
          }
        />
        <Route
          path="create-listing"
          element={
            <SignedInOrRedirect>
              <CreateListing />
            </SignedInOrRedirect>
          }
        />
      </Route>
    )
  );

  return (
    <Suspense fallback={<></>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

const Layout = () => {
  const navigate = useNavigate();

  return (
    <Provider api={api} navigate={navigate} auth={window.gadgetConfig.authentication}>
      <Header />
      <div className="app">
        <div className="app-content">
          <div className="main">
            <Outlet />
          </div>
        </div>
      </div>
    </Provider>
  );
};

const Header = () => {
  const user = useUser(api);
  const signOut = useSignOut();
 

  return (
    <div className="header">
      <a href="/" target="_self" rel="noreferrer" style={{ textDecoration: "none" }}>
        <div className="logo">{process.env.GADGET_APP}</div>
      </a>
      <div className="header-content">
        <SignedOut>
            <Link class = "preHeader-Contentin" to="/sign-in" style={{ color: "black" }}>Sign In</Link>
            <Link class = "preHeader-Contentup" to="/sign-up" style={{ color: "white" }}>Sign Up</Link>
        </SignedOut>
        <SignedIn>
          <div class="header-dropdown">
            <button class="header-dropbut">
              <div class = "header-dropbut-hr">
                <hr></hr>
                <hr></hr>
                <hr></hr>
              </div>
            </button>
            <div class="header-dropdown-content">
              <Link class="dropdown-item" to="/listings">Listings</Link>
              <Link class="dropdown-item" to="/create-listing">Create Listing</Link>
              <Link class="dropdown-item" to="/change-password">Change Password</Link>
              <button class="dropdown-item" onClick={() => signOut({ redirectOnSuccess: true, redirectToPath: "/" })}>
                Sign Out
              </button>
            </div>
          </div>
        </SignedIn>
      </div>
    </div>
  );
};

export default App;
