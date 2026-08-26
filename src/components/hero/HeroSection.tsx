// export function HeroSection() {
//   throw new Error("🔥 I AM EDITING THE REAL HERO SECTION 🔥");

//   // ...

//   import { Link } from 'react-router-dom';
//   import { projectStatus } from '../../data/projectData';

//   export function HeroSection() {
//     // small interaction: update CSS variables on mouse move for subtle parallax
//     const onMove = (e: React.MouseEvent) => {
//       const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
//       const x = ((e.clientX - rect.left) / rect.width) * 100;
//       const y = ((e.clientY - rect.top) / rect.height) * 100;
//       document.body.setAttribute('data-mx', '');
//       document.documentElement.style.setProperty('--mx', String(x));
//       document.documentElement.style.setProperty('--my', String(y));
//     };

//     return (
//       <section className="hero" onMouseMove={onMove}>
//         <div className="hero-copy">
//           {/* <p className="kicker">University of Ilorin / Medical Laboratory Science</p> */}
//           <p className="kicker">🔥 THIS IS THE FILE I AM EDITING 🔥</p>
//           <div className="hero-label">COBES / SHAO COMMUNITY</div>
//           <h1>
//             Together for Health:
//             <br />
//             <em>Stand with Science.</em>
//           </h1>
//           <p>
//             Improving community health through evidence, education, prevention and accessible
//             laboratory services.
//           </p>
//           <div className="hero-actions">
//             <Link className="button primary" to="/shao-community">Explore our community</Link>
//             <Link className="button" to="/project">Explore our project</Link>
//           </div>
//         </div>
//         <div className="hero-image">
//           <img src="../public/cobes-data/shaonova-img.jpg" alt="SHAONOVA" />
//         </div>
//       </section>
//     );
//   }
