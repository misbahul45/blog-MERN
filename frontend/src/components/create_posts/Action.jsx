
import { MdEmojiEmotions,MdEditLocation,MdInsertLink } from "react-icons/md";
import { FaRegImages } from "react-icons/fa6";
const Action = () => {
  return (
    <div className="flex gap-2">
        <button type="button" className="lg:text-2xl text-slate-200 hover:scale-110 hover:text-cyan-400 transition-all duration-300">
            <MdEmojiEmotions />
        </button>
        <button type="button" className="lg:text-2xl text-slate-200 hover:scale-110 hover:text-cyan-400 transition-all duration-300">
            <FaRegImages />
        </button>
        <button type="button" className="lg:text-2xl text-slate-200 hover:scale-110 hover:text-cyan-400 transition-all duration-300">
            <MdEditLocation />
        </button>  
        <button type="button" className="lg:text-2xl text-slate-200 hover:scale-110 hover:text-cyan-400 transition-all duration-300">
            <MdInsertLink />
        </button>
    </div>
  )
}

export default Action
