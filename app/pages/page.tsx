// import Achievements from "../components/Achievements";
import GitHubContributions from "../components/GitHubContributions";
import Introduce from "../components/Introduce";
import Journey from "../components/Journey";
import LetsBuild from "../components/LetsBuild";
import Projects from "../components/Projects";
import Tech from "../components/Tech";

const MainComponents = () => {
  return (
    <main className="max-w-4xl mx-auto p-6 lg:p-8 bg-background text-foreground">
      <Introduce />
      <Journey />
      <Tech />
      <Projects />
      {/* <Achievements /> */}
      <GitHubContributions />
      <LetsBuild />
    </main>
  );
};

export default MainComponents;
