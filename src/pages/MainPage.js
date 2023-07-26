// Components
import ImageCard from "../Components/ImageCard";
import FeaturesCard from "../Components/FeaturesCard";
function MainPage() {
  return (
    <div className="App w-screen lg:h-screen flex lg:justify-center lg:items-center">
      <main className="w-full lg:lg:w-[928px] lg:rounded-3xl flex flex-col lg:flex-row-reverse">
        <ImageCard />
        <FeaturesCard />
      </main>
    </div>
  );
}

export default MainPage;
