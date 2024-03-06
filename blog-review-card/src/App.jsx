import './App.scss'
import Banner from './assets/images/illustration-article.svg'
import Avatar from './assets/images/image-avatar.webp'
function App() {
  return (
    <>
        <main>
            <div className="window">
              <img className='banner' src={Banner}/>
              <div className='content'>
                <div className='categories'>
                  Learning
                </div>
                <div className='dates'>
                  Published 21 Dec 2023
                </div>
                <div className='title'>
                  HTML & CSS foundations
                </div>
                <div className='description'>
                  These languages are the backbone of every website, defining structure, content, and presentation.
                </div>
              </div>
              <div className='author'>
                  <img src={Avatar}/>
                  <div className='author_name'>
                    Greg Hooper
                  </div>
              </div>
            </div>
        </main>
    </>
  )
}

export default App
