import Image from "next/image"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="hidden md:flex">
        <Image src="/search.png" alt="Search" width={14} height={14} />
        <input type="text" placeholder="Search..." />
      </div>

      <div className="flex items-center gap-6">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="Messages" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" alt="Messages" width={20} height={20} />
          <div className="absolute top-3 right-3 w-5 h-5 flex items-center justify-center bg-purple-300 text-white rounded-full text-xs"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Kahfi</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image src="/avatar.png" alt="" width={30} height={30} className="rounded-full" />
      </div>
    </div>
  )
}

export default Navbar