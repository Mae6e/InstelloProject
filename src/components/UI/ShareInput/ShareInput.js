
import './shareinput.css'
import {BsFacebook, BsTelegram} from 'react-icons/bs'
import {SiYoutubemusic} from 'react-icons/si'
import {AiFillTwitterCircle} from 'react-icons/ai'

const ShareInput = (props) => {

    const classList = ['c-share']
    if(props.onActive) classList.push('c-share-active')

    const url =''

    const openUrlHandler=(data)=>{
        window.open(data, '_blank', 'noreferrer')
    }

    return <div className={classList.join(' ')} >    
      <ul className="c-share_options" data-title="Share">
        <li onClick={()=>openUrlHandler(`https://facebook.com/intent/tweet?&url=${url}`)}><BsFacebook className='facebook'/></li>
        <li onClick={()=>openUrlHandler(`https://youtube.com/intent/tweet?&url=${url}`)}><SiYoutubemusic className='youtube' /></li>
        <li onClick={()=>openUrlHandler(`https://twitter.com/intent/tweet?&url=${url}`)}><AiFillTwitterCircle className='twitter' /></li>
        <li onClick={()=>openUrlHandler(`https://telegram.com/intent/tweet?&url=${url}`)}><BsTelegram className='telegram'/></li>
      </ul>
    </div>
   
}

export default ShareInput