export default function CloseModal({onClose}){
    return   <div className="absolute right-3 top-3 text-gray-300/80 rounded-full cursor-pointer hover:text-gray-100/80 bg-black/70" onClick={onClose} >
                       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z"/></svg>
                    </div>
}