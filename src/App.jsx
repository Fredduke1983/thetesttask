import "./App.css";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { PostUser } from "./components/PostUser/PostUser";
import { UsersSection } from "./components/UsersSection/UsersSection";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <UsersSection />
      <PostUser />
    </>
  );
}

export default App;
