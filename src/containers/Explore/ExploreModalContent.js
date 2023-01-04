import React, { useEffect, useState } from "react"
import { resources } from "../../resource"
import { GetPostDetails } from "../../api/PostAPI"
import avator from "../../assets/images/avatars/blank-profile.webp"
import ExploreModalContentLoader from '../../components/UI/ExploreModalContentLoader/ExploreModalContentLoader'
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css";

import ShareInput from "../../components/UI/ShareInput/ShareInput"

import { FiHeart, FiShare2 } from 'react-icons/fi';

const ExplorerModalContent = (props) => {

    const [post, setPost] = useState(null)
    const [isLoding, setIsLoading] = useState(true)
    const [isShareBoxActive, setShareBoxActive] = useState(false)

    useEffect(() => {

        if (props.onPostId) {
            setShareBoxActive(false)
            setIsLoading(true)

            const controller = new AbortController()
            let mounted = true;

            GetPostDetails({ signal: controller.signal, id: props.onPostId })
                .then(response => {
                    if (response.isSuccess && mounted) {
                        setPost(response.entity)
                        setTimeout(() => {
                            setIsLoading(false)
                        }, 500);
                    }
                })

            return () => {
                mounted = false
                controller.abort()
            }
        }
    }, [props.onPostId])


    const addHeartHandler = (event) => {
        event.preventDefault()
        if (event.currentTarget.children[0].children[0].classList.toString().indexOf('heart-active')!==-1)
            event.currentTarget.children[0].children[0].classList.remove('heart-active')
        else
            event.currentTarget.children[0].children[0].classList.add('heart-active')
    }

    const toShareHandler = () => {
        setShareBoxActive(!isShareBoxActive)
    }

    const responsive = {
        0: { items: 1 }
    };

    const modalContent = {
        false:
            <>
                <div className="story-modal-media">

                    {(post?.images) ? (<AliceCarousel rtl={true}
                        disableButtonsControls
                        autoWidth={false}
                        autoPlay={false}
                        responsive={responsive}>
                        {post?.images.map((item, index) => {
                            return <img key={index} src={item} alt="" className="inset-0 h-35  object-cover w-full" />
                        })}
                    </AliceCarousel>) : null}
                </div>
                <div className="flex-1 bg-white dark:bg-gray-900 dark:text-gray-100">
                    <div className="border-b flex items-center justify-between px-5 py-3 dark:border-gray-600">
                        <div className="flex flex-1 items-center space-x-4">
                            <a href="#">
                                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">
                                    <img src={post?.userimage ?? avator} loading="lazy" className="bg-gray-200 border border-white rounded-full w-8 h-8" />
                                </div>
                            </a>
                            <span className="block text-lg font-semibold"> {post?.userfullname} </span>
                        </div>

                    </div>
                    <div className="story-content p-4" data-simplebar="init"><div className="simplebar-wrapper" style={{ margin: "-16px" }}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer"></div></div><div className="simplebar-mask">
                        <div className="simplebar-offset" style={{ bottom: "0px" }}>
                            <div className="simplebar-content" style={{ padding: "16px", height: "100%", overflow: "hidden" }} >

                                <p> {post?.description} </p>

                                <div className="py-4 ">
                                    <div className="flex justify-around">

                                        <button onClick={(event) => addHeartHandler(event)} className="flex items-center space-x-3">
                                            <div className="flex font-bold items-baseline">
                                                <FiHeart className="heart" />
                                                <span>&nbsp;</span>{resources.EXPLORE.LIKE}</div>
                                        </button>


                                        <button onClick={toShareHandler} className="flex items-center space-x-3">
                                            <div className="flex font-bold items-baseline">
                                                <FiShare2 className="share" />
                                                <span>&nbsp;</span>{resources.EXPLORE.SHARE}</div>
                                            <ShareInput onActive={isShareBoxActive} />
                                        </button>
                                    </div>
                                    <hr className="-mx-4 my-3" />
                                    <div className="flex items-center space-x-3">
                                        <div className="flex items-center">
                                            {
                                                post?.likes ?
                                                    post?.likes.map((item, index) => {
                                                        return <img key={index} src={item.userimage ?? avator} loading="lazy" alt=""
                                                            className={index === 0 ? 'w-6 h-6 rounded-full border-2 border-white' :
                                                                'w-6 h-6 rounded-full border-2 border-white -mr-2'} />
                                                    }) : null
                                            }
                                        </div>
                                        <div>
                                            {resources.EXPLORE.LIKE}
                                            {
                                                post?.likes ?
                                                    post?.likes.map((item, index) => {
                                                        return (<React.Fragment key={index}><strong> {item.fullname}</strong> <strong> و </strong>
                                                            {post?.likes.length - 1 !== index ? null : <strong>{post?.numberoflike - post?.likes.length} {resources.EXPLORE.PEOPLE} {resources.EXPLORE.OTHER}</strong>} </React.Fragment>)
                                                    }) : <strong>{post?.numberoflike} {resources.EXPLORE.PEOPLE} </strong>
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="-mt-1 space-y-1">
                                    {
                                        post?.lastcomments ?
                                            (post?.lastcomments.map((item, index) => {
                                                return (
                                                    <div key={index} className="flex flex-1 items-center space-x-2">
                                                        <img src={item.userimage ?? avator} alt={item.fullname} loading="lazy" className="rounded-full w-8 h-8" />
                                                        <div className="flex-1 p-2">
                                                            {item.message}
                                                        </div>
                                                    </div>
                                                )
                                            })) : null
                                    }
                                </div>

                            </div></div></div>
                        <div className="simplebar-placeholder" style={{ width: "330px", height: "343px" }} ></div></div><div className="simplebar-track simplebar-horizontal" style={{ visibility: "hidden" }}><div className="simplebar-scrollbar" style={{ transform: "translate3d(0px, 0px, 0px)", visibility: "hidden" }}></div></div><div className="simplebar-track simplebar-vertical" style={{ visibility: "visible" }}><div className="simplebar-scrollbar" style={{ transform: "translate3d(0px, 0px, 0px)", visibility: "visible", height: "142px" }}></div></div></div>
                    <div className="p-3 border-t dark:border-gray-600">
                        <div className="bg-gray-200 dark:bg-gray-700 rounded-full rounded-md relative">
                            <textarea autoComplete="off" type="text" placeholder={resources.EXPLORE.ADDEDCOMMENT} className="bg-transparent max-h-8 shadow-none input-comment" />
                            <div className="absolute bottom-0 flex h-full items-center left-0 left-3 text-xl space-x-2">
                                <a href="#"> <i className="uil-message"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </>,
        true: <ExploreModalContentLoader nightMode={props.nightMode} />
    }

    return (modalContent[isLoding])
}

export default ExplorerModalContent