import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 overflow-hidden text-white bg-gradient-to-b from-gray-900 to-black">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container relative px-4 mx-auto">
        {/* Main content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">
              Friv Clone
            </h3>
            <p className="max-w-xs text-gray-400">
              Tu portal de juegos favorito.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Yeisonfjrd" className="text-gray-400 transition-colors hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/yeison-fajardo/" className="text-gray-400 transition-colors hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="andresfajardo1606@gmail.com" className="text-gray-400 transition-colors hover:text-white">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white/90">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="inline-block text-gray-400 transition-colors hover:text-white hover:translate-x-1">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="inline-block text-gray-400 transition-colors hover:text-white hover:translate-x-1">
                  Favoritos
                </a>
              </li>
              <li>
                <a href="#" className="inline-block text-gray-400 transition-colors hover:text-white hover:translate-x-1">
                  Populares
                </a>
              </li>
              <li>
                <a href="#" className="inline-block text-gray-400 transition-colors hover:text-white hover:translate-x-1">
                  Nuevos
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white/90">Categorías</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="inline-block text-gray-400 transition-colors hover:text-white hover:translate-x-1">
                  Arcade
                </a>
              </li>
              <li>
                <a href="#" className="inline-block text-gray-400 transition-colors hover:text-white hover:translate-x-1">
                  Aventura
                </a>
              </li>
              <li>
                <a href="#" className="inline-block text-gray-400 transition-colors hover:text-white hover:translate-x-1">
                  Puzzle
                </a>
              </li>
              <li>
                <a href="#" className="inline-block text-gray-400 transition-colors hover:text-white hover:translate-x-1">
                  Estrategia
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white/90">Newsletter</h4>
            <p className="mb-4 text-gray-400">Suscríbete para recibir las últimas novedades</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full px-4 py-2 transition-all duration-300 border rounded-full bg-white/5 border-white/10 focus:border-white/20 focus:ring-2 focus:ring-white/10"
              />
              <button className="w-full px-4 py-2 transition-opacity rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90">
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-12 border-t border-white/10">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              © 2025 Friv Clone. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>por Yeison Fajardo</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;