import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import './App.css'
import boyImg from './assets/boy.jpg'
import girlImg from './assets/girl.jpg'
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
  const [student1] = useState('Thi Chien')
  const [student2] = useState('Chi Huu')
  const [hearts, setHearts] = useState([])
  const [daysOfLove, setDaysOfLove] = useState(0)
  const [showSurprise, setShowSurprise] = useState(false)

  const videos = [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10]

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

  const handleCelebrate = () => {
    setShowSurprise(true)
    
    // Confetti Cannon!
    const scalar = 2
    const heart = confetti.shapeFromPath({ path: 'M167 10c-33.74-33.47-88.32-33.19-121.78 0s-33.47 88.32 0 121.78l105.11 105.11a24.1 24.1 0 0 0 34.07 0l105.11-105.11c33.47-33.47 33.74-88.32 0-121.78s-88.32-33.47-121.78 0L167 43.11l-2.89-2.89z' })

    confetti({
      shapes: [heart],
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff758c', '#ff7eb3', '#ac32e4']
    })

    setTimeout(() => {
      confetti({
        shapes: [heart],
        particleCount: 200,
        spread: 160,
        origin: { y: 0.6 },
        colors: ['#ff758c', '#ff7eb3', '#ac32e4']
      })
    }, 500)
  }

  return (
    <div className="app">
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
          <h1 style={{ fontSize: '3.5rem', textShadow: '0 0 20px rgba(255, 117, 140, 0.4)' }}>Happy 10 Years Anniversary</h1>
          <div className="timeline-badge" style={{ 
            display: 'inline-block',
            padding: '10px 25px',
            borderRadius: '50px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 117, 140, 0.3)',
            marginTop: '1rem',
            backdropFilter: 'blur(10px)'
          }}>
            <p className="subtitle" style={{ fontSize: '1.4rem', margin: 0, opacity: 1, letterSpacing: '2px', fontWeight: '700', color: '#ff758c' }}>3/4/2016 💕 3/4/2026</p>
          </div>
          <p className="subtitle" style={{ fontSize: '1.2rem', marginTop: '1rem', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '300', color: 'rgba(255,255,255,0.7)' }}>School Love</p>
          <div className="love-counter" style={{ marginTop: '2rem', fontSize: '1.5rem', color: '#ff7eb3', animation: 'shine 4s infinite' }}>
            <span style={{ fontWeight: '700' }}>{daysOfLove}</span> Days of Love and Counting ✨
          </div>
          <p className="subtitle" style={{ fontSize: '2rem', marginTop: '2.5rem', fontWeight: '500' }}>{student1} & {student2}</p>
        </div>
      </header>

      <main className="content">
        <section className="video-grid-section">
          <div className="story-card" style={{ padding: '2rem', maxWidth: 'none', width: '100%', background: 'rgba(255, 255, 255, 0.02)' }}>
            <h2 style={{ marginBottom: '2.5rem', background: 'linear-gradient(135deg, #ff7eb3, #ac32e4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center' }}>Our Special Moments</h2>
            
            <div className="video-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '1.5rem',
              justifyItems: 'center'
            }}>
              {videos.map((vid, idx) => (
                <div key={idx} className="video-item" style={{ width: '100%', maxWidth: '350px' }}>
                  <video 
                    src={vid} 
                    controls 
                    muted 
                    loop
                    style={{ 
                      width: '100%', 
                      borderRadius: '20px', 
                      boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
                      background: 'rgba(0,0,0,0.1)'
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                  <p style={{ marginTop: '0.8rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.6)', fontWeight: '400' }}>Clip {idx + 1}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="story-card" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20px)', marginBottom: '8rem', position: 'relative' }}>
          <div className="student-display">
            <div className="student">
              <div className="avatar" style={{ 
                width: '160px', 
                height: '160px', 
                overflow: 'hidden', 
                border: '4px solid #ff758c',
                boxShadow: '0 0 30px rgba(255, 117, 140, 0.5)'
              }}>
                <img src={girlImg} alt={student1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="student-name" style={{ fontSize: '1.6rem', color: '#ff7eb3' }}>{student1}</span>
            </div>
            
            <div 
              className="heart-icon-wrapper" 
              onClick={handleCelebrate}
              style={{ cursor: 'pointer', position: 'relative', transition: 'transform 0.3s ease' }}
            >
               <div className="heart-icon" style={{ 
                  fontSize: '4.5rem', 
                  color: '#ff758c', 
                  textShadow: '0 0 25px rgba(255, 117, 140, 1)',
                  animation: 'pulse 2s infinite ease-in-out'
                }}>❤️</div>
                {!showSurprise && <div style={{ position: 'absolute', bottom: '-40px', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', fontSize: '0.9rem', color: '#ff7eb3', opacity: 0.7, pointerEvents: 'none' }}>Click for a surprise ✨</div>}
            </div>
            
            <div className="student">
              <div className="avatar" style={{ 
                width: '160px', 
                height: '160px', 
                overflow: 'hidden', 
                border: '4px solid #ac32e4',
                boxShadow: '0 0 30px rgba(172, 50, 228, 0.5)'
              }}>
                <img src={boyImg} alt={student2} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="student-name" style={{ fontSize: '1.6rem', color: '#ac32e4' }}>{student2}</span>
            </div>
          </div>

          {showSurprise && (
            <div className="surprise-message" style={{ 
              marginTop: '3rem', 
              animation: 'fadeInUp 1s ease-out', 
              color: '#ffffff',
              background: 'linear-gradient(135deg, rgba(255, 117, 140, 0.1), rgba(172, 50, 228, 0.1))',
              padding: '2rem',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              textAlign: 'center'
            }}>
               <h3 style={{ fontSize: '2rem', marginBottom: '1rem', background: 'linear-gradient(135deg, #ff7eb3, #ac32e4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                10 Years and counting...
               </h3>
               <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#eee' }}>
                Bọn mình may mắn được trao cơ hội học tập tại Trường (mình xin phép viết tắt PN Viet Nam) và đó cũng là cơ duyên mà bọn mình gặp nhau.
               </p>
               <button 
                 onClick={() => setShowSurprise(false)}
                 style={{ marginTop: '1.5rem', background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', fontSize: '0.8rem', padding: '0.5rem 1rem' }}
               >Close</button>
            </div>
          )}
        </section>
      </main>

      <footer style={{ marginTop: '4rem', paddingBottom: '3rem', opacity: 0.5, fontSize: '0.9rem' }}>
        Thi Chien ❤️ Chi Huu — A Decade of Love
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        @keyframes shine {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default App
