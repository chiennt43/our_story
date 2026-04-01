import { useState, useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'
import './App.css'
import boyImg from './assets/boy.jpg'
import girlImg from './assets/girl.jpg'
import backgroundHero from './assets/image.png'
import v1 from './assets/moments_1.mp4'
import v2 from './assets/moments_2.mp4'
import v3 from './assets/moments_3.mp4'
import v4 from './assets/moments_4.mp4'
import v5 from './assets/moments_5.mp4'
import v6 from './assets/moments_6.mp4'
import v7 from './assets/moments_7.mp4'
import v8 from './assets/moments_8.mp4'
import v9 from './assets/moments_9.mp4'
import v10 from './assets/moments_10.mp4'

function App() {
  const [hasStarted, setHasStarted] = useState(false)
  const [student1] = useState('Thi Chien')
  const [student2] = useState('Chi Huu')
  const [hearts, setHearts] = useState([])
  const [daysOfLove, setDaysOfLove] = useState(0)

  const videos = [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10]
  const firstVideoRef = useRef(null)

  useEffect(() => {
    // Calculate days of love
    const startDate = new Date('2016-04-03')
    const today = new Date()
    const diffTime = Math.abs(today - startDate)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    setDaysOfLove(diffDays)

    // Setup background hearts
    const heartCount = 15
    const newHearts = Array.from({ length: heartCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + 'vw',
      duration: 10 + Math.random() * 20 + 's',
      delay: Math.random() * 5 + 's',
      size: 15 + Math.random() * 20 + 'px'
    }))
    setHearts(newHearts)
  }, [])

  const handleStart = () => {
    setHasStarted(true)
    // Small delay to ensure the video element is unmounted/mounted or available
    setTimeout(() => {
      if (firstVideoRef.current) {
        firstVideoRef.current.play().catch(e => console.error("Autoplay failed:", e))
      }
    }, 100)
    
    // Initial celebration
    const heart = confetti.shapeFromPath({ path: 'M167 10c-33.74-33.47-88.32-33.19-121.78 0s-33.47 88.32 0 121.78l105.11 105.11a24.1 24.1 0 0 0 34.07 0l105.11-105.11c33.47-33.47 33.74-88.32 0-121.78s-88.32-33.47-121.78 0L167 43.11l-2.89-2.89z' })
    confetti({
      shapes: [heart],
      particleCount: 150,
      spread: 120,
      origin: { y: 0.6 },
      colors: ['#ff758c', '#ff7eb3', '#ac32e4']
    })
  }

  const handleCelebrate = () => {
    const heart = confetti.shapeFromPath({ path: 'M167 10c-33.74-33.47-88.32-33.19-121.78 0s-33.47 88.32 0 121.78l105.11 105.11a24.1 24.1 0 0 0 34.07 0l105.11-105.11c33.47-33.47 33.74-88.32 0-121.78s-88.32-33.47-121.78 0L167 43.11l-2.89-2.89z' })
    confetti({
      shapes: [heart],
      particleCount: 150,
      spread: 120,
      origin: { y: 0.6 },
      colors: ['#ff758c', '#ff7eb3', '#ac32e4']
    })
  }

  if (!hasStarted) {
    return (
      <div className="entrance-screen" style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(rgba(255,117,140,0.8), rgba(172, 50, 228, 0.8)), url(${backgroundHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '2rem'
      }}>
         <h1 style={{ fontSize: '3rem', marginBottom: '2rem', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>Our 10 Year Love Story ✨</h1>
         <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9 }}>3/4/2016 💕 3/4/2026</p>
         <button 
           onClick={handleStart}
           style={{
             padding: '20px 50px',
             fontSize: '1.5rem',
             background: 'white',
             color: '#ff758c',
             border: 'none',
             borderRadius: '50px',
             fontWeight: '800',
             cursor: 'pointer',
             boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
             transition: 'transform 0.3s ease',
             animation: 'pulse 2s infinite ease-in-out'
           }}
           onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
           onMouseOut={e => e.target.style.transform = 'scale(1)'}
         >
           Open Our Story ❤️
         </button>
         <style>{`
           @keyframes pulse {
             0%, 100% { transform: scale(1); }
             50% { transform: scale(1.1); }
           }
         `}</style>
      </div>
    )
  }

  return (
    <div className="app">
      {/* Background Image Layer */}
      <div className="main-background" style={{ 
        backgroundImage: `url(${backgroundHero})`
      }}></div>

      <div className="heart-bg">
        {hearts.map(heart => (
          <div 
            key={heart.id}
            className="floating-heart"
            style={{ 
              left: heart.left, 
              animationDuration: heart.duration, 
              animationDelay: heart.delay,
              fontSize: heart.size
            }}
          >❤️</div>
        ))}
      </div>
      <div className="back-lighting"></div>
      <div className="glow glow-pink" style={{ top: '10%' }}></div>
      <div className="glow glow-purple" style={{ bottom: '10%' }}></div>

      <header className="hero">
        <div className="title-container">
          <h1 style={{ fontSize: '3.5rem', color: '#440022', fontWeight: '800' }}>Happy 10 Years Anniversary</h1>
          <div className="timeline-badge" style={{ 
            display: 'inline-block',
            padding: '10px 25px',
            borderRadius: '50px',
            background: 'rgba(255, 255, 255, 0.4)',
            border: '2px solid #ff758c',
            marginTop: '1.5rem',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            <p className="subtitle" style={{ fontSize: '1.5rem', margin: 0, opacity: 1, letterSpacing: '2px', fontWeight: '800', color: '#440022' }}>3/4/2016 💕 3/4/2026</p>
          </div>
          <p className="subtitle" style={{ fontSize: '1.3rem', marginTop: '1.2rem', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: '700', color: '#660033' }}>School Love</p>
          <div className="love-counter" style={{ marginTop: '2.5rem', fontSize: '1.6rem', color: '#440022', animation: 'shine 4s infinite', fontWeight: '600' }}>
            <span style={{ fontWeight: '900', color: '#ff758c' }}>{daysOfLove}</span> Days of Love and Counting ✨
          </div>
          <p className="subtitle" style={{ fontSize: '2.2rem', marginTop: '2rem', fontWeight: '800', color: '#440022' }}>{student1} & {student2}</p>
        </div>
      </header>

      <main className="content">
        <section className="video-grid-section">
          <div className="story-card" style={{ padding: '2.5rem', maxWidth: 'none', width: '100%', background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(30px)', border: '1px solid rgba(255, 117, 140, 0.3)', boxShadow: '0 30px 60px rgba(0,0,0,0.05)' }}>
            <h2 style={{ marginBottom: '3rem', background: 'linear-gradient(135deg, #ff7eb3, #440022)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center', fontSize: '2.2rem', fontWeight: '800' }}>Our Special Moments</h2>
            
            <div className="video-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem',
              justifyItems: 'center'
            }}>
              {videos.map((vid, idx) => (
                <div key={idx} className="video-item" style={{ width: '100%', maxWidth: '380px' }}>
                  <video 
                    ref={idx === 0 ? firstVideoRef : null}
                    src={vid} 
                    controls 
                    muted={false}
                    loop
                    autoPlay={idx === 0}
                    style={{ 
                      width: '100%', 
                      borderRadius: '24px', 
                      boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                      background: 'rgba(0,0,0,0.1)',
                      border: '2px solid rgba(255,255,255,0.4)'
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                  <p style={{ marginTop: '1rem', fontSize: '1.2rem', color: '#440022', fontWeight: '800' }}>Moment {idx + 1}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="story-card" style={{ background: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(35px)', marginBottom: '8rem', position: 'relative', border: '1px solid rgba(255,255,255,0.5)', boxShadow: '0 40px 80px rgba(0,0,0,0.05)' }}>
          <div className="student-display">
            <div className="student">
              <div className="avatar" style={{ 
                width: '170px', 
                height: '170px', 
                overflow: 'hidden', 
                border: '5px solid #ff758c',
                boxShadow: '0 0 35px rgba(255, 117, 140, 0.4)'
              }}>
                <img src={girlImg} alt={student1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="student-name" style={{ fontSize: '1.8rem', color: '#440022', fontWeight: '800', marginTop: '1rem' }}>{student1}</span>
            </div>
            
            <div 
              className="heart-icon-wrapper" 
              onClick={handleCelebrate}
              style={{ cursor: 'pointer', position: 'relative', transition: 'transform 0.3s ease' }}
            >
               <div className="heart-icon" style={{ 
                  fontSize: '5rem', 
                  color: '#ff758c', 
                  textShadow: '0 0 30px rgba(255, 117, 140, 1)',
                  animation: 'pulse 2s infinite ease-in-out'
                }}>❤️</div>
            </div>
            
            <div className="student">
              <div className="avatar" style={{ 
                width: '170px', 
                height: '170px', 
                overflow: 'hidden', 
                border: '5px solid #ac32e4',
                boxShadow: '0 0 35px rgba(172, 50, 228, 0.4)'
              }}>
                <img src={boyImg} alt={student2} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="student-name" style={{ fontSize: '1.8rem', color: '#440022', fontWeight: '800', marginTop: '1rem' }}>{student2}</span>
            </div>
          </div>

          <div className="surprise-message" style={{ 
            marginTop: '4rem', 
            textAlign: 'center',
            padding: '0 2rem'
          }}>
             <h3 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', background: 'linear-gradient(135deg, #ff7eb3, #440022)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '800' }}>
              Câu chuyện của bọn mình
             </h3>
             <p style={{ fontSize: '1.5rem', lineHeight: '2', color: '#440022', fontWeight: '700' }}>
              Bọn mình may mắn được trao cơ hội học tập tại Trường (mình xin phép viết tắt PN Viet Nam) và đó cũng là cơ duyên mà bọn mình gặp nhau.
             </p>
          </div>
        </section>
      </main>

      <footer style={{ marginTop: '4rem', paddingBottom: '3rem', opacity: 1, fontSize: '1.2rem', fontWeight: '800', color: '#440022' }}>
        Thi Chien ❤️ Chi Huu — A Decade of Love
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        @keyframes shine {
          0%, 100% { opacity: 0.9; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.03); }
        }
      `}</style>
    </div>
  )
}

export default App
