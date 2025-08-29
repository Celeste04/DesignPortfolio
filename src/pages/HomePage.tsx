import HomeSection from '../components/HomeSection';
import Work from '../components/Work';
import BottomNav from '../components/BottomNav';
import Stars from '../components/Stars';
import { useTheme } from '../context/ThemeContext';
type HomePageProps = {
  homeRef: React.RefObject<HTMLDivElement | null>;
  workRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
};

function HomePage({homeRef, workRef, contactRef}:HomePageProps) {
  const { theme } = useTheme();
  return (
    <div className="w-full sm:gap-20 flex mt-10 flex-col justify-center">
       {theme === "dark" && <Stars />}
      <HomeSection ref={homeRef}/>
      <Work ref={workRef}/>
      <BottomNav ref={contactRef}></BottomNav>
    </div>
  );
}

export default HomePage;