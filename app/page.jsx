"use client";

import { useState, useEffect, useRef } from "react";
import { Terminal } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "./styles.css";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [displayText, setDisplayText] = useState("[bject Object]undefined");
  const [showScrollText, setShowScrollText] = useState(false);
  const [isThirdImageFixed, setIsThirdImageFixed] = useState(false);

  const router = useRouter();
  const imageRef = useRef(null);
  const secondImageRef = useRef(null);
  const thirdImageRef = useRef(null);
  const textRefs = useRef([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (searchInput.toLowerCase() === "help") {
        setDisplayText(
          '[bject Object]undefinedUnknown command. Type "help" for available commands.undefined'
        );
      } else if (searchInput.toLowerCase() === "projects") {
        router.push("/projects");
        setDisplayText("Navigating to projects...");
      } else {
        setDisplayText("[bject Object]undefined");
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const thirdContainerTop = thirdImageRef.current?.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (thirdContainerTop <= 0) {
        setIsThirdImageFixed(true);
      } else {
        setIsThirdImageFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target === imageRef.current) {
            setShowScrollText(true);
          } else if (entry.isIntersecting && entry.target === secondImageRef.current) {
            setShowScrollText(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (secondImageRef.current) observer.observe(secondImageRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (secondImageRef.current) observer.unobserve(secondImageRef.current);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          } else {
            entry.target.classList.remove("fade-in-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    textRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      textRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      <div style={styles.container}>
        <div className="statusLights" style={styles.statusLights}>
          <div style={styles.lightRed}></div>
          <div style={styles.lightYellow}></div>
          <div style={styles.lightGreen}></div>
        </div>

        <div className="alwaysVisibleText" style={styles.alwaysVisibleText}>
          {displayText}
        </div>

        <div className="searchBar" style={styles.searchBar}>
          <input
            type="text"
            placeholder="Enter command..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyDown}
            style={styles.searchInput}
          />
        </div>

        <video style={styles.video} autoPlay muted loop playsInline>
          <source src="/afbeeldingen/luc.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <button style={styles.menuButton} onClick={toggleMenu}>
          <Terminal size={40} color="black" />
        </button>

        {isMenuOpen && (
          <div style={styles.menu}>
            <ul style={styles.menuList}>
              <Link href="/">
                <span style={styles.menuItem}>home</span>
              </Link>
              <li style={styles.menuItem}>about</li>
              <li style={styles.menuItem}>
                <Link href="/projects">projects</Link>
              </li>
              <li style={styles.menuItem}>contact</li>
              <li style={styles.menuItem}>help</li>
            </ul>
          </div>
        )}
      </div>

      <div style={styles.imageContainer} ref={imageRef}>
        <img
          src="/afbeeldingen/zwart.png"
          alt="Example Image"
          style={styles.image}
        />
        {showScrollText && (
          <div style={styles.scrollText}>
            <p>LUC VAN CASTEREN</p>
          </div>
        )}
      </div>

      <div
        style={isThirdImageFixed ? styles.hiddenContainer : styles.additionalImageContainer}
        ref={secondImageRef}
      >
        <div
          className="fade-in"
          ref={(el) => (textRefs.current[0] = el)}
          style={styles.rowContainer}
        >
          <p style={styles.headerText}>Luc van Casteren is a Dutch</p>
          <div style={styles.profileImageWrapper}>
            <img
              src="/afbeeldingen/nico.png"
              alt="Profile"
              style={styles.profileImage}
            />
          </div>
        </div>
        <div
          className="fade-in"
          ref={(el) => (textRefs.current[1] = el)}
          style={styles.rowContainer}
        >
          <p style={styles.headerText}>Webflow Developer</p>
          <div style={styles.logoWrapper}>
            <img
              src="/afbeeldingen/gear.png"
              alt="Webflow Logo"
              style={styles.webflowLogo}
            />
          </div>
        </div>
        <div
          className="fade-in"
          ref={(el) => (textRefs.current[2] = el)}
          style={styles.subTextContainer}
        >
          <p style={styles.subText}>who builds</p>
          <img
            src="/afbeeldingen/bouwen.png"
            alt="Work Example 1"
            style={styles.workImage}
          />
          <p style={styles.subText}>websites</p>
        </div>
        <div
          className="fade-in"
          ref={(el) => (textRefs.current[3] = el)}
          style={styles.subTextContainer}
        >
          <p style={styles.subText}>that drive business</p>
          <img
            src="/afbeeldingen/webdev.png"
            alt="Work Example 2"
            style={styles.workImage}
          />
        </div>
        <div
          className="fade-in"
          ref={(el) => (textRefs.current[4] = el)}
          style={styles.subTextContainer}
        >
          <img
            src="/afbeeldingen/new-image.png"
            alt="Work Example 3"
            style={styles.workImage}
          />
          <p style={styles.subText}>and achieve results</p>
        </div>
      </div>

      <div style={styles.thirdImageContainer} ref={thirdImageRef}>
        <img
          src="/afbeeldingen/test.jpg"
          alt="Third Example Image"
          style={styles.fullWidthImage}
        />
        <div style={styles.staticTextBelow}>
          <p>STATIC TEKST ONDER DERDE AFBEELDING</p>
        </div>
      </div>
    </>
  );
}


const styles = {
  container: {
    position: "relative",
    height: "100vh",
    width: "100vw",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  statusLights: {
    position: "absolute",
    top: "80px", // Net boven de tekst
    left: "15rem", // Uitlijnen met de search bar
    display: "flex",
    gap: "10px",
    zIndex: 50, // Zorgt ervoor dat ze altijd zichtbaar zijn
  },
  lightRed: {
    width: "15px",
    height: "15px",
    backgroundColor: "#FF5F57",
    borderRadius: "50%",
  },
  lightYellow: {
    width: "15px",
    height: "15px",
    backgroundColor: "#FFBD2E",
    borderRadius: "50%",
  },
  lightGreen: {
    width: "15px",
    height: "15px",
    backgroundColor: "#28C840", // Heldere groen
    borderRadius: "50%",
  },
  video: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "180%",
    objectFit: "contain",
  },
  alwaysVisibleText: {
    position: "absolute",
    top: "100px",
    left: "15rem",
    color: "#4CAF50",
    fontSize: "18px",
    fontFamily: "monospace",
    zIndex: 21,
  },
  searchBar: {
    position: "absolute",
    top: "140px",
    left: "15rem",
    backgroundColor: "#000",
    border: "2px solid #4CAF50",
    padding: "5px 10px",
    zIndex: 20,
    width: "60%",
  },
  searchInput: {
    background: "#000",
    color: "#4CAF50",
    border: "none",
    outline: "none",
    fontSize: "16px",
    fontFamily: "monospace",
    width: "100%",
  },
  menuButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
    backgroundColor: "#4CAF50",
    border: "none",
    width: "60px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    zIndex: 10,
  },
  menu: {
    position: "absolute",
    top: "100px",
    right: "20px",
    backgroundColor: "black",
    border: "2px solid #4CAF50",
    color: "#4CAF50",
    padding: "10px 20px",
    zIndex: 9,
    width: "300px",
  },
  imageContainer: {
    width: "100%",
    backgroundColor: "black",
    textAlign: "center",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  scrollText: {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, 20px)",
    color: "#111111",
    fontSize: "150px",
    fontFamily: "'Quantico', sans-serif",
    background: "rgba(0, 0, 0, 0.8)",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "center",
    opacity: 1,
  },
  additionalImageContainer: {
    position: "sticky",
    top: 0,
    height: "100vh", // Houd de container schermvullend
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    textAlign: "center",
    zIndex: 5, // Zichtbaar onder de derde container
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "20px",
  },
  headerText: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#ffffff",
    margin: "0",
  },
  profileImageWrapper: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  logoWrapper: {
    width: "50px",
    height: "50px",
  },
  webflowLogo: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  subTextContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginTop: "10px",
    marginBottom: "40px", // Meer ruimte onder de tekst
  },

  subText: {
    fontSize: "3rem",
    color: "#1A1C1E",
    fontWeight: "400",
    fontFamily: "'Quantico', sans-serif",
  },
  workImage: {
    width: "80px",
    height: "auto",
    borderRadius: "5px",
  },
  thirdImageContainer: {
    position: "relative", // Begin relative
    height: "100vh",
    textAlign: "center",
    zIndex: 10, // Zorg ervoor dat deze boven de tweede container zit
  },
  fixedThirdImageContainer: {
    position: "fixed", // Wordt fixed zodra het in beeld komt
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    zIndex: 10,
    backgroundColor: "black",
    textAlign: "center",
  },
};
