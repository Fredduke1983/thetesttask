import { useRef } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { PostUser } from "./components/PostUser/PostUser";
import { UsersSection } from "./components/UsersSection/UsersSection";

function App() {
  const usersSectionRef = useRef(null);
  const registrationSectionRef = useRef(null);

  return (
    <>
      <Header
        scrollToUsers={() =>
          usersSectionRef.current.scrollIntoView({ behavior: "smooth" })
        }
        scrollToRegistration={() =>
          registrationSectionRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />
      <Hero
        scrollToRegistration={() =>
          registrationSectionRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />
      <div ref={usersSectionRef}>
        <UsersSection />
      </div>
      <div ref={registrationSectionRef}>
        <PostUser />
      </div>
    </>
  );
}

export default App;
