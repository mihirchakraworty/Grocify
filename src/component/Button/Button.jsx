function Button(pros) {
    return(
        <div className="px-5 py-3 inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 ">
            <button >{pros.content}</button>
        </div>
    )
}
export default Button 