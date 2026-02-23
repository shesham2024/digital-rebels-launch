import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Phone, Mail, MapPin, Clock, Star, Users, Award, Zap } from "lucide-react";
import fourthLogo from '../assets/invokebg.png';


const navLinks = [
  { label: "Home", href: "#", icon: null },
  { label: "Program", href: "#program", icon: null },
  { label: "Why Us", href: "#why-us", icon: null },
  { label: "Testimonials", href: "#testimonials", icon: null },
  { label: "FAQs", href: "#faqs", icon: null },
];

const quickStats = [
  { icon: Users, value: "500+", label: "Students" },
  { icon: Star, value: "4.9", label: "Rating" },
  { icon: Award, value: "95%", label: "Placement" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => ({
        id: link.href.replace('#', '') || 'home',
        label: link.label
      }));

      const scrollPosition = window.scrollY + 100;
      let currentActiveSection: string | null = null;

      // Check each section to see if it's in view
      for (const section of sections) {
        const element = section.id === 'home'
          ? document.body
          : document.getElementById(section.id);

        if (element) {
          const offsetTop = section.id === 'home' ? 0 : element.offsetTop;
          const offsetBottom = offsetTop + (
            section.id === 'home'
              ? window.innerHeight
              : element.offsetHeight
          );

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            currentActiveSection = section.label;
            break;
          }
        }
      }

      // Special handling for when user is at the very top
      if (window.scrollY < 50) {
        currentActiveSection = "Home";
      }

      // Special handling for when user is at the very bottom
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        // Find the last section that exists
        const lastSection = sections[sections.length - 1];
        const lastElement = document.getElementById(lastSection.id);
        if (lastElement) {
          currentActiveSection = lastSection.label;
        }
      }

      setActiveLink(currentActiveSection);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDemoClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleNavClick = (label: string, href: string) => {
    setActiveLink(label);
    setIsOpen(false);

    // Add a small delay to ensure mobile menu closes first
    setTimeout(() => {
      // Smooth scroll to section
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    }, 100);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 w-full"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Main Navigation */}
      <nav className="bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo Section */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleNavClick("Home", "#")}
            >
              <div className="relative group cursor-pointer">
                {/* Logo image - Clean and simple */}
                <motion.img
                  src={fourthLogo}
                  alt="InvokeIt Logo"
                  className="relative z-10 h-14 md:h-16 lg:h-[70px] w-auto object-contain select-none filter brightness-110 contrast-110 group-hover:brightness-125 group-hover:contrast-125 transition-all duration-300"
                  style={{
                    mixBlendMode: 'multiply'
                  }}
                  whileHover={{
                    scale: 1.05,
                    filter: "drop-shadow(0 0 20px rgba(139, 92, 246, 0.4))"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNavClick(link.label, link.href)}
                  className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap ${activeLink === link.label
                    ? 'text-white shadow-lg shadow-purple-500/25'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/10'
                    }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.label}
                  {activeLink === link.label && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl -z-10"
                      layoutId="activeTab"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* CTA Section */}
            <div className="flex items-center gap-4">
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block"
              >
                <Button
                  variant="aurora"
                  size="default"
                  className="shadow-lg shadow-purple-500/25 font-semibold relative overflow-hidden group"
                  onClick={handleDemoClick}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Book Free Demo
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                className="lg:hidden p-3 rounded-xl glass backdrop-blur-md bg-white/5 border border-border/50 hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden lg:hidden border-t border-border/20"
              >
                <motion.div
                  className="py-6 space-y-4"
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {/* Mobile Navigation Links */}
                  <div className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.button
                        key={link.label}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleNavClick(link.label, link.href);
                        }}
                        className={`w-full flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 text-left ${activeLink === link.label
                          ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30'
                          : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                          }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {link.label}
                      </motion.button>
                    ))}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="px-4"
                  >
                    <Button
                      variant="aurora"
                      className="w-full shadow-lg font-semibold relative overflow-hidden group"
                      onClick={() => {
                        handleDemoClick();
                        setIsOpen(false);
                      }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <Zap className="w-4 h-4" />
                        Book Free Demo
                      </span>
                    </Button>
                  </motion.div>

                  {/* Mobile Contact Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="px-4 pt-4 border-t border-border/20"
                  >
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Progress Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, delay: 1 }}
      />
    </motion.header>
  );
}
