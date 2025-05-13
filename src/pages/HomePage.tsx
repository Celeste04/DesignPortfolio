import HomeSection from '../components/HomeSection';
import Work from '../components/Work';
import BottomNav from '../components/BottomNav';

function HomePage() {
  return (
    <div className="w-full flex mt-10 flex-col justify-center">
      <HomeSection/>
      <Work />
      <BottomNav></BottomNav>
    </div>
  );
}

export default HomePage;