
const Modal = ()=>{
    return(
    <div id="story-modal" className="uk-modal-container uk-modal uk-open" uk-modal="" style={{display:"block"}}>
    <div className="uk-modal-dialog story-modal">
        <button className="uk-modal-close-default lg:-mt-9 lg:-mr-9 -mt-5 -mr-5 shadow-lg bg-white rounded-full p-4 transition dark:bg-gray-600 dark:text-white uk-icon uk-close" type="button" uk-close=""><svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" data-svg="close-icon"><line fill="none" stroke="#000" strokeWidth="1.1" x1="1" y1="1" x2="13" y2="13"></line><line fill="none" stroke="#000" strokeWidth="1.1" x1="13" y1="1" x2="1" y2="13"></line></svg></button>

            <div className="story-modal-media">
                <img src="https://i.ibb.co/PT7zGST/avatar-2.jpg" width={100} height={100} alt="" className="inset-0 h-full w-full object-cover" />
            </div>
            <div className="flex-1 bg-white dark:bg-gray-900 dark:text-gray-100">
                <div className="border-b flex items-center justify-between px-5 py-3 dark:border-gray-600">
                    <div className="flex flex-1 items-center space-x-4">
                        <a href="#">
                            <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">
                                <img src="https://i.ibb.co/PT7zGST/avatar-2.jpg" className="bg-gray-200 border border-white rounded-full w-8 h-8" />
                            </div>
                        </a>
                        <span className="block text-lg font-semibold"> Johnson smith </span>
                    </div>
                    <a href="#"> 
                        <i className="icon-feather-more-horizontal text-2xl rounded-full p-2 transition -ml-1"></i>
                    </a>
                </div>
                <div className="story-content p-4" data-simplebar="init"><div className="simplebar-wrapper" style={{margin:"-16px"}}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer"></div></div><div className="simplebar-mask"><div className="simplebar-offset" style={{left: "-17px", bottom:"0px"}}>
                    <div className="simplebar-content" style={{padding:"16px", height:"100%", overflow:"hidden scroll"}} >

                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
                    
                    <div className="py-4 ">
                        <div className="flex justify-around">
                            <a href="#" className="flex items-center space-x-3">
                                <div className="flex font-bold items-baseline"> <i className="uil-heart ml-1"> </i> Like</div>
                            </a>
                            <a href="#" className="flex items-center space-x-3">
                                <div className="flex font-bold items-baseline"> <i className="uil-heart ml-1"> </i> Comment</div>
                            </a>
                            <a href="#" className="flex items-center space-x-3">
                                <div className="flex font-bold items-baseline"> <i className="uil-heart ml-1"> </i> Share</div>
                            </a>
                        </div>
                        <hr className="-mx-4 my-3" />
                        <div className="flex items-center space-x-3"> 
                            <div className="flex items-center">
                                <img src="https://i.ibb.co/PT7zGST/avatar-1.jpg" alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                                <img src="https://i.ibb.co/PT7zGST/avatar-4.jpg" alt="" className="w-6 h-6 rounded-full border-2 border-white -mr-2" />
                                <img src="https://i.ibb.co/PT7zGST/avatar-2.jpg" alt="" className="w-6 h-6 rounded-full border-2 border-white -mr-2" />
                            </div>
                            <div>
                                Liked <strong> Johnson</strong> and <strong> 209 Others </strong>
                            </div>
                        </div>
                    </div>

                <div className="-mt-1 space-y-1">
                    <div className="flex flex-1 items-center space-x-2">
                        <img src="https://i.ibb.co/PT7zGST/avatar-2.jpg" className="rounded-full w-8 h-8" />
                        <div className="flex-1 p-2">
                            consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        </div>
                    </div>

                    <div className="flex flex-1 items-center space-x-2">
                        <img src="https://i.ibb.co/PT7zGST/avatar-4.jpg" className="rounded-full w-8 h-8" />
                        <div className="flex-1 p-2">
                            consectetuer adipiscing elit
                        </div>
                    </div>

                </div>


                </div></div></div><div className="simplebar-placeholder" style={{width:"330px", height:"343px"}} ></div></div><div className="simplebar-track simplebar-horizontal" style={{visibility:"hidden"}}><div className="simplebar-scrollbar" style={{transform: "translate3d(0px, 0px, 0px)", visibility:"hidden"}}></div></div><div className="simplebar-track simplebar-vertical" style={{visibility:"visible"}}><div className="simplebar-scrollbar" style={{transform:"translate3d(0px, 0px, 0px)" , visibility:"visible", height:"142px"}}></div></div></div>
                <div className="p-3 border-t dark:border-gray-600">
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-full rounded-md relative">
                        <input type="text" placeholder="Add your Comment.." className="bg-transparent max-h-8 shadow-none" />
                        <div className="absolute bottom-0 flex h-full items-center left-0 left-3 text-xl space-x-2">
                            <a href="#"> <i className="uil-image"></i></a>
                            <a href="#"> <i className="uil-video"></i></a>
                        </div>
                    </div>
                </div>

            </div>

    </div>
</div>)
}
export default Modal