import Particles from 'react-particles-js';


const ParticleComponent = () =>{
    return (
          <div className="particle">
            <Particles 
                    params={{ 
                      particles: { 
                        number: { 
                          value: 100, 
                          density: { 
                            enable: true, 
                            value_area: 1000, 
                          } 
                        },  
                      }, 
  
                    }} 
                  />
          </div>
    );
  }

  export default ParticleComponent;