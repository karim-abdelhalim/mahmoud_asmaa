import Countdown from "./components/countdown";
import Details from "./components/details";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Hero from "./components/hero";
import Message from "./components/message";
import Navbar from "./components/navbar";
import Story from "./components/story";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Details />
      <Countdown />
      <Story />
      <Gallery />
      <Message />
      <Footer />
    </main>
  );
}
