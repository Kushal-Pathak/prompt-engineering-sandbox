import Header from "./components/Header";
import ChatArea from "./components/ChatArea";
import PromptArea from "./components/PromptArea";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex h-screen justify-center bg-gray-700">
      <div className="flex flex-col xsm:w-full sm:w-[80%] md:w-[60%] lg:w-[55%] bg-gray-800 text-white">
        {/* Header */}
        <Header />

        <div className="border"></div>

        {/* Chat Messages */}
        <ChatArea />

        {/* Input Section */}
        <PromptArea />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
