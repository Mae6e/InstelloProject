import React, { useEffect } from "react"
import { useState } from "react"
import { resources } from "../../resource"
import { ExplorerPosts, FavoriteTopic } from "../../api/PostAPI"
import GridContentLoader from "../../components/UI/GridContentLoader/GridContentLoader"
import GridContentWithHeaderLoader from "../../components/UI/GridContentLoader/GridContentWithHeaderLoader"
import InfiniteScroll from "react-infinite-scroll-component"

import ExplorerModalContent from "../../containers/Explore/ExploreModalContent"
import Modal from "../../components/UI/Modal/Modal"

import { FaComment, FaHeart } from 'react-icons/fa';

const Explore = (props) => {

    const [posts, setPosts] = useState([])
    const [favoriteTopics, setfavoriteTopic] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [hasMore, setHasMore] = useState(true)
    const [isShownModal, setIsShownModal] = useState(false)
    const [selectedPostId, setSelectedPostId] = useState(null)

    useEffect(() => {

        const controller = new AbortController()
        const exploreController = new AbortController()

        let mounted = true;
        let exploreMounted = true;

        FavoriteTopic({ signal: controller.signal }).then(response => {
            if (response.isSuccess && mounted) {
                setfavoriteTopic(response.entity)
            }
        })

        ExplorerPosts({ signal: exploreController.signal }).then(response => {
            if (response.isSuccess && exploreMounted) {
                setPosts(response.entity)
                setTimeout(() => {
                    setIsLoading(false)
                }, 500);
            }
        })

        return () => {
            controller.abort()
            exploreController.abort()

            exploreMounted = false
            mounted = false
        }

    }, [])

    const fetchMorePosts = () => {

        if (posts.length >= 60) {
            setHasMore(false)
            return
        }

        let isLoadPost = false;
        if (!isLoadPost) {
            isLoadPost = true
            setTimeout(() => {
                const exploreController = new AbortController()
                ExplorerPosts({ signal: exploreController.signal }).then(response => {
                    if (response.isSuccess) {
                        setPosts([...posts].concat(response.entity))
                        exploreController.abort()
                        isLoadPost = false
                    }
                })
            }, 200)
        }
    }

    const showModalHandler = (event, id) => {
        event.preventDefault()
        if (!isShownModal) {
            setSelectedPostId(id)
            setIsShownModal(true)
        }
    }

    const contentExplore = {
        false: posts.map((item, index) => (
            item.type === "video" ?
                <div key={index} onClick={(event) => showModalHandler(event, item.id)} className="lg:col-span-2 lg:row-span-2 ">
                    <div className="simple-animate bg-pink-400 h-full max-w-full overflow-hidden relative rounded-md uk-transition-toggle shadow-sm">
                        <span>
                            <img src={item.file} alt={item.title} loading="lazy" className="w-full h-full absolute object-cover inset-0 transform scale-125" />
                        </span>
                        <div className="absolut absolute bottom-0 p-6 space-y-2 text-white w-full custom-overly1 uk-light lg:block hidden">
                            <div className="flex flex-1 items-center space-x-2">
                                <a href="explore.html#" className="flex items-center">
                                    <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transform -rotate-2 hover:rotate-3 transition hover:scale-105 m-0.5 ml-2">
                                        <img src={item.userimage} alt={item.title} loading="lazy" className="bg-gray-200 border border-white rounded-full w-8" />
                                    </div>
                                    {item.fullname}
                                </a>
                                <div className="flex space-x-3">
                                    <a href="explore.html#" className="flex items-center">
                                        <FaHeart />&nbsp;{item.numberoflike}
                                    </a>
                                    <a href="explore.html#" className="flex items-center">
                                        <FaComment />&nbsp;{item.numberofcomment}
                                    </a>
                                </div>
                            </div>
                            <h1 className="font-bold text-3xl"> {item.title}</h1>
                            <p> {item.lastcomment}.. </p>
                        </div>
                    </div>
                </div> :
                <div key={index} onClick={(event) => showModalHandler(event, item.id)}  >
                    <div className="simple-animate bg-purple-400 max-w-full lg:h-64 h-40 rounded-md relative overflow-hidden shadow-sm">
                        <span>
                            <img src={item.file} alt={item.title} loading="lazy" className="w-full h-full absolute object-cover inset-0" />
                        </span>
                        <div className="absolut absolute bottom-0 flex items-center justify-between px-4 py-3 space-x-2 text-white w-full custom-overly1">
                            <a href="explore.html#" className="flex items-center">
                                {item.fullname}
                            </a>
                            <div className="flex space-x-3">
                                <a href="explore.html#" className="flex items-center">
                                    <FaHeart />&nbsp;{item.numberoflike} </a>
                                <a href="explore.html#" className="flex items-center">
                                    <FaComment />&nbsp;{item.numberofcomment} </a>
                            </div>
                        </div>
                    </div>
                </div>
        )),
        true: <GridContentWithHeaderLoader nightMode={props.nightMode} ></GridContentWithHeaderLoader>
    }

    return (
        <>
            {/* onClick={props.contentClick} */}
            <div className="container m-auto" >
                <h1 className="lg:lg:text-2xl text-lg text-lg font-extrabold leading-none text-gray-900 tracking-tight mt-3"> {resources.EXPLORE.TITLE} </h1>

                <div className="lg:m-0 flex justify-between items-center py-2 relative space-x-3 dark-tabs uk-sticky" uk-sticky="cls-active: bg-gray-100 bg-opacity-95; media : @m ; media @m">
                    <div className={isLoading ? 'w-full' : "flex overflow-x-scroll lg:overflow-hidden lg:pl-0 pl-5 space-x-3 lg:py-2"} >
                        {isLoading ? null : favoriteTopics.map((item, index) => (
                            <a key={index} href="explore.html#" className="bg-white py-2 px-4 rounded inline-block font-bold shadow"> {item.title}</a>
                        ))}
                    </div>
                </div><div className="uk-sticky-placeholder" hidden=""></div>
                <div className={isLoading ? 'w-full' : `grid lg:grid-cols-4 grid-cols-2 gap-2 hover:text-yellow-700 uk-link-reset`} >
                    {contentExplore[isLoading]}
                </div>
                <InfiniteScroll
                    dataLength={posts.length}
                    next={fetchMorePosts}
                    title=""
                    hasMore={hasMore}
                    style={{ display: "flex", flexDirection: "column-reverse" }}
                    loader={isLoading ? null : <div className="max-w-full"><GridContentLoader nightMode={props.nightMode} ></GridContentLoader></div>}
                    scrollableTarget="scrollableDiv" >
                </InfiniteScroll>
            </div>

            <Modal isShown={isShownModal} className='w-full' onClose={() => setIsShownModal(false)}>
                <ExplorerModalContent nightMode={props.nightMode} onPostId={selectedPostId} />
            </Modal>
        </>
    )
}

export default Explore