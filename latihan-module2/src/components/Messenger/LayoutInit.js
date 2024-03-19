import ChapterOne from "./ChapterOne";
import Footers from "./Footers";
import Header from "./Header"


const LayoutInit = ({ children }) => {
  return (
    <div className="">
      <div className="">
        <div className="">
        <Header/>
        <ChapterOne/>
        <Footers/>

        </div>
      </div>
    </div>
  );
};

export default LayoutInit;
