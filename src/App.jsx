import { useState } from 'react'
import './App.css'
import boyImg from './assets/boy.jpg'
import girlImg from './assets/girl.jpg'
import v1 from './assets/moments_1.mp4'
import v2 from './assets/moments_2.mp4'
import v3 from './assets/moments_3.mp4'
import v4 from './assets/moments_4.mp4'
import v5 from './assets/moments_5.mp4'

function App() {
  const [student1, setStudent1] = useState('Thi Chien')
  const [student2, setStudent2] = useState('Chi Huu')
  const [description, setDescription] = useState('A story of two souls meeting under the cherry blossoms, where time stood still and hearts began to beat in unison. This is the beautiful chapter of Thi Chien and Chi Huu.')

  const videos = [v1, v2, v3, v4, v5]

  return (
    <div className="app">
      <div className="back-lighting"></div>
      <div className="glow glow-pink" style={{ top: '10%' }}></div>
      <div className="glow glow-purple" style={{ bottom: '10%' }}></div>

      <header className="hero">
        <div className="title-container">
          <h1 style={{ fontSize: '3rem' }}>Happy 10 Years Anniversary</h1>
          <p className="subtitle" style={{ fontSize: '1.2rem', marginTop: '0.5rem', opacity: 0.8 }}>School Love Story</p>
          <p className="subtitle" style={{ fontSize: '1.8rem', marginTop: '1rem' }}>{student1} & {student2}</p>
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

        <section className="story-card" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20px)' }}>
          <div className="student-display">
            <div className="student">
              <div className="avatar" style={{ 
                width: '150px', 
                height: '150px', 
                overflow: 'hidden', 
                border: '4px solid #ff758c',
                boxShadow: '0 0 20px rgba(255, 117, 140, 0.3)'
              }}>
                <img src={girlImg} alt={student1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="student-name" style={{ fontSize: '1.4rem' }}>{student1}</span>
            </div>
            
            <div className="heart-icon" style={{ fontSize: '3rem', color: '#ff758c', textShadow: '0 0 15px rgba(255, 117, 140, 0.5)' }}>❤️</div>
            
            <div className="student">
              <div className="avatar" style={{ 
                width: '150px', 
                height: '150px', 
                overflow: 'hidden', 
                border: '4px solid #ac32e4',
                boxShadow: '0 0 20px rgba(172, 50, 228, 0.3)'
              }}>
                <img src={boyImg} alt={student2} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="student-name" style={{ fontSize: '1.4rem' }}>{student2}</span>
            </div>
          </div>

        </section>
      </main>

      <footer style={{ marginTop: '4rem', paddingBottom: '3rem', opacity: 0.4, fontSize: '0.85rem' }}>
        Created with love for Thi Chien & Chi Huu
      </footer>
    </div>
  )
}

export default App
